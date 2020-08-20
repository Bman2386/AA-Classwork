# == Schema Information
#
# Table name: users
#
#  id          :bigint           not null, primary key
#  username    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  location_id :integer
#

# class name should be singular version of table name
# ApplicationRecord inherits from ActiveRecord::Base, giving us access to many nice methods
  # gives us nice class methods like User.all to query users table
  # instances have instance variables corresponding to column values and methods like save and update, among many other things!
class User < ApplicationRecord 
  # # want to validate username exists and is unique
  # # validates for built-in validations, but can also create custom validations using validate 
  validates :username, presence: true, uniqueness: true 

  # !!! if you have a foreign key, you belong to another model !!!
    # belongs_to is a method that generates an association instance method
    # next is :assocation_name, which will become an instance method
    # all `belongs_to` associations implicitly validate the presence of the foreign key (:location_id)
  belongs_to :location, 
    primary_key: :id, # primary key is ALWAYS :id
    foreign_key: :location_id, # name of foreign key column
    class_name: :Location # symbol or string


  has_many :bubbles,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Bubble' 


  def self.frequent_bubblers
    # find users with 2+ bubbles

    # <<-SQL
    #   SELECT users.*, COUNT(bubbles.id) AS bubble_count
    #   FROM users
    #   JOIN bubbles on bubbles.author_id = users.id
    #   GROUP BY users.id
    #   HAVING COUNT(bubbles.id) >= 2;
    # SQL

    #ActiveRecord version
    User
      .select("users.*, COUNT(bubbles.id) AS bubble_count") # able to use this alias by calling `.<alias_name>` on the model instances
      .joins(:bubbles) # using the association, not the table
      .group(:id) # can use just `:id` because we are starting with `User` and want user id
      .having("COUNT(bubbles.id) >= 2") # cannot use alias in having

  end

  def self.quiet_bubblers
    # find users with no bubbles

    # need left outer join because some users will have no bubbles associated with them, but still want to grab those user entries

    # <<-SQL
    #   SELECT users.*
    #   FROM users
    #   LEFT OUTER JOIN bubbles ON bubbles.author_id = users.id
    #   GROUP BY users.id
    #   HAVING COUNT(bubbles.id) = 0;
    # SQL

    #ActiveRecord version
    User
      .left_outer_joins(:bubbles)
      .group(:id)
      .having("COUNT(bubbles.id) = 0")

  end

  # # USER AUTH METHODS

  validates :password_digest, presence: true#{ message: 'Password can\'t be blank'}
  validates :session_token, presence: true, uniqueness: true

  # validation uses #password getter, which is why we added attr_reader for password
  # if there is a @password (e.g. when creating a new user, where we explicity set a password using our #password= setter), length must be at least 6
  # allow_nil => allow validation to pass if @password is nil, as happens when we're saving/updating a user that we pulled from database (only password_digest stored in db)
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
    # `before_validation` and `after_initialize` are two different hooks
    # `before_validation` runs right before validations are run (when you call `is_valid?` or `save/save!/create/create!`)
    # `after_initialize` runs after you call `Model.new`
    # either one works (but before_validation is more efficient)

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username) # finds a user, else returns nil
    return nil unless user && user.is_password?(password) # is_password? only executes if user is a User object (was found), not nil
    user
  end

  # set both @password and self.password_digest
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    # BCrypt::Password::new vs BCrypt::Password::create
      # `create` takes a plaintext password, hashes and salts it, and spits out a digest
      # `new` just converts a password_digest string into an instance of  BCrypt::Password so that we can call is_password? on it
  end

  def reset_session_token!
    # remember to not only generate a new session token, but also to save it to the database
    # this will not work if you don't save to the database
    self.session_token = self.class.generate_session_token
    self.save!
    # return the new token for convenience
    self.session_token
  end

  def is_password?(password)
    # password_digest is just a string
    # convert it into a BCrypt::Password object so that we can call #is_password? on it
    bcrypt_password = BCrypt::Password.new(self.password_digest) # just turns it into a Password object, doesn't hash it again
    bcrypt_password.is_password?(password) # this is_password? is a different method entirely from User#is_password?
  end

  private

  def ensure_session_token
    # this will run whenever we instantiate a User object
    # that could happen because we're creating a new record,
    # or because we pulled one out of the database
    # that's why we use conditional assignment
    self.session_token ||= self.class.generate_session_token
  end

  # just returns a random string we can use as our session token
  def self.generate_session_token
    SecureRandom::urlsafe_base64 # a random base64 number/string
  end

end

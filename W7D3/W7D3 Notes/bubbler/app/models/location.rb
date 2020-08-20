# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  place      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Location < ApplicationRecord
  validates :place, presence: true, uniqueness: true 

  # creating corresponding association to User's belongs_to
    # every belongs_to has an associated has_many or has_one in another model
    # has_many is used here because we DO NOT have a foreign key here, users does
    # associations involve joins under the hood
  has_many :users, # Location#users now returns array-like object with instances of User model that belong to this location 
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :User # note that primary_key and foreign_key are identical to the corresponding belongs_to association in User

  # through associations
    # like using multiple joins
    # locations have users (through) which have bubbles (source)
    # order matters! must be underneath other associations (depends on them)
    # can go through other through associations, but whatever association you go through must be defined above
  has_many :bubbles,
    through: :users, # name of the association we need to go through (line 17) 
    source: :bubbles # name of association in intermediate model (in User model) 

    
  def self.quiet_locations
    # find locations with no bubbles
    <<-SQL
      SELECT locations.*
      FROM locations
      LEFT OUTER JOIN users ON users.location_id = locations.id
      LEFT OUTER JOIN bubbles ON bubbles.author_id = users.id
      GROUP BY locations.id
      HAVING COUNT(bubbles.id) = 0;
    SQL

    #ActiveRecord version
    Location
      .left_outer_joins(users: :bubbles) # accomplishes same joins as if we had two left_outer_joins methods chained on (example for seeing how to have more than one) this `bubbles` comes from the user association of `bubbles`
      .group(:id)
      .having("COUNT(bubbles.id) = 0") # counting bubbles per user

  end
end

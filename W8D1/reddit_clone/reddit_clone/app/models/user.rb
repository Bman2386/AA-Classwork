# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validations :name, :session_token, presence: true, uniqueness: true
    validations :password, length: { minimum: 6, allow_nil: true }
    validations :password_digest, presence: true


    after_initialize :ensure_session_token

    has_many :comments

    attr_reader :password

    def self.find_by_credentials(name, password)
        user = User.find_by(name: name)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save
        self.session_token
    end
end

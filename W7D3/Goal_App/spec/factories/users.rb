# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
FactoryBot.define do
  factory :user do
    username { Faker::Games::Pokemon.name } # a block will execute each time a user is created with the factory
    password { "hunter12" }
    # association :location, factory: :location
  end
end

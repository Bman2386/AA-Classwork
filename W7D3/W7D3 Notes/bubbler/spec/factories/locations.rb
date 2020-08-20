FactoryBot.define do
  factory :location do
    place { Faker::Games::Pokemon.location }
  end
end
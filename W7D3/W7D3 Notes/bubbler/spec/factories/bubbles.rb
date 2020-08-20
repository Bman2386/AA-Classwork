FactoryBot.define do
  factory :bubble do
    body { "this is an awesome bubble!"} # a block will execute each time a user is created with the factory
    association :author, factory: :user
  end
end
FactoryBot.define do
  factory :user do
    username { Faker::Games::Pokemon.name } # a block will execute each time a user is created with the factory
    password { "hunter12" }
    association :location, factory: :location
                    # 1                 # 2
        # 1 - first reference to `:location` means User model's association
        # 2 - locations factory
        # a user requires a location in order to be persisted in DB (if we don't supply it, the factory will fail to create the user)
          # by setting the :location in the factory, Rails automatically prefills the :location_id attribute
          # i.e., when we set `user.location = some_location_object`, Rails will set `user.location_id` equal to the some_location_object's id
  end
end
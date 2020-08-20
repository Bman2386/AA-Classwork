require "rails_helper"

# What should we test in our User model?
    # validations
    # associations
    # public methods
    # error handling (won't show today)

# Use ShouldaMatchers for validation and association tests (the docs are your best friend always): https://github.com/thoughtbot/shoulda-matchers 

# Remember our model tests are unit tests; test each method in isolation


RSpec.describe User, type: :model do
    # test validations
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:session_token)}
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }

    
    # test associations
    it { should have_many(:bubbles) }
    it { should belong_to(:location) }

    describe "uniqueness" do
        # setup - we can only test for uniqueness if a user is already seeded in test DB
        before :each do
            create(:user) # i.e., FactoryBot.create, which saves to test database (not development DB)
        end

        it { should validate_uniqueness_of(:username) }
        it { should validate_uniqueness_of(:session_token) }
    end


    # test public methods
    describe "is_password?" do
        # let!(:method_by_which_we_can_reference_the_created_user_in_our_tests) { create(:name_of_factory) }
        let!(:user) { create(:user) }
            # let! evaluates block of code immediately
            # let is lazy (only evaluates when needed)
        
        context "with a valid password" do
            it "should return true" do
                expect(user.is_password?("hunter12")).to be(true)
            end
        end

        context "with invalid password" do
            it "should return false" do
                expect(user.is_password?("hunter")).to be(false)
            end
        end
    end
end
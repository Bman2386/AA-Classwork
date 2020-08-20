require "rails_helper"

# Goal when testing features / views: test user experience (what will the user see on the page)
# For this, use Capybara
    # Capybara methods simulate user actions to navigate around the site: `visit`
    # Capybara methods also assert what a user will see on the page: `have_content`

# In Capybara, we use `feature` instead of `describe` ; `scenario` instead of `it`

# Launchy gem provides a useful tool for debugging: use `save_and_open_page` method (see example on line 45)

feature "blubbing a bubble", type: :feature do
    before :each do
        create(:user)
        login_user(User.last) 
        visit(new_bubble_url) # simulate navigating to new bubble template
    end

    scenario "takes a body" do
        # `page` is implicitly defined by Capybara
        expect(page).to have_content("Blub a new bubble!") # important: `have_content` is case-sensitive; ensure your view contains the exact string or it will fail the spec
        expect(page).to have_content("Body")
    end

    scenario "takes us back to bubbles#show" do
        # `login_user` and `blub_bubble` are helper methods defined in `spec_helper.rb`
        # login_user(User.last) 
        blub_bubble("awesome bubble!")

        expect(page).to have_content("One Single Bubble")
        expect(page).to have_content("awesome bubble!")
    end
end


feature "popping a bubble", type: :feature do 
    before :each do
        create(:user) # FactoryBot method
        login_user(User.last) # helper method defined in `spec_helper.rb`
        blub_bubble("to be deleted :(") # helper method defined in `spec_helper.rb`
        click_button("Delete your bubble") # built-in Capybara method
    end

    scenario "pops a bubble" do
        # save_and_open_page # useful method from launchy gem for debugging
        expect(page).to_not have_content("to be deleted :(")
        expect(page).to have_content("All of the bubbles!")
    end
end
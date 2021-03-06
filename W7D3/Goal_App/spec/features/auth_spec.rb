require 'rails_helper'
require 'spec_helper'

feature 'the signup process', type: :feature do

    scenario 'has a new user page'

    feature 'signing up a user' do

        scenario 'shows username on the homepage after signup'

    end
end

feature 'logging in' do
  scenario 'shows username on the homepage after login'

end

feature 'logging out' do
  scenario 'begins with a logged out state'

  scenario 'doesn\'t show username on the homepage after logout'

end
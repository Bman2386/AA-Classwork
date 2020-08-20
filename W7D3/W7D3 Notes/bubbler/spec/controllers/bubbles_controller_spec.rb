require "rails_helper"

# What do we test in our controllers? (What is their job?)
    # should finish a response 
        # render a specific template or redirect to a particular url
            # (with rendering, we won't test the actual content rendered, just the template)
        # return status code
    # given valid/invalid input, perform the appropriate action on DB

# test each controller action in a separate describe block

RSpec.describe BubblesController, type: :controller do
    describe "GET #index" do
        it "renders the bubbles#index" do
            get :index # syntax: request_verb controller_action --> simulates http request for testing
            expect(response).to render_template(:index) # `response` is built in to rspec-rails
        end
    end

    describe "GET #new" do
        it "brings up a form to blub a bubble" do
            # here, `subject` is implicitly created and refers to controller instance (we don't have to explicitly create it like we do for models or when we need to initialize subject w/ specific attributes)
            allow(subject).to receive(:logged_in?).and_return(true)
            get :new # simulate a request to fetch the `new` template
            expect(response).to render_template(:new)
        end
    end


    describe "DELETE #destroy" do
        # let!(:method_by_which_we_can_reference_the_created_bubble_in_our_tests) { create(:name_of_factory) }
        let!(:bubble) { create(:bubble) }

        before :each do
            allow(subject).to receive(:current_user).and_return(bubble.author) # this simulates a user being logged in AND ensures that the current_user "returns" a specific user
            delete :destroy, params: { id: bubble.id } # http request to destroy a bubble ... must specify which bubble to destroy via info in params
        end

        it "pops the bubble" do
            expect(Bubble.exists?(bubble.id)).to be(false)
        end

        it "redirects to the bubbles#index" do
            expect(response).to have_http_status(302)
            expect(response).to redirect_to(bubbles_url)
        end
    end

    describe "POST #create" do
        let!(:user) { create(:user) } # persist a user in test DB, this gets run before every example (create a fresh user each time)
        let(:valid_params) { 
            { bubble: { body: "hello, world!"} }
        }
        let(:invalid_params) {
            { bubble: { body: ""} }
        }

        before :each do
            allow(subject).to receive(:current_user).and_return(User.last)
        end

        # what scenarios do we want to test? valid and invalid params
            # valid: create and show created bubble (or all bubbles)
            # invalid: we want to show the new template, via redirecting to route that will show the new template

        context "with valid params" do
            it "blubs the bubble" do
                # first, make the http request: verb action, params(optional)
                post :create, params: valid_params
                expect(Bubble.last.body).to eq("hello, world!")
            end

            # TODO later: test redirecting to show page
        end

        context "with invalid params" do
            it "redirects to bubbles#new" do
                post :create, params: invalid_params
                expect(response).to redirect_to(new_bubble_url)
            end

            # TODO: also test that errors are added to flash cookie
        end
    end
end
require 'rails_helper'

RSpec.describe UsersController, type: :controller do

    describe 'GET #new' do
        it 'brings up a form to create a user' do
            allow(subject).to receive(:logged_in?).and_return(true)
            get :new
            expect(response).to render_template(:new)
        end
    end

    describe 'POST #create' do
        let!(:user) { create(:user) }
        let(:valid_params) { 
            { user: { username: 'batman', password: 'batcave' } }
        } 
        let(:invalid_params) { 
            { user: { username: 'joker', password: '' } }
        } 

        before :each do 
            allow(subject).to receive(:current_user).and_return(User.last)
        end

        context 'with valid params' do
            it 'creates the user' do
                post :create, params: valid_params
                expect(User.last.username).to eq('batman')
            end
            it 'logs the user in' do 
                post :create, params: valid_params
                expect(User.last.session_token).to eq(session[:session_token])
            end
            it 'redirects to goals index page' do
                post :create, params: valid_params
                expect(response).to redirect_to(goals_url)
            end
        end

        context 'with invalid params' do
            it 'does not create a user' do
                post :create, params: invalid_params
                expect(User.last.username).to_not eq('joker')
            end
            it 'renders the new template' do
                post :create, params: invalid_params
                expect(response).to render_template(:new)
            end
        end
    end

    describe 'GET #index' do
        it 'renders the users index page' do
            get :index
            expect(response).to render_template(:index)
        end
    end

end
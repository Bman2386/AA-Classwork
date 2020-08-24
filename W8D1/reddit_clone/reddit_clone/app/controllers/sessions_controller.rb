class SessionsController < ApplicationController


    before_action :ensure_logged_in, only: [:destroy]

    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(
        params[:username], params[:password]
        )
        if @user 
            login!(@user)
            redirect_to user_url
        else
            flash[:errors]= ['Invalid username or password']
            render :new
        end
    end

    def destroy
        logout!
        redirect_to new_session_url
    end

    private
    def user_params
        params.require(:user).permit(:name, :password)
    end
end

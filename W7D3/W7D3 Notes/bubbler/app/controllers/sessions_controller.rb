class SessionsController < ApplicationController

  def new 
    render :new # this line isn't strictly necessary (by default, #action_name method will render :action_name template)
  end

  def create
    # find a user by their username and password
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      # log the user in (using method defined in ApplicationController)
      login!(user)
      
      # finish the response
      redirect_to bubbles_url
    else
      # let them try again
      # make sure they know what they did wrong so they can fix it
      # supply an array because we want to iterate and don't have errors.full_messages
      flash.now[:errors] = ["Invalid credentials!"]
      render :new, status: 422
    end
  end

  def destroy
    logout!
    redirect_to new_session_url # take them to the log in page
  end
end

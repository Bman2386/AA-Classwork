class UsersController < ApplicationController
  def new
    @user = User.new # a dummy object so that we can pass a prefilled object from create if necessary
    render :new
  end

  def create
    @user = User.new(user_params)
    @user.location = Location.first # hard code to pass validations

    if @user.save # don't use `save!` here; it will stop execution of this method; we want a boolean returned instead so we can re-render :new template if save unsuccessful
      # if we could sign them up, log them in as well
      login!(@user)
      redirect_to bubbles_url
    else
      # let them try again
      # tell them what they did wrong (i.e. show them their errors)
      # use the Flash(now), Luke!
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end

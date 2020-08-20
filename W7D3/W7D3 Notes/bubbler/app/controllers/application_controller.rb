class ApplicationController < ActionController::Base
    # comment this out from now on
    # skip_before_action :verify_authenticity_token

    # any methods written here will be inherited by all of our controllers

    # this built-in macro allows us to use passed in methods in our views to conditionally render things on our page
    helper_method :current_user, :logged_in?

    # remember the definition of being logged in: session_token in our session cookie matches user's session_token in database
    def login!(user)
        # want to reset session token so that if a malicious actor gets an old session token, it's useless
        # take advantage of fact that User#reset_session_token! returns the new session token
        session[:session_token] = user.reset_session_token!
        @current_user = user # saves a query to db
    end

    def logout!
        # reset the user's session token and clear out @current_user (server-side)
        current_user.reset_session_token!
        @current_user = nil
        # clear out session_token in session cookie (client-side)
        session[:session_token] = nil
    end

    # return current_user if set, otherwise find the user whose session_token matches the one in the session cookie
    def current_user
        @current_user ||= User.find_by( session_token: session[:session_token] )
    end

    def logged_in?
        # !! is shortcut to convert something into a boolean (double negative makes a positive)
        !!current_user # returns true unless current_user returns nil (no user with matching session_token)
    end

    def ensure_logged_in
        redirect_to new_session_url unless logged_in?
    end

end

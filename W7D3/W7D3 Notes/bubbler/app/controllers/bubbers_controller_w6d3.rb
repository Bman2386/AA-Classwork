# naming conventions matter! 
  # plural controller (BubblesController not BubbleController)
class BubblesController < ApplicationController

  # corresponds to Read in CRUD
  # get and send data for all bubbles
  def index
    # debugger # don't need to require byebug in rails :)

    # using our Bubble model's ::all method to query all bubbles from database (can see query in server log) 
    # store return value (collection of bubbles) in an *instance variable*
    # because it's an instance variable, we will have access to @bubbles in our Views
    @bubbles = Bubble.all 

    # populates the body of the response in JSON format, with data from @bubbles
    # JSON is a widely used convention to format data (consists of key-value pairs), sent as a string
    # `render` is one of 2 ways to send an HTTP response in a Rails controller
      # each action should send exactly 1 HTTP response
    render json: @bubbles # default status code for render is 200
  end

  # get and send data for 1 bubble
  def show
    # debugger

    # params is a built in rails method that you can call inside controllers
    # returns object containing request parameters (which is built by router for each request)
      # hash-like in structure (keys and values)
      # always includes at least controller and action key-value pairs
      # also includes:
        # 1) wildcards from request path
        # 2) key-values from query string
        # 3) key-values from request body
    # Bubble::find takes a single number as an arg (the id of the record you're trying to retrieve)
      # throws error if no record with that id exists
    @bubble = Bubble.find(params[:id]) 
    # Bubble::find_by takes a hash as an arg, key is column and value is value we're searching for
      # returns nil if no matching record is found
      # use if you want to account for possibility of not finding resource, or want to search any column besides id
    # @bubble = Bubble.find_by(id: params[:id]) 

    # debugger

    render json: @bubble
  end

  def create
    debugger

    @bubble = Bubble.new(bubble_params) # Bubble::new takes hash as arg, bubble_params returns hash-like object, nice!
    @bubble.author = User.first # an author is required by our model validations, so we're hardcoding for now

    # do different things depending on if save is successful
    # Bubble#save returns true if save is successful, otherwise false
    if @bubble.save
      # redirect_to: other way of sending HTTP response (vis a vis render)
      # every redirect begins an entirely new request-response cycle
      # want to be DRY, so we're going to use #show to actually render the bubble we just created
      redirect_to bubble_url(@bubble) # if you give instance of model as arg, url helper method automatically extracts id
    else # enter this condition if for some reason @bubble didn't successfully save (e.g. bad user input)
      # want to actually convey to user what went wrong
        # can access error messages from model validations with `model_instance.errors.full_messages`
      render json: @bubble.errors.full_messages, status: 422 # unprocessable entity status (need to include explicitly since we don't want the default 200 status code)
    end
  end

  def update
    # find existing bubble instead of creating one, using wildcard :id in params (check routes to see that update action expects wildcard)
    @bubble = Bubble.find(params[:id]) 
    
    # like with #create, we want to have two different outcomes depending on if update is successful
    if @bubble.update(bubble_params) # like Bubble#save, Bubble#update returns boolean representing whether update was successful
      redirect_to bubble_url(@bubble) # redirect generates a GET request, with default status code of 302
    else
      render json: @bubble.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @bubble = Bubble.find(params[:id]) # use this pattern whenever we need to retrieve a bubble using id wildcard

    @bubble.destroy

    # redirects to index, using helper method for URI pattern of /bubbles (the path for index)
    redirect_to bubbles_url
  end

  private

  # strong_params: ensure user can only set params that WE permit
    # never trust user input!
    # e.g. don't let user send a request to set `admin` to `true`, or manually set the `author_id` to someone else
  def bubble_params
    params
      .require(:bubble) # takes name of key in params as arg, requires everything to be nested under this key
      .permit(:body) # 1 or more symbols corresponding to fields we want user to be able to set (everything else is filtered out / ignored)
  end

end
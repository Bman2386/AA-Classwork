Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # ALL routes go in this file

  # `bundle exec rails routes` lists every route in terminal
  # `bundle exec rails s` starts up server
    # you can then access server at localhost:3000 in your browser or in Postman
    # keep an eye on the server log in your terminal, 
      # gives info about each Request-Response cycle 
    # if you hit a back-end debugger, your byebug REPL will appear in your server log

  # 4 main aspects of a route (mapping between HTTP verb + path onto a controller and action):
    # 1) HTTP verb / method
    # 2) path
    # 3) controller
    # 4) action

  # in a URI pattern like /bubbles/:id, :id is a wildcard that refers to whatever is actually entered after `/bubbles/`
    # in RESTful routes, :id is a way of identifying a specific resource, usually will be the primary key (id) in database
    # a route with an :id wildcard is usually called a member route
    # example:
      # /bubbles/3 would match /bubbles/:id
      # :id = 3
      # would be used to request a CRUD action for the bubble with the id of 3 in the database

  # Prefixes:
    # each URI pattern corresponds to one prefix
    # in our example, we have:
      # Prefix: bubbles
        # URI: /bubbles
        # URL helper method: `bubbles_url` 
      # Prefix: bubble 
        # URI: /bubbles/:id
        # URL helper method: `bubble_url(id)`


  ### Creating Routes

  ## Manual Way: `verb '/path', to: 'controllers#action'`
  # get '/bubbles', to: 'bubbles#index' 
  # get '/bubbles/:id', to: 'bubbles#show'
  # post '/bubbles', to: 'bubbles#create'
  # patch '/bubbles/:id', to: 'bubbles#update'
  # put '/bubbles/:id', to: 'bubbles#update'
  # delete '/bubbles/:id', to: 'bubbles#destroy'

  ## Automatic Way: `resources :plural_resource_name, only: [actions]`
  # `resources` is built in rails method that automatically generates RESTful routes
    # first arg: name of resource (plural) as symbol
    # second arg: options hash, with options like:
      # only: [controller actions as symbols]
  resources :bubbles #, only: [:index, :show, :create, :update, :destroy, :new] # no :new or :edit
  
  # resources :bubbles #=> generates all seven RESTful routes


  # USER AUTH ROUTES
  resources :users, only: [:new, :create]

  # *singular* resource for user auth, as there will only ever be one session for
  # any given browser / http request
  # by making it singular, URI patterns won't include id wildcard
  # still need to make SessionsController class plural and sessions folder in views plural
  resource :session, only: [:new, :create, :destroy]

  # Routes for Cookie Demo
  get '/set_cookie', to: 'bubbles#set_cookie'
  get '/get_cookie', to: 'bubbles#get_cookie'

end

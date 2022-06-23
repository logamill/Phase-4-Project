Rails.application.routes.draw do
  resources :reviews
  resources :posts
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  post "/review", to: "reviews#create"
  delete "/logout", to: "sessions#destroy" 
  delete "/review/:id", to: "reviews#destroy" 
  get "/me", to: "users#show"
  get "/projects/:id", to: "posts#show"
end

Rails.application.routes.draw do
  resources :reviews
  resources :posts
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  post "/login", to: "sessions#create"
  post "signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/projects", to: "posts#index"
end

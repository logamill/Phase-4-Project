class PostsController < ApplicationController
    skip_before_action :authorize, only: :index
     
    def index 
        render json: Post.all 
    end

    def show 
        post = Post.all 
        render json: post
    end 

    def create
        post = @current_user.post.create!(post_params)
        render json: post, status: :created 
    end

    private 

    def post_params
        params.permit(:image, :name, :medium, :theme, :description, :price, :user_id)
    end
end

class PostsController < ApplicationController
    skip_before_action :authorize, only: :index
     
    def index 
        render json: Post.all 
    end

    def show 
        post = find_post
        render json: post
    end 

    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created 
    end

    def destroy 
       post = find_post
       post.destroy
       head :no_content
    end

    private 

    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:image, :name, :medium, :theme, :description, :price, :user_id)
    end
end

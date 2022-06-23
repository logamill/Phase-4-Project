class ReviewsController < ApplicationController

    def index 
        reviews = Review.all 
        render json: reviews
    end 

    def show 
        review = find_review
        render json: review 
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created 
    end

    def update
        review = find_review
        if review.user === @current_user
            review.update!(review_params)
            render json: review, status: :created 
        else render json: {error: "User is not valid"}
    end
    end

    def destroy
        review = find_review
        review.destroy
        head :no_content
    end

    private 

    def review_params
        params.permit(:content, :post_id, :user_id)
    end

    def find_review 
        Review.find(params[:id])
    end 

end

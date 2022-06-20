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
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created 
    end

    def update
        review = find_review
        review.update!(review_params)
        render json: review, status: :created 
    end

    private 

    def review_params
        params.permit(:content, :post_id, :user_id)
    end

    def find_review 
        Review.find(params[:id])
    end 

end

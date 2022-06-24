class Review < ApplicationRecord
    belongs_to :post 
    belongs_to :user 

    # validates :content, presence: true 
    def name 
        user.name
    end

    def image_url 
        user.image_url
    end
end

class Review < ApplicationRecord
    belongs_to :post 
    belongs_to :user 

    # validates :content, presence: true 
    def name 
        user.name
    end
end

class Post < ApplicationRecord
    belongs_to :user 
    has_many :reviews, dependent: :destroy 

    validates :name, presence: true
    validates :medium, presence: true 
    validates :theme, presence: true 
    validates :description, presence: true, length: { minimum: 50 }
    validates :price, numericality: { only_integer: true, other_than: 0 }
end

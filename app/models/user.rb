class User < ApplicationRecord
    has_secure_password
    has_many :posts, :dependent :destroy 
    has_many :reviews, through: :posts

    validates :username, presence: true, uniqueness: true
    validates :email, format: /\w+@\w\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com/)
            errors.add(:permitted_emails, "Sorry, that email isn't permitted.")
        end
    end 
end

class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :medium, :theme, :price, :description, :image, :user_id
  has_many :reviews
end

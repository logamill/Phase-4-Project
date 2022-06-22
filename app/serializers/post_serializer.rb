class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :medium, :theme, :price, :description, :image

  has_many :reviews
end

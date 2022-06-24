class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :name, :post_id, :image_url

end

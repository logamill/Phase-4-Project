class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :name

end

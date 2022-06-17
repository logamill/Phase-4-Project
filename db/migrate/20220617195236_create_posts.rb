class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :image
      t.string :name 
      t.string :medium 
      t.string :theme
      t.string :description 
      t.integer :price 
      t.integer :user_id 
      t.timestamps 
    end
  end
end

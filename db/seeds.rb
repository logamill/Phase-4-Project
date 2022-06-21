# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(name: "Boss", username: "Boss", password: "jdkslajldsa", email: "www.randomemail@gmail.com", image_url: "jfkljjkdsjflkjsdkljflkds.com")
Post.create(image: "djklsajdklsa.com", name: "rjklra", theme: "jdklsjalkadsa", medium: "djksladjlas", price: 20, user_id: 1, description: "djklajdsklajdklsajkldhasfjdh jkldsj klasj hfdjksj kladsjklhfgdsjdk jsalk")
Review.create(content: "Jjfkdlsjfkldsjl jfkldsj lkfjdslk quiwjk wjakl jwkl jadflkjfkljdsl jklaj skljlk ajiow", user_id: 1, post_id: 1)



puts '🌱 Seeding Done!'
require 'faker'
User.all.destroy_all
Post.all.destroy_all
Review.all.destroy_all

profile_img = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsKE0n1Wa70pdYeKKIiJonNcU-fuNEV0nuw&usqp=CAU',
  'https://i.pinimg.com/originals/f6/a6/ee/f6a6ee3f5c366950db6012a0d44cc882.jpg',
  'https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-images.jpg',
  'https://i.pinimg.com/280x280_RS/b9/48/40/b94840cc58a8e70897332f43fe1b87ea.jpg',
  'https://i.pinimg.com/originals/88/ef/67/88ef67806917a52364093c17a28f1590.png'
]

5.times do |i|

  name = Faker::Name.first_name

  User.create(
    name: Faker::Name.first_name,
    username: "#{name.downcase}#{i}",
              password: Faker::Internet.password,
              email: Faker::Internet.email,
              image_url: profile_img[i] ,
              bio: Faker::Lorem.paragraphs(number: 1) 
             ) 
end

post_img = [
    "https://img.freepik.com/free-photo/seljalandsfoss-waterfall-during-sunset-beautiful-waterfall-iceland_335224-596.jpg?t=st=1655908091~exp=1655908691~hmac=4f782769021854f503206f2317a35193ac67b7c4240b72c652e01bee83155bda&w=1800",
    "https://img.freepik.com/free-photo/top-view-small-sour-blue-black-sloe-bucket-with-leaves-grey-background-with-copy-space-jpg_141793-20509.jpg?size=626&ext=jpg",
    "https://img.freepik.com/free-photo/abstract-background-with-green-cloud_23-2148292436.jpg?t=st=1655908091~exp=1655908691~hmac=9959a1df295dbf2340a92876ce5ca71a37ca20400ca6784b44501dd500e75339&w=1800",
    "https://images.freejpg.com.ar/900/2105/lighthouse-at-the-end-of-the-world-in-ushuaia-argentina-F100031265.jpg",
    "https://images.freejpg.com.ar/900/2005/sky-with-pink-clouds-F100031217.jpg",
    "https://images.freejpg.com.ar/900/0305/library-with-old-books-F100031195.jpg"
]


medium = ['Acrylic', 'Oil', 'Mixed media', 'Photography', 'Graphic art', 'Watercolor']
theme = ['Abstract', 'Nature', 'Portrait', 'Architecture', 'Graffiti', 'Conceptual', 'Contemporary']


80.times do |i|

 med_length = medium.length - 1
 med_index = rand(0..med_length) 

 theme_length = theme.length - 1
 theme_index = rand(0..theme_length) 

 post_length = post_img.length - 1
 post_index = rand(0..post_length)

  Post.create(name: Faker::BossaNova.song,
              medium: medium[med_index],
              theme: theme[theme_index],
              image: post_img[post_index],
              description: Faker::Lorem.paragraphs(number: 1),
              price: rand(60..500),
              user_id: rand(1..5)
             ) 
 end


100.times do |i|
 Review.create({
    content: Faker::Lorem.paragraphs(number: 1),
    user_id: rand(1..5),
    post_id: rand(1..80)
 })   
end

puts ("yay! done")




# User.create(username: "regmlkd",
#               password: "gnvkenv",
#               email: "www.fdvdv@gmail.com",
#               image_url: "vfvfvdf" ,
#               bio: "bvdvgdfvdfvdvvvvv"
#              ) 


# Post.create(name: "nlknlk",
#             medium: "nlkn",
#             theme: "lklkm",
#             image: "ljn",
#             description: "jnknjksabchjbdfvbdfjbvjkdfvkdfvjkvkjvbkjfbvdbvkjvsnfiewjfoewjofjewfjivnjvbjkvelcnfkjnvsknksnlksncvlkfnvlfndlvb",
#             price: rand(60..500),
#             user_id: 1
#              ) 

#  Review.create({
#            content: "dclksbkvnsdkjvnksjnv",
#            user_id: 1,
#            post_id: 1
#  })   

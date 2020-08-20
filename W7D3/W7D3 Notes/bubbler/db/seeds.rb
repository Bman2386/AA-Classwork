# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# if we have to re-seed, clear database of entries and create all new seeds so no conflicts
Location.destroy_all
User.destroy_all
Bubble.destroy_all


# locations
ny = Location.create!(place: 'New York, USA')
ldn = Location.create!(place: 'London, England')
sf = Location.create!(place: 'San Francisco, USA')
syd = Location.create!(place: 'Sydney, Australia')

# users
nemo = User.create!(username: "Nemo", password: "starwars", location_id: ldn.id)
marlin = User.create!(username: "Marlin", password: "starwars", location_id: ny.id)
bruce = User.create!(username: "Bruce", password: "starwars", location_id: syd.id)
dory = User.create!(username: "Dory", password: "starwars", location_id: syd.id)
crush = User.create!(username: "Crush", password: "starwars", location_id: ldn.id)
peach = User.create!(username: "Peach", password: "starwars", location_id: ldn.id)
jacques = User.create!(username: "Jacques", password: "starwars", location_id: ny.id)


# bubbles
Bubble.create!(
  body: "First day of school! First day of school! Wake up! Wake Up! Come on, first day of school!",
  author_id: nemo.id
)
Bubble.create!(
  body: "Fish are freinds. Not food.",
  author_id: bruce.id
)
Bubble.create!(
  body: "When life gets you down, you know what you gotta do? Just keep swimming.",
  author_id: dory.id
)
Bubble.create!(
  body: "Mr. Turtle is my father. The name’s Crush.",
  author_id: crush.id
)
Bubble.create!(
  body: "I forget things almost instantly. It runs in my family...well, at least I think it does...",
  author_id: dory.id
)
Bubble.create!(
  body: "P. Sherman, 42 Wallaby Way, Sydney.",
  author_id: dory.id
)
Bubble.create!(
  body: "I shall call him Squishy an dhe shall me mine and he shall be my Squishy.",
  author_id: dory.id
)
Bubble.create!(
  body: "You got a problem, buddy? Huh? Huh? Do ya, do ya, do ya?",
  author_id: dory.id
)
Bubble.create!(
  body: "Nemo, newcomer of orange and white, you have been called forth to the summit of Mt. Wannahockaloogie to join with us in the fraternal bonds of tankhood!",
  author_id: jacques.id
)
Bubble.create!(
  body: "Of course I like you. It's because I like you I don't want to be with you. It's a complicated emotion.",
  author_id: marlin.id
)
Bubble.create!(
  body: "Cause we were like, ‘whooooa,’ and I was like, ‘whooooa.’ and you were like, ‘whooooaaa...",
  author_id: crush.id
)

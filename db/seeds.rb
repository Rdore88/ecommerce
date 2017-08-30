# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pfg.create({name: "Columbia", price: "$45.99", quantity: 50, description: "Quickly drying fabric perfect for sunny days to keep you cool"});

Boot.create({name: "High Sierra", price: "$79.99", quantity: 50, description: "Waterproof hiking boots sure to keep you comfortable over any terrain"});

Tent.create({name: "Ozark Trail", price: "$107.99", quantity: 20, description: "Keep the whole family dry and comfortable with this large tent perfect for car camping and the experienced outdoors man alike"});

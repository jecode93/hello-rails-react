# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
g1 = Message.create(message: "Greeting #1")
g2 = Message.create(message: "Greeting #2")
g3 = Message.create(message: "Greeting #3")
g4 = Message.create(message: "Greeting #4")
g5 = Message.create(message: "Greeting #5")
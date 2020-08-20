# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_17_003726) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bubbles", force: :cascade do |t|
    t.string "body", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_bubbles_on_author_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "place", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["place"], name: "index_locations_on_place", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "location_id"
    t.string "session_token", null: false
    t.string "password_digest", null: false # no password column for security
    t.index ["location_id"], name: "index_users_on_location_id"
    t.index ["password_digest"], name: "index_users_on_password_digest"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end

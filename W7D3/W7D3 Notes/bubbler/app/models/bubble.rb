# == Schema Information
#
# Table name: bubbles
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Bubble < ApplicationRecord
  validates :author_id, presence: true
  validates :body, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  def self.n_plus_one_print_bubbles_with_authors
    # n + 1 query problem
      # 1 initial query for bubbles, `Bubble.all`
      # n amount of additional queries for each association call
        # `bubble.author`
    Bubble.all.each do |bubble|
      p "#{bubble.body} - #{bubble.author.username}" 
      # every call to `bubble.author` generates a query
    end
    nil
  end

  def self.better_bubbles_with_authors
    bubbles = Bubble.includes(:author) # already returns all bubbles w/ author information already included

    # creates only 1 extra query compared to a growing amount
    # each query is expensive so it is better to grab all the data needed in one

    bubbles.each do |bubble|
      p "#{bubble.body} - #{bubble.author.username}"
    end

    nil
  end

end

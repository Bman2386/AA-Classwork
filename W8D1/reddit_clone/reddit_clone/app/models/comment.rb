# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :text             not null
#  parent_comment_id :integer
#  post_id           :integer          not null
#  user_id           :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord
    validates :body, :user_id, presence: true
    # validates 

    belongs_to :user,
    dependent: :destroy



end

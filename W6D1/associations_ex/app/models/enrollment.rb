# == Schema Information
#
# Table name: enrollments
#
#  id         :integer          not null, primary key
#  course_id  :integer
#  student_id :integer

#

class Enrollment < ApplicationRecord
  # Remember, belongs_to is just a method where the first argument is
  # the name of the association, and the second argument is an options
  # hash.
  has_many :students,
  primary_key: :id,
  foreign_key: :student_id
  class_name: :User

  belongs_to :course,
  primary_key: :id,
  foreign_key: :prereq_id,
  class_name: :Course

end

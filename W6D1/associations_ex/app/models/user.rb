# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :string(255)

#

class User < ApplicationRecord
  # Remember, has_many is just a method where the first argument is
  # the name of the association, and the second argument is an options
  # hash.
  has_many :enrollments,
  primary_key: :id,
  foreign_key: :student_id,
  class_name: :Enrollment

  has_many :enrolled_courses,
  through: :enrollments,
  source: :course
  
end

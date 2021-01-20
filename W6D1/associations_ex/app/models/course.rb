# == Schema Information
#
# Table name: courses
#
#  id            :integer          not null, primary key
#  name          :string(255)
#  prereq_id     :integer
#  instructor_id :integer



class Course < ApplicationRecord
  # Remember, has_many is just a method where the first argument is
  # the name of the association, and the second argument is an options
  # hash.
  has_many :prerequisite,
  primary_key: :id,
  foreign_key: :prereq_id
  class_name: :Course,
  optional: true

  belongs_to :instructors,
  primary_key: :id,
  foreign_key: :instructor_id,
  class_name: :User

  # Remember, belongs_to is just a method where the first argument is
  # the name of the association, and the second argument is an options
  # hash.
  # In rails 5 we must specify this association to be optional, because some
  # courses will not have a prerequisite.
  has_many :enrollments,
  primary_key: :id,
  foreign_key: :course_id,
  class_name: :Enrollment

  has_many :enrolled_students,
  through: :enrollments,
  source: :User

end

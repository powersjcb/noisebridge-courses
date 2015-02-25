# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  email      :string           default("")
#  created_at :datetime
#  updated_at :datetime
#

class User < ActiveRecord::Base
  validates_format_of :email, 
      with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create
  
  validates :email, presence: true, allow_blank: false
  has_many :list_users
  has_many :lists, through: :list_users
end

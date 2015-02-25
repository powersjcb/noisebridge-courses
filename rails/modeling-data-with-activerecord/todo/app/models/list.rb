# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  name       :string           default("")
#  created_at :datetime
#  updated_at :datetime
#

class List < ActiveRecord::Base

  has_many :items, dependent: :destroy
  has_many :list_user, dependent: :destroy
  has_many :users, dependent: :destroy
  
end

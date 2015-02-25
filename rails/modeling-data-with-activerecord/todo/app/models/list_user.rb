# == Schema Information
#
# Table name: list_users
#
#  id      :integer          not null, primary key
#  list_id :integer
#  user_id :integer
#

class ListUser < ActiveRecord::Base
  

  belongs_to :list
  belongs_to :user

end

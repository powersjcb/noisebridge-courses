# == Schema Information
#
# Table name: items
#
#  id         :integer          not null, primary key
#  list_id    :integer
#  name       :string           default("")
#  desc       :string           default("")
#  complete   :boolean          default("f")
#  status     :integer          default("0")
#  created_at :datetime
#  updated_at :datetime
#

class Item < ActiveRecord::Base
  belongs_to :list, touch: true
end

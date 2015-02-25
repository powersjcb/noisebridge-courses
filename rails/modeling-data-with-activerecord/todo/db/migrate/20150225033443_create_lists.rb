class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :name, default: ""
      t.timestamps
    end
  end
end

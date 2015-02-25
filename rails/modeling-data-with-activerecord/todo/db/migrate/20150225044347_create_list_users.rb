class CreateListUsers < ActiveRecord::Migration
  def change
    create_table :list_users do |t|
      t.integer :list_id
      t.integer :user_id
    end
  end
end

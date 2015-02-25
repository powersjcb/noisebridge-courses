class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :list_id
      t.string :name, default: ""
      t.string :desc, default: ""
      t.boolean :complete, default: false
      t.integer :status, default: 0

      t.timestamps
    end
    add_index :items, :list_id
  end
end

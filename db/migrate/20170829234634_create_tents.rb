class CreateTents < ActiveRecord::Migration[5.1]
  def change
    create_table :tents do |t|
      t.string :name
      t.string :price
      t.integer :quantity
      t.text :description

      t.timestamps
    end
  end
end

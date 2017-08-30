class CreatePfgs < ActiveRecord::Migration[5.1]
  def change
    create_table :pfgs do |t|
      t.string :name
      t.string :price
      t.integer :quantity
      t.text :description

      t.timestamps
    end
  end
end

class ChangeTableName < ActiveRecord::Migration[5.0]
  def change
    rename_table :farmer_products, :farmers_products
  end
end
class CreateUsersTable < ActiveRecord::Migration[5.2]
  def change
    # table name should be lowercase (snake_case) and pluralized
    # create columns INSIDE the do block
    create_table :users do |t|

      # t.data_type :name_of_column, do we allow null
      t.string :name, null: false # :null is symbol, false is just boolean, no :

      t.timestamps # creates two columns: created_at and updated_at; advice: always include (no harm)
    end

    # create indices and unique contraints on columns OUTSIDE the do block 
  end
end

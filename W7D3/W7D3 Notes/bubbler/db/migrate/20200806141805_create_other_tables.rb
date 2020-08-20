class CreateOtherTables < ActiveRecord::Migration[5.2]
  def change

    # we can do multiple tables in one migration file (separate create_table blocks)
    # to start though, probably better to do one table per migration
    create_table :locations do |t|
      t.string :place, null: false

      t.timestamps
    end
    
    create_table :bubbles do |t|
      t.string :body, null: false
      t.integer :author_id, null: false # foreign key!

      t.timestamps
    end

    # inside change method, outside create_table do block
    # adding index to :author_id because it's a foreign key (fast lookup, i.e. we will often use this column in queries)
    add_index :bubbles, :author_id # include :table_name and :column

    # adding index to :place so we can add uniqueness constraint (no two Londons)
    add_index :locations, :place, unique: true 
    # unique: true means no row with duplicate value in this column
    # it's actually a key value of an optional hash as last arg to add_index, no {} is syntactic sugar

    # an index helps us search a table more quickly
    # indices have a cost: they take up some time and space
    # add indices to columns that: 
      # (1) will be used for lookup often (foreign keys!!!), or that 
      # (2) need to have a unique constraint 


  end
end

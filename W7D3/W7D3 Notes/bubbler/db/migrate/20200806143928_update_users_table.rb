class UpdateUsersTable < ActiveRecord::Migration[5.2]
  def change
    # add_column :table, :column, :data_type
    # (if this seems like what you'd expect, that's because rails often does that :) )
    add_column :users, :location_id, :integer

    # rename_column :table, :old_name, :new_name
    rename_column :users, :name, :username

    add_index :users, :username, unique: true
    add_index :users, :location_id # foreign key!
  end
end

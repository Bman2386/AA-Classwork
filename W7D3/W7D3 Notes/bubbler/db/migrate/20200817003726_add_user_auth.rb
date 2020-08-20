class AddUserAuth < ActiveRecord::Migration[5.2]
  def change
    # add new columns for user auth
    add_column :users, :session_token, :string, null: false
    add_column :users, :password_digest, :string, null: false

    # add indexes for easy look up and unique restraints
    add_index :users, :session_token, unique: true
    add_index :users, :password_digest
  end

end

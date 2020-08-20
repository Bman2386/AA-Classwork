# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'rails_helper'

RSpec.describe User, type: :model do
    describe 'validations' do 
        it { should validate_presence_of(:username)} 
        it { should validate_presence_of(:password_digest)} 
        it { should validate_presence_of(:session_token)} 
        it { should validate_length_of(:password).is_at_least(6) } 
    end

    describe 'uniqueness' do 
        before :each do 
            create(:user)
        end
        it { should validate_uniqueness_of(:username)}
        it { should validate_uniqueness_of(:session_token)}
    end

    describe 'methods' do
        let!(:user) { create(:user) }
        describe '#is_password' do
            it 'returns true when valid password entered' do
                expect(user.is_password?('hunter12')).to be(true)
            end
            it 'returns false when invalid password entered' do
                expect(user.is_password?('middle_finger!')).to be(false)
            end
        end
        describe '::find_by_credentials' do
            it 'returns user with the correct username & password' do
                expect(User.find_by_credentials(user.username, 'hunter12')).to eq(user)  
            end
            it 'returns nil if no user found with given username & password' do
                expect(User.find_by_credentials(user.username, '1234567')).to be(nil)
            end
        end
        describe '#reset_session_token!' do
            it 'changes the user session token to a new one' do
                old_session_token = user.session_token
                expect(user.reset_session_token!).to_not eq(old_session_token)
            end
        end
    end
end

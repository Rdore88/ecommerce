class User < ApplicationRecord
  has_secure_password
  validates :password, presence: true
  validates :password_confirmation, presence: true
  validates :email, uniqueness: true

def self.organize_errors(errors)
  errors_to_return = []
  errors.each do |key, value|
    errors_to_return.push(" #{key} #{value[0]}")
  end
  errors_to_return
end

end

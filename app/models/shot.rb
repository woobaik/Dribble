class Shot < ApplicationRecord
  belongs_to :user
  mount_uploader :user_shot, UserShotUploader
  validates :user_shot, presence: true
end

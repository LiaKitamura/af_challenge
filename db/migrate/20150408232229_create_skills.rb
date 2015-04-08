class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string :name
      t.belongs_to :applicant, index: true

      t.timestamps
    end
  end
end

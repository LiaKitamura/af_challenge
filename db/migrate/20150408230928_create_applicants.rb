class CreateApplicants < ActiveRecord::Migration
  def change
    create_table :applicants do |t|
      t.string :name
      t.string :email
      t.string :website
      t.text :cover_letter
      t.belongs_to :job, index: true

      t.timestamps
    end
  end
end

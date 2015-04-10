class SiteController < ApplicationController

  def index
    @jobs = Job.all
    @applicants = Applicant.all
    @skills = Skill.all

    @web_developer = @applicants.where(job_id: 1)
    @designer = @applicants.where(job_id: 2)

    # @web_developer.skills.length
  end

end

Rails.application.routes.draw do
  # resources :jobs do
  #   resources :applicants
  # end

  resources :jobs
  resources :applicants
  resources :skills

end

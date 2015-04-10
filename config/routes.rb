Rails.application.routes.draw do
  root 'site#index'

  # resources :jobs do
  #   resources :applicants
  # end

  resources :jobs
  resources :applicants
  resources :skills

end

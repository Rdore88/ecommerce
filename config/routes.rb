Rails.application.routes.draw do
  resources :users, only: [:index, :create, :destroy, :new]
  resources :boots, excpet: [:new, :edit]
  resources :tents, except: [:new, :edit]
  resources :pfgs, except:  [:new, :edit]
  root :to => "users#new"
end

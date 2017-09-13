Rails.application.routes.draw do
  scope 'api' do
    resources :users, only: [:index, :create, :destroy, :new]
    resources :boots, except: [:new, :edit]
    resources :tents, except: [:new, :edit]
    resources :pfgs, except:  [:new, :edit]
  end
  get '/*path' => 'reactmounts#mount'
  root :to => "reactmounts#mount"
end

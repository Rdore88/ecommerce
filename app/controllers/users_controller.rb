class UsersController < ApplicationController

  def new
  end

  def create
    @new_user = User.new(user_params)
    if @new_user.save
      render json: {id: @new_user.id, name: @new_user.name}
      # NewUserMailer.sign_up_email(@new_user).deliver_later
    else
      render json: { message: "Please enter correct information", status: :unprocessable_entity }
    end
  end

  def destroy
    if current_user.destroy
      render json: { message: "Account Deleted", status: :ok}
    else
      render json: {message: "Please log in to delete an account", status: :unauthorized}
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end

class BootsController < ApplicationController
  before_action :get_boot, only: [:destroy, :update]

  def index
    @boots = Boot.all
    render json: @boots
  end

  def create
    @boot = Boot.new(boot_params)
    if @boot.save
      render json: {message: "Created new boot"}
    else
      render json: {message: "Not Created!", status: :unprocessable_entity}
    end
  end

  def destroy
    if @boot.destroy
      render json: {message: "Removed boot from inventory"}
    else
      render json: {message: "Had trouble taking this out of inventory"}
    end
  end

  def update
    @boot.update(boot_params)
  end

  private

  def boot_params
    params.require(:boot).permit(:name, :price, :description, :quantity)
  end

  def get_boot
    @boot = Boot.find(params[:id])
  end

end

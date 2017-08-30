class PfgsController < ApplicationController
  before_action :get_pfg, only: [:destroy, :update]

  def index
    @pfgs = Pfg.all
    render json: @pfgs
  end

  def create
    @pfg = Pfg.new(pfg_params)
    if @pfg.save
      render json: {message: "Created new pfg"}
    else
      render json: {message: "Not Created!", status: :unprocessable_entity}
    end
  end

  def destroy
    if @pfg.destroy
      render json: {message: "Removed pfg from inventory"}
    else
      render json: {message: "Had Trouble taking this out of inventory"}
    end
  end

  def update
    @pfg.update(pfg_params)
  end

  private

  def pfg_params
    params.require(:pfg).permit(:name, :price, :description, :quantity)
  end

  def get_pfg
    @pfg = Pfg.find(params[:id])
  end

end

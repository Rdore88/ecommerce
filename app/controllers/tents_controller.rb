class TentsController < ApplicationController
  before_action :get_tent, only: [:destroy, :update]

  def index
    @tents = Tent.all
    render json: @tents
  end

  def create
    @tent = Tent.new(tent_params)
    if @tent.save
      render json: {message: "Created new boot"}
    else
      render json: {message: "Not Created!", status: :unprocessable_entity}
    end

    def destroy
      if @boot.destroy
        render json: {message: "Removed boot from inventory"}
      else
        render json: {message: "Had troble taking this out of inventory"}
      end
    end

    def update
      @tent.update tent-params
    end

    private

    def tent_params
      params.require(:tent).permit(:name, :price, :description, :quantity)
    end

    def get_tent
      @tent = Tent.find(params[:id])
    end
  end
end

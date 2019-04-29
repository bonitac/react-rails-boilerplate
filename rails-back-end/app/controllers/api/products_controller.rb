class Api::ProductsController < ApplicationController
  def index
    @product = Product.find_by(id:1)
    render json: @product
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      # how does this work with the chrome extension
    else
      # show that there was an error
    end
  end

  def destroy
  end

  private

  def product_params
    params.require(:product).permit(
      :name,
      :image,
      :price,
      # :category_id,
      # :rating,
      # :notes
    )
  end
end
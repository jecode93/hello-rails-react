class Api::V1::RandomController < ApplicationController
  def index
    @greeting = Greeting.order('RANDOM()').first

    render json: @greeting, status: :ok
  end
end

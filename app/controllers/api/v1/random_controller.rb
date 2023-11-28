class Api::V1::RandomController < ApplicationController
  def index
    @greeting = Greeting.order('RANDOM()').first.message

    render json: @greeting
  end
end

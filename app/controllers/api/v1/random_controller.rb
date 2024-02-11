class Api::V1::RandomController < ApplicationController
  def index
    @greeting = Message.order('RANDOM()').first

    render json: @greeting, status: :ok
  end
end

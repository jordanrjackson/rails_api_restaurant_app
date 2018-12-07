class Api::ApiController < ApplicationController
  def render_error(model)
    render json: { errors: model.errors.full_messages.join(', ') }, status: 422
  end
end
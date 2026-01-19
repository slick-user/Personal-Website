module Api
  # Here < is used for inheritance PortfolioController inherits from ApplicationController 
  class PortfolioController < ApplicationController
    # Skip CSRF token verification for API endpoints
    skip_before_action :verify_authenticity_token

    def index
      render json: PORTFOLIO_DATA
    end
  end
end


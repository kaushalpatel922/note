class ApplicationController < ActionController::Base

  before_action :set_origin
  before_action :set_headers

  private

    def set_origin
      @origin = request.headers['HTTP_ORIGIN']
    end

    def set_headers
      if @origin
        allowed = ['lvh.me', 'localhost','my-app.com']
        allowed.each do |host|
          if @origin.match /^https?:\/\/#{Regexp.escape(host)}/i
            headers ['Access-Control-Allow-Origin'] = @origin
            break
          end
        end
        headers['Access-Control-Allow-Methods'] = 'GET, OPTIONS'
        headers['Access-Control-Request-Method'] = '*'
        headers['Access-Control-Allow-Headers'] = 'Content-Type'
      end
    end
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end

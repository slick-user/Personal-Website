class HomeController < ApplicationController
  def index
    # In development, redirect to Vite dev server
    # In production, serve the built React app from public/index.html
    if Rails.env.development?
      # Check if Vite dev server is running, if not, serve a simple redirect message
      render html: <<~HTML.html_safe
        <!DOCTYPE html>
        <html>
          <head>
            <title>Portfolio - Development</title>
            <meta http-equiv="refresh" content="0; url=http://localhost:3000">
            <style>
              body {
                font-family: system-ui, sans-serif;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
              }
              .message {
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="message">
              <h1>Development Mode</h1>
              <p>Please run the frontend dev server:</p>
              <code>cd frontend && npm run dev</code>
              <p><a href="http://localhost:3000">Or click here if it's already running</a></p>
            </div>
          </body>
        </html>
      HTML
    else
      # In production, serve the built React app
      render file: Rails.public_path.join('index.html'), layout: false
    end
  end
end

# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"

# React via CDN (using esm.sh for ES module support)
pin "react", to: "https://esm.sh/react@18.3.1"
pin "react-dom", to: "https://esm.sh/react-dom@18.3.1"
pin "react-dom/client", to: "https://esm.sh/react-dom@18.3.1/client"

# Portfolio app
pin "portfolio_app", to: "portfolio_app.js"
pin_all_from "app/javascript/components", under: "components"

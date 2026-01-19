# PowerShell script to start all development servers
# Run this from the root directory: .\start-dev.ps1

Write-Host "Starting development servers..." -ForegroundColor Green

# Start Rails server in backend directory
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; bundle exec rails server -p 3001" -WindowStyle Normal

# Start Tailwind watcher in backend directory  
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; bundle exec rails tailwindcss:watch" -WindowStyle Normal

# Start Vite dev server in frontend directory
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm run dev" -WindowStyle Normal

Write-Host "All servers are running!" -ForegroundColor Green
Write-Host "Rails API: http://localhost:3001" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan


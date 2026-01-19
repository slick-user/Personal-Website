@echo off
echo Starting development servers...

start "Rails Server" cmd /k "cd backend && bundle exec rails server -p 3001"
start "Tailwind CSS" cmd /k "cd backend && bundle exec rails tailwindcss:watch"
start "Frontend Dev" cmd /k "cd frontend && npm run dev"

echo.
echo All servers Are Running!
echo Rails API: http://localhost:3001
echo Frontend: http://localhost:3000
pause


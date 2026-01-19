# Portfolio Website

A modern portfolio website built with React (frontend) and Ruby on Rails (backend API).

## Project Structure

```
.
├── backend/          # Rails API server
├── frontend/         # React + Vite frontend
└── Procfile.dev     # Development process configuration
```

## Setup

### Backend (Rails)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Ruby dependencies:
   ```bash
   bundle install
   ```

3. Set up the database (if needed):
   ```bash
   rails db:create db:migrate
   ```

4. Update your portfolio data in `backend/config/initializers/portfolio_data.rb`

### Frontend (React)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

## Development

### Option 1: Run everything with startup scripts (Recommended)

**Windows:**
```powershell
# PowerShell
.\start-dev.ps1

# Or Command Prompt
start-dev.bat
```

**Mac/Linux:**
```bash
foreman start -f Procfile.dev
```

This will start:
- Rails server on `http://localhost:3001`
- Vite dev server on `http://localhost:3000`
- Tailwind CSS watcher

### Option 2: Run separately

**Terminal 1 - Rails API:**
```bash
cd backend
rails server -p 3001
```

**Terminal 2 - React Frontend:**
```bash
cd frontend
npm run dev
```

Then visit `http://localhost:3000` in your browser.

## Production Build

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

   This will build the React app into `backend/public/`

2. Start Rails server:
   ```bash
   cd backend
   rails server
   ```

   Rails will serve the built React app from the public folder.

## Customizing Your Portfolio

Edit `backend/config/initializers/portfolio_data.rb` to update:
- Your name, title, and bio
- Social media links (LinkedIn, GitHub, Itch.io, YouTube, HackTheBox)
- Skills and technologies
- Education information
- Tech stack

After making changes, restart the Rails server.

## API Endpoints

- `GET /api/portfolio` - Returns portfolio data as JSON

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Backend**: Ruby on Rails 8.1, PostgreSQL
- **Styling**: Tailwind CSS


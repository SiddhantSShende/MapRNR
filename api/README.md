# RNR Chatbot API

Backend API for the RNR website chatbot. This API proxies requests to OpenRouter AI to keep API keys secure on the server side.

## Setup

1. Install dependencies:
```bash
cd api
npm install
```

2. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Add your OpenRouter API key to `.env`:
```
OPENROUTER_API_KEY=your_actual_api_key_here
PORT=3001
```

## Running Locally

```bash
npm start
```

The API will run on `http://localhost:3001`

## Deployment Options

### Option 1: Render.com (Recommended - Free tier available)
1. Create account at https://render.com
2. Connect your GitHub repository
3. Create a new Web Service
4. Set environment variable: `OPENROUTER_API_KEY`
5. Deploy! You'll get a URL like: `https://your-app.onrender.com`

### Option 2: Railway.app
1. Create account at https://railway.app
2. Deploy from GitHub
3. Add environment variable
4. Get your deployment URL

### Option 3: Heroku
1. Create account at https://heroku.com
2. Install Heroku CLI
3. Deploy:
```bash
heroku create your-app-name
heroku config:set OPENROUTER_API_KEY=your_key
git push heroku main
```

## Update Frontend

After deploying, update the frontend `.env` file:
```
VITE_CHAT_API_URL=https://your-deployed-api-url.com/api/chat
```

Then rebuild and redeploy your frontend.

## Security

- Never commit `.env` files
- API key is kept server-side only
- CORS is configured to only allow requests from your frontend domain

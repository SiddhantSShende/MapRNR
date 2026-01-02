# RNR Cybersecurity Website

A modern, interactive cybersecurity consulting website built with React, TypeScript, and Vite.

## Features

- 🎨 Light/Dark theme with smooth transitions
- 🗺️ Interactive live threat map
- 🤖 AI-powered chatbot for company information and booking
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Add your OpenRouter API key:
     ```
     VITE_OPENROUTER_API_KEY=your_actual_api_key_here
     ```
   - Get your API key from [OpenRouter](https://openrouter.ai/keys)

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## AI Chatbot

The website includes an AI-powered chatbot that:
- Answers questions about RNR services and solutions
- Provides company information
- Helps users book consultation calls
- Uses OpenRouter API with GPT-4 Turbo Mini model

**Important:** The chatbot requires a valid OpenRouter API key in the `.env` file to function.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Routing:** React Router
- **AI:** OpenRouter API

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── layout/      # Layout components (Navbar, Footer, etc.)
│   └── ui/          # shadcn/ui components
├── pages/           # Page components
│   └── services/    # Individual service pages
├── data/            # Static data and assets
├── hooks/           # Custom React hooks
└── lib/             # Utility functions
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_OPENROUTER_API_KEY` | OpenRouter API key for chatbot | Yes |

## License

Proprietary - RNR Consulting

# MapRNR

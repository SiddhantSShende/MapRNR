# AI Chatbot Setup Guide

## Overview
The RNR website includes an AI-powered chatbot that helps visitors learn about your services and book consultation calls.

## Quick Setup

### 1. Get Your OpenRouter API Key
1. Go to [https://openrouter.ai/keys](https://openrouter.ai/keys)
2. Sign up or log in
3. Create a new API key
4. Copy the key

### 2. Configure Environment Variables
1. Open the `.env` file in the root directory
2. Replace `your_openrouter_api_key_here` with your actual API key:
   ```
   VITE_OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxx
   ```
3. Save the file

### 3. Restart Development Server
```bash
npm run dev
```

## How It Works

### Chatbot Features
- **24/7 Availability**: Floating button in bottom-right corner
- **Service Information**: Answers questions about all RNR services
- **Company Details**: Provides information about RNR's experience and offerings
- **Call Booking**: Directs users to contact form for scheduling
- **Smart Responses**: Uses GPT-4 Turbo Mini for natural conversations

### What the Chatbot Knows
- All 11 service offerings (GRC, TPRM, BCMS, etc.)
- Company background and experience
- Industries served (Banking, Healthcare, Manufacturing, etc.)
- How to contact or schedule consultations

### What It Won't Do
- Answer general programming/hacking questions
- Discuss topics outside RNR's services
- Provide technical implementation details
- Pretend to be human

## Testing the Chatbot

1. Start the development server
2. Click the chat button (bottom-right)
3. Try these sample questions:
   - "What services does RNR offer?"
   - "Tell me about your GRC services"
   - "I want to book a consultation"
   - "What industries do you work with?"

## Cost Considerations

- OpenRouter charges per token used
- GPT-4 Turbo Mini is cost-effective (~$0.15 per 1M tokens)
- Responses limited to 400 tokens to control costs
- Monitor usage at [https://openrouter.ai/activity](https://openrouter.ai/activity)

## Customization

### Modify Chatbot Behavior
Edit `src/components/CompanyChatbot.tsx`:
- `SYSTEM_PROMPT`: Controls chatbot personality and knowledge
- `temperature`: Adjust response creativity (0.4 = more focused)
- `max_tokens`: Change response length limit

### Change AI Model
In `CompanyChatbot.tsx`, line ~104:
```typescript
model: "openai/gpt-4-turbo-mini"
// Or try: "anthropic/claude-3-haiku"
// Or: "google/gemini-pro"
```

## Troubleshooting

### Chatbot Shows "Service Unavailable"
- **Check**: Is `VITE_OPENROUTER_API_KEY` set in `.env`?
- **Check**: Did you restart the dev server after adding the key?
- **Check**: Is the API key valid? Test at OpenRouter dashboard

### API Key Not Working
- Ensure the key starts with `sk-or-v1-`
- Check that you have credits in your OpenRouter account
- Verify the key has correct permissions

### Responses Are Slow
- Normal: First response may take 2-3 seconds
- Check your internet connection
- Monitor OpenRouter status page

## Security Notes

- ✅ `.env` is in `.gitignore` (API key won't be committed)
- ✅ API key is only used client-side for this demo
- ⚠️ For production: Move API calls to backend server
- ⚠️ For production: Implement rate limiting

## Production Deployment

### Recommended Changes
1. **Move to Backend**: API calls should go through your server
2. **Add Rate Limiting**: Prevent abuse and control costs
3. **Use Environment Variables**: Set `VITE_OPENROUTER_API_KEY` in hosting platform
4. **Monitor Usage**: Set up alerts for unusual activity

### Deployment Platforms
The chatbot works with:
- Vercel: Add env var in dashboard
- Netlify: Set in site settings
- Render: Configure in environment tab
- Any static host: Ensure env vars are available at build time

## Support

For issues with:
- **OpenRouter API**: https://openrouter.ai/docs
- **Website Code**: Contact your development team
- **RNR Services**: Use the contact form or chatbot itself!

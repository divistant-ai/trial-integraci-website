#!/bin/bash

# Setup script for IntegraCI Landing Page
echo "🚀 Setting up IntegraCI Landing Page..."

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Installing Node.js..."
    
    # Check for Homebrew
    if ! command -v brew &> /dev/null; then
        echo "📦 Installing Homebrew..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        
        # Add Homebrew to PATH for Apple Silicon Macs
        if [ -f "/opt/homebrew/bin/brew" ]; then
            eval "$(/opt/homebrew/bin/brew shellenv)"
        fi
    fi
    
    echo "📦 Installing Node.js via Homebrew..."
    brew install node
fi

# Verify Node.js installation
if command -v node &> /dev/null; then
    echo "✅ Node.js $(node --version) found"
    echo "✅ npm $(npm --version) found"
else
    echo "❌ Failed to install Node.js. Please install manually from https://nodejs.org/"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# Webhook URL for form submissions (HubSpot/Salesforce)
WEBHOOK_URL=https://hooks.example.com/integraci

# Google Analytics ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
EOF
    echo "✅ Created .env.local (please update with your actual values)"
fi

echo "✅ Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"


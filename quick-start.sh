#!/bin/bash
set -e

cd "$(dirname "$0")"

echo "🚀 IntegraCI Landing Page - Quick Start"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js tidak ditemukan!"
    echo ""
    echo "Silakan install Node.js terlebih dahulu:"
    echo "  1. Download dari: https://nodejs.org/"
    echo "  2. Atau install via Homebrew: brew install node"
    echo "  3. Atau install via nvm: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    echo ""
    exit 1
fi

echo "✅ Node.js $(node --version) ditemukan"
echo "✅ npm $(npm --version) ditemukan"
echo ""

# Install dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Menginstall dependencies..."
    npm install
    echo ""
else
    echo "✅ Dependencies sudah terinstall"
    echo ""
fi

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📝 Membuat file .env.local..."
    cat > .env.local << 'EOF'
# Webhook URL for form submissions (HubSpot/Salesforce)
WEBHOOK_URL=https://hooks.example.com/integraci

# Google Analytics ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
EOF
    echo "✅ File .env.local dibuat (silahkan update dengan nilai yang sesuai)"
    echo ""
fi

echo "🎉 Setup selesai!"
echo ""
echo "Menjalankan development server..."
echo "Buka http://localhost:3000 di browser Anda"
echo ""
echo "Tekan Ctrl+C untuk menghentikan server"
echo ""

npm run dev


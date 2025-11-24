#!/bin/bash

echo "🚀 Push IntegraCI Landing Page ke GitHub"
echo ""
echo "Repository: https://github.com/divistant-ai/trial-integraci-website.git"
echo "Branch: main"
echo ""

# Check if already authenticated
if git ls-remote --heads origin main &>/dev/null; then
    echo "✅ Remote repository accessible"
else
    echo "⚠️  Akan meminta autentikasi GitHub"
    echo ""
fi

echo "📝 Informasi Login:"
echo "   - Username: GitHub username Anda"
echo "   - Password: Personal Access Token (bukan password GitHub)"
echo ""
echo "💡 Belum punya token? Buat di: https://github.com/settings/tokens"
echo "   Pilih scope: 'repo' (full control of private repositories)"
echo ""

read -p "Tekan Enter untuk melanjutkan push, atau Ctrl+C untuk membatalkan..."

echo ""
echo "🔄 Pushing ke GitHub..."
echo ""

# Push dengan credential prompt
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Push berhasil!"
    echo ""
    echo "🌐 Repository tersedia di:"
    echo "   https://github.com/divistant-ai/trial-integraci-website"
else
    echo ""
    echo "❌ Push gagal. Periksa credential Anda."
    echo ""
    echo "Tips:"
    echo "   1. Pastikan username benar"
    echo "   2. Gunakan Personal Access Token (bukan password)"
    echo "   3. Token harus memiliki scope 'repo'"
fi


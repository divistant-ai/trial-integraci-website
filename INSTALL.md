# Panduan Instalasi IntegraCI Landing Page

## Prasyarat

Project ini memerlukan **Node.js** versi 18 atau lebih baru.

### Cara Install Node.js

#### Opsi 1: Download dari Website (Paling Mudah)
1. Kunjungi https://nodejs.org/
2. Download installer untuk macOS
3. Jalankan installer dan ikuti instruksi

#### Opsi 2: Via Homebrew
```bash
brew install node
```

#### Opsi 3: Via NVM (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.zshrc
nvm install --lts
nvm use --lts
```

## Quick Start

Setelah Node.js terinstall, jalankan:

```bash
./quick-start.sh
```

Atau manual:

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka http://localhost:3000 di browser Anda.

## Troubleshooting

### Error: "command not found: node"
- Pastikan Node.js sudah terinstall
- Restart terminal setelah install Node.js
- Cek dengan: `node --version`

### Error: "xcode-select: note: No developer tools were found"
- Install Xcode Command Line Tools:
  ```bash
  xcode-select --install
  ```
- Ikuti dialog yang muncul untuk install

### Port 3000 sudah digunakan
- Gunakan port lain: `PORT=3001 npm run dev`
- Atau hentikan proses yang menggunakan port 3000


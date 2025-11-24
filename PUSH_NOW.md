# 🚀 Push ke GitHub Sekarang

## Status
✅ Remote URL: HTTPS (https://github.com/divistant-ai/trial-integraci-website.git)
✅ Branch: main
✅ Credential helper: macOS Keychain (akan menyimpan credential)
✅ Ready to push!

## Langkah Push

### 1. Buka Terminal dan jalankan:

```bash
cd /Users/divistant/integraci-webpage
git push -u origin main
```

### 2. Saat diminta credential:

**Username for 'https://github.com':**
- Masukkan: GitHub username Anda

**Password for 'https://[username]@github.com':**
- Masukkan: Personal Access Token (BUKAN password GitHub!)

### 3. Cara Membuat Personal Access Token:

1. Buka: https://github.com/settings/tokens
2. Klik **"Generate new token (classic)"**
3. Beri nama: `IntegraCI Push`
4. Pilih expiration: Sesuai kebutuhan (misal: 90 days)
5. Pilih scope: ✅ **`repo`** (Full control of private repositories)
6. Scroll ke bawah, klik **"Generate token"**
7. **COPY TOKEN** (hanya muncul sekali! Jangan tutup halaman sebelum copy)

### 4. Paste token sebagai password

Saat git meminta password, paste token yang sudah dicopy.

### 5. Setelah berhasil

Credential akan tersimpan di macOS Keychain, jadi tidak perlu input lagi untuk push berikutnya.

Repository akan tersedia di:
**https://github.com/divistant-ai/trial-integraci-website**

---

## Troubleshooting

Jika push gagal:
- Pastikan username benar
- Pastikan menggunakan Personal Access Token (bukan password)
- Pastikan token memiliki scope `repo`
- Cek koneksi internet

Jika credential salah, hapus dari Keychain:
```bash
git credential-osxkeychain erase
host=github.com
protocol=https
```
(tekan Enter 2x setelah perintah terakhir)

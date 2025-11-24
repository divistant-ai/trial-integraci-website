# 🚀 Quick Push ke GitHub

## Cara Termudah: Gunakan Script

Jalankan script berikut yang akan memandu Anda:

```bash
./push-to-github.sh
```

Script ini akan:
- ✅ Meminta credential GitHub Anda
- ✅ Push code ke repository
- ✅ Menampilkan status hasil

## Atau Push Manual

Jika ingin push manual, jalankan:

```bash
git push -u origin main
```

### Credential yang Diperlukan:

1. **Username**: GitHub username Anda
2. **Password**: Personal Access Token (PENTING: bukan password GitHub!)

### Cara Membuat Personal Access Token:

1. Buka: https://github.com/settings/tokens
2. Klik **"Generate new token (classic)"**
3. Beri nama token (misal: "IntegraCI Push")
4. Pilih scope: ✅ **`repo`** (full control of private repositories)
5. Klik **"Generate token"**
6. **COPY TOKEN** (hanya muncul sekali!)

### Saat Push:

- **Username**: Masukkan GitHub username Anda
- **Password**: Paste token yang sudah dicopy (bukan password GitHub)

## Setelah Push Berhasil

Repository akan tersedia di:
**https://github.com/divistant-ai/trial-integraci-website**

---

**Catatan**: Credential akan disimpan di macOS Keychain untuk penggunaan selanjutnya.


# 🎨 Integrasi Desain Figma ke IntegraCI Website

## Cara-cara Mengintegrasikan Desain Figma

### 1. **Manual Implementation (Recommended untuk Production)**
Cara paling akurat dan maintainable:

#### Langkah-langkah:
1. **Export Assets dari Figma:**
   - Pilih elemen (icon, image, logo)
   - Klik kanan → Export → Pilih format (SVG untuk icon, PNG/JPG untuk image)
   - Simpan ke folder `public/` atau `public/images/`

2. **Copy Design Tokens:**
   - **Colors**: Copy hex codes dari Figma → Update di `tailwind.config.ts`
   - **Typography**: Copy font family, sizes, weights → Update di `tailwind.config.ts`
   - **Spacing**: Copy spacing values → Sudah tersedia di Tailwind (4px, 8px, 16px, dll)

3. **Implementasi Komponen:**
   - Buka Figma design
   - Implementasi section per section sesuai design
   - Gunakan Figma Dev Mode untuk melihat spacing, colors, dan measurements

### 2. **Menggunakan Figma Dev Mode**
Figma Dev Mode memberikan specs yang detail:

1. Buka design di Figma
2. Aktifkan Dev Mode (icon code di toolbar)
3. Klik elemen untuk melihat:
   - CSS properties
   - Spacing measurements
   - Color codes
   - Font specifications

### 3. **Menggunakan Figma Plugins**

#### a. **Figma to Code Plugins:**
- **Figma to React**: Generate React components
- **html.to.design**: Convert Figma to HTML/CSS
- **Anima**: Export Figma to React/Next.js code

#### b. **Design Tokens Plugins:**
- **Figma Tokens**: Export design tokens (colors, spacing, typography)
- **Style Dictionary**: Convert tokens ke berbagai format

### 4. **Menggunakan Figma API (Advanced)**
Untuk automation dan sync otomatis:

```bash
# Install Figma API client
npm install figma-api
```

## 📋 Step-by-Step Implementation

### Step 1: Setup Design Tokens

Update `tailwind.config.ts` dengan design tokens dari Figma:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Copy dari Figma
        primary: {
          50: '#f0f9ff',  // Dari Figma
          100: '#e0f2fe',
          // ... dst
          600: '#0284c7',  // Primary color dari Figma
        },
        // Colors lainnya dari Figma
      },
      fontFamily: {
        // Font dari Figma
        sans: ['Inter', 'sans-serif'], // Atau font yang digunakan di Figma
      },
      fontSize: {
        // Font sizes dari Figma
      },
      spacing: {
        // Custom spacing dari Figma (jika ada)
      },
    },
  },
}
```

### Step 2: Export Assets

1. **Icons:**
   ```bash
   # Simpan di public/icons/
   public/icons/logo.svg
   public/icons/icon-name.svg
   ```

2. **Images:**
   ```bash
   # Simpan di public/images/
   public/images/hero-image.png
   public/images/feature-image.jpg
   ```

### Step 3: Implementasi Komponen

Contoh implementasi berdasarkan Figma design:

```tsx
// components/NewSection.tsx
import Image from 'next/image'

export default function NewSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Implementasi sesuai Figma design */}
        <h2 className="text-4xl font-bold mb-8">
          {/* Copy text dari Figma */}
        </h2>
        <Image
          src="/images/from-figma.png"
          alt="Description"
          width={800}
          height={600}
        />
      </div>
    </section>
  )
}
```

## 🛠️ Tools & Resources

### Figma Plugins yang Direkomendasikan:
1. **Figma to React** - Generate React code
2. **Anima** - Export to Next.js
3. **Figma Tokens** - Design tokens management
4. **CSS Peeper** - Inspect CSS dari Figma

### Browser Extensions:
- **Figma to Code** - Chrome extension
- **CSS Peeper** - Inspect design specs

## 📝 Best Practices

1. **Design System Consistency:**
   - Gunakan design tokens yang sama di seluruh project
   - Update Tailwind config dengan tokens dari Figma

2. **Responsive Design:**
   - Periksa breakpoints di Figma
   - Implementasi mobile, tablet, desktop versions

3. **Component Reusability:**
   - Identifikasi komponen yang bisa di-reuse
   - Buat komponen yang sesuai dengan design system

4. **Performance:**
   - Optimize images dari Figma (WebP format)
   - Gunakan Next.js Image component untuk optimization

## 🔄 Workflow yang Direkomendasikan

1. **Design Review:**
   - Review design di Figma
   - Identifikasi components, colors, typography
   - Export assets yang diperlukan

2. **Setup:**
   - Update Tailwind config dengan design tokens
   - Setup folder structure untuk assets

3. **Implementation:**
   - Implementasi section per section
   - Gunakan Figma Dev Mode untuk specs
   - Test responsive design

4. **Review & Refine:**
   - Compare dengan Figma design
   - Adjust spacing, colors, typography
   - Test di berbagai devices

## 📦 File Structure untuk Assets

```
public/
├── images/
│   ├── hero/
│   ├── features/
│   └── testimonials/
├── icons/
│   ├── logo.svg
│   └── icons.svg
└── fonts/
    └── (custom fonts jika ada)
```

## 🚀 Quick Start

1. **Share Figma file atau link:**
   - Jika Anda punya link Figma, bisa share untuk saya implementasikan

2. **Atau export design specs:**
   - Export colors, typography, spacing
   - Export assets (images, icons)

3. **Saya akan:**
   - Update Tailwind config
   - Implementasi komponen sesuai design
   - Optimize assets
   - Test responsive design

## 💡 Tips

- **Gunakan Figma Dev Mode** untuk melihat exact measurements
- **Export SVG untuk icons** (lebih scalable dan kecil)
- **Optimize images** sebelum commit (gunakan tools seperti ImageOptim)
- **Maintain design tokens** di satu tempat (Tailwind config)
- **Test di berbagai screen sizes** sesuai breakpoints di Figma

---

**Jika Anda punya Figma file/link, share ke saya dan saya akan membantu implementasinya!** 🎨


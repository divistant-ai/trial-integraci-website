# Scripts Helper untuk Figma Integration

## extract-figma-tokens.js

Script untuk membantu extract design tokens dari Figma dan generate Tailwind config.

### Cara Menggunakan:

1. **Copy design tokens dari Figma:**
   - Buka Figma design
   - Copy colors, typography, spacing values

2. **Update script:**
   - Edit `scripts/extract-figma-tokens.js`
   - Update object `figmaTokens` dengan values dari Figma

3. **Run script:**
   ```bash
   node scripts/extract-figma-tokens.js
   ```

4. **Copy output ke tailwind.config.ts:**
   - Copy generated config
   - Paste ke `tailwind.config.ts`

## Tips:

- Untuk colors, lebih baik copy langsung color palette dari Figma (50-900 shades)
- Untuk typography, copy font family, sizes, dan weights
- Untuk spacing, biasanya Tailwind default sudah cukup


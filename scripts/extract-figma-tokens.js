/**
 * Helper script untuk extract design tokens dari Figma
 * 
 * Cara menggunakan:
 * 1. Copy design tokens dari Figma (colors, spacing, typography)
 * 2. Update object di bawah sesuai dengan design Figma Anda
 * 3. Run: node scripts/extract-figma-tokens.js
 * 4. Output akan di-generate untuk di-copy ke tailwind.config.ts
 */

// ============================================
// DESIGN TOKENS DARI FIGMA
// ============================================

const figmaTokens = {
  colors: {
    // Copy colors dari Figma
    // Format: { name: '#hexcode' }
    primary: '#0284c7',      // Primary color dari Figma
    secondary: '#64748b',    // Secondary color
    accent: '#10b981',       // Accent color
    // Tambahkan colors lainnya dari Figma
  },
  
  typography: {
    // Font families dari Figma
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Monaco', 'monospace'],
    },
    
    // Font sizes dari Figma
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
    },
    
    // Font weights dari Figma
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  spacing: {
    // Custom spacing dari Figma (jika ada)
    // Default Tailwind spacing sudah cukup untuk kebanyakan kasus
    // Tambahkan custom spacing jika diperlukan
  },
  
  borderRadius: {
    // Border radius dari Figma
    none: '0',
    sm: '0.125rem',   // 2px
    DEFAULT: '0.25rem', // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '9999px',
  },
}

// ============================================
// GENERATE TAILWIND CONFIG
// ============================================

function generateTailwindConfig() {
  const config = {
    theme: {
      extend: {
        colors: {},
        fontFamily: figmaTokens.typography.fontFamily,
        fontSize: figmaTokens.typography.fontSize,
        fontWeight: figmaTokens.typography.fontWeight,
        borderRadius: figmaTokens.borderRadius,
      },
    },
  }
  
  // Generate color palette dari single color
  Object.entries(figmaTokens.colors).forEach(([name, color]) => {
    if (typeof color === 'string') {
      // Generate color shades (50-900) dari base color
      config.theme.extend.colors[name] = generateColorShades(color)
    } else {
      config.theme.extend.colors[name] = color
    }
  })
  
  return config
}

// Helper function untuk generate color shades
function generateColorShades(baseColor) {
  // Simple implementation - untuk production, gunakan library seperti 'color'
  // atau copy langsung dari Figma color palette
  return {
    50: baseColor,
    100: baseColor,
    200: baseColor,
    300: baseColor,
    400: baseColor,
    500: baseColor,
    600: baseColor,
    700: baseColor,
    800: baseColor,
    900: baseColor,
  }
}

// ============================================
// OUTPUT
// ============================================

const tailwindConfig = generateTailwindConfig()

console.log('// ============================================')
console.log('// COPY KE tailwind.config.ts')
console.log('// ============================================\n')
console.log(JSON.stringify(tailwindConfig, null, 2))

console.log('\n\n// ============================================')
console.log('// ATAU UPDATE MANUAL:')
console.log('// ============================================\n')
console.log('theme: {')
console.log('  extend: {')
console.log('    colors: {')
Object.entries(tailwindConfig.theme.extend.colors).forEach(([name, value]) => {
  console.log(`      ${name}: ${JSON.stringify(value)},`)
})
console.log('    },')
console.log('    // ... lainnya')
console.log('  },')
console.log('}')


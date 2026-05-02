# Auto Luli - Pjesë Këmbimi Makinash

Faqe interneti për kërkimin e pjesëve të këmbimit të makinave.

## 🚀 Si ta hostoni në GitHub Pages

### Hapi 1: Krijoni një repository në GitHub
1. Shkoni te [github.com/new](https://github.com/new)
2. Emërtojeni repo-n (p.sh. `auto-luli` ose `autoluli.github.io`)
3. Lëreni publik ose privat sipas dëshirës

### Hapi 2: Ngarkoni kodin
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

### Hapi 3: Aktivizoni GitHub Pages
1. Shkoni te **Settings → Pages** në repo-n tuaj
2. Nën "Source" zgjidhni **GitHub Actions**
3. Krijoni skedarin `.github/workflows/deploy.yml` (shiko më poshtë)

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Hapi 4: Ndryshoni base URL (nëse repo nuk është `username.github.io`)
Nëse repo-ja juaj quhet p.sh. `auto-luli`, hapni `vite.config.ts` dhe shtoni:
```ts
export default defineConfig({
  base: '/auto-luli/',
  // ... rest of config
})
```

## 🛠️ Zhvillimi lokal

```bash
# Instaloni varësitë
pnpm install

# Nisni serverin e zhvillimit
pnpm run dev

# Ndërtoni për prodhim
pnpm run build

# Shikoni ndërtimin
pnpm run preview
```

## 📁 Struktura e projektit
- `src/pages/` — Faqet kryesore (Index, Search, About, Contact)
- `src/components/` — Komponentë të ripërdorshme (Header, Footer, Hero)
- `src/data/parts.ts` — Databaza e pjesëve (zëvendësoni me të dhënat tuaja)
- `src/lib/storeInfo.ts` — Informacioni i dyqanit (emri, telefoni, Instagram, etj.)
- `public/assets/` — Imazhet

## 📝 Si të ndryshoni të dhënat e pjesëve
Hapni `src/data/parts.ts` dhe ndryshoni listën e pjesëve. Çdo pjesë ka:
- `id` — numër unik
- `name` — emri i pjesës
- `make` — marka e makinës
- `category` — kategoria
- `yearFrom` / `yearTo` — vitet e përshtatshme
- `price` — çmimi
- `inStock` — nëse është në stok
- `quantity` — sasia

## 📞 Kontakti
- Instagram: [@auto.luli](https://instagram.com/auto.luli)
- Tel: 068 218 9232
- [Google Maps](https://maps.app.goo.gl/ZiHbVTuA9MDmttvaA)
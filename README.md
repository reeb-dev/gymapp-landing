# Gym Fitness Center — Landing

Landing pública de **Gym Fitness Center (GFC)** · Coronel Suárez.

## Online

- Sitio: https://gymfitnesscenter.com/
- Ejemplo en Web con REEB: https://webconreeb.com/demos/gimnasio/

## WhatsApp / Open Graph

El HTML en `gh-pages` ya incluye `og:title`, `og:description`, `og:image` (HTTPS absoluta 1200×630), `og:url`, `og:type=website` y `twitter:card=summary_large_image`.

Si WhatsApp muestra solo el link:

1. Verificá que `https://gymfitnesscenter.com/` responda **200** (no 404 de GitHub Pages).
2. Verificá `https://gymfitnesscenter.com/og-image.jpg` (**JPEG**, ~1200×630).
3. Compartí de nuevo el link (WhatsApp cachea previews fallidas).
4. Opcional: refrescar en [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) con la URL del apex.

## DNS Cloudflare (requerido para dominio estable)

GitHub Pages espera DNS **solo DNS (nube gris / proxy off)**:

| Tipo | Nombre | Contenido | Proxy |
|------|--------|-----------|-------|
| A | `@` | `185.199.108.153` | DNS only |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |
| CNAME | `www` | `reeb-dev.github.io` | DNS only |

Después, en el repo → **Settings → Pages**: dominio `gymfitnesscenter.com` y activar **Enforce HTTPS**.

Si dejás proxy naranja de Cloudflare:

- Apex puede funcionar, pero GitHub reporta `https_enforced: false` y `html_url` en `http://`.
- `www` suele devolver **Site not found** salvo que configures un **Redirect Rule** `www` → `https://gymfitnesscenter.com/`.

## Desarrollo

```bash
npm install
npm start
```

## Build + deploy (dominio custom / raíz)

```bash
npm run build -- --configuration=production --base-href=/
npx angular-cli-ghpages --dir=dist/gymapp-landing/browser --base-href=/ --cname=gymfitnesscenter.com
```

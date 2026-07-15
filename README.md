# SoftMarket Pro

Tienda online de licencias digitales para vender software, claves y packs.

## Requisitos

- Node.js 22 o superior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

## Compilar

```bash
npm run build
```

La salida se genera en `dist/`.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube este proyecto al repositorio.
3. En GitHub, entra en `Settings > Pages`.
4. En `Build and deployment`, selecciona `GitHub Actions`.
5. Sube cambios a la rama `main`.

El workflow `.github/workflows/deploy.yml` compila el sitio y publica `dist/` en GitHub Pages.

Si el repositorio se llama `usuario.github.io`, el sitio se publicara en:

```text
https://usuario.github.io/
```

Si el repositorio tiene otro nombre, por ejemplo `tienda-software`, el sitio se publicara en:

```text
https://usuario.github.io/tienda-software/
```

## Estructura principal

- `src/pages/index.astro`: portada de la tienda.
- `src/pages/software/`: catalogo y categorias.
- `src/pages/checkout.astro`: resumen de compra y formulario del cliente.
- `src/pages/cuenta.astro`: registro e inicio de sesion.
- `src/data/software.ts`: productos, precios, categorias e imagenes.
- `public/products/`: imagenes locales de productos.

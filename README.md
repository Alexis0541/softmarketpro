# DigiClara

DigiClara es un blog editorial bilingue sobre ciberseguridad, privacidad, Windows, redes, software seguro y herramientas digitales. El sitio esta preparado para GitHub Pages y se publica temporalmente en:

https://alexis0541.github.io/softmarketpro/

Responsable editorial: Alexis Moncada  
Pais: Espana  
Contacto: digiclara000@gmail.com

## Estructura

- Espanol: `/es/`
- Ingles: `/en/`
- Articulos ES: `/es/articulos/[slug]/`
- Articles EN: `/en/articles/[slug]/`
- Herramientas: `/es/herramientas/` y `/en/tools/`
- Legal: `/es/legal/` y `/en/legal/`

## Comandos

```bash
npm install
npm run dev
npm run validate
npm run build
```

`npm run validate` revisa patrones prohibidos, slugs duplicados, imagenes de articulos faltantes y creditos multimedia.

## Configuracion central

Los datos principales viven en `src/data/digiclara.ts`:

- Nombre del sitio.
- URL temporal.
- Correo.
- Responsable.
- Pais.
- Idiomas.
- Estado de afiliacion, boletin, redes y noticias.
- Categorias.
- Articulos.
- Paginas legales.

Para cambiar el dominio en el futuro, actualiza la configuracion del sitio y revisa canonical, sitemap, robots y Open Graph con el build.

## Crear un articulo

1. Anadir el par ES/EN en `src/data/digiclara.ts`.
2. Usar un slug unico.
3. Asignar categoria, etiquetas, autor y fechas.
4. Crear o descargar con licencia una imagen local unica en `public/assets/images/articles/`.
5. Registrar credito en `public/assets/media-credits.json`.
6. Incluir fuentes reales con URL.
7. Ejecutar `npm run validate` y `npm run build`.

No se debe publicar un articulo que use `digiclara-og.svg` como portada.

## Afiliados y marcas

`affiliateEnabled` esta en `false`. No hay enlaces afiliados activos. Si se activan en el futuro, deben identificarse de forma visible, sin afirmar asociaciones inexistentes y sin condicionar conclusiones editoriales.

## Herramientas

Las herramientas funcionan localmente en el navegador. No envian contrasenas ni textos a servidores. Son educativas y no sustituyen una auditoria.

## Publicacion

El workflow `.github/workflows/deploy.yml` instala dependencias, configura el `base` de GitHub Pages, construye Astro y despliega el contenido de `dist`.

## Revision editorial

Antes de publicar cambios importantes, revisar:

- `PLAN-EDITORIAL.md`
- `REVISION-ANTES-DE-PUBLICAR.md`
- `public/assets/media-credits.json`
- Resultado de `npm run validate`
- Resultado de `npm run build`

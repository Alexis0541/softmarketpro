# DigiClara

DigiClara es un blog editorial bilingue sobre software, privacidad digital, ciberseguridad, Windows, redes, copias de seguridad y tecnologia practica.

El proyecto esta preparado para publicarse en GitHub Pages mediante GitHub Actions.

## Estructura bilingue

- Espanol: `/es/`
- Ingles: `/en/`
- Articulos ES: `/es/articulos/[slug]/`
- Articles EN: `/en/articles/[slug]/`
- Herramientas ES: `/es/herramientas/`
- Tools EN: `/en/tools/`
- Legal ES/EN: `/es/legal/` y `/en/legal/`

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Compilar

```bash
npm run build
```

## Publicar en GitHub Pages

1. Sube los cambios a `main`.
2. En GitHub Pages, usa `GitHub Actions`.
3. El workflow `.github/workflows/deploy.yml` genera `dist/` y lo publica.

## Crear articulos

Los articulos estan centralizados en `src/data/digiclara.ts`.

Para agregar un articulo:

1. Agrega una entrada en `articleSeeds`.
2. Incluye version en espanol e ingles.
3. Asigna categoria, etiquetas, resumen, fecha y texto alternativo.
4. Verifica que la ruta aparezca en el buscador.

## Traducir contenido

Cada articulo debe tener equivalente completo en ambos idiomas. No publiques paginas parcialmente traducidas.

## Categorias

Las categorias estan en `topics` dentro de `src/data/digiclara.ts`.

## Buscador

El buscador es frontend y funciona con los datos de articulos ya incluidos en la build. Busca titulo, resumen, categoria y etiquetas.

## Contacto

El formulario esta desactivado para envio real. Para activarlo, configura un proveedor como Formspree, Netlify Forms u otra solucion y actualiza la nota legal.

## Logo y colores

Los recursos de marca estan en `public/assets/`.

Paleta principal:

- Marfil: `#F7F3EA`
- Blanco calido: `#FFFDF8`
- Carbon: `#242421`
- Terracota: `#C7613F`
- Verde salvia: `#71806A`
- Mostaza suave: `#D5A63A`
- Beige grisaceo: `#DDD6C9`
- Grafito: `#2B2A27`

## Afiliados

La configuracion editorial mantiene `affiliateEnabled: false`. No se muestran promociones ni enlaces de afiliado en esta version.

## Revisiones recomendadas

- Revisar enlaces internos.
- Revisar contraste y navegacion por teclado.
- Revisar responsive en movil y tablet.
- Completar correo editorial antes de activar formularios.
- Revisar politicas legales antes de uso comercial.

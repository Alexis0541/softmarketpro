# Plan editorial de DigiClara

Actualizado: 2026-07-16
Responsable: Alexis Moncada

## Publicados

| Articulo | Categoria | Idiomas | Imagen | Estado |
| --- | --- | --- | --- | --- |
| Como reconocer un correo de phishing antes de hacer clic | Ciberseguridad | ES/EN | Final | Publicado |
| Como crear contrasenas seguras sin olvidarlas | Ciberseguridad | ES/EN | Final | Publicado |
| Como proteger un equipo Windows nuevo desde el primer dia | Windows | ES/EN | Final | Publicado |
| Regla 3-2-1 de copias de seguridad explicada sin complicaciones | Windows | ES/EN | Final | Publicado |
| Que es una VPN y que no puede prometer | Privacidad | ES/EN | Final | Publicado |
| Como usar una red Wi-Fi publica con menos riesgo | Redes y Wi-Fi | ES/EN | Final | Publicado |
| Guias de gestores, 2FA, enlaces, filtraciones, descargas, router y permisos | Varias | ES/EN | Final | Publicado |

## Pendientes sugeridos

| Tema | Categoria | Prioridad | Fuentes sugeridas | Estado |
| --- | --- | --- | --- | --- |
| Passkeys para usuarios no tecnicos | Ciberseguridad | Alta | NIST, CISA, documentacion de proveedores | Pendiente |
| Ransomware para pequenas empresas | Pequenas empresas | Alta | INCIBE, NCSC, CISA | Pendiente |
| Privacidad en Android | Privacidad | Media | Google Help, AEPD, EDPB | Pendiente |
| Configuracion segura de navegadores | Software | Media | Mozilla, Google, Microsoft, NCSC | Pendiente |

## Flujo para publicar un articulo

1. Redactar version completa en espanol.
2. Traducir y revisar version inglesa.
3. Asignar categoria, etiquetas, autor, fecha y resumen.
4. Crear imagen local unica y alt text en ambos idiomas.
5. Registrar credito en `public/assets/media-credits.json`.
6. Anadir fuentes reales y enlaces.
7. Confirmar relacionados, canonical, hreflang y datos estructurados.
8. Ejecutar `npm run validate` y `npm run build`.
9. Revisar movil, accesibilidad, ortografia y enlaces.

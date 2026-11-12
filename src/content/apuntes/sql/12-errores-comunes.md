---
title: "Errores comunes"
---

- Comparar con `= NULL` en vez de `IS NULL`.
- Poner una función de grupo en el WHERE (va en HAVING).
- Dejar en el SELECT una columna que no está en el GROUP BY.
- Olvidar el WHERE en un UPDATE o DELETE.
- Olvidar la condición del JOIN (producto cartesiano).
- Usar `=` con una subconsulta que devuelve varias filas (va IN).
- Usar NOT IN con una subconsulta que puede devolver NULL.
- Olvidar el COMMIT: los cambios se pierden al cerrar la sesión y otros usuarios no los ven.

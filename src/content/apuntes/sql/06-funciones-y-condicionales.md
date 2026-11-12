---
title: "Funciones y condicionales"
---

Las funciones de una fila se aplican a cada fila y devuelven un valor por fila. Los nombres cambian bastante entre motores; estas son las que funcionan igual en casi todos. La lista completa de Oracle (texto, fechas, conversión, NVL, DECODE) está en el apunte de Oracle.

| Función | Ejemplo | Resultado |
| --- | --- | --- |
| UPPER / LOWER | `UPPER('hola')` | HOLA |
| TRIM | `TRIM('  hola  ')` | hola |
| REPLACE | `REPLACE('2026-11', '-', '/')` | 2026/11 |
| ROUND(n, d) | `ROUND(45.926, 2)` | 45.93 |
| ABS / CEIL / FLOOR | `CEIL(4.1)` | 5 |
| CAST(valor AS tipo) | `CAST('150' AS INTEGER)` | 150 |
| COALESCE(a, b, c, …) | `COALESCE(commission_pct, 0)` | El primer valor no nulo |
| NULLIF(a, b) | `NULLIF(LENGTH(first_name), LENGTH(last_name))` | NULL si a = b; si no, a |

```sql
SELECT last_name, salary * 12 * (1 + COALESCE(commission_pct, 0)) AS ingreso_anual
FROM   employees;
```

### CASE

Es la forma estándar de escribir un condicional dentro de una consulta.

```sql
SELECT last_name, salary,
       CASE
         WHEN salary < 5000  THEN 'Bajo'
         WHEN salary < 10000 THEN 'Medio'
         ELSE 'Alto'
       END AS rango
FROM   employees;
```

---
title: "Nulos y DECODE"
---

### Funciones para NULL

| Función | Devuelve | Ejemplo |
| --- | --- | --- |
| NVL(a, b) | b si a es NULL; si no, a | `NVL(commission_pct, 0)` |
| NVL2(a, b, c) | b si a NO es NULL; c si es NULL | `NVL2(commission_pct, 'Con comisión', 'Sin comisión')` |
| NULLIF(a, b) | NULL si a = b; si no, a | `NULLIF(LENGTH(first_name), LENGTH(last_name))` |
| COALESCE(a, b, c, …) | El primer valor no nulo | `COALESCE(commission_pct, manager_id, 0)` |

NVL y NVL2 son de Oracle; NULLIF y COALESCE son estándar.

```sql
SELECT last_name, salary * 12 * (1 + NVL(commission_pct, 0)) AS ingreso_anual
FROM   employees;
```

### DECODE

Es el condicional propio de Oracle: compara contra valores exactos. Hace lo mismo que un CASE (que también existe en Oracle y es estándar).

```sql
SELECT last_name, job_id,
       DECODE(job_id, 'IT_PROG', salary * 1.10,
                      'SA_REP',  salary * 1.15,
                                 salary) AS nuevo_salario
FROM   employees;
```

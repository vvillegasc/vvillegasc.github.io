---
title: "Particularidades en consultas"
---

### Limitar filas

`FETCH FIRST n ROWS ONLY` funciona desde Oracle 12c. Antes se usaba la pseudocolumna `ROWNUM`.

### NULL al ordenar

En Oracle, los NULL van al final en ASC y al principio en DESC; se cambia con `NULLS FIRST` / `NULLS LAST`.

```sql
SELECT last_name, commission_pct
FROM   employees
ORDER BY commission_pct DESC NULLS LAST;
```

### Outer join con (+)

Sintaxis antigua de Oracle: la condición va en el WHERE y `(+)` marca el lado que puede faltar. Hoy se prefiere LEFT/RIGHT JOIN.

```sql
SELECT e.last_name, d.department_name
FROM   employees e, departments d
WHERE  e.department_id = d.department_id(+);
```

Si olvidas la condición en el WHERE, obtienes un producto cartesiano.

### MINUS

La diferencia de conjuntos se escribe `MINUS` (el estándar es EXCEPT, que Oracle acepta desde 21c).

```sql
SELECT employee_id FROM employees
MINUS
SELECT employee_id FROM job_history;
```

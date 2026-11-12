---
title: "Agregación: GROUP BY y HAVING"
---

Las funciones de grupo toman muchas filas y devuelven un solo valor.

| Función | Devuelve | ¿Ignora NULL? |
| --- | --- | --- |
| COUNT(\*) | Número de filas | Cuenta todas |
| COUNT(columna) | Filas donde la columna no es NULL | Sí |
| COUNT(DISTINCT columna) | Valores distintos | Sí |
| SUM | Suma | Sí |
| AVG | Promedio | Sí (por eso `AVG(commission_pct)` solo promedia a quienes tienen comisión) |
| MIN / MAX | Mínimo / máximo (también sirve con fechas y texto) | Sí |

```sql
SELECT COUNT(*) AS empleados, AVG(salary) AS promedio,
       MIN(hire_date) AS mas_antiguo, MAX(salary) AS maximo
FROM   employees;
```

### GROUP BY

Agrupa las filas que tienen el mismo valor y calcula la función por grupo.

```sql
SELECT   department_id, COUNT(*) AS empleados, ROUND(AVG(salary), 2) AS promedio
FROM     employees
GROUP BY department_id
ORDER BY promedio DESC;
```

**Regla de oro:** toda columna del SELECT que no esté dentro de una función de grupo tiene que ir en el GROUP BY. Si no, la consulta da error.

### HAVING: filtrar grupos

WHERE filtra filas antes de agrupar; HAVING filtra grupos después de agrupar. Una función de grupo nunca va en el WHERE.

```sql
SELECT   department_id, AVG(salary) AS promedio
FROM     employees
WHERE    job_id <> 'AD_PRES'          -- 1. quita filas
GROUP BY department_id                 -- 2. agrupa
HAVING   AVG(salary) > 8000            -- 3. quita grupos
ORDER BY promedio DESC;                -- 4. ordena
```

### Ranking (funciones analíticas)

No agrupan: calculan sobre un grupo de filas pero mantienen cada fila. Útiles para "el mejor pagado de cada departamento".

```sql
SELECT last_name, department_id, salary,
       RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS puesto,
       AVG(salary) OVER (PARTITION BY department_id) AS promedio_depto
FROM   employees;
```

`RANK` deja huecos si hay empates (1, 1, 3); `DENSE_RANK` no (1, 1, 2); `ROW_NUMBER` numera sin empates.

---
title: "JOINs: combinar tablas"
---

Un JOIN une filas de dos tablas usando una columna en común (normalmente FK = PK). Se usan alias cortos (`e`, `d`) para no repetir el nombre de la tabla.

| Tipo | Devuelve |
| --- | --- |
| INNER JOIN (o JOIN) | Solo las filas que tienen pareja en las dos tablas |
| LEFT \[OUTER\] JOIN | Todas las de la izquierda; si no tienen pareja, las columnas de la derecha salen NULL |
| RIGHT \[OUTER\] JOIN | Todas las de la derecha, con NULL donde no hay pareja a la izquierda |
| FULL \[OUTER\] JOIN | Todas las de ambas tablas |
| CROSS JOIN | Todas las combinaciones posibles (producto cartesiano) |
| Self join | Una tabla unida consigo misma |

### INNER JOIN

```sql
SELECT e.last_name, d.department_name
FROM   employees e
JOIN   departments d ON e.department_id = d.department_id;
```

Un empleado sin departamento (department\_id NULL) no aparece, porque no tiene pareja.

### Varias tablas

```sql
SELECT e.last_name, j.job_title, d.department_name, l.city
FROM   employees e
JOIN   jobs        j ON e.job_id = j.job_id
JOIN   departments d ON e.department_id = d.department_id
JOIN   locations   l ON d.location_id = l.location_id
WHERE  l.city = 'Seattle';
```

### OUTER JOIN

```sql
-- Todos los departamentos, incluso los que no tienen empleados
SELECT d.department_name, e.last_name
FROM   departments d
LEFT JOIN employees e ON d.department_id = e.department_id;

-- Departamentos SIN empleados
SELECT d.department_name
FROM   departments d
LEFT JOIN employees e ON d.department_id = e.department_id
WHERE  e.employee_id IS NULL;
```

### Self join: empleado y su jefe

```sql
SELECT e.last_name AS empleado, m.last_name AS jefe
FROM   employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;
```

Con LEFT JOIN aparece también el presidente, que no tiene jefe (jefe = NULL).

### USING

Cuando la columna se llama igual en ambas tablas:

```sql
SELECT last_name, department_name
FROM   employees JOIN departments USING (department_id);
```

Si olvidas la condición del JOIN, obtienes un producto cartesiano: cada fila de una tabla combinada con todas las de la otra.

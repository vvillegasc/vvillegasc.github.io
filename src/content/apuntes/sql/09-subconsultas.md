---
title: "Subconsultas"
---

Una subconsulta es un SELECT dentro de otra sentencia. Se ejecuta primero (salvo las correlacionadas) y su resultado lo usa la consulta de afuera.

### De una fila (usa = , > , < …)

```sql
-- Quién gana más que el promedio
SELECT last_name, salary
FROM   employees
WHERE  salary > (SELECT AVG(salary) FROM employees);
```

### De varias filas (usa IN, ANY, ALL)

```sql
-- Empleados de los departamentos ubicados en la location 1700
SELECT last_name, department_id
FROM   employees
WHERE  department_id IN (SELECT department_id
                         FROM   departments
                         WHERE  location_id = 1700);

-- Gana más que TODOS los IT_PROG
SELECT last_name, salary
FROM   employees
WHERE  salary > ALL (SELECT salary FROM employees WHERE job_id = 'IT_PROG');
```

Si una subconsulta con `=` devuelve más de una fila, la consulta da error: cámbialo por IN.

### Correlacionada y EXISTS

Usa columnas de la consulta de afuera, así que se evalúa una vez por cada fila.

```sql
-- Quien gana más que el promedio de SU departamento
SELECT e.last_name, e.department_id, e.salary
FROM   employees e
WHERE  e.salary > (SELECT AVG(i.salary)
                   FROM   employees i
                   WHERE  i.department_id = e.department_id);

-- Empleados que son jefes de alguien
SELECT e.last_name
FROM   employees e
WHERE  EXISTS (SELECT 1 FROM employees s WHERE s.manager_id = e.employee_id);
```

### En el FROM (vista en línea)

```sql
SELECT d.department_name, x.promedio
FROM   departments d
JOIN  (SELECT department_id, AVG(salary) AS promedio
       FROM employees GROUP BY department_id) x
  ON   d.department_id = x.department_id;
```

Ojo con NOT IN: si la subconsulta devuelve algún NULL, NOT IN no devuelve ninguna fila. Filtra los nulos (`WHERE col IS NOT NULL`) o usa NOT EXISTS.

---
title: "Operadores de conjuntos"
---

Combinan el resultado de dos SELECT como si fueran conjuntos.

| Operador | Devuelve | Repetidos |
| --- | --- | --- |
| UNION | Filas de A o de B | Los elimina |
| UNION ALL | Filas de A y de B, todas | Los mantiene (más rápido) |
| INTERSECT | Filas que están en A y en B | Los elimina |
| EXCEPT | Filas de A que no están en B (en Oracle se llama MINUS) | Los elimina |

Reglas: los dos SELECT deben tener el mismo número de columnas y tipos compatibles en el mismo orden; los nombres de columna salen del primer SELECT; ORDER BY va una sola vez, al final.

```sql
-- Cargos actuales y anteriores de cada empleado, sin repetir
SELECT employee_id, job_id FROM employees
UNION
SELECT employee_id, job_id FROM job_history;

-- Empleados que hoy tienen un cargo que ya tuvieron antes
SELECT employee_id, job_id FROM employees
INTERSECT
SELECT employee_id, job_id FROM job_history;

-- Empleados sin historial (nunca han cambiado de cargo ni de departamento)
SELECT employee_id FROM employees
EXCEPT
SELECT employee_id FROM job_history
ORDER BY employee_id;
```

Cuando una consulta no tiene una columna que la otra sí, se completa con un valor del mismo tipo:

```sql
SELECT department_id, CAST(NULL AS INTEGER) AS location_id FROM employees
UNION
SELECT department_id, location_id FROM departments;
```

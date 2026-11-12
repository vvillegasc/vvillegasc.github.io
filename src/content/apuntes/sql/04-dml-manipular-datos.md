---
title: "DML: manipular datos"
---

El DML cambia los datos, no la estructura. Los cambios se confirman con COMMIT o se deshacen con ROLLBACK (ver Transacciones).

### INSERT

```sql
-- Nombrando las columnas (recomendado)
INSERT INTO departments (department_id, department_name, manager_id, location_id)
VALUES (300, 'Analytics', NULL, 1700);

-- Fecha con literal estándar DATE 'AAAA-MM-DD'
INSERT INTO employees (employee_id, last_name, email, hire_date, job_id, salary)
VALUES (300, 'Villegas', 'VVILLEGAS', DATE '2026-11-11', 'IT_PROG', 6000);

-- Insertar el resultado de una consulta
INSERT INTO emp_ventas (employee_id, last_name, salary)
  SELECT employee_id, last_name, salary
  FROM employees
  WHERE department_id = 80;
```

### UPDATE

```sql
UPDATE employees
SET    salary = salary * 1.10
WHERE  department_id = 60;

-- Con subconsulta: igualar el salario al mínimo del cargo
UPDATE employees e
SET    salary = (SELECT j.min_salary FROM jobs j WHERE j.job_id = e.job_id)
WHERE  e.employee_id = 300;
```

### DELETE

```sql
DELETE FROM employees
WHERE  employee_id = 300;
```

**Cuidado:** UPDATE o DELETE sin WHERE afecta **todas** las filas. Antes de ejecutarlos, corre un SELECT con el mismo WHERE para ver qué filas vas a tocar.

### MERGE (insertar o actualizar en una sola sentencia)

Si la fila existe, la actualiza; si no, la inserta. Existe en Oracle, PostgreSQL y SQL Server, pero no en MySQL.

```sql
MERGE INTO emp_ventas d
USING (SELECT employee_id, last_name, salary
       FROM employees WHERE department_id = 80) o
ON (d.employee_id = o.employee_id)
WHEN MATCHED THEN
  UPDATE SET d.salary = o.salary
WHEN NOT MATCHED THEN
  INSERT (employee_id, last_name, salary)
  VALUES (o.employee_id, o.last_name, o.salary);
```

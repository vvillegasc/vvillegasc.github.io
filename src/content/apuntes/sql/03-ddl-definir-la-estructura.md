---
title: "DDL: definir la estructura"
---

El DDL crea, modifica y elimina objetos de la base: tablas, vistas, índices.

### CREATE TABLE

```sql
CREATE TABLE estudiantes (
  id         INT PRIMARY KEY,
  nombre     VARCHAR(50) NOT NULL,
  direccion  VARCHAR(100),
  grado      VARCHAR(50),
  telefono   VARCHAR(10)
);

-- Crear una tabla copiando estructura y datos de una consulta
CREATE TABLE emp_ventas AS
  SELECT employee_id, last_name, salary
  FROM employees
  WHERE department_id = 80;
```

### ALTER TABLE

```sql
ALTER TABLE estudiantes ADD email VARCHAR(80);             -- agregar columna
ALTER TABLE estudiantes RENAME COLUMN grado TO semestre;   -- renombrar columna
ALTER TABLE estudiantes DROP COLUMN direccion;             -- borrar columna
ALTER TABLE estudiantes ADD CONSTRAINT uq_est_email UNIQUE (email);
ALTER TABLE estudiantes DROP CONSTRAINT uq_est_email;
```

Cambiar el tipo o el tamaño de una columna depende del motor: `MODIFY` en Oracle y MySQL, `ALTER COLUMN` en PostgreSQL y SQL Server.

### DROP y TRUNCATE

```sql
TRUNCATE TABLE estudiantes;   -- borra TODAS las filas, deja la estructura
DROP TABLE estudiantes;       -- borra la tabla completa (estructura + datos)
```

| Comando | Tipo | Borra datos | Borra estructura |
| --- | --- | --- | --- |
| DELETE | DML | Sí (todas o las que diga el WHERE) | No |
| TRUNCATE | DDL | Sí, todas | No |
| DROP | DDL | Sí | Sí |

Si se pueden deshacer o no depende del motor; en Oracle, TRUNCATE y DROP no se deshacen con ROLLBACK.

### Índices

Un índice acelera las búsquedas por una columna, como el índice de un libro.

```sql
CREATE INDEX idx_emp_last_name ON employees (last_name);
```

### Vistas

Una vista es una consulta guardada con nombre; se consulta como una tabla pero no guarda datos propios.

```sql
CREATE VIEW v_emp_depto AS
  SELECT e.employee_id, e.last_name, d.department_name, e.salary
  FROM   employees e JOIN departments d ON e.department_id = d.department_id;

SELECT * FROM v_emp_depto WHERE salary > 10000;
```

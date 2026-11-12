---
title: "Oracle en el curso"
---

En el curso se usa **Oracle** con **SQL Developer**. Todo lo del apunte de SQL funciona en Oracle; aquí está lo que es propio de Oracle o se escribe distinto en otros motores.

### Esquema HR (tablas principales)

Los ejemplos usan el esquema de ejemplo HR (el de "Tables Used in This Course").

| Tabla | PK | Columnas clave para los ejemplos |
| --- | --- | --- |
| EMPLOYEES | employee\_id | first\_name, last\_name, email, hire\_date, job\_id, salary, commission\_pct, manager\_id, department\_id |
| DEPARTMENTS | department\_id | department\_name, manager\_id, location\_id |
| JOBS | job\_id | job\_title, min\_salary, max\_salary |
| JOB\_HISTORY | (employee\_id, start\_date) | end\_date, job\_id, department\_id |
| LOCATIONS | location\_id | street\_address, city, country\_id |
| COUNTRIES | country\_id | country\_name, region\_id |
| REGIONS | region\_id | region\_name |

Relaciones: EMPLOYEES.department\_id → DEPARTMENTS; EMPLOYEES.job\_id → JOBS; EMPLOYEES.manager\_id → EMPLOYEES (un empleado tiene un jefe que también es empleado); DEPARTMENTS.location\_id → LOCATIONS → COUNTRIES → REGIONS.

### Variables de sustitución (SQL Developer)

```sql
SELECT last_name, salary FROM employees WHERE department_id = &depto;
```

Al ejecutar, SQL Developer pide el valor de `&depto`. Es propio de las herramientas de Oracle (SQL Developer y SQL\*Plus), no de SQL.

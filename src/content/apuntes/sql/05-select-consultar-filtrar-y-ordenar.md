---
title: "SELECT: consultar, filtrar y ordenar"
---

### Lo básico

```sql
SELECT * FROM departments;                        -- todas las columnas

SELECT last_name, salary, salary * 12 AS salario_anual   -- columna calculada con alias
FROM   employees;

SELECT first_name || ' ' || last_name AS "Nombre completo"  -- concatenar con ||
FROM   employees;

SELECT DISTINCT department_id FROM employees;     -- sin repetidos
```

Cualquier operación con NULL da NULL: `salary * commission_pct` es NULL para quien no tiene comisión.

### WHERE: filtrar filas

| Operador | Ejemplo | Significado |
| --- | --- | --- |
| = , <> (o !=) , < , > , <= , >= | `salary >= 10000` | Comparación |
| BETWEEN a AND b | `salary BETWEEN 5000 AND 8000` | Rango, incluye los extremos |
| IN (lista) | `department_id IN (10, 20, 90)` | Igual a alguno de la lista |
| LIKE | `last_name LIKE 'S%'` | Patrón: `%` = cero o más caracteres, `_` = exactamente uno |
| IS NULL / IS NOT NULL | `commission_pct IS NULL` | Valores nulos (nunca `= NULL`) |
| AND, OR, NOT | `NOT department_id = 50` | Combinar condiciones |

```sql
SELECT last_name, job_id, salary
FROM   employees
WHERE  job_id IN ('SA_REP', 'IT_PROG')
AND    salary > 6000;

SELECT last_name FROM employees WHERE last_name LIKE '_a%';   -- segunda letra "a"

SELECT last_name, hire_date
FROM   employees
WHERE  hire_date BETWEEN DATE '2005-01-01' AND DATE '2005-12-31';
```

**Precedencia:** NOT se evalúa antes que AND, y AND antes que OR. Usa paréntesis cuando mezcles:

```sql
WHERE (job_id = 'SA_REP' OR job_id = 'AD_PRES') AND salary > 15000
```

### ORDER BY: ordenar

```sql
SELECT last_name, department_id, salary
FROM   employees
ORDER BY department_id ASC, salary DESC;   -- ASC por defecto

SELECT last_name, salary * 12 AS anual
FROM   employees
ORDER BY anual;                            -- se puede ordenar por alias
```

### Limitar filas

```sql
SELECT last_name, salary
FROM   employees
ORDER BY salary DESC
FETCH FIRST 5 ROWS ONLY;     -- los 5 mejor pagados
```

`FETCH FIRST` es la forma estándar. MySQL y PostgreSQL también usan `LIMIT n`, y SQL Server `TOP n`.

### Orden en que se ejecuta un SELECT

Se escribe en un orden y se ejecuta en otro. Por eso un alias del SELECT no se puede usar en el WHERE, pero sí en el ORDER BY.

| Paso | Cláusula | Qué hace |
| --- | --- | --- |
| 1 | FROM / JOIN | Arma las filas de las tablas |
| 2 | WHERE | Filtra filas |
| 3 | GROUP BY | Agrupa |
| 4 | HAVING | Filtra grupos |
| 5 | SELECT | Calcula columnas y alias |
| 6 | DISTINCT | Quita repetidos |
| 7 | ORDER BY | Ordena |
| 8 | FETCH FIRST | Limita filas |

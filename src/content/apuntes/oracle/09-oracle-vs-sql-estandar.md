---
title: "Oracle vs. SQL estándar"
---

La mayor parte de SQL sirve igual en MySQL, PostgreSQL, SQL Server u Oracle. Lo que cambia entre motores son sobre todo los tipos de datos, las funciones de fecha y texto, y algunos atajos propios de Oracle.

### Sirve en cualquier motor

SELECT, WHERE, ORDER BY, DISTINCT, LIKE, IN, BETWEEN, IS NULL · INNER/LEFT/RIGHT/FULL JOIN · COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING · subconsultas, EXISTS, ANY, ALL · UNION, UNION ALL, INTERSECT · CASE, COALESCE, NULLIF, CAST · RANK/ROW\_NUMBER con OVER · CREATE/ALTER/DROP TABLE, PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, DEFAULT, vistas · INSERT, UPDATE, DELETE, MERGE (no en MySQL) · COMMIT, ROLLBACK, SAVEPOINT · GRANT, REVOKE · ACID.

### Propio de Oracle (o con otra forma en otros motores)

| Tema | En Oracle | En otros motores |
| --- | --- | --- |
| Texto | VARCHAR2(n) | VARCHAR(n) |
| Números | NUMBER(p, s) | INT, DECIMAL(p, s), NUMERIC |
| Fechas | DATE guarda fecha **y** hora | DATE suele ser solo fecha; DATETIME o TIMESTAMP para fecha y hora |
| Cadena vacía | `''` se trata como NULL | `''` y NULL son distintos |
| Tabla DUAL | `SELECT SYSDATE FROM dual;` | `SELECT NOW();` sin FROM (Oracle 23ai también lo permite) |
| Fecha actual | SYSDATE | CURRENT\_DATE / NOW() (MySQL, PostgreSQL), GETDATE() (SQL Server) |
| Sumar meses | ADD\_MONTHS(f, n), MONTHS\_BETWEEN | DATEADD (SQL Server), `+ INTERVAL '1 month'` (PostgreSQL, MySQL) |
| Conversiones | TO\_CHAR, TO\_DATE, TO\_NUMBER | CAST (estándar), CONVERT, DATE\_FORMAT (MySQL), FORMAT (SQL Server) |
| Nulos | NVL, NVL2 | COALESCE (estándar), IFNULL (MySQL), ISNULL (SQL Server) |
| Condicional | DECODE | CASE (estándar, también existe en Oracle) |
| Texto | SUBSTR, LENGTH, INSTR | SUBSTRING, LEN (SQL Server), POSITION / CHARINDEX |
| Concatenar | `\|\|` y CONCAT de solo 2 argumentos | `\|\|` (PostgreSQL), CONCAT con varios (MySQL), `+` (SQL Server) |
| Limitar filas | FETCH FIRST n ROWS ONLY (12c+), antes ROWNUM | LIMIT n (MySQL, PostgreSQL), TOP n (SQL Server) |
| Diferencia de conjuntos | MINUS (21c+ también acepta EXCEPT) | EXCEPT |
| Outer join antiguo | `col = col(+)` | Solo LEFT/RIGHT JOIN |
| Autonuméricos | SEQUENCE con .NEXTVAL (12c+ también IDENTITY) | AUTO\_INCREMENT (MySQL), SERIAL/IDENTITY (PostgreSQL, SQL Server) |
| DDL y transacciones | Cada DDL hace COMMIT automático | PostgreSQL permite deshacer un CREATE o ALTER con ROLLBACK |
| Borrar tabla | DROP ... CASCADE CONSTRAINTS, papelera y FLASHBACK TABLE | DROP TABLE ... CASCADE (PostgreSQL); sin papelera |
| Variables de sustitución | `&variable` en SQL Developer / SQL\*Plus | Propio de las herramientas de Oracle |

**Para el examen:** si dudas, usa la forma estándar (CASE, COALESCE, JOIN explícito, FETCH FIRST). Funciona en Oracle y te sirve en cualquier otro motor.

---
title: "Qué es SQL"
---

SQL (Structured Query Language) es el lenguaje estándar para crear, consultar y modificar bases de datos relacionales. La mayor parte se escribe igual en Oracle, MySQL, PostgreSQL o SQL Server; lo que cambia entre motores son sobre todo los tipos de datos, las funciones de fecha y texto, y algunos atajos propios (ver el apunte de **Oracle**).

Los ejemplos usan las tablas del esquema de ejemplo **HR** (EMPLOYEES, DEPARTMENTS, JOBS…), descrito en el apunte de Oracle.

### Sublenguajes

| Sublenguaje | Para qué sirve | Comandos |
| --- | --- | --- |
| DDL (Data Definition Language) | Crear y cambiar la estructura | CREATE, ALTER, DROP, RENAME, TRUNCATE |
| DML (Data Manipulation Language) | Insertar, cambiar y borrar datos | INSERT, UPDATE, DELETE, MERGE |
| DQL (Data Query Language) | Consultar datos | SELECT |
| DCL (Data Control Language) | Dar y quitar permisos | GRANT, REVOKE |
| TCL (Transaction Control Language) | Confirmar o deshacer cambios | COMMIT, ROLLBACK, SAVEPOINT |

### Reglas de escritura

- Las palabras clave no distinguen mayúsculas, pero los textos entre comillas simples sí (`'King'` ≠ `'KING'`).
- Los textos van entre comillas simples; las comillas dobles se usan para alias con espacios o mayúsculas exactas.
- Cada sentencia termina en `;`.

---
title: "DUAL y funciones de texto y números"
---

Para probar funciones sin tabla se usa `DUAL`, una tabla de Oracle con una sola fila: `SELECT UPPER('hola') FROM dual;`. Otros motores permiten `SELECT` sin FROM (Oracle 23ai también).

### Texto

| Función | Ejemplo | Resultado |
| --- | --- | --- |
| UPPER / LOWER / INITCAP | `INITCAP('juan pérez')` | Juan Pérez |
| CONCAT(a, b) o a \|\| b | `CONCAT('Byte', 'ByteGo')` | ByteByteGo |
| SUBSTR(texto, inicio, largo) | `SUBSTR('Database', 1, 4)` | Data |
| LENGTH | `LENGTH('Oracle')` | 6 |
| INSTR(texto, buscado) | `INSTR('Oracle', 'c')` | 4 |
| TRIM / LTRIM / RTRIM | `TRIM('  hola  ')` | hola |
| REPLACE | `REPLACE('2026-11', '-', '/')` | 2026/11 |
| LPAD / RPAD | `LPAD('7', 3, '0')` | 007 |

En Oracle, CONCAT recibe solo dos argumentos; para unir más se usa `||`.

### Números

| Función | Ejemplo | Resultado |
| --- | --- | --- |
| ROUND(n, d) | `ROUND(45.926, 2)` | 45.93 |
| TRUNC(n, d) | `TRUNC(45.926, 2)` | 45.92 |
| MOD(a, b) | `MOD(17, 5)` | 2 |
| ABS / CEIL / FLOOR | `CEIL(4.1)` | 5 |

---
title: "Transacciones y errores frecuentes"
---

### Cuándo empieza y termina una transacción

En Oracle una transacción empieza con el primer DML y termina con:

- COMMIT o ROLLBACK.
- Una sentencia DDL o DCL (hacen COMMIT automático).
- El cierre de la sesión.

### Errores frecuentes

| Error | Cuándo aparece | Solución |
| --- | --- | --- |
| `ORA-00979: not a GROUP BY expression` | Una columna del SELECT no está en el GROUP BY ni dentro de una función de grupo | Agregarla al GROUP BY |
| `ORA-01427: single-row subquery returns more than one row` | Una subconsulta con `=` devuelve varias filas | Cambiar `=` por IN |

Otros descuidos típicos en Oracle:

- Escribir fechas como texto sin TO\_DATE: el resultado depende de la configuración de la sesión.
- Ejecutar un DDL en medio de una transacción: confirma todo lo pendiente.
- Olvidar el COMMIT antes de cerrar SQL Developer.

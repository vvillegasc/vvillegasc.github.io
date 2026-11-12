---
title: "Transacciones, ACID y permisos"
---

### TCL: controlar transacciones

Una transacción es un grupo de sentencias DML que se confirman o se deshacen juntas.

| Comando | Qué hace |
| --- | --- |
| COMMIT | Guarda los cambios de forma permanente; los demás usuarios ya los ven |
| ROLLBACK | Deshace todo lo pendiente desde el último COMMIT |
| SAVEPOINT nombre | Marca un punto intermedio |
| ROLLBACK TO nombre | Deshace solo lo hecho después de ese punto |

```sql
INSERT INTO departments (department_id, department_name) VALUES (310, 'Data');
SAVEPOINT a;

UPDATE employees SET salary = salary * 1.05 WHERE department_id = 60;
SAVEPOINT b;

DELETE FROM employees WHERE employee_id = 300;
ROLLBACK TO b;     -- se deshace solo el DELETE

SELECT ...;        -- validar antes de confirmar
COMMIT;            -- quedan el INSERT y el UPDATE
```

En el Taller 1 la idea es la misma: analizar → decidir quiénes sí → prevalidar el impacto con SELECT → SAVEPOINT + UPDATE/MERGE + auditoría → validar → COMMIT o ROLLBACK.

### ACID

| Propiedad | Significa | Ejemplo |
| --- | --- | --- |
| Atomicidad | Todo o nada | Una transferencia: si falla el abono, también se deshace el cargo |
| Consistencia | La base pasa de un estado válido a otro válido; se cumplen las restricciones | Un aumento no deja salarios por encima del máximo del cargo |
| Aislamiento | Otras sesiones no ven cambios sin confirmar | Otro usuario no ve tu UPDATE hasta que hagas COMMIT |
| Durabilidad | Lo confirmado sobrevive a fallos | Después del COMMIT, aunque se caiga el servidor, el cambio sigue |

### DCL: permisos

```sql
GRANT SELECT, INSERT, DELETE ON employees TO usuario1;
REVOKE INSERT ON employees FROM usuario1;
```

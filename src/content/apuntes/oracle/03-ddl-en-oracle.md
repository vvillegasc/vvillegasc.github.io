---
title: "DDL en Oracle"
---

En Oracle, cada sentencia DDL hace un **COMMIT automático**: no se puede deshacer con ROLLBACK, y además confirma lo que hubiera pendiente. (PostgreSQL, por ejemplo, sí permite deshacer un CREATE o ALTER).

### ALTER, RENAME y DROP

```sql
ALTER TABLE estudiantes MODIFY telefono VARCHAR2(15);   -- cambiar tipo o tamaño
RENAME estudiantes TO alumnos;                          -- cambia el nombre de la tabla
DROP TABLE alumnos CASCADE CONSTRAINTS;                 -- borra también las FK que la referencian
```

| Comando | Borra datos | Borra estructura | ¿Se puede deshacer con ROLLBACK? |
| --- | --- | --- | --- |
| DELETE (DML) | Sí (todas o las que diga el WHERE) | No | Sí |
| TRUNCATE (DDL) | Sí, todas | No | No |
| DROP (DDL) | Sí | Sí | No (puede quedar en la papelera: `FLASHBACK TABLE ... TO BEFORE DROP`) |

### Secuencias

Generan números consecutivos para las PK. Es la forma de Oracle de hacer autonuméricos (otros motores usan AUTO\_INCREMENT o SERIAL; desde Oracle 12c también existe IDENTITY).

```sql
CREATE SEQUENCE seq_estudiantes START WITH 1 INCREMENT BY 1;
INSERT INTO estudiantes (id, nombre) VALUES (seq_estudiantes.NEXTVAL, 'Ana');
```

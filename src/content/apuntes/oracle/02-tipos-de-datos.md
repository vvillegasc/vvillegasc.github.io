---
title: "Tipos de datos y restricciones en Oracle"
---

| Tipo | Guarda | Ejemplo |
| --- | --- | --- |
| VARCHAR2(n) | Texto de largo variable, hasta n caracteres | `first_name VARCHAR2(20)` |
| CHAR(n) | Texto de largo fijo (rellena con espacios) | `country_id CHAR(2)` |
| NUMBER(p, s) | Números: p dígitos en total, s decimales | `salary NUMBER(8,2)` → hasta 999999.99 |
| NUMBER(p) | Enteros | `employee_id NUMBER(6)` |
| DATE | Fecha **y** hora (hasta segundos) | `hire_date DATE` |
| TIMESTAMP | Fecha y hora con fracciones de segundo | `created_at TIMESTAMP` |
| CLOB / BLOB | Texto muy largo / binarios (imágenes, archivos) | `descripcion CLOB` |

Dos diferencias con otros motores: el DATE de Oracle guarda también la hora, y la cadena vacía `''` se trata como NULL.

```sql
CREATE TABLE productos (
  product_id  NUMBER(6)     CONSTRAINT pk_productos PRIMARY KEY,
  nombre      VARCHAR2(50)  NOT NULL,
  codigo      VARCHAR2(10)  CONSTRAINT uq_prod_codigo UNIQUE,
  precio      NUMBER(10,2)  CONSTRAINT ck_prod_precio CHECK (precio > 0),
  cantidad    NUMBER(5)     DEFAULT 0
);

CREATE TABLE pedidos (
  order_id    NUMBER(6)  PRIMARY KEY,
  product_id  NUMBER(6)  CONSTRAINT fk_pedidos_prod
                         REFERENCES productos (product_id),
  order_date  DATE       DEFAULT SYSDATE
);
```

Ponerle nombre a la restricción ayuda: cuando falla, Oracle muestra ese nombre en el error y se sabe qué regla se rompió.

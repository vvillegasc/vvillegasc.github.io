---
title: "Tipos de datos y restricciones"
---

### Tipos de datos más comunes

| Tipo | Guarda | Ejemplo |
| --- | --- | --- |
| VARCHAR(n) | Texto de largo variable, hasta n caracteres | `nombre VARCHAR(50)` |
| CHAR(n) | Texto de largo fijo (rellena con espacios) | `country_id CHAR(2)` |
| INT / INTEGER | Números enteros | `cantidad INT` |
| DECIMAL(p, s) / NUMERIC(p, s) | Números con p dígitos en total y s decimales | `precio DECIMAL(10,2)` |
| DATE | Fecha | `hire_date DATE` |
| TIMESTAMP | Fecha y hora con fracciones de segundo | `created_at TIMESTAMP` |

Cada motor tiene sus propios nombres y matices: Oracle usa VARCHAR2 y NUMBER, y su DATE guarda también la hora (ver el apunte de Oracle).

### Restricciones (constraints)

| Restricción | Qué asegura |
| --- | --- |
| PRIMARY KEY | Identifica cada fila: única y no nula |
| FOREIGN KEY | El valor existe en la PK de otra tabla (integridad referencial) |
| NOT NULL | La columna no puede quedar vacía |
| UNIQUE | No se repite el valor (sí admite nulos) |
| CHECK | El valor cumple una condición |
| DEFAULT | Valor que se pone si no se envía ninguno (técnicamente es un valor por defecto, no una restricción) |

```sql
CREATE TABLE productos (
  product_id  INT            CONSTRAINT pk_productos PRIMARY KEY,
  nombre      VARCHAR(50)    NOT NULL,
  codigo      VARCHAR(10)    CONSTRAINT uq_prod_codigo UNIQUE,
  precio      DECIMAL(10,2)  CONSTRAINT ck_prod_precio CHECK (precio > 0),
  cantidad    INT            DEFAULT 0
);

CREATE TABLE pedidos (
  order_id    INT   PRIMARY KEY,
  product_id  INT   CONSTRAINT fk_pedidos_prod
                    REFERENCES productos (product_id),
  order_date  DATE  DEFAULT CURRENT_DATE
);
```

Ponerle nombre a la restricción (`CONSTRAINT pk_productos ...`) ayuda: cuando falla, el error muestra ese nombre y se sabe qué regla se rompió.

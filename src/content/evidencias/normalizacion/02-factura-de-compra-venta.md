---
title: "Factura de compra venta"
---

Relación inicial (PK = NUM\_FAC):

Factura (**NUM\_FAC**, FECHA\_FAC, NOM\_CLIENTE, DIR\_CLIENTE, RIF\_CLIENTE, CIUDAD\_CLIENTE, TELEF\_CLIENTE, CATEGORIA, COD\_PROD, DESP\_PROD, VAL\_UNIT, CANT\_PROD)

### 1FN

Una factura tiene varios productos, así que CATEGORIA, COD\_PROD, DESP\_PROD, VAL\_UNIT y CANT\_PROD forman un grupo repetido: con NUM\_FAC como única clave, la tabla no podría guardar más de un producto por factura. Se saca el grupo a una tabla nueva con la PK de la tabla base (NUM\_FAC) más la clave del grupo (COD\_PROD).

- Factura (**NUM\_FAC**, FECHA\_FAC, NOM\_CLIENTE, DIR\_CLIENTE, RIF\_CLIENTE, CIUDAD\_CLIENTE, TELEF\_CLIENTE)
- Detalle\_Factura (**NUM\_FAC**, **COD\_PROD**, CATEGORIA, DESP\_PROD, VAL\_UNIT, CANT\_PROD)

### 2FN

Factura tiene clave simple, así que ya está en 2FN. Detalle\_Factura tiene clave compuesta (NUM\_FAC, COD\_PROD): CANT\_PROD depende de las dos (cuánto de ese producto en esa factura), pero CATEGORIA, DESP\_PROD y VAL\_UNIT dependen solo de COD\_PROD. Esa dependencia parcial se elimina creando la tabla Producto.

- Factura (**NUM\_FAC**, FECHA\_FAC, NOM\_CLIENTE, DIR\_CLIENTE, RIF\_CLIENTE, CIUDAD\_CLIENTE, TELEF\_CLIENTE)
- Detalle\_Factura (**NUM\_FAC** *(FK)*, **COD\_PROD** *(FK)*, CANT\_PROD)
- Producto (**COD\_PROD**, DESP\_PROD, VAL\_UNIT, CATEGORIA)

### 3FN

En Factura, NOM\_CLIENTE, DIR\_CLIENTE, CIUDAD\_CLIENTE y TELEF\_CLIENTE no dependen del número de factura sino del cliente, identificado por RIF\_CLIENTE (no clave). Es una dependencia transitiva: NUM\_FAC → RIF\_CLIENTE → datos del cliente. Se crea la tabla Cliente y en Factura queda RIF\_CLIENTE como FK. Producto y Detalle\_Factura ya cumplen 3FN.

Resultado en 3FN:

- Cliente (**RIF\_CLIENTE**, NOM\_CLIENTE, DIR\_CLIENTE, CIUDAD\_CLIENTE, TELEF\_CLIENTE)
- Factura (**NUM\_FAC**, FECHA\_FAC, RIF\_CLIENTE *(FK)*)
- Producto (**COD\_PROD**, DESP\_PROD, VAL\_UNIT, CATEGORIA)
- Detalle\_Factura (**NUM\_FAC** *(FK)*, **COD\_PROD** *(FK)*, CANT\_PROD)

Nota: si la categoría tuviera código y más datos, se sacaría también a una tabla Categoria (**COD\_CAT**, NOM\_CAT).

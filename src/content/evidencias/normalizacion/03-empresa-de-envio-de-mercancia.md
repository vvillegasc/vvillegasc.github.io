---
title: "Empresa de envío de mercancía"
---

Supuestos: la guía (GUIA\_NO) es el documento del envío y su clave; una guía puede llevar varios paquetes; el flete se cobra por guía; la distancia DEST\_KM depende de la ciudad de origen y de la ciudad destino.

Relación inicial:

Envio (**GUIA\_NO**, GUIA\_FECHA, GUIA\_HORA, ORGN\_RIF, ORGN\_NOM, ORGN\_ACT, ORGN\_CIUDAD, ORGN\_DIR, ORGN\_TEL, ORGN\_CEL, DEST\_ID, DEST\_NOM, DEST\_COD\_CIUDAD, DEST\_CIUDAD, DEST\_DIR, DEST\_TEL, DEST\_KM, CODIGO, TIPO, NOMBRE, DESCRIPCION, VALR\_FLETE)

### 1FN

Los datos del paquete (CODIGO, TIPO, NOMBRE, DESCRIPCION) se repiten por cada paquete de la guía: es un grupo repetido. Se saca a una tabla con la PK de la base (GUIA\_NO) y la clave del paquete (CODIGO).

- Guia (**GUIA\_NO**, GUIA\_FECHA, GUIA\_HORA, ORGN\_RIF, ORGN\_NOM, ORGN\_ACT, ORGN\_CIUDAD, ORGN\_DIR, ORGN\_TEL, ORGN\_CEL, DEST\_ID, DEST\_NOM, DEST\_COD\_CIUDAD, DEST\_CIUDAD, DEST\_DIR, DEST\_TEL, DEST\_KM, VALR\_FLETE)
- Guia\_Paquete (**GUIA\_NO**, **CODIGO**, TIPO, NOMBRE, DESCRIPCION)

### 2FN

Guia tiene clave simple, ya está en 2FN. En Guia\_Paquete, TIPO, NOMBRE y DESCRIPCION dependen solo de CODIGO (parte de la clave), no de la guía. Se separan en la tabla Paquete.

- Guia\_Paquete (**GUIA\_NO** *(FK)*, **CODIGO** *(FK)*)
- Paquete (**CODIGO**, TIPO, NOMBRE, DESCRIPCION)

### 3FN

En Guia hay varias dependencias transitivas entre atributos no clave:

1. ORGN\_RIF → ORGN\_NOM, ORGN\_ACT, ORGN\_CIUDAD, ORGN\_DIR, ORGN\_TEL, ORGN\_CEL. Los datos de la empresa origen dependen de su RIF, no de la guía. Se crea Empresa\_Origen.
2. DEST\_ID → DEST\_NOM, DEST\_COD\_CIUDAD, DEST\_DIR, DEST\_TEL. Los datos del destinatario dependen de su identificación. Se crea Destinatario.
3. DEST\_COD\_CIUDAD → DEST\_CIUDAD. El nombre de la ciudad depende de su código. Se crea Ciudad; para no repetir nombres, la ciudad de origen también se referencia por código.
4. (ciudad origen, ciudad destino) → DEST\_KM. La distancia no depende de la guía sino del par de ciudades. Se crea Distancia.

Resultado en 3FN:

- Guia (**GUIA\_NO**, GUIA\_FECHA, GUIA\_HORA, ORGN\_RIF *(FK)*, DEST\_ID *(FK)*, VALR\_FLETE)
- Empresa\_Origen (**ORGN\_RIF**, ORGN\_NOM, ORGN\_ACT, ORGN\_COD\_CIUDAD *(FK)*, ORGN\_DIR, ORGN\_TEL, ORGN\_CEL)
- Destinatario (**DEST\_ID**, DEST\_NOM, DEST\_COD\_CIUDAD *(FK)*, DEST\_DIR, DEST\_TEL)
- Ciudad (**COD\_CIUDAD**, NOM\_CIUDAD)
- Distancia (**COD\_CIUDAD\_ORIGEN** *(FK)*, **COD\_CIUDAD\_DESTINO** *(FK)*, KM)
- Paquete (**CODIGO**, TIPO, NOMBRE, DESCRIPCION)
- Guia\_Paquete (**GUIA\_NO** *(FK)*, **CODIGO** *(FK)*)

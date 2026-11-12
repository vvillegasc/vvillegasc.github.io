---
title: "Video club"
---

Supuestos: en un alquiler el cliente puede llevar varios casetes; cada película está en un solo casete y tiene varios actores; cod\_tipo identifica el tipo de película y determina la categoría (comedia, drama, etc.); cada cliente tiene un único número de membresía.

Relaciones iniciales:

- Alquiler (**cod\_alquiler**, num\_membresia, cod\_cliente, nom\_cliente, dir\_cliente, telef\_cliente, cod\_cassette, fecha\_alquiler, fecha\_dev, valor\_alquiler, cantidad)
- Cassette (**cod\_cassette**, num\_copias, formato, cod\_pelicula, titulo, categoria, cod\_actor, nom\_actor, fechanac\_actor, cod\_tipo)

### 1FN

Hay dos grupos repetidos. En Alquiler, los datos de cada casete alquilado (cod\_cassette, fecha\_dev, valor\_alquiler, cantidad) se repiten dentro del mismo alquiler. En Cassette, los datos del actor (cod\_actor, nom\_actor, fechanac\_actor) se repiten porque una película tiene varios actores. Cada grupo pasa a una tabla nueva con la PK de su tabla base.

- Alquiler (**cod\_alquiler**, num\_membresia, cod\_cliente, nom\_cliente, dir\_cliente, telef\_cliente, fecha\_alquiler)
- Detalle\_Alquiler (**cod\_alquiler**, **cod\_cassette**, fecha\_dev, valor\_alquiler, cantidad)
- Cassette (**cod\_cassette**, num\_copias, formato, cod\_pelicula, titulo, categoria, cod\_tipo)
- Cassette\_Actor (**cod\_cassette**, **cod\_actor**, nom\_actor, fechanac\_actor)

### 2FN

Alquiler y Cassette tienen clave simple, ya cumplen 2FN. En Detalle\_Alquiler, fecha\_dev, valor\_alquiler y cantidad dependen de la clave completa (ese casete en ese alquiler), así que también cumple. En Cassette\_Actor, nom\_actor y fechanac\_actor dependen solo de cod\_actor: dependencia parcial. Se crea la tabla Actor.

- Cassette\_Actor (**cod\_cassette** *(FK)*, **cod\_actor** *(FK)*)
- Actor (**cod\_actor**, nom\_actor, fechanac\_actor)

### 3FN

1. En Alquiler, num\_membresia, nom\_cliente, dir\_cliente y telef\_cliente dependen de cod\_cliente, que no es clave (cod\_alquiler → cod\_cliente → datos del cliente). Se crea Cliente.
2. En Cassette, titulo, categoria y cod\_tipo dependen de cod\_pelicula, no del casete. Se crea Pelicula.
3. Dentro de Pelicula, categoria depende de cod\_tipo (otro no clave). Se crea Tipo\_Pelicula.
4. Como los actores pertenecen a la película y no al casete físico, la relación Cassette\_Actor se expresa como Pelicula\_Actor.

Resultado en 3FN:

- Cliente (**cod\_cliente**, num\_membresia, nom\_cliente, dir\_cliente, telef\_cliente)
- Alquiler (**cod\_alquiler**, cod\_cliente *(FK)*, fecha\_alquiler)
- Detalle\_Alquiler (**cod\_alquiler** *(FK)*, **cod\_cassette** *(FK)*, fecha\_dev, valor\_alquiler, cantidad)
- Cassette (**cod\_cassette**, num\_copias, formato, cod\_pelicula *(FK)*)
- Pelicula (**cod\_pelicula**, titulo, cod\_tipo *(FK)*)
- Tipo\_Pelicula (**cod\_tipo**, categoria)
- Actor (**cod\_actor**, nom\_actor, fechanac\_actor)
- Pelicula\_Actor (**cod\_pelicula** *(FK)*, **cod\_actor** *(FK)*)

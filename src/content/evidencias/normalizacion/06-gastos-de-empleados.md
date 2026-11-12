---
title: "Gastos de empleados"
---

Respuesta: la relación está en **1FN** pero no en 2FN.

GASTOS\_EMPLEADOS (cod\_empleado, cod\_viaje, destino, gasto\_total) tiene como clave (**cod\_empleado**, **cod\_viaje**), porque ninguno de los dos solo identifica una fila. Los valores son atómicos, así que cumple 1FN. No cumple 2FN porque los dos atributos no clave dependen solo de una parte de la clave: Cod\_empleado → Gasto\_total y Cod\_viaje → Destino. Ninguno depende de la clave completa.

Para llevarla a 2FN (y queda también en 3FN, porque no hay dependencias transitivas):

- Empleado (**cod\_empleado**, gasto\_total)
- Viaje (**cod\_viaje**, destino)
- Empleado\_Viaje (**cod\_empleado** *(FK)*, **cod\_viaje** *(FK)*)

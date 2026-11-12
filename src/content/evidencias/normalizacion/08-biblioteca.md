---
title: "Biblioteca"
---

Relación inicial: Prestamos\_libro (codLibro, Titulo, Autor, Editorial, NombreLector, Fechadev)

### 1FN

Hay dos problemas de atomicidad. El libro 1006 tiene dos autores en una sola celda ("Nancy Greenberg y Priya Nathan"), así que Autor es multivaluado. Y NombreLector junta apellidos y nombre ("Pérez Gómez, Juan"), así que se divide en Paterno, Materno y Nombres. Los autores pasan a una tabla aparte con la PK del libro.

- Libro (**codLibro**, Titulo, Editorial, Paterno, Materno, Nombres, Fechadev)
- Libro\_Autor (**codLibro**, **Autor**)

### 2FN

Un mismo libro puede prestarse a distintos lectores en distintos momentos, así que el préstamo se identifica por (codLibro, lector). Fechadev depende de los dos, pero Titulo y Editorial dependen solo de codLibro, lo cual es una dependencia parcial. Se separan el libro, el lector (con código propio) y el préstamo. Al autor también se le da código para no repetir su nombre (Murray Spiegel aparece en dos libros).

- Libro (**codLibro**, Titulo, Editorial)
- Autor (**codAutor**, NombreAutor)
- Libro\_Autor (**codLibro** *(FK)*, **codAutor** *(FK)*)
- Lector (**codLector**, Paterno, Materno, Nombres)
- Prestamo (**codLibro** *(FK)*, **codLector** *(FK)*, Fechadev)

### 3FN

No quedan dependencias transitivas. Aun así, el nombre de la editorial se repite (McGraw Hill en tres libros), así que se pasa a una tabla catálogo para evitar redundancia e inconsistencias al escribirlo.

Resultado en 3FN:

- Libro (**codLibro**, Titulo, codEditorial *(FK)*)
- Editorial (**codEditorial**, NombreEditorial)
- Autor (**codAutor**, NombreAutor)
- Libro\_Autor (**codLibro** *(FK)*, **codAutor** *(FK)*)
- Lector (**codLector**, Paterno, Materno, Nombres)
- Prestamo (**codLibro** *(FK)*, **codLector** *(FK)*, Fechadev)

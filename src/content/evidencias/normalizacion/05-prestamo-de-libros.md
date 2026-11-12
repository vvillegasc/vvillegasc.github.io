---
title: "Préstamo de libros"
---

Relación inicial: PRESTAMO\_LIBROS (Colegio, Profesor, Asignatura\_habilidad, Aula, Curso, Libro, Editorial, Fecha\_prestamo)

Dependencias que se ven en los datos:

- Libro → Editorial ("Aprender y enseñar en educación infantil" siempre es de Graó; "Saber educar" siempre de Temas de Hoy).
- Profesor → Colegio, Aula, Curso (Juan Pérez siempre está en C.P Cervantes, aula 1.A01, 1er grado; Andrés Fernández siempre en 1.A01, 2do grado). El aula no determina el curso: 1.A01 aparece con 1er y 2do grado.
- (Profesor, Asignatura\_habilidad, Libro) → Fecha\_prestamo. Un profesor recibe un libro para evaluarlo en una asignatura en una fecha.

Clave primaria: (**Profesor**, **Asignatura\_habilidad**, **Libro**).

### 1FN

Cada celda tiene un solo valor ("Pensamiento Espacial, Temporal y causal" es el nombre de una sola habilidad) y cada fila es un préstamo, sin grupos repetidos. Con la clave anterior, la relación ya está en 1FN.

### 2FN

No cumple 2FN porque hay atributos que dependen solo de una parte de la clave: Editorial depende solo de Libro, y Colegio, Aula y Curso dependen solo de Profesor. Se separan en sus propias tablas.

- Profesor (**Profesor**, Colegio, Aula, Curso)
- Libro (**Libro**, Editorial)
- Prestamo (**Profesor** *(FK)*, **Asignatura\_habilidad**, **Libro** *(FK)*, Fecha\_prestamo)

### 3FN

En Profesor, Colegio, Aula y Curso dependen directamente del profesor y no entre sí (la misma aula tiene cursos distintos), así que no hay dependencias transitivas. Libro y Prestamo tampoco las tienen. Las tres tablas están en 3FN.

Modelo relacional final: como los nombres no son buenos identificadores y Colegio, Asignatura y Editorial se repiten, se recomienda darles código propio.

- Colegio (**cod\_colegio**, nom\_colegio)
- Profesor (**cod\_profesor**, nom\_profesor, cod\_colegio *(FK)*, aula, curso)
- Asignatura (**cod\_asignatura**, nom\_asignatura\_habilidad)
- Editorial (**cod\_editorial**, nom\_editorial)
- Libro (**cod\_libro**, titulo, cod\_editorial *(FK)*)
- Prestamo (**cod\_profesor** *(FK)*, **cod\_asignatura** *(FK)*, **cod\_libro** *(FK)*, fecha\_prestamo)

Atributos principales (los que forman parte de alguna clave): cod\_profesor, cod\_asignatura y cod\_libro en Prestamo, y el código de cada tabla catálogo.

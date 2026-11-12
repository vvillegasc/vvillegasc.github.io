---
title: "Reporte de matrícula"
---

Relación inicial: REPORTE\_MATRICULA (codigo\_alumno, nombre\_alumno, especialidad, codigo\_curso, nombre\_curso, nombre\_docente, oficina, seccion)

Dependencias que se ven en los datos: codigo\_alumno → nombre\_alumno, especialidad; codigo\_curso → nombre\_curso, nombre\_docente (MA123 siempre es Matemática 2 con Carlos Arambulo); nombre\_docente → oficina (Víctor Moncada tiene CB-120 en dos cursos distintos); (codigo\_alumno, codigo\_curso) → seccion (en MA123, Luis está en la U y Raúl en la V).

### 1FN

Cada alumno aparece con varios cursos: codigo\_curso, nombre\_curso, nombre\_docente, oficina y seccion forman un grupo repetido. Se saca a una tabla con la PK del alumno más el código del curso.

- Alumno (**codigo\_alumno**, nombre\_alumno, especialidad)
- Matricula (**codigo\_alumno**, **codigo\_curso**, nombre\_curso, nombre\_docente, oficina, seccion)

### 2FN

En Matricula solo seccion depende de la clave completa. nombre\_curso, nombre\_docente y oficina dependen solo de codigo\_curso (dependencia parcial). Se crea la tabla Curso.

- Alumno (**codigo\_alumno**, nombre\_alumno, especialidad)
- Matricula (**codigo\_alumno** *(FK)*, **codigo\_curso** *(FK)*, seccion)
- Curso (**codigo\_curso**, nombre\_curso, nombre\_docente, oficina)

### 3FN

En Curso, oficina depende de nombre\_docente, que no es clave (codigo\_curso → nombre\_docente → oficina). Es transitiva, así que se crea la tabla Docente. Se le asigna un código porque el nombre no es un buen identificador.

Resultado en 3FN:

- Alumno (**codigo\_alumno**, nombre\_alumno, especialidad)
- Curso (**codigo\_curso**, nombre\_curso, cod\_docente *(FK)*)
- Docente (**cod\_docente**, nombre\_docente, oficina)
- Matricula (**codigo\_alumno** *(FK)*, **codigo\_curso** *(FK)*, seccion)

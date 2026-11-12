---
title: "Fechas y conversión"
---

### Fechas

| Función | Qué hace | Ejemplo |
| --- | --- | --- |
| SYSDATE | Fecha y hora actual del servidor | `SELECT SYSDATE FROM dual;` |
| fecha + n | Suma n días | `hire_date + 30` |
| fecha1 - fecha2 | Días entre dos fechas | `SYSDATE - hire_date` |
| ADD\_MONTHS(f, n) | Suma n meses | `ADD_MONTHS(hire_date, 6)` |
| MONTHS\_BETWEEN(f1, f2) | Meses entre fechas | `MONTHS_BETWEEN(SYSDATE, hire_date) / 12` = años de antigüedad |
| LAST\_DAY(f) | Último día del mes | `LAST_DAY(SYSDATE)` |
| EXTRACT(YEAR FROM f) | Saca una parte de la fecha | `EXTRACT(YEAR FROM hire_date)` |

Las diapositivas del Roadmap muestran GETDATE y DATEADD, que son de SQL Server. En Oracle se usan SYSDATE y ADD\_MONTHS (o fecha + n días).

### Conversión

| Función | Convierte | Ejemplo |
| --- | --- | --- |
| TO\_CHAR(fecha, formato) | Fecha → texto | `TO_CHAR(hire_date, 'DD/MM/YYYY')` |
| TO\_CHAR(número, formato) | Número → texto | `TO_CHAR(salary, '$99,999.00')` |
| TO\_DATE(texto, formato) | Texto → fecha | `TO_DATE('15-03-2026', 'DD-MM-YYYY')` |
| TO\_NUMBER(texto, formato) | Texto → número | `TO_NUMBER('1,500', '9,999')` |

Formatos de fecha comunes: `YYYY` año, `MM` mes en número, `MON` mes abreviado, `MONTH` mes completo, `DD` día, `DAY` nombre del día, `HH24:MI:SS` hora. Formatos de número: `9` dígito, `0` dígito con cero, `$` signo, `.` decimal, `,` miles.

```sql
SELECT last_name,
       TO_CHAR(hire_date, 'DD "de" Month "de" YYYY') AS contratado,
       TO_CHAR(salary, '$99,999') AS salario
FROM   employees
WHERE  hire_date > TO_DATE('2007-12-31', 'YYYY-MM-DD');
```

Usa TO\_DATE al escribir fechas, para no depender del formato configurado en la sesión:

```sql
INSERT INTO employees (employee_id, last_name, email, hire_date, job_id, salary)
VALUES (300, 'Villegas', 'VVILLEGAS', TO_DATE('2026-11-11','YYYY-MM-DD'), 'IT_PROG', 6000);
```

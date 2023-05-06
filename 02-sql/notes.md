```javascript
```

SQL(Structured Query Language)
Es un lenguaje de consultas utilizado para gestionar bases de datos realacionales. Permite crear, modificar y eliminar datos de manera eficiente y segura. 
SQL es utilizado por una gran cantidad de sistemas de gestión de bases de datos, y es esencial en la mayoría de las aplicaciones que manejan grnades volúmenes de datos.
Al igual que JS, SQL tiene expresiones y statements, Está compuesto por clausulas

PostreSQL 
Es gratuito, solido, además, siempre se mantiene a la varguandia

Comandos
PGadmin es una herramienta visual para trabajar con postgreSQL, sin embargo, esta suele ser pesada.
SQL SHELL es la consola para trabajar con postgreSQL
Recordar que los comandos con "\" son propios de la consola y no de SQL
1. \l: da una lista de las bases de datos creadas
2. DROP DATABASE "nombreDeBDD";: comando para borrar una base de datos
3. CREATE DATABASE "nombreDeBDD";: comando para crear una base de datos
4. \c "nombreDeBDD": comando para conectar a una base de datos
5. \dt: comando para ver las tablas de la base de datos
6. CREATE TABLE "nombreTable": comando para crear una tabla
```SQL
CREATE TABLE table_name
-- (
--     column_name1 data_type(size),
--     column_name2 data_type(size),
--     column_name3 data_type(size),
-- );
-- Ejemplo
-- a cada columna se le da un nombre "serial" en este caso, y un tipo de dato, además se le debe colocar un tamaño
-- references hace referencia a la tabla y al dato foraneo.

CREATE TABLE ciudades 
(id serial PRIMARY KEY, nombre varchar(255) UNIQUE);

CREATE TABLE personas
(id serial PRIMARY KEY, apellido varchar(255) NOT NULL, 
 NOMBRE varchar(255) UNIQUE, ciudad integer references ciudades(id));
```

7. INSERT INTO table_name(column, column, column)VALUES("data", "data", "data");: sirve para insertar un registro en una tabla.
8. SELECT * FROM name_table: trae toda la información de la tabla
9. SELECT (column_name) FROM name_table: trae toda la información de la columna especificada de la tabla
10. DELETE FROM table_name;: borra toda la información de la tabla (no elimina la tabla)
11. DELETE FROM table_name WHERE id="n";: borra el registro con id "n" de la tabla table_name
12. WHERE: Se utiliza para filtrar la tabla, permite filtrar por condiciones.
```SQL
-- ejemplo
SELECT * FROM table_name WHERE column > 10;

-- ejemplo con doble condición
SELECT * FROM table_name WHERE column1 > 10 AND column2 > 20;
```
13. ORDER BY: ordena la información
```SQL
SELECT * FROM table_name WHERE column1 > 10 AND column2 > 20 ORDER BY columnaDeCriterioParaOrdenar;
-- order by, ordena de manera ASC por defecte, tambien se puede de forma DESC
```
13. GROUP BY: agrupa por el criterio que se le indique, la sintaxis es igual a ORDER BY
14. COUNT: Es un contador
```SQL
SELECT status, COUNT(id) FROM personajes GROUP BY status;
-- agrupa los status y coloca un contador como otra columna.
```


sub quieries
Permite hacer una query y colocarla en la columna de otra query
```SQL
SELECT nombre, (SELECT COUNT(*) FROM pedidos WHERE producto_id = productos_id) AS num_pedidos FROM productos;
``` 


Join clause
Se utiliza para combinar datos de dos o más tablas.
```SQL
SELECT p.id, p.name, p.status, l.id, l.name as planeta FROM personajes as p JOIN locations as l ON p.location = l.id;
-- trae las columnas name, status y id de personajes, y id y name de locations uniendo donde personajes.location sea igual a locations.id
```
1. INNER JOIN: Retorna sólo los registros que tienen coincidencias en ambas tablas.
2. 

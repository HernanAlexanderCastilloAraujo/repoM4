--generar la base de datos
CREATE DATABASE movies;

--crear las tablas necesarias, cuales son esas tablas?

-- insertar datos a las tablas




-- 1. consulta las peliculas que se estrenaron en el año en que naciste
SELECT title FROM movies WHERE year = 1998;

-- 2. cuantas peliculas hay en la base de datos que sean del año 1982
SELECT COUNT(*) AS total FROM movies WHERE year = 1982;

--3. buscar actores que tengan el substring stack en su apellido
SELECT * FROM actors WHERE last_name LIKE '%stack%';


--4. buscar los 10 nombres y apellidos más populares entre los actores, cuantos actores tienen cada uno de esos nombres y apellidos?, lOWER se usa para que todas las respuestas estén en minúsculas
SELECT first_name, last_name, COUNT(*) AS total FROM actors GROUP BY LOWER(first_name), LOWER(last_name) ORDER BY total DESC LIMIT 10;  

-- 5. LIsta del top 100 de actires más activos junto con el número de roles que han realizado
SELECT first_name, last_name, COUNT(*) AS total FROM actors JOIN roles ON actors.id = roles.actor_id GROUP BY LOWER(first_name), LOWER(last_name) ORDER BY total DESC LIMIT 100;

-- 6. Cuantas peliculas tiene la BDD por genero, ordenar la lista por el genero menos popular
SELECT genre, COUNT(*) AS total FROM movies_genre GROUP BY genre ORDER BY total ASC;

-- 7. listar el nombre y apellido de todos los actores que trabajaron en la pelicula "Braveheart" de 1995; ordenar la lista alfabeticamente por apellido.
SELECT actors.first_name, actors.last_name FROM actors JOIN roles ON actors.id = roles.actor_id JOIN movies ON roles.movie_id = movies.id WHERE movies.title = 'Braveheart' AND movies.year = 1995 ORDER BY actors.last_name DESC; 

-- 8. listar todos los directores que dirigieron una pelicula de género "Film-Noir" en un año bisiesto (para reducir la complejidad, asumir que cualquier año divisible por cautro es bisiesto). la consulta debe devolver el nombre del director, el nombre de la pelicula y el año. Todo ordenado por el nombre de la pelicula.
SELECT directors.first_name, directors.last_name, movies.title, movies.year FROM directors JOIN movies_directors ON directors.id = movies.directors_id JOIN movies ON movies.id = movies_directors.movie_id JOIN movies_genres ON movies.id = movies_genres.movie_id WHERE movies_genres.genre = 'Film-Noir' AND movies.year % 4 = 0 ORDER BY movies.title ASC;

-- 9. Listar todos los actores que hayan trabajado con Kevin Bacon en peliculas de DRAMA(incluir el titulo de la peli), Excluir al actor de la lista.
SELECT a.first_name, a.last_name FROM actos AS a JOIN roles AS r ON a.id = r.actor_id JOIN  movies AS m ON r.movie_id = m..id = m.id JOIN movies_genres AS mg ON m.id = mg.movie_id WHERE mg.genre = 'DRAMA' AND m.id = (
    SELECT r.movie_id FROM roles AS r JOIN actors AS a ON r.actor_id = a.id WHERE a.first_name = 'Kevin' AND a.last_name = 'Bacon'
) AND (a.first_name || ' ' || a.last_name != 'Kevin Bacon')

-- 10. Qué actores actuaron en una pelicula antes de 1900 y también en una pelicula despues del 2000
 SELECT a.first_name, a.last_name
    FROM actors AS a
    WHERE a.id IN (SELECT r.actor_id FROM roles AS r JOIN movies AS m ON r.movie_id = m.id WHERE m.year < 1900)
    AND a.id IN (SELECT r.id FROM roles AS r JOIN movies AS m ON r.movie_id = m.id WHERE m.year > 2000);

-- 11. Buscar actores que actuaron en cinco o más roles en la misma pelicula despues del año 1990, notar que los ROLES pueden tener duplicados ocasionales, sobre los cuales no estamos interesados, se quiere actores que hayan tenido cinco o más roles DISTINTOS(DISTINCT cough cough) en la misma pelicula, escribir una query que retorne los nombres del actor, el titulo de la pelicula y el numero de roles (siempre deberá ser mayor a 5)

SELECT a.first_name, a.last_name, m.title, COUNT(DISTINCT(role)) AS total
FROM roles AS r JOIN actors AS a ON r.actor_id = a.id
JOIN movies AS m ON r.movie_id = m.id
WHERE m.year > 1990
GROUP BY r.actor_id, r.movie_id
HAVING total > 5; 

-- 12. Para cada año contar el numero de peliculas en ese año que solo tuvieron actrices femeninas
SELECT year, COUNT(DISTINCT id) AS total
FROM movies WHERE id NOT IN (SELECT movie_id FROM roles as r JOIN actors AS a ON r.actor_id = a.id WHERE
a.gender = 'M')
GROUP BY year; 

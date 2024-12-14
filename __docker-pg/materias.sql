-- Conectar a la base de datos
\c academia;

-- Crear la tabla materias
CREATE TABLE IF NOT EXISTS materias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    modulos_por_semana INT NOT NULL
);

INSERT INTO materias (nombre, modulos_por_semana) VALUES
    ('Programación Lógica', 5),
    ('Matemáticas', 6),
    ('Aplicaciones Web II', 4),
    ('Redes', 2),
    ('Bases de Datos', 3);
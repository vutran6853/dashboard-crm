CREATE TABLE users (
	users_id serial PRIMARY KEY,
	users_username VARCHAR(255) UNIQUE,
	users_password VARCHAR(255),
	users_email VARCHAR(255)
)


INSERT INTO users (users_username, users_password)
VALUES ($1, $2)
RETURNING users_id, users_username

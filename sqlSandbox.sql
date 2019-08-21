CREATE TABLE users (
	users_id serial PRIMARY KEY,
	users_username VARCHAR(255) UNIQUE,
	users_password VARCHAR(255),
	users_email VARCHAR(255)
)


INSERT INTO users (users_username, users_password)
VALUES ($1, $2)
RETURNING users_id, users_username


CREATE TABLE spend (
	spend_id SERIAL,
	item VARCHAR(255),
	price INT,
	user_id INTEGER REFERENCES USERS (user_id)
)

INSERT INTO SPEND(item, price, user_id) 
VALUES ('food', 30, 3)
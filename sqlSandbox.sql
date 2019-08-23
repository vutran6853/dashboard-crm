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

CREATE TABLE utilites (
	utilites_gas VARCHAR(255),
	utilites_water VARCHAR(255),
	utilites_electric VARCHAR(255),
	utilites_date VARCHAR(255),
	utilites_internet VARCHAR(255),
	home_id INTEGER REFERENCES house(house_id)
)

CREATE TABLE house (
	house_id SERIAL PRIMARY KEY,
	house_price_tag VARCHAR(255)
)



CREATE TABLE house_payment_history (
	house_payment_date VARCHAR(255),
	house_payment_payment VARCHAR(255),
	home_id INTEGER REFERENCES house(house_id)
)

SELECT *
FROM HOUSE
INNER JOIN house_payment_history ON house_id = house_id
where HOUSE_ID = $1
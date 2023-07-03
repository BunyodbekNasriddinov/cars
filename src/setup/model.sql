CREATE EXTENSION pgcrypto;

CREATE TABLE admins (
  admin_id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(64) NOT NULL,
  password VARCHAR(60) NOT NULL
);

CREATE TABLE images (
  img_id SERIAL NOT NULL PRIMARY KEY,
  image VARCHAR(150) NOT NULL
);

CREATE TABLE models (
  model_id SERIAL NOT NULL PRIMARY KEY,
  model_name VARCHAR(64) NOT NULL,
  creted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NULL,
  deleted_at TIMESTAMP DEFAULT NULL,
  img_id INT REFERENCES images(img_id)
);

CREATE TABLE cars (
  car_id SERIAL NOT NULL,
  car_name VARCHAR(32),
  img_id INT REFERENCES images(img_id),
  car_price DEC(32, 2) NOT NULL,
  car_color VARCHAR(16) NOT NULL,
  car_distance VARCHAR(32) NOT NULL,
  car_motor VARCHAR(16) NOT NULL,
  car_desc VARCHAR(64) NOT NULL,
  car_gearbook VARCHAR(16) NOT NULL,
  creted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NULL,
  deleted_at TIMESTAMP DEFAULT NULL,
  model_id INT REFERENCES models(model_id),
  admin_id INT REFERENCES admins(admin_id)
);
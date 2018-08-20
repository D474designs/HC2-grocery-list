DROP DATABASE IF EXISTS review;

CREATE DATABASE review;

USE review;

CREATE TABLE groceries (
  id int NOT NULL AUTO_INCREMENT,
  quantity integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

INSERT INTO groceries (quantity, description) VALUES (5, "frozen pizza");
INSERT INTO groceries (quantity, description) VALUES (9, "frozen burritos");
INSERT INTO groceries (quantity, description) VALUES (3, "wine from Chile");
INSERT INTO groceries (quantity, description) VALUES (7, "Greek yogurt");
INSERT INTO groceries (quantity, description) VALUES (1, "cat food: sack");
INSERT INTO groceries (quantity, description) VALUES (1, "cat food: pouch");
INSERT INTO groceries (quantity, description) VALUES (7, "dog food: sack");
INSERT INTO groceries (quantity, description) VALUES (7, "dog food: pouch");
INSERT INTO groceries (quantity, description) VALUES (3, "barbacoa");
INSERT INTO groceries (quantity, description) VALUES (1, "cilantro");
INSERT INTO groceries (quantity, description) VALUES (2, "limes");
INSERT INTO groceries (quantity, description) VALUES (5, "tortillas");

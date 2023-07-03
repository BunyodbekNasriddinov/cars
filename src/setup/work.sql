-- static admin add
INSERT INTO admins(username, password) VALUES ('admin', crypt('admin', gen_salt('bf')))
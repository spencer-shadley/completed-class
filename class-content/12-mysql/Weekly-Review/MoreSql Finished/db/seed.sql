-- This is a file I use to add DUMMY data into my tables.
-- This is for the purposes of testing queries in MySQL workbench.

use got_characters; 

INSERT INTO house
    (name)
VALUES
    ('Targaryen'),
    ('Lannister'),
    ('Stark');

INSERT INTO role
    (title, salary, house_id)
VALUES
    ('Targaryen Queen', 750000, 1),
    ('Targaryen King', 500000, 1),
    ('Targaryen Knight', 50000, 1),
    ('Lannister King', 1000000, 2),
    ('Lannister Queen', 1000000, 2),
    ('Lannister Knight', 60000, 2),
    ('Stark King', 250000, 3),
    ('Stark Queen', 250000, 3),
    ('Stark Knight', 50000, 3);
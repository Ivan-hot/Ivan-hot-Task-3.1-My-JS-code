-- Drops server table
DROP TABLE IF EXISTS server;

-- Creates server table
CREATE TABLE IF NOT EXISTS server (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , user_id varchar(50) NOT NULL
    , brand varchar(50) NOT NULL
    , model varchar(50) NOT NULL
    , year smallint NULL 
    , color varchar(50) NULL
);
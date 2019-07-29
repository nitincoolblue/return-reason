CREATE TABLE sub_reason
(
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    description varchar(200)
);
CREATE INDEX sub_reason_index ON sub_reason (id);
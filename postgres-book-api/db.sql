CREATE DATABASE bookDB;

create table book(
    id varchar(255) primary key,
    name varchar(20),
    description varchar(255)
);

insert into book (id, name, description) 
values 
(101, goru rosona somogro, beautiful book),
(102, maya, beautiful book),
(103, manuser jonno, beautiful book);

insert into book (id, name, description) 
values 
(103, manuser jonno, beautiful book);
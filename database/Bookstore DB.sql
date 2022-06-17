Create Database Bookstore
drop database Bookstore
use Bookstore

create table Book (
bookId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
isbn int not null,
bookName varchar (30) not null,
author varchar (30) not null,
bookDescription varchar (200) not null,
price int not null,
image varchar(30)not null,
categoryName varchar(50) Foreign Key references Category(categoryName)

);
drop table Book



create table Category (
categoryId int NOT NULL IDENTITY(1,1) ,
categoryName varchar(50) not null PRIMARY KEY,
categoryDescription varchar(200) not null,
);
drop table Category

create table Store (
storeId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
storeName varchar(30) not null,
address varchar(30) not null
);

create table Users(
userID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
name varchar(30) not null,
surname varchar(30) not null,
email varchar(30) not null,
username varchar(30) not null,
password varchar(30) not null,
role varchar(30) not null
);

create table Staff(
staffId int not null foreign key references Users(userID),
position varchar(30) not null,
job_experience int not null,
shift_start time not null,
shift_end time not null,
storeId int foreign key references Store(storeId)
);


create table Stock(
bookname varchar(30) not null,
getBookStock int not null,
bookId int not null foreign key references Book(bookId)
);
drop table Stock

create table Orders(
orderId int not null primary key,
bookId int not null foreign key references Book(bookId),
staffId int not null foreign key references Users(userID)
);
drop table Orders

create table Supplier(
supplierId int IDENTITY(1,1) not null primary key,
supplierName varchar(30) not null,
supplierAddress varchar(30) not null,
phone varchar(30)

);
drop table Supplier

insert into Supplier values ('Supplier1','SupplierAddress1','123456789');
insert into Supplier values ('Supplier2','SupplierAddress2','123456789');
insert into Supplier values ('Supplier3','SupplierAddress3','123456789');
insert into Supplier values ('Supplier4','SupplierAddress4','123456789');
insert into Supplier values ('Supplier5','SupplierAddress5','123456789');


create proc getBookStock

@isbn int,
@amount int=null
as 
begin
set @amount=(select count(*) from Book where isbn=@isbn)
print @amount
end

exec getBookStock 123


insert into Book values (1000,'Book0','Author0','Lorem Ipsum Dolor',15,'image1.png','TestCategory0');
insert into Book values (1001,'Book1','Author1','Lorem Ipsum Dolor',15,'image1.png','TestCategory0');
insert into Book values (1002,'Book2','Author2','Lorem Ipsum Dolor',15,'image1.png','TestCategory0');
insert into Book values (1003,'Book3','Author3','Lorem Ipsum Dolor',15,'image1.png','TestCategory0');
insert into Book values (1004,'Book4','Author4','Lorem Ipsum Dolor',15,'image1.png','TestCategory0');
insert into Book values (1005,'Book5','Author5','Lorem Ipsum Dolor',15,'image1.png','TestCategory0');
insert into Book values (1006,'Book6','Author6','Lorem Ipsum Dolor',15,'image1.png','TestCategory0');
insert into Book values (1007,'Book7','Author7','Lorem Ipsum Dolor',15,'image1.png','TestCategory0');
insert into Book values (1008,'Book8','Author8','Lorem Ipsum Dolor',15,'image1.png','TestCategory0');

insert into Category values ('TestCategory0','Lorem Ipsum Dolor');
insert into Category values ('TestCategory1','Lorem Ipsum Dolor');
insert into Category values ('TestCategory2','Lorem Ipsum Dolor');
insert into Category values ('TestCategory3','Lorem Ipsum Dolor');
insert into Category values ('TestCategory4','Lorem Ipsum Dolor');
insert into Category values ('TestCategory5','Lorem Ipsum Dolor');
insert into Category values ('TestCategory6','Lorem Ipsum Dolor');

insert into Store values ()

INSERT INTO Store VALUES ('InfoPeja','Rr. Eliot Engel, Peja');
INSERT INTO Store VALUES ('Buton KS','Rr. Elez Berisha, Prishtina ');
INSERT INTO Store VALUES ('Point Computers','Rr. Eqrem Qabej, Prishtina');
INSERT INTO Store VALUES ('Peja Com','Rr. General Wesley Clark, Peja');
INSERT INTO Store VALUES ('BS Computers','Rr. General Wesley Clark, Peja');
INSERT INTO Store VALUES ('Betronik','Rr. Mbretresha Teute 157, Peja');
INSERT INTO Store VALUES ('Kobit','Rr. Ilaz Kodra, Prishtina');
INSERT INTO Store VALUES ('Kibernetika','Rr. Bujar Roka, Gjakova');
INSERT INTO Store VALUES ('Xito Computers','Rr. Marie Shllaku, Gjilan');
INSERT INTO Store VALUES ( 'Refresh','Rr. Ilaz Kodra, Prishtina');

INSERT INTO Adresa VALUES (1, 'Rr. Eliot Engel', 'Peja', 30000,1);
INSERT INTO Adresa VALUES (2, 'Rr. Elez Berisha', 'Prishtina', 10000,2);
INSERT INTO Adresa VALUES (3, 'Rr. Eqrem Qabej', 'Prishtina', 10000,3);
INSERT INTO Adresa VALUES (4, , 'Peja', 30000,4);
INSERT INTO Adresa VALUES (5,  'Peja', 30000,5);
INSERT INTO Adresa VALUES (6, , 'Peja', 30000,6);
INSERT INTO Adresa VALUES (7, , 'Prishtina', 10000,7);
INSERT INTO Adresa VALUES (8, , 'Gjakova', 50000,8);
INSERT INTO Adresa VALUES (9, , 'Gjilan', 60000,9);
INSERT INTO Adresa VALUES (10, , 'Prishtina', 10000,10);
(LocalDB)\Bookstore



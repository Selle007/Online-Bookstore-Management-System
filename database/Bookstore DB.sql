Create Database Bookstore
drop database Bookstore
use Bookstore

	  SET IDENTITY_INSERT Users ON
	  	  SET IDENTITY_INSERT Role ON
		  	  SET IDENTITY_INSERT [AspNetUsers] ON

create table Users(
userId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
username varchar(30) not null ,
name varchar(30) not null,
surname varchar(30) not null,
email varchar(30) null,
password varchar(200) not null,
refreshToken varchar(30) not null,
tokenCreated datetime2 not null,
tokenExpires datetime2 not null,
roleName varchar(30) not null foreign key references Role(roleName)
);
drop table Users
select * from Users

create table Role(
roleId int not null identity(1,1),
roleName varchar(30) not null primary key
);
drop table Role


create table Staff(
staffId int not null foreign key references Users(userID),
position varchar(30) not null,
job_experience int not null,
shift_start time not null,
shift_end time not null,
storeId int foreign key references Store(storeId)
);

create table Book(
bookId int NOT NULL IDENTITY(1,1)PRIMARY KEY,
isbn int not null,
bookName varchar (900) not null,
author varchar (max),
bookDescription varchar (max),
price int,
categoryName varchar(50) Foreign Key references Category(categoryName)
);
drop table Book

insert into Book values (123456,'48 Laws Of Power','Robert Greene','A self-help book offering advice on how to gain and maintain power, using lessons drawn from parables and the experiences of historical figures.',23,'Psychology');
insert into Book values (123456,'Think And Grow Rich','Napoleon Hill','Representing the distilled wisdom of distinguished men of great wealth and achievement.',13,'Finance');
insert into Book values (123456,'The Art Of War','Sun Tzu','Ancient Chinese military treatise dating from the Late Spring and Autumn Period. Containing a detailed explanation and analysis of the 5th-century Chinese military, from weapons and strategy to rank and discipline.',15,'Philosophy');
insert into Book values (123456,'No Longer Human','The poignant and fascinating story of a young man who is caught between the breakup of the traditions of a northern Japanese aristocratic family and the impact of Western ideas','Lorem',22,'Psychology');
insert into Book values (123456,'Atomic Habits','James Clear','The most comprehensive and practical guide on how to create good habits, break bad ones, and get 1 percent better every day.',20,'Psychology');
insert into Book values (123456,'Ikigai','Francesc Miralles and Hector Garcia','Ikigai reveals the secrets to their longevity and happiness: how they eat, how they move, how they work,how they foster collaboration.',14,'Psychology');
insert into Book values (123456,'Call Us What We Carry','Amanda Gorman','Formerly titled The Hill We Climb and Other Poems.It captures a shipwrecked moment in time and transforms it into a lyric of hope and healing.',15,'Psychology');
insert into Book values (123456,'Game On','Janet Evanovich','Stephanie Plum returns to hunt down a new kind of criminal operating',15,'Psychology');


create table BookImages (
imageName varchar(900) not null primary key,
imageUrl varchar(900) not null,
bookId int foreign key references Book(bookId)
)

select * from BookImages

drop table BookImages


create table Category (
categoryId int NOT NULL IDENTITY(1,1) ,
categoryName varchar(50) not null PRIMARY KEY,
categoryDescription varchar(200) not null,
);
drop table Category

insert into Category values ('Fiction','Fiction');
insert into Category values ('Romance','Romance');
insert into Category values ('Action','Action');
insert into Category values ('Childrens','Childrens');
insert into Category values ('Drama','Drama');
insert into Category values ('Fantasy','Fantasy');
insert into Category values ('Horror','Horror');
insert into Category values ('Philosophy','Philosophy');
insert into Category values ('Science','Science');
insert into Category values ('Travel','Travel');
insert into Category values ('Western','Western');
insert into Category values ('Science fiction','Science fiction');
insert into Category values ('Thriller','Thriller');
insert into Category values ('Finance','Finance');
insert into Category values ('Psychology','Psychology');

create table Store (
storeId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
storeName varchar(30) not null,
address varchar(30) not null
);

create table Stock(
stockId int not null primary key IDENTITY(1,1),
amount int not null,
bookId int not null foreign key references Book(bookId)
);
drop table Stock

create table Orders(
orderId int not null primary key IDENTITY(1,1),
bookId int not null foreign key references Book(bookId),
userId int NOT NULL FOREIGN KEY REFERENCES Users(userId) ON DELETE CASCADE
);
drop table Orders

create table Supplier(
supplierId int IDENTITY(1,1) not null primary key,
supplierName varchar(30) not null,
supplierAddress varchar(30) not null,
phone varchar(30)
);


create table Review(
reviewId int not null IDENTITY(1,1),
email varchar(max) not null,
reviewText varchar(max) not null
);

drop table Review

create table Novel(
novelId int NOT NULL IDENTITY(1,1)PRIMARY KEY,
novelName varchar (900) not null,
novelist varchar (max),
price int
);
drop table Novel

insert into Novel Values('Anna Karenina',' Leo Tolstoy',15)
insert into Novel Values('To Kill a Mockingbird','Harper Lee',25)
insert into Novel Values('The Great Gatsby','The Great Gatsby',15)
insert into Novel Values('One Hundred Years of Solitude','Gabriel García Márquez',15)
insert into Novel Values('A Passage to India','E.M. Forster',25)
insert into Novel Values('Invisible Man','Ralph Ellison',15)
insert into Novel Values('Don Quixote','Miguel de Cervantes',15)
insert into Novel Values('Beloved','Toni Morrison',25)
insert into Novel Values('Toni Morrison','Virginia Woolf',15)
insert into Novel Values('Jane Eyre','Charlotte Brontë',25)

select * from Novel

create table Blog(
blogId int NOT NULL IDENTITY(1,1)PRIMARY KEY,
blogTitle varchar (max),
blogContent varchar (max),
published varchar(max),
);
drop table Blog

create table AudioBook(
audioBookId int NOT NULL IDENTITY(1,1)PRIMARY KEY,
audioBookName varchar (max),
length varchar (max),
price int
);


drop table AudioBook

insert into AudioBook values ('48 Laws Of Power',123, 23);
insert into AudioBook values ('Think And Grow Rich',123,13);
insert into AudioBook values ('The Art Of War',123,15);
insert into AudioBook values ('No Longer Human',123,22);
insert into AudioBook values ('Atomic Habits',123,20);
insert into AudioBook values ('Ikigai',123,14);
insert into AudioBook values ('Call Us What We Carry',123,15);
insert into AudioBook values ('Game On',123,15);


create table Sale(
saleId int not null IDENTITY(1,1)PRIMARY KEY,
staffId int not null foreign key references Staff(staffId),
bookId int foreign key references Book(bookId),
saleNote varchar(max)
);

drop table Sale

create table Staff(
primary key(staffId),
staffId int not null foreign key references Users(userId),
staffPosition varchar(max),
salary int
);

drop table Staff

create table Report(
reportId int NOT NULL IDENTITY(1,1)PRIMARY KEY,
reportText varchar(max),
dateReported varchar(max),
staffId int not null foreign key references Staff(staffId),
); 

drop table Report





CREATE TABLE [AspNetRoles] (
          [Id] nvarchar(450) NOT NULL,
          [Name] nvarchar(256) NOT NULL,
          [NormalizedName] nvarchar(256) NULL,
          [ConcurrencyStamp] nvarchar(max) NULL,
          CONSTRAINT [PK_AspNetRoles] PRIMARY KEY ([Name])
      );

      CREATE TABLE [AspNetUsers] (
          [Id] nvarchar(450) NOT NULL,
          [UserName] nvarchar(256) NOT NULL,
          [NormalizedUserName] nvarchar(256) NULL,
          [Email] nvarchar(256) NULL,
          [NormalizedEmail] nvarchar(256) NULL,
          [EmailConfirmed] bit NOT NULL,
          [PasswordHash] nvarchar(max) NULL,
          [SecurityStamp] nvarchar(max) NULL,
          [ConcurrencyStamp] nvarchar(max) NULL,
          [PhoneNumber] nvarchar(max) NULL,
          [PhoneNumberConfirmed] bit NOT NULL,
          [TwoFactorEnabled] bit NOT NULL,
          [LockoutEnd] datetimeoffset NULL,
          [LockoutEnabled] bit NOT NULL,
          [AccessFailedCount] int NOT NULL,
          [Name] nvarchar(256) NOT NULL default 'User',
          CONSTRAINT [PK_AspNetUsers] PRIMARY KEY ([UserName]),
          CONSTRAINT [FK_AspNetRoles_Name] FOREIGN KEY ([Name]) REFERENCES [AspNetRoles] ([Name])  ON DELETE CASCADE
      );

	  SET IDENTITY_INSERT [AspNetUsers] ON

      CREATE TABLE [AspNetRoleClaims] (
          [Id] int NOT NULL IDENTITY,
          [Name] nvarchar(256) NOT NULL,
          [ClaimType] nvarchar(max) NULL,
          [ClaimValue] nvarchar(max) NULL,
          CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY ([Id]),
          CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_Name] FOREIGN KEY ([Name]) REFERENCES [AspNetRoles] ([Name]) ON DELETE CASCADE
      );

      CREATE TABLE [AspNetUserClaims] (
          [Id] int NOT NULL IDENTITY,
          [UserName] nvarchar(256) NOT NULL,
          [ClaimType] nvarchar(max) NULL,
          [ClaimValue] nvarchar(max) NULL,
          CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY ([Id]),
          CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserName] FOREIGN KEY ([UserName]) REFERENCES [AspNetUsers] ([UserName]) ON DELETE CASCADE
      );

      CREATE TABLE [AspNetUserLogins] (
          [LoginProvider] nvarchar(450) NOT NULL,
          [ProviderKey] nvarchar(450) NOT NULL,
          [ProviderDisplayName] nvarchar(max) NULL,
          [UserName] nvarchar(256) NOT NULL,
          CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY ([LoginProvider], [ProviderKey]),
          CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserName] FOREIGN KEY ([UserName]) REFERENCES Users (Username) ON DELETE CASCADE
      );

      CREATE TABLE [AspNetUserTokens] (
          [UserName] nvarchar(256) NOT NULL,
          [LoginProvider] nvarchar(450) NOT NULL,
          [Name] nvarchar(450) NOT NULL,
          [Value] nvarchar(max) NULL,
          CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY ([UserName], [LoginProvider], [Name]),
          CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserName] FOREIGN KEY ([UserName]) REFERENCES [AspNetUsers] ([UserName]) ON DELETE CASCADE
      );


	  drop table AspNetRoles
	  drop table AspNetUsers
	  drop table AspNetUserClaims
	  drop table AspNetUserLogins
	  drop table AspNetRoleClaims
	  drop table AspNetUserTokens

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

select * from Book

insert into Book values (1000222,'Think And Grow Rich','Author0','Lorem Ipsum Dolor',15,
'Think And Grow Rich.jpg','TestCategory2');


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

insert into Users values ('Memo','Selmin','Lekovic','Selmin@gmail.com','Memo1234',1);
insert into Users values ('Lynx','Ereza','Loshi','Ereza@gmail.com','Lynx1234',1);
insert into Users values ('Rainz','Dion','Osmani','Dion@gmail.com','Rainz1234',1);

insert into Role values ('Admin')
insert into Role values ('User')

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



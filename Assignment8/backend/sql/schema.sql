-- Dummy table --

DROP TABLE IF EXISTS user;
CREATE TABLE user(FirstName VARCHAR(255), LastName varchar(255), Age int, PhoneNumber int, Email varchar(255));

-- Your database schema goes here --
create table if not exists User (
	UserId uuid NOT NULL  
	constraint "pk-AccountUser" primary key,
	FirstName text NOT NULL,
	LastName text NOT NULL,
	LoginEmail text NOT NULL  ,
	RecoveryPhone text  ,
	PasswordHash text NOT NULL
);

create table if not exists Category(
	Name text NOT NULL,
	AssociatedFilters text NOT NULL,
	Subcategories text NOT NULL
);

create table if not exists Listing(
	UserId NOT NULL,
	CreationTime datetime NOT NULL,
	Content jsonb NOT NULL,
	Replies text NOT NULL
);


-- Dummy table --
DROP TABLE IF EXISTS dummy;
CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

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


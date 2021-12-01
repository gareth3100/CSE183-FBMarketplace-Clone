
-- Your database schema goes here --
DROP TABLE IF EXISTS AccountUser
CREATE TABLE AccountUser(
	AccountUserId uuid NOT NULL,  
	FirstName VARCHAR NOT NULL,
	LastName VARCHAR NOT NULL,
	LoginEmail VARCHAR NOT NULL,
	RecoveryPhone VARCHAR,
	PasswordHash VARCHAR NOT NULL
);

-- create table if not exists Category(
-- 	Name text NOT NULL,
-- 	AssociatedFilters text NOT NULL,
-- 	Subcategories text NOT NULL
-- );

-- create table if not exists Listing(
-- 	UserId uuid NOT NULL,
-- 	CreationTime TIMESTAMP WITH TIME ZONE NOT NULL,
-- 	Content jsonb NOT NULL,
-- 	Replies text NOT NULL
-- );

-- Dummy Data --
-- DELETE FROM user;
-- INSERT INTO user(FirstName VARCHAR(255), LastName varchar(255), Age int, PhoneNumber int, Email varchar(255)) VALUES ('Juan', 'Lee', 21, 1234567890, 'juanlee@gmail.com');
-- INSERT INTO user(FirstName VARCHAR(255), LastName varchar(255), Age int, PhoneNumber int, Email varchar(255)) VALUES ('Gareth', 'Sama', 21, 1234567890, 'garethsama@gmail.com');
-- INSERT INTO user(FirstName VARCHAR(255), LastName varchar(255), Age int, PhoneNumber int, Email varchar(255)) VALUES ('James', 'Nguyen', 23, 1234567890, 'jamesnguyen@gmail.com');
-- Populate Your Tables Here --
DELETE FROM AccountUser;
insert into AccountUser(AccountUserId,AccountId,FirstName,LastName,LoginEmail,RecoveryPhone,PasswordHash,CanLogin,LockedDateTime,ResetToken) 
values (
	'00000000-0000-0000-0000-000000000001', --@AccountUserId,
	'Test',
	'User',
	'sysadmin@gmail.com', --@LoginEmail,
	'123-123-1234', --@RecoveryPhone,
	'$2a$04$kBxYkikSRljoc9h0KQvWr.tsKf4wbcZSZwiIdhQpzhda8L7veLzQe', --@PasswordHash,
);
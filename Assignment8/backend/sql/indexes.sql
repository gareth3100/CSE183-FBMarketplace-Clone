-- Index Your Tables Here --
insert into AccountUser(AccountUserId,AccountId,FirstName,LastName,LoginEmail,RecoveryPhone,PasswordHash,CanLogin,LockedDateTime,ResetToken) 
values (
	'00000000-0000-0000-0000-000000000001', --@AccountUserId,
	'Test',
	'User',
	'sysadmin@abhs.com', --@LoginEmail,
	'123-123-1234', --@RecoveryPhone,
	'$2a$10$wvbrVP4xUn/ZLt0gIEliu.7k9VnOi2IcDoKfSQ8EY1GMRSw.17Q1O', --@PasswordHash,
);
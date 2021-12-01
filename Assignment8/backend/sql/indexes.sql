-- Index Your Tables Here --
-- CREATE INDEX AccountUser_idx ON AccountUser(AccountUserId,AccountId,FirstName,LastName,LoginEmail,RecoveryPhone,PasswordHash,CanLogin,LockedDateTime,ResetToken);

CREATE INDEX person_idx ON person(info);
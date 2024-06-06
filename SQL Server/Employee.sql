CREATE TABLE [dbo].[Employee]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[Name] VARCHAR(50) NOT NULL, 
    [Email] VARCHAR(50) NOT NULL, 
    [Cellphone] INT NOT NULL, 
    [BirthDate] DATE NULL, 
    [Rg] CHAR(9) NOT NULL, 
    [Cpf] CHAR(11) NOT NULL, 
    [Status] CHAR(1) NOT NULL, 
    [JobSector] CHAR NOT NULL, 
    [JobTitle] CHAR(5) NOT NULL, 
)

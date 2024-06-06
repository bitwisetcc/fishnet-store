CREATE TABLE [dbo].[Customer]
(
	[Id] BIGINT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [IsCompany] BIT NOT NULL, 
    [Name] VARCHAR(50) NOT NULL, 
    [Email] VARCHAR(50) NOT NULL, 
    [Cellphone] INT NULL, 
    [BirthDate] DATE NULL, 
    [Rg] CHAR(9) NOT NULL, 
    [Cpf] CHAR(11) NOT NULL, 
    [Cnpj] CHAR(14) NULL, 
    [SerialCC] BIGINT NULL, 
    [ExpirationCC] DATE NULL, 
    [BackSerialCC] INT NULL
)

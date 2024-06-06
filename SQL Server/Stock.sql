CREATE TABLE [dbo].[Stock]
(
	[Id] BIGINT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [IdSpecies] BIGINT NOT NULL, 
    [Quantity] INT NOT NULL, 
    [Provider] CHAR(10) NOT NULL,
    FOREIGN KEY(IdSpecies) REFERENCES Species(Id)
)
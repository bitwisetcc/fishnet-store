CREATE TABLE [dbo].[OrderItem]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [IdOrder] BIGINT NULL, 
    [IdFish] BIGINT NULL, 
    [Quantity] INT NOT NULL, 
    [UnitPrice] DECIMAL(6, 2) NULL,
)

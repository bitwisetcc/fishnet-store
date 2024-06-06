CREATE TABLE [dbo].[Order]
(
	[Id] BIGINT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [IdCustomer] BIGINT NOT NULL,
    [Date] DATE NOT NULL DEFAULT CURDATE(), 
    [Status] CHAR NOT NULL, 
    [PaymentMethod] CHAR NOT NULL, 
    [Total] DECIMAL(7, 2) NULL
    FOREIGN KEY (IdCustomer) REFERENCES Customer(Id)
)

CREATE TABLE [dbo].[Species]
(
	[Id] BIGINT NOT NULL PRIMARY KEY IDENTITY(1,1),
	[Name] VARCHAR(90) NOT NULL,
	[Price] DECIMAL(6,2) NOT NULL,
	[Picture] IMAGE,
	[Description] TEXT NOT NULL,
	[Ecosystem] VARCHAR(70),
	[Feeding] VARCHAR(10) NOT NULL,
	[Size] VARCHAR(8) NOT NULL,
	[TankSize] VARCHAR(8),
	[Velocity] VARCHAR(8),
	[Origin] VARCHAR(20),
	[SocialBehaviour] VARCHAR(40),
)

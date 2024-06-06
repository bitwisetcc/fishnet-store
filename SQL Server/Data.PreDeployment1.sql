/*
 Modelo de Script Pré-Implantação							
--------------------------------------------------------------------------------------
 Este arquivo contém instruções SQL que serão executadas antes do script de compilação.	
 Use a sintaxe SQLCMD para incluir um arquivo no script pré-implantação.			
 Exemplo:      :r .\myfile.sql								
 Use a sintaxe SQLCMD para referenciar uma variável no script pré-implantação.		
 Exemplo:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

INSERT INTO dbo.Species (Name, Price, Description, Ecosystem, Feeding, Size, TankSize, Velocity, Origin, SocialBehaviour) VALUES
    ("Yellow Phantom Tetra (Hyphessobrycon roseus)", 9.99, "Beautiful yellow coloration", "Temperature: 20°C - 28°C - pH: 6.6 - 7.2", "Omnivorous", "4 - 4.5 cm", "15 gallons", "3 - 12 dKH", "South America", "Peaceful"),
    ("Green Neon Tetra (Paracheirodon simulans)", 14.99, "Beautiful red and blue coloration", "Temperature: 25°C - 28°C - pH: 3.0 - 6.5", "Omnivorous", "1.5 - 2.5 cm", "10 gallons", "1 - 8 dKH", "Brazil, Colombia and Venezuela", "Peaceful"),
    ("Daisy's Blue Ricefish (Oryzias woworae)", 17.99, "Bright orange coloration and small size", "Temperature: 23°C - 27°C - pH: 6.0 - 7.5", "Omnivorous", "2.5 - 3 cm", "15 gallons", "9 - 19 dKH", "Indonesia", "Peaceful"),
    ("Full Red Albino Guppy, (Poecilia reticulata)", 13.99, "Red coloration and elegant appearance", "Temperature: 18°C - 27°C - pH: 5.5 - 8", "Omnivorous", "6.3 cm", "10 gallons", "10 - 30 dKH", "South America", "Peaceful"),
    ("iamese Algae Eater (Crossocheilus siamensis)", 3.99, "Voracious algae eater", "Temperature: 22°C - 26°C - pH: 6.5 - 7.5", "Omnivorous", "14 - 16 cm", "50 gallons", "4 - 15 dKH", "Malasia", "Peaceful, somewhat territorial between adult males");
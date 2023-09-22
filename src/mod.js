"use strict";

class Mod
{
	
	postDBLoad(container) 
	{
		// Constants
		const logger = container.resolve("WinstonLogger");
		const database = container.resolve("DatabaseServer").getTables();
		
		if (!database.templates.items["60a3c68c37ea821725773ef5"]._props.armorZone.includes("Stomach"))
			database.templates.items["60a3c68c37ea821725773ef5"]._props.armorZone.push("Stomach");
		
		if (!database.templates.items["60a3c70cde5f453f634816a3"]._props.armorZone.includes("Stomach"))
			database.templates.items["60a3c70cde5f453f634816a3"]._props.armorZone.push("Stomach");
	}
}

module.exports = { mod: new Mod() }
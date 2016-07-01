/**
	Usage: Set of aggressive filters meant to not target those present on your whitelist.
	Not going to write method descriptions as I feel like the method names in this case really do explain themselves.
 */
var attackFilters = {
    findClosestHostileCreep: function(creep) {
        return creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
			filter: function(creep)
			{
				if(Memory.whitelist.indexOf(creep.owner.username) > -1)
					return false;

				return true;
			}
		});
    },
    findClosestHostileStructure: function(creep) {
        return creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
			filter: function(creep)
			{
				if(Memory.whitelist.indexOf(creep.owner.username) > -1)
					return false;

				return true;
			}
		});
    },
    findClosestHostileSpawn: function(creep) {
        return creep.pos.findClosestByPath(FIND_HOSTILE_SPAWNS, {
			filter: function(creep)
			{
				if(Memory.whitelist.indexOf(creep.owner.username) > -1)
					return false;

				return true;
			}
		});
    }
};

module.exports = attackFilters;
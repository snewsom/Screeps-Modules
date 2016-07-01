/**
	Usage: This is meant to be used from the console but can be programmatically called from scripts;
	Whitelist manager module
 */
 var attackWhitelist = {
	 /**
		Adds person to whitelist. Make sure you spell the persons name right :D
		return: Whitelist array of Strings
		Console example: require("attack.whitelist").addToWhitelist("Otterphantom")
	 */
    addToWhitelist: function(name) {
        var whitelist = this.getWhitelist();
        if(whitelist.indexOf(name) < 0){
            whitelist.push(name);
        }
        return whitelist;
    },
	/**
		Removes person from whitelist.
		return: Whitelist array of Strings
		Console example: require("attack.whitelist").removeFromWhitelist("Otterphantom")
	 */
    removeFromWhitelist: function(name) {
        var whitelist = this.getWhitelist();
        var whitelist = Memory.whitelist;
        for(var i = whitelist.length - 1; i >= 0; i--) {
            var otherName = whitelist[i];
            if(name === otherName) {
                whitelist.splice(i, 1);
            }
		}
		return whitelist;
    },
	/**
		Get whitelist from memory. Will initialize the whitelist array if non is present. Running from console is not needed.
		return: Whitelist array of Strings
		Console example: require("attack.whitelist").getWhitelist("Otterphantom")
	 */
    getWhitelist: function() {
        if(Memory.whitelist == undefined) {
            Memory.whitelist = [];
        }
        return Memory.whitelist;
    }
};

module.exports = attackWhitelist;
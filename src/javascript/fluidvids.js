var fluidvids = require('fluidvids')();

module.exports = function(){
	fluidvids.init({
  selector: ['iframe', 'object'],
  players: ['player.vimeo.com']
});
};
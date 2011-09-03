const contextMenu = require('context-menu');
const tabs = require('tabs');

exports.main = function(options, callback) {
	contextMenu.Item({
		label: 'Upload Image to eHo.st',
		context: contextMenu.SelectorContext('img'),

		contentScript:
			'self.on("click", function(node) {' +
			'  self.postMessage(node.src);' +
			'});',

		onMessage: function(imageUrl) {
			tabs.open('http://eho.st/' + imageUrl);
		}
	});
};


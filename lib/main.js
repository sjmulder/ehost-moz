const contextMenu = require('context-menu');
const tabs = require('tabs');
const data = require('self').data;

submitToEhost = function(imageUrl) {
	tabs.open('http://eho.st/' + imageUrl);
}

exports.main = function(options, callback) {
	contextMenu.Item({
		label: 'Upload Image to eHo.st',
		context: contextMenu.SelectorContext('img'),
		onMessage: submitToEhost,
		contentScriptFile: data.url('context.js')
	});
};


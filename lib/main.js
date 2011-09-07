const contextMenu = require('context-menu');
const tabs  = require('tabs');
const widget = require('widget');
const data = require('self').data;
const hotkeys = require('hotkeys');

var submitToEhost = function(imageUrl) {
	tabs.open('http://eho.st/' + imageUrl);
};

var submitPageWide = function() {
	tabs.activeTab.attach({
		contentScriptFile: [data.url('finder.js'), data.url('widget.js')],
		onMessage: submitToEhost
	});	
};

exports.main = function(options, callback) {
	contextMenu.Item({
		label: 'Upload Image to eHo.st',
		context: contextMenu.SelectorContext('img'),
		onMessage: submitToEhost,
		contentScriptFile: data.url('imgContext.js')
	});

	contextMenu.Item({
		label: 'Upload Image to eHo.st',
		context: contextMenu.PageContext(),
		onMessage: submitToEhost,
		contentScriptFile: [data.url('finder.js'), data.url('pageContext.js')]
	});
	
	widget.Widget({
		id: 'ehost-upload',
		label: 'Upload to eHo.st',
		contentURL: data.url('widget.png'),
		onClick: submitPageWide
	});
	
	hotkeys.Hotkey({
		combo: 'control-alt-e',
		onPress: submitPageWide
	});
};


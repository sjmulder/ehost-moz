self.on('context', function(node) {
	return findImageUrl({ allowLargestImage: false });
});

self.on('click', function(node) {
	self.postMessage(findImageUrl({ allowLargestImage: false }));
});

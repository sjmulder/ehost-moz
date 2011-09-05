var imageUrl = findImageUrl();
if (imageUrl) {
	self.postMessage(imageUrl);
} else {
	alert('No images could be found on this page.');
}

function openWindow(param) {
		width = 700;
		height = 700;
	
	chrome.windows.create({
		url: "https://barbora.lt/paieska?&q="+ param,
		type: "popup",
		focused: true,
		incognito: false,
		width: parseInt(width, 10),
		height: parseInt(height, 10)
	})
}
chrome.commands.onCommand.addListener(function (command) {

	chrome.tabs.executeScript({
		code: "window.getSelection().toString();"
	}, function (selection) {
			openWindow(selection[0]);
		});
		console.log(width);
		console.log(height);

	});

chrome.contextMenus.create({
    id: "submenu",
    title: "Search Barbora for '%s'",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "submenu") {
        openWindow(info.selectionText);
    }
});
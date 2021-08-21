window.addEventListener('load', () => {
    document.getElementById("getSelectedText").addEventListener('click', () => {
        chrome.storage.sync.get({
                selectedText: ""
            },
            function (data) {
                document.getElementById("SelectedText").innerHTML = data.selectedText;
            }
        );
    });
});
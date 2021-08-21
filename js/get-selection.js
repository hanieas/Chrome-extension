const GetSelection = function (selectedText) {
    chrome.storage.sync.set({
        selectedText: selectedText
    })
}

window.addEventListener("load", function () {
    window.onmouseup = function () {
        let selectedText = window.getSelection().toString()
        if (selectedText !== ' ') {
            GetSelection(selectedText)
        }
    }
});
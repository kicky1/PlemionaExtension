chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info =>{
            chrome.tabs.insertCSS(null, {file: './style.css'})
            chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('injected'))
    });
})

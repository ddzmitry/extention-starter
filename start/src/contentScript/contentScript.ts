// This script will be running on every page of the browser as long as user allows permissions
console.log('contentScript running')

// YOu can send message from content script to background script
chrome.runtime.sendMessage('From Content Script', (res) => {
  console.log(res)
})

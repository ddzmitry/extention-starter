// This script always runnig on background and you can control here
// use storage , set variables etc
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg)
  console.log(sender)
  sendResponse('from Background script')
})

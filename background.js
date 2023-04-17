chrome.runtime.onInstalled.addListener(function() {
  // 创建主菜单
  chrome.contextMenus.create({
    id: 'sendToBaiduMap',
    title: 'Send to Baidu Map - 一键百度地图',
    contexts: ['selection']
  });

  // 创建子菜单
  chrome.contextMenus.create({
    id: 'findInBaiduMap',
    title: '在百度地图中查找',
    parentId: 'sendToBaiduMap',
    contexts: ['selection']
  });

});




chrome.contextMenus.onClicked.addListener(function(info, tab) {
  const selectedText = info.selectionText;
  const mapUrl = `https://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D${encodeURIComponent(selectedText)}`;

  switch (info.menuItemId) {
    case 'findInBaiduMap':
      chrome.tabs.create({ url: mapUrl });
      break;
  }
});


const URL_ARRAY = {
  base_html: 'https://cdn.jsdelivr.net/gh/KNz-97D9/dashboard@v1.0.2/base.html'
};

/**
 * 
 */
function loadDashboard(url = '', parentElement = document.body) {

  // 
  var nodes = fetch(url)
    .then(response => response.text())
    .then(data => {
      return new DOMParser().parseFromString(data, 'text/html');
    });
  
  // ノードを指定した親要素の先頭に挿入
  parentElement.prepend(nodes);
}

// ダッシュボードを読み込む
loadDashboard(URL_ARRAY['base_html'], document.getElementsByTagName('main')[0]);

/**
 * 
 */
function executeDashboardScripts() {

  // 
  const urlPathname = document.location.pathname;

  // 
  let targetElem = document.getElementsByTagName('main')[0];

  var addElement = document.createElement('div');
  addElement.setAttribute('id', 'aux_function');

  var addContent = document.createTextNode('Hello, world!' + urlPathname);
  addElement.appendChild(addContent);

  targetElem.insertBefore(addElement, targetElem.firstChild);
}

// 
// executeDashboardScripts();

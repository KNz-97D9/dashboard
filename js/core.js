const URL_ARRAY = {
  base_html: 'https://cdn.jsdelivr.net/gh/KNz-97D9/dashboard@v1.0.4/base.html'
};

/**
 * 
 */
function loadDashboard() {

  // base.htmlを先頭に追加
  prependHTML(URL_ARRAY['base_html'], '#dashboardWrapper');
}

/**
 * 
 */
function prependHTML(url = '', targetSelector = '') {

  // 取得したURLの指定したセレクターに一致する要素をbodyの先頭に追加
  fetch(url)
    .then(response => response.text())
    .then(data => new DOMParser().parseFromString(data, 'text/html'))
    .then(object => document.body.prepend(object.querySelector(targetSelector)));
}

// ダッシュボードを読み込む
loadDashboard();

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

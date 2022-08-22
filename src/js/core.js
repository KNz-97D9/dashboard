const URL_ARRAY = {
  dashboard_css: 'https://cdn.jsdelivr.net/gh/KNz-97D9/dashboard@v1.0.5/src/css/dashboard.css',
  base_html: 'https://cdn.jsdelivr.net/gh/KNz-97D9/dashboard@v1.0.5/base.html'
};

/**
 * 
 */
function loadDashboard() {

  // dashboard.cssをheadの最後に追加
  appendHtmlCss(URL_ARRAY['dashboard_css']);
  // base.htmlをbodyの先頭に追加
  prependHtmlBody(URL_ARRAY['base_html'], '#dashboardWrapper');
}

/**
 * 
 * @param {*} url 
 */
function appendHtmlCss(url = '') {

  var element = document.createElement('link');

  element.setAttribute('rel', 'stylesheet');
  element.setAttribute('type', 'text/css');
  element.setAttribute('href', url);

  document.head.append(element);
}

/**
 * 
 * @param {*} url 
 * @param {*} targetSelector 
 */
function prependHtmlBody(url = '', targetSelector = '') {

  // 取得したURLの指定セレクターに一致する要素をbodyの先頭に追加
  fetch(url)
    .then(response => response.text())
    .then(data => new DOMParser().parseFromString(data, 'text/html'))
    .then(object => document.body.prepend(object.querySelector(targetSelector)));
}

/**
 * 
 * @param {*} url 
 * @returns 
 */
function getJSON(url = '') {

  // 
  var object = fetch(url)
    .then(response => response.json())
    .then(data => JSON.parse(data));

  return object;
}

// ダッシュボードを読み込む
loadDashboard();

// console.log(getJSON('http://redash.office.itmedia.co.jp/api/queries/2138/results.json?api_key=HreuC5rYrdrUVicbi3qFKFnS5fovAIEo7cB2khXh'));

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

const urlPathname = document.location.pathname;
let targetElem = document.getElementsByTagName('main')[0];
var addElement = document.createElement('div');
addElement.setAttribute('id', 'aux_function');
var addContent = document.createTextNode('Hello, world!<br>' + urlPathname);
addElement.appendChild(addContent);
targetElem.insertBefore(addElement, targetElem.firstChild);

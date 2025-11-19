"use strict";

function customRender(reactElement, container) {
  // const domElement = document.createElement(reactElement.type)
  // domElement.innerHTML = reactElement.Children
  // domElement.setAttribute('href', reactElement.props.href)
  // domElement.setAttribute('target', reactElement.props.target)
  // container.appendChild(domElement)
  var domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Children;

  for (var prop in reactElement.props) {
    if (prop === "Children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

var reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  Children: 'click me to visit google'
};
var mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
//# sourceMappingURL=Customreact.dev.js.map

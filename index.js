const createElement = (type, props = {}, children = []) => {
  const container = document.createElement(type);

  for (let key in props) {
    if (typeof props[key] === 'object') {
      for (let keyDeep in props[key]) {
        container[key][keyDeep] = props[key][keyDeep]
      }
    } else {
      container[key] = props[key]
    }
  }

  if (!Array.isArray(children)) {
    children = [children]
  }

  children
    .forEach(child => {
      if (typeof child === 'string') {
        child = document.createTextNode(child)
      }

      container.appendChild(child)
    })

  return container
};

const render = (element, rootNode) => {
  rootNode.innerHTML = '';

  rootNode.appendChild(element)
};

const React = {
  createElement,
  render,
}

const app = React.createElement('div', { style: { backgroundColor: 'red' } }, [
  React.createElement('span', undefined, 'Hello world', 'sgsg'),
  React.createElement('br'),
  'This is just a text node',
  React.createElement('div', { textContent: 'Text content' }),
]);

React.render(
  app,
  document.getElementById('root'),
);
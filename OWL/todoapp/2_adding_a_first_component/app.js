const { Component, mount, xml } = owl;

// Owl Components
class Root extends Component {
  static template = xml /* xml */`<div>todo app</div>`;
}

mount(Root, document.body);
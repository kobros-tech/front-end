const { Component, loadFile, onWillStart, onMounted, mount, xml, App } = owl;


// -------------------------------------------------------------------------
// Task Component
// -------------------------------------------------------------------------
class Task extends Component {
  static template = xml /* xml */`
      <t t-slot="default"/>
      <h2>Mohamed</h2>
      <t t-slot="naming"/>
    `
  
}

// -------------------------------------------------------------------------
// Root Component
// -------------------------------------------------------------------------
class Root extends Component {
  static components = { Task };

  setup () {
    this.foo = "Foo, not bar or buz";
    this.tag = "h1";
  }
}

// -------------------------------------------------------------------------
// Setup
// -------------------------------------------------------------------------
async function setup() {
  const templates = await loadFile("template.xml");

  Root.template = xml `${templates}`;
  // mount(Root, document.body);

  const app = new App(Root);
  app.mount(document.body);
}

setup();

const { Component, loadFile, mount, xml, App } = owl;

class Root extends Component {}

async function setup() {
  const templates = await loadFile("template.xml");
  console.log(`${templates}`);

  Root.template = xml `${templates}`;
  // mount(Root, document.body);

  const app = new App(Root);
  app.mount(document.body);
}

setup();

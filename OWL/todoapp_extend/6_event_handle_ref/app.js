const { Component, loadFile, mount, xml, App } = owl;

class Root extends Component {
  handleButton1(value) {
    console.log(value);
  }

  handleButton2(ev) {
    if (ev.keyCode === 13) {
      console.log(ev);
      console.log(`Event: ${ev} \nValue: ${ev.target.value}`);
    }
  }

  handleButton3(ev, value) {
    if (ev.keyCode === 13) {
      console.log(ev, value);
      console.log(`Event: ${ev} \nValue: ${ev.target.value}`);
    }
  }
}

async function setup() {
  const templates = await loadFile("template.xml");
  console.log(`${templates}`);

  Root.template = xml `${templates}`;
  // mount(Root, document.body);

  const app = new App(Root);
  app.mount(document.body);
}

setup();

const { Component, loadFile, mount, xml, App, onWillStart,useState, utils, reactive, useEnv } = owl;

function useStore() {
  const env = useEnv();
  return useState(env.store);
}

class Root extends Component {
  setup() {
    // this.any = "__template__2";
    this.store = useStore();
    console.log("Env Object:", this.store, this.store['1_app_ref.Root']);

    this.loaded_file = useState({value: "no"});
    console.log("file:", this.loaded_file);

    onWillStart(async ()=> {
      this.loaded_file.value = await loadFile("template.xml");
      console.log("file:", this.loaded_file);
    });
  }

  static template = "1_app_ref.Root";
}

async function setup() {
  const xml_temp_1 = await loadFile("template.xml");
  temp_1 = xml `${xml_temp_1}`;

  const xml_temp_2 = await loadFile("inherit.xml");
  temp_2 = xml `${xml_temp_2}`;

  const xml_temp_3 = await loadFile("inherit2.xml");
  temp_3 = xml `${xml_temp_3}`;

  parser = new DOMParser();
  xmlDoc = parser.parseFromString(xml_temp_1, "text/xml");
  root_t_name = xmlDoc.getElementsByTagName("t")[0];
  console.log("root_t_name:", root_t_name);

  const all_templates = reactive({});
  all_templates['1_app_ref.Root'] = temp_1;
  all_templates['1_app_ref.Root_Inherited'] = temp_2;
  all_templates['1_app_ref.Root_Inherited2'] = temp_3;

  console.log(`${xml_temp_1}`);
  console.log(temp_1, typeof(temp_1));
  console.log(temp_2, typeof(temp_2));
  console.log(all_templates);

  const env = { store: all_templates };
  
  Root.template = env.store['1_app_ref.Root'];
  // Root.template = env.store['1_app_ref.Root_Inherited2'];
  mount(Root, document.body, { dev: true, env });

  const app = new App(Root);
  // app.mount(document.body);
}

setup();

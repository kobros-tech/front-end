const { Component, loadFile, onWillStart, onMounted, mount, xml, App } = owl;


// -------------------------------------------------------------------------
// Task Component
// -------------------------------------------------------------------------
class Task extends Component {
  static template = xml /* xml */`
    <div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
      <input type="checkbox" t-att-checked="props.task.isCompleted"/>
      <span><t t-esc="props.task.text"/></span>
    </div>`;
  
  // static props = ["task"];
  // static props = { task: "task" }
  static props = { 
    task: { type: Object } 
  }

  setup() {
    onMounted(() => {
      console.log("Task component is mounted!");
    });
  }
  
}

// -------------------------------------------------------------------------
// Root Component
// -------------------------------------------------------------------------
class Root extends Component {
  static template = xml /* xml */`
    <div class="task-list">
      <t t-foreach="tasks" t-as="task" t-key="task.id">
        <Task task="task"/>
      </t>
    </div>`;
  
  static components = { Task };

  tasks = [
    {
      id: 1,
      text: "buy milk",
      isCompleted: true,
    },
    {
      id: 2,
      text: "clean house",
      isCompleted: false,
    },
    {
      id: 3,
      text: "pray at Mosque",
      isCompleted: false,
    },
  ];
  
  setup() {
    onWillStart(() => { // async function should use this hook
      this.message = { data: "data here" };
      console.log("Root component is will start!");
    });
  }

}

// -------------------------------------------------------------------------
// Setup
// -------------------------------------------------------------------------
mount(Root, document.body, {dev: true});


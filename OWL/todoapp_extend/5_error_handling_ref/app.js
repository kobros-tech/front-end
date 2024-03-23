const { Component, loadFile, onWillStart, onMounted, onError, mount, xml, App, useState } = owl;


class ErrorBoundary extends Component {
  static template = xml`
    <t t-if="state.error" t-slot="fallback">An error occurred</t>
    <t t-else="" t-slot="default"/>
  `;

  setup() {
    this.state = useState({ error: false });
    onError(() => (this.state.error = true));
  }
}


// -------------------------------------------------------------------------
// Task Component
// -------------------------------------------------------------------------
class Task extends Component {
  // static template = xml /* xml */`
  //   <div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
  //     <input type="checkbox" t-att-checked="props.task.isCompleted"/>
  //     <span><t t-esc="props.task.text"/></span>
  //   </div>`;
  
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
      <ErrorBoundary>
        <Task task="task"/>
        <t t-set-slot="fallback">
          <h2>Error with component of id: <t t-esc="task.id"/></h2>
        </t>
      </ErrorBoundary>
      </t>
    </div>`;
  
  static components = { Task, ErrorBoundary };

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


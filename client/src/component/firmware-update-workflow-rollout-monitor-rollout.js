
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class FirmwareUpdateWorkflowRolloutMonitorRollout extends FormDesignerComponent {
   constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-telemetry" context="telemetry"></blaze-field-group>
      
    `;

    
      const fgtelemetry = this.shadowRoot.getElementById("fg-telemetry");
            fgtelemetry.context = "telemetry";
      fgtelemetry.model = {};
      console.log("Assigning fields for context:", "telemetry", fgtelemetry.fields);
      fgtelemetry.fields = [{"id":"metricName","name":"Metric Name","type":"text","required":false,"description":"Name of the reported metric (e.g., temperature).","label":"Metric Name"},{"id":"metricValue","name":"Metric Value","type":"number","required":false,"description":"Numeric value of the metric.","label":"Metric Value"},{"id":"timestamp","name":"Timestamp","type":"date","required":false,"description":"When the telemetry was recorded.","label":"Timestamp"}];
      fgtelemetry.data = { "telemetry": this._formData.telemetry || {} };
   
  }
populateForm() {
  
    const fgtelemetry = this.shadowRoot?.getElementById("fg-telemetry");
    if (fgtelemetry) {
      fgtelemetry.data = { "telemetry": this._formData["telemetry"] || {} };
    }
  
}

  
}

customElements.define("firmware-update-workflow-rollout-monitor-rollout", FirmwareUpdateWorkflowRolloutMonitorRollout);
export default FirmwareUpdateWorkflowRolloutMonitorRollout;

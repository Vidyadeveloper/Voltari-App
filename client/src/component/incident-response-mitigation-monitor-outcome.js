
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class IncidentResponseMitigationMonitorOutcome extends FormDesignerComponent {
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
      
        <blaze-field-group id="fg-incident" context="incident"></blaze-field-group>
      
    `;

    
      const fgtelemetry = this.shadowRoot.getElementById("fg-telemetry");
            fgtelemetry.context = "telemetry";
      fgtelemetry.model = {};
      console.log("Assigning fields for context:", "telemetry", fgtelemetry.fields);
      fgtelemetry.fields = [{"id":"metricName","name":"Metric Name","type":"text","required":false,"description":"Name of the reported metric (e.g., temperature).","label":"Metric Name"},{"id":"metricValue","name":"Metric Value","type":"number","required":false,"description":"Numeric value of the metric.","label":"Metric Value"}];
      fgtelemetry.data = { "telemetry": this._formData.telemetry || {} };
   
      const fgincident = this.shadowRoot.getElementById("fg-incident");
            fgincident.context = "incident";
      fgincident.model = {};
      console.log("Assigning fields for context:", "incident", fgincident.fields);
      fgincident.fields = [{"id":"incidentId","name":"Incident ID","type":"text","required":false,"description":"Unique identifier for the incident.","label":"Incident ID"}];
      fgincident.data = { "incident": this._formData.incident || {} };
   
  }
populateForm() {
  
    const fgtelemetry = this.shadowRoot?.getElementById("fg-telemetry");
    if (fgtelemetry) {
      fgtelemetry.data = { "telemetry": this._formData["telemetry"] || {} };
    }
  
    const fgincident = this.shadowRoot?.getElementById("fg-incident");
    if (fgincident) {
      fgincident.data = { "incident": this._formData["incident"] || {} };
    }
  
}

  
}

customElements.define("incident-response-mitigation-monitor-outcome", IncidentResponseMitigationMonitorOutcome);
export default IncidentResponseMitigationMonitorOutcome;

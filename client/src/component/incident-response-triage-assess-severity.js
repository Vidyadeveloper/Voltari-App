
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class IncidentResponseTriageAssessSeverity extends FormDesignerComponent {
   constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-incident" context="incident"></blaze-field-group>
      
    `;

    
      const fgincident = this.shadowRoot.getElementById("fg-incident");
            fgincident.context = "incident";
      fgincident.model = {};
      console.log("Assigning fields for context:", "incident", fgincident.fields);
      fgincident.fields = [{"id":"incidentId","name":"Incident ID","type":"text","required":false,"description":"Unique identifier for the incident.","label":"Incident ID"},{"id":"severity","name":"Severity","type":"text","required":false,"description":"Severity level (e.g., low, medium, high).","label":"Severity"}];
      fgincident.data = { "incident": this._formData.incident || {} };
   
  }
populateForm() {
  
    const fgincident = this.shadowRoot?.getElementById("fg-incident");
    if (fgincident) {
      fgincident.data = { "incident": this._formData["incident"] || {} };
    }
  
}

  
}

customElements.define("incident-response-triage-assess-severity", IncidentResponseTriageAssessSeverity);
export default IncidentResponseTriageAssessSeverity;

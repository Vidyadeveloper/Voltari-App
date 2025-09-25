
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class IncidentResponseClosureCloseIncident extends FormDesignerComponent {
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
      fgincident.fields = [{"id":"incidentId","name":"Incident ID","type":"text","required":false,"description":"Unique identifier for the incident.","label":"Incident ID"},{"id":"status","name":"Status","type":"text","required":false,"description":"Current incident status (e.g., open, investigating, resolved).","label":"Status"},{"id":"resolvedAt","name":"Resolved At","type":"date","required":false,"description":"Timestamp when the incident was resolved.","label":"Resolved At"}];
      fgincident.data = { "incident": this._formData.incident || {} };
   
  }
populateForm() {
  
    const fgincident = this.shadowRoot?.getElementById("fg-incident");
    if (fgincident) {
      fgincident.data = { "incident": this._formData["incident"] || {} };
    }
  
}

  
}

customElements.define("incident-response-closure-close-incident", IncidentResponseClosureCloseIncident);
export default IncidentResponseClosureCloseIncident;

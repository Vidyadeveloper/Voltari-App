
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class IncidentResponseTriagePrioritizeWork extends FormDesignerComponent {
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
      
        <blaze-field-group id="fg-user" context="user"></blaze-field-group>
      
    `;

    
      const fgincident = this.shadowRoot.getElementById("fg-incident");
            fgincident.context = "incident";
      fgincident.model = {};
      console.log("Assigning fields for context:", "incident", fgincident.fields);
      fgincident.fields = [{"id":"incidentId","name":"Incident ID","type":"text","required":false,"description":"Unique identifier for the incident.","label":"Incident ID"}];
      fgincident.data = { "incident": this._formData.incident || {} };
   
      const fguser = this.shadowRoot.getElementById("fg-user");
            fguser.context = "user";
      fguser.model = {};
      console.log("Assigning fields for context:", "user", fguser.fields);
      fguser.fields = [{"id":"userId","name":"User ID","type":"text","required":false,"description":"Unique user identifier.","label":"User ID"}];
      fguser.data = { "user": this._formData.user || {} };
   
  }
populateForm() {
  
    const fgincident = this.shadowRoot?.getElementById("fg-incident");
    if (fgincident) {
      fgincident.data = { "incident": this._formData["incident"] || {} };
    }
  
    const fguser = this.shadowRoot?.getElementById("fg-user");
    if (fguser) {
      fguser.data = { "user": this._formData["user"] || {} };
    }
  
}

  
}

customElements.define("incident-response-triage-prioritize-work", IncidentResponseTriagePrioritizeWork);
export default IncidentResponseTriagePrioritizeWork;


import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class IncidentResponseDetectionTagAffectedDevices extends FormDesignerComponent {
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
      
        <blaze-field-group id="fg-device" context="device"></blaze-field-group>
      
    `;

    
      const fgincident = this.shadowRoot.getElementById("fg-incident");
            fgincident.context = "incident";
      fgincident.model = {};
      console.log("Assigning fields for context:", "incident", fgincident.fields);
      fgincident.fields = [{"id":"incidentId","name":"Incident ID","type":"text","required":false,"description":"Unique identifier for the incident.","label":"Incident ID"}];
      fgincident.data = { "incident": this._formData.incident || {} };
   
      const fgdevice = this.shadowRoot.getElementById("fg-device");
            fgdevice.context = "device";
      fgdevice.model = {};
      console.log("Assigning fields for context:", "device", fgdevice.fields);
      fgdevice.fields = [{"id":"deviceId","name":"Device ID","type":"text","required":false,"description":"Unique identifier for the device.","label":"Device ID"}];
      fgdevice.data = { "device": this._formData.device || {} };
   
  }
populateForm() {
  
    const fgincident = this.shadowRoot?.getElementById("fg-incident");
    if (fgincident) {
      fgincident.data = { "incident": this._formData["incident"] || {} };
    }
  
    const fgdevice = this.shadowRoot?.getElementById("fg-device");
    if (fgdevice) {
      fgdevice.data = { "device": this._formData["device"] || {} };
    }
  
}

  
}

customElements.define("incident-response-detection-tag-affected-devices", IncidentResponseDetectionTagAffectedDevices);
export default IncidentResponseDetectionTagAffectedDevices;

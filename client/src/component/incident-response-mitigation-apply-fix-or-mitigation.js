
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class IncidentResponseMitigationApplyFixOrMitigation extends FormDesignerComponent {
   constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-device" context="device"></blaze-field-group>
      
        <blaze-field-group id="fg-incident" context="incident"></blaze-field-group>
      
    `;

    
      const fgdevice = this.shadowRoot.getElementById("fg-device");
            fgdevice.context = "device";
      fgdevice.model = {};
      console.log("Assigning fields for context:", "device", fgdevice.fields);
      fgdevice.fields = [{"id":"deviceId","name":"Device ID","type":"text","required":false,"description":"Unique identifier for the device.","label":"Device ID"},{"id":"firmwareVersion","name":"Firmware Version","type":"text","required":false,"description":"Installed firmware version string.","label":"Firmware Version"}];
      fgdevice.data = { "device": this._formData.device || {} };
   
      const fgincident = this.shadowRoot.getElementById("fg-incident");
            fgincident.context = "incident";
      fgincident.model = {};
      console.log("Assigning fields for context:", "incident", fgincident.fields);
      fgincident.fields = [{"id":"incidentId","name":"Incident ID","type":"text","required":false,"description":"Unique identifier for the incident.","label":"Incident ID"}];
      fgincident.data = { "incident": this._formData.incident || {} };
   
  }
populateForm() {
  
    const fgdevice = this.shadowRoot?.getElementById("fg-device");
    if (fgdevice) {
      fgdevice.data = { "device": this._formData["device"] || {} };
    }
  
    const fgincident = this.shadowRoot?.getElementById("fg-incident");
    if (fgincident) {
      fgincident.data = { "incident": this._formData["incident"] || {} };
    }
  
}

  
}

customElements.define("incident-response-mitigation-apply-fix-or-mitigation", IncidentResponseMitigationApplyFixOrMitigation);
export default IncidentResponseMitigationApplyFixOrMitigation;


import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class DeviceHealthMonitoringInvestigationCollectDeviceContext extends FormDesignerComponent {
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
      
        <blaze-field-group id="fg-telemetry" context="telemetry"></blaze-field-group>
      
    `;

    
      const fgdevice = this.shadowRoot.getElementById("fg-device");
            fgdevice.context = "device";
      fgdevice.model = {};
      console.log("Assigning fields for context:", "device", fgdevice.fields);
      fgdevice.fields = [{"id":"deviceId","name":"Device ID","type":"text","required":false,"description":"Unique identifier for the device.","label":"Device ID"},{"id":"firmwareVersion","name":"Firmware Version","type":"text","required":false,"description":"Installed firmware version string.","label":"Firmware Version"}];
      fgdevice.data = { "device": this._formData.device || {} };
   
      const fgtelemetry = this.shadowRoot.getElementById("fg-telemetry");
            fgtelemetry.context = "telemetry";
      fgtelemetry.model = {};
      console.log("Assigning fields for context:", "telemetry", fgtelemetry.fields);
      fgtelemetry.fields = [{"id":"rawPayload","name":"Raw Payload","type":"text","required":false,"description":"Original payload received from the device.","label":"Raw Payload"}];
      fgtelemetry.data = { "telemetry": this._formData.telemetry || {} };
   
  }
populateForm() {
  
    const fgdevice = this.shadowRoot?.getElementById("fg-device");
    if (fgdevice) {
      fgdevice.data = { "device": this._formData["device"] || {} };
    }
  
    const fgtelemetry = this.shadowRoot?.getElementById("fg-telemetry");
    if (fgtelemetry) {
      fgtelemetry.data = { "telemetry": this._formData["telemetry"] || {} };
    }
  
}

  
}

customElements.define("device-health-monitoring-investigation-collect-device-context", DeviceHealthMonitoringInvestigationCollectDeviceContext);
export default DeviceHealthMonitoringInvestigationCollectDeviceContext;

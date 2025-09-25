
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class DeviceOnboardingCompletionActivateDevice extends FormDesignerComponent {
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
      
    `;

    
      const fgdevice = this.shadowRoot.getElementById("fg-device");
            fgdevice.context = "device";
      fgdevice.model = {};
      console.log("Assigning fields for context:", "device", fgdevice.fields);
      fgdevice.fields = [{"id":"deviceId","name":"Device ID","type":"text","required":false,"description":"Unique identifier for the device.","label":"Device ID"},{"id":"firmwareVersion","name":"Firmware Version","type":"text","required":false,"description":"Installed firmware version string.","label":"Firmware Version"},{"id":"status","name":"Status","type":"text","required":false,"description":"Operational state (e.g., active, offline, provisioning).","label":"Status"}];
      fgdevice.data = { "device": this._formData.device || {} };
   
  }
populateForm() {
  
    const fgdevice = this.shadowRoot?.getElementById("fg-device");
    if (fgdevice) {
      fgdevice.data = { "device": this._formData["device"] || {} };
    }
  
}

  
}

customElements.define("device-onboarding-completion-activate-device", DeviceOnboardingCompletionActivateDevice);
export default DeviceOnboardingCompletionActivateDevice;

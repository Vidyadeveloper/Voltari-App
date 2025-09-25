
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class DeviceOnboardingInitiationCollectDeviceInfo extends FormDesignerComponent {
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
      fgdevice.fields = [{"id":"deviceId","name":"Device ID","type":"text","required":false,"description":"Unique identifier for the device.","label":"Device ID"},{"id":"deviceName","name":"Device Name","type":"text","required":false,"description":"Human-friendly device name.","label":"Device Name"},{"id":"model","name":"Device Model","type":"text","required":false,"description":"Manufacturer model identifier.","label":"Device Model"},{"id":"serialNumber","name":"Serial Number","type":"text","required":false,"description":"Hardware serial number.","label":"Serial Number"}];
      fgdevice.data = { "device": this._formData.device || {} };
   
  }
populateForm() {
  
    const fgdevice = this.shadowRoot?.getElementById("fg-device");
    if (fgdevice) {
      fgdevice.data = { "device": this._formData["device"] || {} };
    }
  
}

  
}

customElements.define("device-onboarding-initiation-collect-device-info", DeviceOnboardingInitiationCollectDeviceInfo);
export default DeviceOnboardingInitiationCollectDeviceInfo;

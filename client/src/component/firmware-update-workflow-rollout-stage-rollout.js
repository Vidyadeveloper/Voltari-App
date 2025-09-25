
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class FirmwareUpdateWorkflowRolloutStageRollout extends FormDesignerComponent {
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
      
        <blaze-field-group id="fg-firmware" context="firmware"></blaze-field-group>
      
    `;

    
      const fgdevice = this.shadowRoot.getElementById("fg-device");
            fgdevice.context = "device";
      fgdevice.model = {};
      console.log("Assigning fields for context:", "device", fgdevice.fields);
      fgdevice.fields = [{"id":"deviceId","name":"Device ID","type":"text","required":false,"description":"Unique identifier for the device.","label":"Device ID"},{"id":"firmwareVersion","name":"Firmware Version","type":"text","required":false,"description":"Installed firmware version string.","label":"Firmware Version"}];
      fgdevice.data = { "device": this._formData.device || {} };
   
      const fgfirmware = this.shadowRoot.getElementById("fg-firmware");
            fgfirmware.context = "firmware";
      fgfirmware.model = {};
      console.log("Assigning fields for context:", "firmware", fgfirmware.fields);
      fgfirmware.fields = [{"id":"version","name":"Version","type":"text","required":false,"description":"Semantic version string for the firmware.","label":"Version"}];
      fgfirmware.data = { "firmware": this._formData.firmware || {} };
   
  }
populateForm() {
  
    const fgdevice = this.shadowRoot?.getElementById("fg-device");
    if (fgdevice) {
      fgdevice.data = { "device": this._formData["device"] || {} };
    }
  
    const fgfirmware = this.shadowRoot?.getElementById("fg-firmware");
    if (fgfirmware) {
      fgfirmware.data = { "firmware": this._formData["firmware"] || {} };
    }
  
}

  
}

customElements.define("firmware-update-workflow-rollout-stage-rollout", FirmwareUpdateWorkflowRolloutStageRollout);
export default FirmwareUpdateWorkflowRolloutStageRollout;

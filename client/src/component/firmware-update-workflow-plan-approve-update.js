
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class FirmwareUpdateWorkflowPlanApproveUpdate extends FormDesignerComponent {
   constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-user" context="user"></blaze-field-group>
      
        <blaze-field-group id="fg-firmware" context="firmware"></blaze-field-group>
      
    `;

    
      const fguser = this.shadowRoot.getElementById("fg-user");
            fguser.context = "user";
      fguser.model = {};
      console.log("Assigning fields for context:", "user", fguser.fields);
      fguser.fields = [{"id":"userId","name":"User ID","type":"text","required":false,"description":"Unique user identifier.","label":"User ID"},{"id":"email","name":"Email","type":"email","required":false,"description":"Contact email for notifications and verification.","label":"Email"}];
      fguser.data = { "user": this._formData.user || {} };
   
      const fgfirmware = this.shadowRoot.getElementById("fg-firmware");
            fgfirmware.context = "firmware";
      fgfirmware.model = {};
      console.log("Assigning fields for context:", "firmware", fgfirmware.fields);
      fgfirmware.fields = [{"id":"firmwareId","name":"Firmware ID","type":"text","required":false,"description":"Unique identifier for the firmware build.","label":"Firmware ID"}];
      fgfirmware.data = { "firmware": this._formData.firmware || {} };
   
  }
populateForm() {
  
    const fguser = this.shadowRoot?.getElementById("fg-user");
    if (fguser) {
      fguser.data = { "user": this._formData["user"] || {} };
    }
  
    const fgfirmware = this.shadowRoot?.getElementById("fg-firmware");
    if (fgfirmware) {
      fgfirmware.data = { "firmware": this._formData["firmware"] || {} };
    }
  
}

  
}

customElements.define("firmware-update-workflow-plan-approve-update", FirmwareUpdateWorkflowPlanApproveUpdate);
export default FirmwareUpdateWorkflowPlanApproveUpdate;

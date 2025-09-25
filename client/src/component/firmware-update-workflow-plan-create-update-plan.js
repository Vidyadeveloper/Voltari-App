
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class FirmwareUpdateWorkflowPlanCreateUpdatePlan extends FormDesignerComponent {
   constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-firmware" context="firmware"></blaze-field-group>
      
    `;

    
      const fgfirmware = this.shadowRoot.getElementById("fg-firmware");
            fgfirmware.context = "firmware";
      fgfirmware.model = {};
      console.log("Assigning fields for context:", "firmware", fgfirmware.fields);
      fgfirmware.fields = [{"id":"firmwareId","name":"Firmware ID","type":"text","required":false,"description":"Unique identifier for the firmware build.","label":"Firmware ID"},{"id":"version","name":"Version","type":"text","required":false,"description":"Semantic version string for the firmware.","label":"Version"},{"id":"releaseDate","name":"Release Date","type":"date","required":false,"description":"Date the firmware was published.","label":"Release Date"},{"id":"compatibleModels","name":"Compatible Models","type":"text","required":false,"description":"Comma-separated list of device models compatible with this firmware.","label":"Compatible Models"}];
      fgfirmware.data = { "firmware": this._formData.firmware || {} };
   
  }
populateForm() {
  
    const fgfirmware = this.shadowRoot?.getElementById("fg-firmware");
    if (fgfirmware) {
      fgfirmware.data = { "firmware": this._formData["firmware"] || {} };
    }
  
}

  
}

customElements.define("firmware-update-workflow-plan-create-update-plan", FirmwareUpdateWorkflowPlanCreateUpdatePlan);
export default FirmwareUpdateWorkflowPlanCreateUpdatePlan;

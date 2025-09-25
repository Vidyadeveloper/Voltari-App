
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class DeviceOnboardingInitiationVerifyOwner extends FormDesignerComponent {
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
      
    `;

    
      const fguser = this.shadowRoot.getElementById("fg-user");
            fguser.context = "user";
      fguser.model = {};
      console.log("Assigning fields for context:", "user", fguser.fields);
      fguser.fields = [{"id":"userId","name":"User ID","type":"text","required":false,"description":"Unique user identifier.","label":"User ID"},{"id":"name","name":"Full Name","type":"text","required":false,"description":"User full name.","label":"Full Name"},{"id":"email","name":"Email","type":"email","required":false,"description":"Contact email for notifications and verification.","label":"Email"}];
      fguser.data = { "user": this._formData.user || {} };
   
  }
populateForm() {
  
    const fguser = this.shadowRoot?.getElementById("fg-user");
    if (fguser) {
      fguser.data = { "user": this._formData["user"] || {} };
    }
  
}

  
}

customElements.define("device-onboarding-initiation-verify-owner", DeviceOnboardingInitiationVerifyOwner);
export default DeviceOnboardingInitiationVerifyOwner;

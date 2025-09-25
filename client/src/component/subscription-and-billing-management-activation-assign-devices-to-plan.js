
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class SubscriptionAndBillingManagementActivationAssignDevicesToPlan extends FormDesignerComponent {
   constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-subscription" context="subscription"></blaze-field-group>
      
        <blaze-field-group id="fg-device" context="device"></blaze-field-group>
      
    `;

    
      const fgsubscription = this.shadowRoot.getElementById("fg-subscription");
            fgsubscription.context = "subscription";
      fgsubscription.model = {};
      console.log("Assigning fields for context:", "subscription", fgsubscription.fields);
      fgsubscription.fields = [{"id":"subscriptionId","name":"Subscription ID","type":"text","required":false,"description":"Unique identifier for the subscription.","label":"Subscription ID"},{"id":"deviceLimit","name":"Device Limit","type":"number","required":false,"description":"Number of devices allowed under the plan.","label":"Device Limit"}];
      fgsubscription.data = { "subscription": this._formData.subscription || {} };
   
      const fgdevice = this.shadowRoot.getElementById("fg-device");
            fgdevice.context = "device";
      fgdevice.model = {};
      console.log("Assigning fields for context:", "device", fgdevice.fields);
      fgdevice.fields = [{"id":"deviceId","name":"Device ID","type":"text","required":false,"description":"Unique identifier for the device.","label":"Device ID"}];
      fgdevice.data = { "device": this._formData.device || {} };
   
  }
populateForm() {
  
    const fgsubscription = this.shadowRoot?.getElementById("fg-subscription");
    if (fgsubscription) {
      fgsubscription.data = { "subscription": this._formData["subscription"] || {} };
    }
  
    const fgdevice = this.shadowRoot?.getElementById("fg-device");
    if (fgdevice) {
      fgdevice.data = { "device": this._formData["device"] || {} };
    }
  
}

  
}

customElements.define("subscription-and-billing-management-activation-assign-devices-to-plan", SubscriptionAndBillingManagementActivationAssignDevicesToPlan);
export default SubscriptionAndBillingManagementActivationAssignDevicesToPlan;

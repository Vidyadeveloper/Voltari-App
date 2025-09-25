
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class SubscriptionAndBillingManagementApprovalApprovePlanChange extends FormDesignerComponent {
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
      
    `;

    
      const fgsubscription = this.shadowRoot.getElementById("fg-subscription");
            fgsubscription.context = "subscription";
      fgsubscription.model = {};
      console.log("Assigning fields for context:", "subscription", fgsubscription.fields);
      fgsubscription.fields = [{"id":"subscriptionId","name":"Subscription ID","type":"text","required":false,"description":"Unique identifier for the subscription.","label":"Subscription ID"},{"id":"planName","name":"Plan Name","type":"text","required":false,"description":"Name of the subscribed plan.","label":"Plan Name"},{"id":"deviceLimit","name":"Device Limit","type":"number","required":false,"description":"Number of devices allowed under the plan.","label":"Device Limit"}];
      fgsubscription.data = { "subscription": this._formData.subscription || {} };
   
  }
populateForm() {
  
    const fgsubscription = this.shadowRoot?.getElementById("fg-subscription");
    if (fgsubscription) {
      fgsubscription.data = { "subscription": this._formData["subscription"] || {} };
    }
  
}

  
}

customElements.define("subscription-and-billing-management-approval-approve-plan-change", SubscriptionAndBillingManagementApprovalApprovePlanChange);
export default SubscriptionAndBillingManagementApprovalApprovePlanChange;

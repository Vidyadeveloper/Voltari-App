const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class Subscription&BillingManagementCase extends BlazeCase {
  constructor() {
    super(
      "subscription-billing-management",
      "Subscription & Billing Management",
      [
        {
          id: "Request",
          label: "Request",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "subscription-&-billing-management-request-start",
              dataModelReference: { models: [] }
            },
            {
              id: "sb.requestSubscription",
              label: "Receive Subscription Request",
              type: "manual",
              status: "pending",
              view: "subscription-&-billing-management-request-receive-subscription-request",
              dataModelReference: { models: ["subscription.subscriptionId", "subscription.userId", "subscription.planName", "subscription.startDate"] }
            },
            {
              id: "sb.collectPaymentInfo",
              label: "Collect Payment Info",
              type: "manual",
              status: "pending",
              view: "subscription-&-billing-management-request-collect-payment-info",
              dataModelReference: { models: ["user.userId", "user.email"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "subscription-&-billing-management-request-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Approval",
          label: "Approval",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "subscription-&-billing-management-approval-start",
              dataModelReference: { models: [] }
            },
            {
              id: "sb.verifyPayment",
              label: "Verify Payment",
              type: "manual",
              status: "pending",
              view: "subscription-&-billing-management-approval-verify-payment",
              dataModelReference: { models: ["subscription.subscriptionId", "subscription.status", "subscription.startDate"] }
            },
            {
              id: "sb.approvePlan",
              label: "Approve Plan Change",
              type: "manual",
              status: "pending",
              view: "subscription-&-billing-management-approval-approve-plan-change",
              dataModelReference: { models: ["subscription.subscriptionId", "subscription.planName", "subscription.deviceLimit"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "subscription-&-billing-management-approval-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Activation",
          label: "Activation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "subscription-&-billing-management-activation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "sb.assignDevices",
              label: "Assign Devices to Plan",
              type: "manual",
              status: "pending",
              view: "subscription-&-billing-management-activation-assign-devices-to-plan",
              dataModelReference: { models: ["subscription.subscriptionId", "device.deviceId", "subscription.deviceLimit"] }
            },
            {
              id: "sb.notifyUser",
              label: "Notify User of Activation",
              type: "manual",
              status: "pending",
              view: "subscription-&-billing-management-activation-notify-user-of-activation",
              dataModelReference: { models: ["user.email", "subscription.subscriptionId"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "subscription-&-billing-management-activation-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Renewal/Cancellation",
          label: "Renewal/Cancellation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "subscription-&-billing-management-renewal/cancellation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "sb.processRenewal",
              label: "Process Renewal",
              type: "manual",
              status: "pending",
              view: "subscription-&-billing-management-renewal/cancellation-process-renewal",
              dataModelReference: { models: ["subscription.subscriptionId", "subscription.endDate", "subscription.status"] }
            },
            {
              id: "sb.handleCancellation",
              label: "Handle Cancellation Request",
              type: "manual",
              status: "pending",
              view: "subscription-&-billing-management-renewal/cancellation-handle-cancellation-request",
              dataModelReference: { models: ["subscription.subscriptionId", "user.userId", "subscription.status"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "subscription-&-billing-management-renewal/cancellation-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new Subscription&BillingManagementCase();
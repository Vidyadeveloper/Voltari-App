const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class DeviceOnboardingCase extends BlazeCase {
  constructor() {
    super(
      "device-onboarding",
      "Device Onboarding",
      [
        {
          id: "Initiation",
          label: "Initiation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "device-onboarding-initiation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "onb.collectDeviceInfo",
              label: "Collect Device Info",
              type: "manual",
              status: "pending",
              view: "device-onboarding-initiation-collect-device-info",
              dataModelReference: { models: ["device.deviceId", "device.deviceName", "device.model", "device.serialNumber"] }
            },
            {
              id: "onb.verifyOwner",
              label: "Verify Owner",
              type: "manual",
              status: "pending",
              view: "device-onboarding-initiation-verify-owner",
              dataModelReference: { models: ["user.userId", "user.name", "user.email"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "device-onboarding-initiation-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Provisioning",
          label: "Provisioning",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "device-onboarding-provisioning-start",
              dataModelReference: { models: [] }
            },
            {
              id: "onb.provisionNetwork",
              label: "Configure Network & Provision",
              type: "manual",
              status: "pending",
              view: "device-onboarding-provisioning-configure-network-&-provision",
              dataModelReference: { models: ["device.deviceId", "device.status"] }
            },
            {
              id: "onb.assignPolicies",
              label: "Assign Access Policies",
              type: "manual",
              status: "pending",
              view: "device-onboarding-provisioning-assign-access-policies",
              dataModelReference: { models: ["device.deviceId", "user.role"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "device-onboarding-provisioning-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Completion",
          label: "Completion",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "device-onboarding-completion-start",
              dataModelReference: { models: [] }
            },
            {
              id: "onb.activateDevice",
              label: "Activate Device",
              type: "manual",
              status: "pending",
              view: "device-onboarding-completion-activate-device",
              dataModelReference: { models: ["device.deviceId", "device.firmwareVersion", "device.status"] }
            },
            {
              id: "onb.confirmNotification",
              label: "Notify Owner",
              type: "manual",
              status: "pending",
              view: "device-onboarding-completion-notify-owner",
              dataModelReference: { models: ["user.email", "device.deviceId"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "device-onboarding-completion-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new DeviceOnboardingCase();
const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class FirmwareUpdateWorkflowCase extends BlazeCase {
  constructor() {
    super(
      "firmware-update-workflow",
      "Firmware Update Workflow",
      [
        {
          id: "Plan",
          label: "Plan",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "firmware-update-workflow-plan-start",
              dataModelReference: { models: [] }
            },
            {
              id: "fw.createPlan",
              label: "Create Update Plan",
              type: "manual",
              status: "pending",
              view: "firmware-update-workflow-plan-create-update-plan",
              dataModelReference: { models: ["firmware.firmwareId", "firmware.version", "firmware.releaseDate", "firmware.compatibleModels"] }
            },
            {
              id: "fw.approvePlan",
              label: "Approve Update",
              type: "manual",
              status: "pending",
              view: "firmware-update-workflow-plan-approve-update",
              dataModelReference: { models: ["user.userId", "user.email", "firmware.firmwareId"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "firmware-update-workflow-plan-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Rollout",
          label: "Rollout",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "firmware-update-workflow-rollout-start",
              dataModelReference: { models: [] }
            },
            {
              id: "fw.stageRollout",
              label: "Stage Rollout",
              type: "manual",
              status: "pending",
              view: "firmware-update-workflow-rollout-stage-rollout",
              dataModelReference: { models: ["device.deviceId", "firmware.version", "device.firmwareVersion"] }
            },
            {
              id: "fw.monitorRollout",
              label: "Monitor Rollout",
              type: "manual",
              status: "pending",
              view: "firmware-update-workflow-rollout-monitor-rollout",
              dataModelReference: { models: ["telemetry.metricName", "telemetry.metricValue", "telemetry.timestamp"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "firmware-update-workflow-rollout-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Rollback/Contingency",
          label: "Rollback/Contingency",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "firmware-update-workflow-rollback/contingency-start",
              dataModelReference: { models: [] }
            },
            {
              id: "fw.initiateRollback",
              label: "Initiate Rollback",
              type: "manual",
              status: "pending",
              view: "firmware-update-workflow-rollback/contingency-initiate-rollback",
              dataModelReference: { models: ["firmware.firmwareId", "device.deviceId", "device.firmwareVersion"] }
            },
            {
              id: "fw.notifyStakeholders",
              label: "Notify Stakeholders",
              type: "manual",
              status: "pending",
              view: "firmware-update-workflow-rollback/contingency-notify-stakeholders",
              dataModelReference: { models: ["user.email", "device.deviceId"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "firmware-update-workflow-rollback/contingency-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Complete",
          label: "Complete",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "firmware-update-workflow-complete-start",
              dataModelReference: { models: [] }
            },
            {
              id: "fw.completeUpdate",
              label: "Complete Update",
              type: "manual",
              status: "pending",
              view: "firmware-update-workflow-complete-complete-update",
              dataModelReference: { models: ["device.deviceId", "device.firmwareVersion", "device.lastSeen"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "firmware-update-workflow-complete-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new FirmwareUpdateWorkflowCase();
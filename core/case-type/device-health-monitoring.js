const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class DeviceHealthMonitoringCase extends BlazeCase {
  constructor() {
    super(
      "device-health-monitoring",
      "Device Health Monitoring",
      [
        {
          id: "Monitoring",
          label: "Monitoring",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "device-health-monitoring-monitoring-start",
              dataModelReference: { models: [] }
            },
            {
              id: "mon.ingestTelemetry",
              label: "Ingest Telemetry",
              type: "manual",
              status: "pending",
              view: "device-health-monitoring-monitoring-ingest-telemetry",
              dataModelReference: { models: ["telemetry.telemetryId", "telemetry.deviceId", "telemetry.timestamp", "telemetry.metricName", "telemetry.metricValue"] }
            },
            {
              id: "mon.evaluateRules",
              label: "Evaluate Health Rules",
              type: "manual",
              status: "pending",
              view: "device-health-monitoring-monitoring-evaluate-health-rules",
              dataModelReference: { models: ["telemetry.deviceId", "telemetry.metricName", "telemetry.metricValue"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "device-health-monitoring-monitoring-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Alerting",
          label: "Alerting",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "device-health-monitoring-alerting-start",
              dataModelReference: { models: [] }
            },
            {
              id: "mon.createIncident",
              label: "Create Incident",
              type: "manual",
              status: "pending",
              view: "device-health-monitoring-alerting-create-incident",
              dataModelReference: { models: ["incident.incidentId", "incident.title", "incident.description", "incident.reportedBy", "incident.severity", "incident.createdAt"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "device-health-monitoring-alerting-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Investigation",
          label: "Investigation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "device-health-monitoring-investigation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "mon.assignInvestigation",
              label: "Assign Technician",
              type: "manual",
              status: "pending",
              view: "device-health-monitoring-investigation-assign-technician",
              dataModelReference: { models: ["incident.incidentId", "user.userId", "user.name"] }
            },
            {
              id: "mon.collectContext",
              label: "Collect Device Context",
              type: "manual",
              status: "pending",
              view: "device-health-monitoring-investigation-collect-device-context",
              dataModelReference: { models: ["device.deviceId", "device.firmwareVersion", "telemetry.rawPayload"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "device-health-monitoring-investigation-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Resolution",
          label: "Resolution",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "device-health-monitoring-resolution-start",
              dataModelReference: { models: [] }
            },
            {
              id: "mon.resolveIncident",
              label: "Resolve & Close Incident",
              type: "manual",
              status: "pending",
              view: "device-health-monitoring-resolution-resolve-&-close-incident",
              dataModelReference: { models: ["incident.incidentId", "incident.status", "incident.resolvedAt"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "device-health-monitoring-resolution-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new DeviceHealthMonitoringCase();
const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class IncidentResponseCase extends BlazeCase {
  constructor() {
    super(
      "incident-response",
      "Incident Response",
      [
        {
          id: "Detection",
          label: "Detection",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "incident-response-detection-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ir.reportIncident",
              label: "Report Incident",
              type: "manual",
              status: "pending",
              view: "incident-response-detection-report-incident",
              dataModelReference: { models: ["incident.incidentId", "incident.title", "incident.description", "incident.reportedBy", "incident.createdAt"] }
            },
            {
              id: "ir.tagAffectedDevices",
              label: "Tag Affected Devices",
              type: "manual",
              status: "pending",
              view: "incident-response-detection-tag-affected-devices",
              dataModelReference: { models: ["incident.incidentId", "device.deviceId"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "incident-response-detection-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Triage",
          label: "Triage",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "incident-response-triage-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ir.assessSeverity",
              label: "Assess Severity",
              type: "manual",
              status: "pending",
              view: "incident-response-triage-assess-severity",
              dataModelReference: { models: ["incident.incidentId", "incident.severity"] }
            },
            {
              id: "ir.prioritize",
              label: "Prioritize Work",
              type: "manual",
              status: "pending",
              view: "incident-response-triage-prioritize-work",
              dataModelReference: { models: ["incident.incidentId", "user.userId"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "incident-response-triage-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Mitigation",
          label: "Mitigation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "incident-response-mitigation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ir.applyFix",
              label: "Apply Fix or Mitigation",
              type: "manual",
              status: "pending",
              view: "incident-response-mitigation-apply-fix-or-mitigation",
              dataModelReference: { models: ["device.deviceId", "device.firmwareVersion", "incident.incidentId"] }
            },
            {
              id: "ir.monitorOutcome",
              label: "Monitor Outcome",
              type: "manual",
              status: "pending",
              view: "incident-response-mitigation-monitor-outcome",
              dataModelReference: { models: ["telemetry.metricName", "telemetry.metricValue", "incident.incidentId"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "incident-response-mitigation-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Closure",
          label: "Closure",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "incident-response-closure-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ir.closeIncident",
              label: "Close Incident",
              type: "manual",
              status: "pending",
              view: "incident-response-closure-close-incident",
              dataModelReference: { models: ["incident.incidentId", "incident.status", "incident.resolvedAt"] }
            },
            {
              id: "ir.postmortem",
              label: "Postmortem & Lessons",
              type: "manual",
              status: "pending",
              view: "incident-response-closure-postmortem-&-lessons",
              dataModelReference: { models: ["incident.incidentId", "incident.description", "user.userId"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "incident-response-closure-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new IncidentResponseCase();
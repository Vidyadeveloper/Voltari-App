// Data Model: Telemetry
module.exports = {
  "id": "Telemetry",
  "label": "Telemetry",
  "description": "Time-series metrics and raw payloads reported by devices.",
  "isEditable": true,
  "attributes": [
    {
      "id": "id",
      "type": "string",
      "label": "ID",
      "required": true,
      "unique": true,
      "indexed": true
    },
    {
      "id": "description",
      "type": "string",
      "label": "Description",
      "defaultValue": ""
    },
    {
      "id": "startDate",
      "type": "date",
      "label": "Start Date",
      "required": true
    },
    {
      "id": "endDate",
      "type": "date",
      "label": "End Date"
    },
    {
      "id": "createdBy",
      "type": "string",
      "label": "Created By",
      "accessControl": {
        "read": [
          "admin"
        ],
        "write": [
          "admin"
        ]
      }
    },
    {
      "id": "createdAt",
      "type": "datetime",
      "label": "Created At"
    },
    {
      "id": "status",
      "type": "string",
      "label": "Status",
      "defaultValue": "draft",
      "allowedValues": [
        "draft",
        "active",
        "inactive",
        "archived"
      ]
    },
    {
      "id": "version",
      "type": "number",
      "label": "Version",
      "defaultValue": 1
    },
    {
      "id": "createdAge",
      "type": "computed",
      "label": "Age (days)",
      "dependencies": [
        "createdAt"
      ]
    },
    {
      "id": "telemetry.telemetryId",
      "label": "Telemetry ID",
      "type": "text",
      "description": "Unique identifier for the telemetry record.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "telemetry.deviceId",
      "label": "Device ID",
      "type": "text",
      "description": "Identifier of the device that produced the telemetry.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "telemetry.timestamp",
      "label": "Timestamp",
      "type": "date",
      "description": "When the telemetry was recorded.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "telemetry.metricName",
      "label": "Metric Name",
      "type": "text",
      "description": "Name of the reported metric (e.g., temperature).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "telemetry.metricValue",
      "label": "Metric Value",
      "type": "number",
      "description": "Numeric value of the metric.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "telemetry.rawPayload",
      "label": "Raw Payload",
      "type": "text",
      "description": "Original payload received from the device.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};
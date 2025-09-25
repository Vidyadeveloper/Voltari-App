// Data Model: Incident
module.exports = {
  "id": "Incident",
  "label": "Incident",
  "description": "Records of alerts, faults, and support tickets for devices.",
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
      "id": "incident.incidentId",
      "label": "Incident ID",
      "type": "text",
      "description": "Unique identifier for the incident.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "incident.title",
      "label": "Title",
      "type": "text",
      "description": "Short summary of the incident.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "incident.description",
      "label": "Description",
      "type": "text",
      "description": "Detailed description and context for the incident.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "incident.reportedBy",
      "label": "Reported By",
      "type": "text",
      "description": "User ID or system component that reported the incident.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "incident.severity",
      "label": "Severity",
      "type": "text",
      "description": "Severity level (e.g., low, medium, high).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "incident.status",
      "label": "Status",
      "type": "text",
      "description": "Current incident status (e.g., open, investigating, resolved).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "incident.createdAt",
      "label": "Created At",
      "type": "date",
      "description": "Incident creation timestamp.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "incident.resolvedAt",
      "label": "Resolved At",
      "type": "date",
      "description": "Timestamp when the incident was resolved.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};
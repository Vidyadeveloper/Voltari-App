// Data Model: Subscription
module.exports = {
  "id": "Subscription",
  "label": "Subscription",
  "description": "Billing and plan details for a user or account.",
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
      "id": "subscription.subscriptionId",
      "label": "Subscription ID",
      "type": "text",
      "description": "Unique identifier for the subscription.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "subscription.userId",
      "label": "User ID",
      "type": "text",
      "description": "Owner of the subscription.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "subscription.planName",
      "label": "Plan Name",
      "type": "text",
      "description": "Name of the subscribed plan.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "subscription.startDate",
      "label": "Start Date",
      "type": "date",
      "description": "Subscription start date.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "subscription.endDate",
      "label": "End Date",
      "type": "date",
      "description": "Subscription end or renewal date.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "subscription.status",
      "label": "Status",
      "type": "text",
      "description": "Current subscription status (active, canceled, past_due).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "subscription.deviceLimit",
      "label": "Device Limit",
      "type": "number",
      "description": "Number of devices allowed under the plan.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};
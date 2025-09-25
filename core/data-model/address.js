// Data Model: address
module.exports = {
  "id": "address",
  "label": "Address",
  "description": "A reusable entity representing a postal address",
  "isEditable": false,
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
      "id": "street",
      "type": "string",
      "label": "Street",
      "required": true
    },
    {
      "id": "city",
      "type": "string",
      "label": "City",
      "required": true
    },
    {
      "id": "postalCode",
      "type": "string",
      "label": "Postal Code",
      "required": true,
      "indexed": true
    },
    {
      "id": "country",
      "type": "string",
      "label": "Country",
      "defaultValue": "Netherlands",
      "allowedValues": [
        "Netherlands",
        "US",
        "UK",
        "India"
      ]
    },
    {
      "id": "fullAddress",
      "type": "computed",
      "label": "Full Address",
      "dependencies": [
        "street",
        "city",
        "postalCode",
        "country"
      ]
    }
  ],
  "extends": "blaze-entity",
  "isProtected": true
};
// Data Model: person
module.exports = {
  "id": "person",
  "label": "Person",
  "description": "A reusable entity representing an individual",
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
      "id": "firstName",
      "type": "string",
      "label": "First Name",
      "required": true
    },
    {
      "id": "lastName",
      "type": "string",
      "label": "Last Name",
      "required": true
    },
    {
      "id": "dateOfBirth",
      "type": "date",
      "label": "Date of Birth",
      "required": true
    },
    {
      "id": "bsn",
      "type": "string",
      "label": "BSN",
      "unique": true
    },
    {
      "id": "countryCode",
      "type": "string",
      "label": "Country Code",
      "defaultValue": "+31"
    },
    {
      "id": "phoneNumber",
      "type": "string",
      "label": "Phone Number"
    },
    {
      "id": "address",
      "type": "reference",
      "label": "Address",
      "entityType": "address"
    },
    {
      "id": "fullName",
      "type": "computed",
      "label": "Full Name",
      "dependencies": [
        "firstName",
        "lastName"
      ]
    }
  ],
  "extends": "blaze-entity",
  "isProtected": true
};
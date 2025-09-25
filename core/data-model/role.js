// Data Model: role
module.exports = {
  "id": "role",
  "label": "Role",
  "description": "User role with permissions",
  "isEditable": false,
  "attributes": [
    {
      "id": "name",
      "type": "string",
      "label": "Role Name",
      "required": true,
      "unique": true
    },
    {
      "id": "description",
      "type": "string",
      "label": "Description"
    },
    {
      "id": "permissions",
      "type": "array",
      "label": "Permissions",
      "items": {
        "type": "string"
      }
    }
  ],
  "isProtected": true
};
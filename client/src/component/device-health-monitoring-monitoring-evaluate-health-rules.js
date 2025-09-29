import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";
import { t } from "./../locale/lang.js";

class DeviceHealthMonitoringMonitoringEvaluateHealthRules extends FormDesignerComponent {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    super.connectedCallback();

    // Listen for language changes
    document.addEventListener("lang-changed", () => this.updateTexts());

    // Set initial texts
    this.updateTexts();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <blaze-field-group id="fg-telemetry" context="telemetry"></blaze-field-group>
    `;

    const fgtelemetry = this.shadowRoot.getElementById("fg-telemetry");
    fgtelemetry.context = "telemetry";
    fgtelemetry.model = {};
    console.log(
      "Assigning fields for context:",
      "telemetry",
      fgtelemetry.fields
    );

    // Use translated field labels
    fgtelemetry.fields = [
      {
        id: "deviceId",
        name: t("telemetry", "deviceId", "Device ID"),
        type: "text",
        required: false,
        description: t(
          "device_health",
          "device_id_desc",
          "Identifier of the device that produced the telemetry."
        ),
        label: t("telemetry", "deviceId", "Device ID"),
      },
      {
        id: "metricName",
        name: t("telemetry", "metric_name", "Metric Name"),
        type: "text",
        required: false,
        description: t(
          "device_health",
          "metric_name_desc",
          "Name of the reported metric (e.g., temperature)."
        ),
        label: t("telemetry", "metric_name", "Metric Name"),
      },
      {
        id: "metricValue",
        name: t("telemetry", "metric_value", "Metric Value"),
        type: "number",
        required: false,
        description: t(
          "device_health",
          "metric_value_desc",
          "Numeric value of the metric."
        ),
        label: t("telemetry", "metric_value", "Metric Value"),
      },
    ];

    fgtelemetry.data = { telemetry: this._formData.telemetry || {} };
  }

  // Update texts when language changes
  updateTexts() {
    console.log(" fg-telemetry");
    const fgtelemetry = this.shadowRoot?.getElementById("fg-telemetry");
    if (fgtelemetry && fgtelemetry.fields) {
      fgtelemetry.fields = [
        {
          id: "deviceId",
          name: t("telemetry", "deviceId", "Device ID"),
          type: "text",
          required: false,
          description: t(
            "device_health",
            "device_id_desc",
            "Identifier of the device that produced the telemetry."
          ),
          label: t("telemetry", "deviceId", "Device ID"),
        },
        {
          id: "metricName",
          name: t("telemetry", "metric_name", "Metric Name"),
          type: "text",
          required: false,
          description: t(
            "device_health",
            "metric_name_desc",
            "Name of the reported metric (e.g., temperature)."
          ),
          label: t("telemetry", "metric_name", "Metric Name"),
        },
        {
          id: "metricValue",
          name: t("telemetry", "metric_value", "Metric Value"),
          type: "number",
          required: false,
          description: t(
            "device_health",
            "metric_value_desc",
            "Numeric value of the metric."
          ),
          label: t("telemetry", "metric_value", "Metric Value"),
        },
      ];
    }
  }

  populateForm() {
    const fgtelemetry = this.shadowRoot?.getElementById("fg-telemetry");
    if (fgtelemetry) {
      fgtelemetry.data = { telemetry: this._formData["telemetry"] || {} };
    }
  }
}

customElements.define(
  "device-health-monitoring-monitoring-evaluate-health-rules",
  DeviceHealthMonitoringMonitoringEvaluateHealthRules
);
export default DeviceHealthMonitoringMonitoringEvaluateHealthRules;

import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  business: "Auto Cruze",
  phone: "+91 9515285124",
  whatsapp: "https://wa.me/919515285124",
  hours: "Mon–Sat: 9:00 AM – 8:00 PM",
  gstin: "Available on request",
  partnership: "Official partnership powered by Würth",
};

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Get Auto Cruze contact information: phone, WhatsApp, business hours, and partnership details.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: contact,
  }),
});

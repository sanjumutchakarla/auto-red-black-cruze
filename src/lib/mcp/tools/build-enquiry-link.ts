import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "build_enquiry_link",
  title: "Build WhatsApp enquiry link",
  description:
    "Build a prefilled WhatsApp enquiry link to Auto Cruze for a customer. Returns a wa.me URL the customer can open to send the message.",
  inputSchema: {
    name: z.string().min(1).describe("Customer's name"),
    phone: z.string().min(1).describe("Customer's phone number"),
    service: z.string().min(1).describe("Service the customer is interested in"),
    message: z.string().optional().describe("Additional message or details"),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: ({ name, phone, service, message }) => {
    const text =
      `*New Enquiry - Auto Cruze*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Service:* ${service}\n` +
      (message ? `*Message:* ${message}\n` : "");
    const url = `https://wa.me/919515285124?text=${encodeURIComponent(text)}`;
    return {
      content: [{ type: "text", text: url }],
      structuredContent: { url },
    };
  },
});

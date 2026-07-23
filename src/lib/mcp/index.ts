import { defineMcp } from "@lovable.dev/mcp-js";

import buildEnquiryLinkTool from "./tools/build-enquiry-link";
import getContactInfoTool from "./tools/get-contact-info";
import getServicesTool from "./tools/get-services";

export default defineMcp({
  name: "auto-cruze-mcp",
  title: "Auto Cruze MCP",
  version: "0.1.0",
  instructions:
    "Tools for Auto Cruze — a car care studio offering PPF, ceramic coating, window filming, body wrapping, accessories, and detailing (official Würth partner). Use `get_services` to list services, `get_contact_info` for phone/hours, and `build_enquiry_link` to generate a prefilled WhatsApp enquiry URL.",
  tools: [getServicesTool, getContactInfoTool, buildEnquiryLinkTool],
});

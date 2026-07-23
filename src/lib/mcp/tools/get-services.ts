import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const services = [
  {
    name: "Paint Protection Film (PPF)",
    description:
      "Self-healing transparent film that protects your car's paint from scratches, stone chips, and UV damage.",
  },
  {
    name: "Ceramic Coating",
    description:
      "Long-lasting nano-ceramic coating for glossy finish, hydrophobic protection, and resistance to contaminants.",
  },
  {
    name: "Window Filming",
    description:
      "Premium window films for heat rejection, UV protection, privacy, and enhanced comfort.",
  },
  {
    name: "Car Accessories",
    description:
      "Wide range of premium car accessories to personalize and upgrade your vehicle.",
  },
  {
    name: "Body Wrapping",
    description:
      "Full or partial vinyl wraps to change your car's look with custom colors, textures, and finishes.",
  },
  {
    name: "Car Detailing",
    description:
      "Complete interior and exterior detailing services to keep your car looking brand new.",
  },
];

export default defineTool({
  name: "get_services",
  title: "Get services",
  description:
    "List all car care services offered by Auto Cruze (PPF, ceramic coating, window filming, accessories, body wrapping, detailing).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});

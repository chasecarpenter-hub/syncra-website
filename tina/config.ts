import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "master",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content/pages",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          // Hero Section
          {
            type: "string",
            name: "heroLine1",
            label: "Hero - Headline Line 1",
          },
          {
            type: "string",
            name: "heroLine2",
            label: "Hero - Headline Line 2",
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero - Subtitle",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "heroPrimaryButton",
            label: "Hero - Primary Button Text",
          },
          {
            type: "string",
            name: "heroSecondaryButton",
            label: "Hero - Secondary Button Text",
          },
          // About Section
          {
            type: "string",
            name: "aboutBadge",
            label: "About - Badge Text",
          },
          {
            type: "string",
            name: "aboutHeading1",
            label: "About - Heading Line 1",
          },
          {
            type: "string",
            name: "aboutHeading2",
            label: "About - Heading Line 2",
          },
          {
            type: "string",
            name: "aboutText",
            label: "About - Body Text",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "aboutBullet1",
            label: "About - Bullet 1",
          },
          {
            type: "string",
            name: "aboutBullet2",
            label: "About - Bullet 2",
          },
          {
            type: "string",
            name: "aboutBullet3",
            label: "About - Bullet 3",
          },
          // Case Studies Section
          {
            type: "string",
            name: "caseStudiesHeading",
            label: "Case Studies - Heading",
          },
          // Contact Section
          {
            type: "string",
            name: "contactHeading",
            label: "Contact - Heading",
          },
          {
            type: "string",
            name: "contactSubtext",
            label: "Contact - Subtext",
          },
        ],
      },
    ],
  },
});

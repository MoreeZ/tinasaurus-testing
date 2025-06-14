// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";
var config_default = defineConfig({
  branch,
  clientId: "d9b6f5be-4f96-4b35-b25a-56279ce4db33",
  // Get this from tina.io
  token: "fa3744d795a0477c3bb07f3cb97f7334b4c9b82c",
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "static/img",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "blog",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "object",
            name: "authors",
            label: "Authors",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "url",
                label: "URL"
              },
              {
                type: "string",
                name: "image_url",
                label: "Image URL"
              }
            ]
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          }
        ]
      },
      {
        name: "doc",
        label: "Documentation",
        path: "docs",
        format: "mdx",
        fields: [
          {
            type: "number",
            name: "sidebar_position",
            label: "Sidebar Position"
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};

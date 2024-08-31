import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/brifle",
    },
    {
      type: "category",
      label: "Authentication",
      collapsible: true,
      items: [
        {
          type: "doc",
          id: "api/web-api-controller-auth-controller-create",
          label: "Login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/web-api-controller-auth-controller-revoke",
          label: "Logout",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Content",
      collapsible: true,
      items: [
        {
          type: "doc",
          id: "api/web-api-controller-content-controller-get",
          label: "Get content",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/web-api-controller-content-controller-get-actions",
          label: "Get Actions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/web-api-controller-content-controller-check-receiver",
          label: "Checks receiver",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/web-api-controller-content-controller-send",
          label: "Send content",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Signatures",
      collapsible: true,
      items: [
        {
          type: "doc",
          id: "api/web-api-controller-signature-controller-export-signature",
          label: "Export signature",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/web-api-controller-signature-controller-create-signature-reference",
          label: "Create a signature reference",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

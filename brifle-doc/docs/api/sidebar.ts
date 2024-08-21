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
      items: [
        {
          type: "doc",
          id: "api/web-api-controller-content-controller-get",
          label: "Get content",
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
  ],
};

export default sidebar.apisidebar;

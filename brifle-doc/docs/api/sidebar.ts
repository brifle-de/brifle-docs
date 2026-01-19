import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/brifle",
    },
    {
      type: "category",
      label: "Accounts",
      collapsible: true,
      items: [
        {
          type: "doc",
          id: "api/web-api-controller-accounts-controller-get-basic-info",
          label: "Get Basic Info",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Address",
      collapsible: true,
      items: [
        {
          type: "doc",
          id: "api/web-api-controller-address-controller-parse-address",
          label: "Parse",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/web-api-controller-address-controller-parse-and-expand-address",
          label: "Parse and Expand",
          className: "api-method post",
        },
      ],
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
          id: "api/web-api-controller-content-controller-get-cover-letter",
          label: "Get Cover Letter Content",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/web-api-controller-content-controller-get-cover-letters-list",
          label: "List Cover Letters",
          className: "api-method get",
        },
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
          id: "api/web-api-controller-content-controller-get-delivery-certificate",
          label: "Get Delivery Certificate",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/web-api-controller-content-controller-get-delivery-status",
          label: "Get Delivery Status",
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
          id: "api/web-api-controller-content-controller-check-receiver-bulk",
          label: "Checks multiple receivers",
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
      label: "Mailbox",
      collapsible: true,
      items: [
        {
          type: "doc",
          id: "api/web-api-controller-mailbox-controller-get-my-inbox",
          label: "Get My Inbox",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/web-api-controller-mailbox-controller-get-my-outbox",
          label: "Get My Outbox",
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
    {
      type: "category",
      label: "Tenants",
      collapsible: true,
      items: [
        {
          type: "doc",
          id: "api/web-api-controller-tenant-controller-get-tenant",
          label: "Get Tenant",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/web-api-controller-tenant-controller-get-own",
          label: "Get my tenants",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Wallet",
      collapsible: true,
      items: [
        {
          type: "doc",
          id: "api/web-api-controller-wallet-controller-create-wallet-item",
          label: "Create Wallet Item",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

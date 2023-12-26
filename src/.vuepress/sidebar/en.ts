import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Document",
      icon: "fa-solid fa-book",
      prefix: "guide/",
      children: [
        {
          text: "Basic Configuration",
          prefix: "basic-config/",
          children: "structure",
        },
        {
          text: "Quick Start",
          prefix: "quick-start/",
          children: [
            {
              text: "Development Process",
              link: "process",
            },
            {
              text: "Code Generation",
              prefix: "codegen/",
              children: "structure",
            },
            {
              text: "Extra Generation",
              prefix: "extra/",
              children: "structure",
            },
            {
              text: "Core Development",
              prefix: "core/",
              children: "structure",
            },
          ],
        },
        {
          text: "Features",
          prefix: "feature/",
          children: "structure",
        },
        {
          text: "CI/CD",
          prefix: "cicd/",
          children: "structure",
        },
        {
          text: "Official Modules",
          prefix: "official-comp/",
          children: "structure",
        },
        {
          text: "Community Module",
          prefix: "community-comp/",
          children: "structure",
        },
        {
          text: "Version Upgrade",
          link: "upgrade",
        },
        {
          text: "FAQ",
          link: "FAQ",
        },
      ],
    },
  ],
});

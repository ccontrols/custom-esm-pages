const { defaultBuildConfig } = require("@component-controls/core");

module.exports = {
  stories: ["../src/**/*.stories.@(tsx|jsx|js)"],
  siteUrl: `https://component-controls-gatsby.netlify.app`,
  pages: {
    story: {
      ...defaultBuildConfig.pages.story,
      tabs: {
        canvas: [
          "@component-controls/pages/CanvasPage",
          { title: "Render", container: null, variant: "" },
        ],
        component: "@component-controls/pages/ComponentPage",
        story: "@component-controls/pages/CurrentStoryPage",
        stories: "@component-controls/pages/StoriesPage",
        page: "@component-controls/pages/ClassicPage",
        test: "@component-controls/pages/TestingPage",
        ally: "@component-controls/axe-plugin/AllyPage",
        viewport: "@component-controls/viewport-plugin/ViewportPage",
      },
    },
  },
};

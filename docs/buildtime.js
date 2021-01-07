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
        design: "@component-controls/pages/DesignPage",
        ally: "@component-controls/axe-plugin/AllyPage",
        viewport: "@component-controls/viewport-plugin/ViewportPage",
        figma: "@component-controls/figma-embed/FigmaEmbedPage",
        notes: "@component-controls/addon-notes/NotesPage",
        images: "@component-controls/addon-images/ImagesPage",
      },
    },
  },
};

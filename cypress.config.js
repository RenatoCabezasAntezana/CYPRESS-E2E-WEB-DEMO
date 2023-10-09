const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const pg = require("pg");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "8a4jk8",
  e2e: {
    //Features path
    specPattern: "cypress/e2e/features/**/*.feature",

    //UI
    baseUrl: "https://www.saucedemo.com/",
    
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      on("task", {
        DATABASE({ dbconfig, sql }) {
          const client = new pg.Pool(dbconfig);
          return client.query(sql)
        },
      });
      return config;
    },
  },
});

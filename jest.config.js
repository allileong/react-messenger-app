module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    "\\.css$": "<rootDir>/test/client/__mocks__/CSSStub.js"
  },
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
  testEnvironment: "jsdom"
};

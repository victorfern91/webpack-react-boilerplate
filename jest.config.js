module.exports = {
  // Automatically clear mock calls and instances between every test
  // clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/'],

  moduleFileExtensions: ['js', 'jsx'],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['text', 'html'],

  // A list of paths to directories that Jest should use to search for files in
  modulePaths: ['<rootDir>/src'],

  setupFilesAfterEnv: ['<rootDir>/config/jest/jest-setup.js'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip
  // transformation
  transformIgnorePatterns: ['/node_modules/'],

  snapshotSerializers: ['enzyme-to-json/serializer']
};

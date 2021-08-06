module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/config/',
    '<rootDir>/node_modules/',
    '<rootDir>/static/',
    '<rootDir>/tests-setup/',
    '<rootDir>.*_backup.*',
  ],
  moduleNameMapper: {},
  setupFiles: ['<rootDir>/setupTests.js'],

  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/*styled.{js,jsx}',
    '!**/*/styled/*.js',
  ],
  coveragePathIgnorePatterns: [
    'node_modules/',
    'coverage/',
    '.next/',
    'client/',
    'config/',
    'constants/',
    'locales/',
    'ssl/',
    'static/',
    'tests-setup/',
    '.eslintrc.js',
    'next.config.js',
    'jest.config.js',
  ],
};

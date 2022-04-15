import '@testing-library/jest-dom';

global.fetch = jest.fn(() => Promise.resolve({
  jest: () => Promise.resolve({})
})) as jest.Mock;
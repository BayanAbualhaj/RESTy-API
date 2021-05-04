import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Results from '../components/results';

describe('Testing the result', () => {
  test('should successfully render the data', () => {
    const mockData = { test: 'hello' };
    render(<Results data={mockData} />);
  });
});
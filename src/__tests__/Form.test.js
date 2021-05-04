import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../components/form';

describe('Testing the Form', () => {
  test('the button should be rendered', async () => {
    let handleResult = jest.fn();
    let form = render(<Form handleResult={handleResult} />);
    let method = form.getByText(/GET/i);
    expect(method).toBeInTheDocument();
  });
});
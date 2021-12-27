import { render, screen } from '@testing-library/react';
import App from './App';
// 测试文件 基本不用
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

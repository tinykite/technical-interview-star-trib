import { render, screen } from '@testing-library/react';
import CategoryPage from './page';

jest.mock('next/navigation', () => ({
  useParams: () => ({ slug: 'sports' }),
}));

jest.mock('../../hardcoded-data/articles.tsx', () => ({
  articles: [
    {
      title: 'Greatest Comeback in Sports History',
      slug: 'sports-legend',
      type: ['Sports'],
      author: 'Jane Doe',
      date: '2024-04-01',
      content: 'A wild story about a legendary comeback.',
    },
    {
      title: 'Economy Update',
      slug: 'economy-update',
      type: ['Business'],
      author: 'John Smith',
      date: '2024-04-02',
      content: 'The economy has shifted again.',
    },
  ],
}));


describe('CategoryPage', () => {
  it('shows only articles that match the selected category', () => {
    render(<CategoryPage />);

    expect(screen.getByText(/greatest comeback/i)).toBeInTheDocument();
    expect(screen.queryByText(/economy update/i)).not.toBeInTheDocument();
  });

  it('shows "Page not found" for an invalid slug', () => {
    jest.resetModules();

    jest.doMock('next/navigation', () => ({
      useParams: () => ({ slug: 'invalid-category' }),
    }));

    const { default: InvalidCategoryPage } = require('./page');
    render(<InvalidCategoryPage />);
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});

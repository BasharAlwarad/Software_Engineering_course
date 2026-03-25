import {
  expect,
  it,
  describe,
  afterEach,
  beforeEach,
  vi,
  type Mock,
} from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import UserProfile from './UserProfile';

describe('User profile', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ name: 'john', email: 'j@gmail.com' }),
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows fetched user from mocked fetch', async () => {
    render(<UserProfile />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    expect(await screen.findByText('john')).toBeInTheDocument();
    expect(screen.getByText('j@gmail.com')).toBeInTheDocument();
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
  });

  it('shows an error message when fetch fails', async () => {
    (globalThis.fetch as Mock).mockResolvedValueOnce({
      ok: false,
      statusText: 'server error',
    });

    render(<UserProfile />);

    await waitFor(() => {
      expect(screen.getByText(/failed to fetch user/i)).toBeInTheDocument();
    });
  });
});

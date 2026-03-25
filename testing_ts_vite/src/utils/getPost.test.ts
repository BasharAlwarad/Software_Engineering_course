import { afterEach, describe, expect, it, vi } from 'vitest';
import { getPost } from './getPost';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('getPost', () => {
  it('returns post data when request succeeds', async () => {
    const post = { id: 1, title: 'Post 1', body: 'Body 1' };

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => post,
      })
    );

    await expect(getPost(1)).resolves.toEqual(post);
    expect(globalThis.fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
  });

  it('throws when request fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        statusText: 'Not Found',
      })
    );

    await expect(getPost(99)).rejects.toThrow('Network error: Not Found');
  });

  it('logs which post is being fetched (spy)', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ id: 2, title: 'Spy', body: 'Body' }),
      })
    );

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await getPost(2);

    expect(logSpy).toHaveBeenCalledWith('Fetching post with ID: 2');
  });
});

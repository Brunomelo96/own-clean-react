import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Index from '@/routes/page';

describe('Index page', () => {
  it('renders the welcome title', () => {
    render(<Index />);

    expect(screen.getByText('Modern.js')).toBeInTheDocument();
  });
});

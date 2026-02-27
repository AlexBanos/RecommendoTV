import { describe, expect, it } from 'vitest';
import { normalizeShow } from '@/features/shows/services/normalizeShow';

describe('normalizeShow', () => {
    it('maps API fields into the expected app model', () => {
        const source = {
            id: 101,
            name: 'Example Show',
            image: { medium: 'https://img.test/poster.jpg' },
            rating: { average: 8.3 },
            genres: ['Drama'],
            summary: '<p>Summary</p>',
            status: 'Running',
            runtime: 42,
            premiered: '2024-01-01',
            network: { name: 'HBO' },
        };

        expect(normalizeShow(source)).toEqual({
            id: 101,
            name: 'Example Show',
            image: 'https://img.test/poster.jpg',
            rating: 8.3,
            genres: ['Drama'],
            summary: '<p>Summary</p>',
            status: 'Running',
            runtime: 42,
            premiered: '2024-01-01',
            network: 'HBO',
        });
    });

    it('fills optional values with safe defaults', () => {
        const source = {
            id: 202,
            name: 'No Metadata',
            image: null,
            rating: {},
        };

        expect(normalizeShow(source)).toEqual({
            id: 202,
            name: 'No Metadata',
            image: null,
            rating: 0,
            genres: [],
            summary: '',
            status: undefined,
            runtime: undefined,
            premiered: undefined,
            network: null,
        });
    });
});

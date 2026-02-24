export function normalizeShow(show) {
    return {
        id: show.id,
        name: show.name,
        image: show.image?.medium || null,
        rating: show.rating?.average || 0,
        genres: show.genres || [],
        summary: show.summary || '',
        status: show.status,
        runtime: show.runtime,
        premiered: show.premiered,
        network: show.network?.name || null,
    };
}

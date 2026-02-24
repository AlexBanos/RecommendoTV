import { tvMazeClient } from '@/services/tvMazeClient';
import { normalizeShow } from './normalizeShow';

async function fetchAllShows() {
    const data = await tvMazeClient.request('/shows?page=0');
    return data.map(normalizeShow);
}

async function fetchShowById(id) {
    const data = await tvMazeClient.request(`/shows/${id}`);
    return normalizeShow(data);
}

async function searchShows(query) {
    const data = await tvMazeClient.request(`/search/shows?q=${query}`);
    return data.map((result) => normalizeShow(result.show));
}

export const showsService = {
    fetchAllShows,
    fetchShowById,
    searchShows
}
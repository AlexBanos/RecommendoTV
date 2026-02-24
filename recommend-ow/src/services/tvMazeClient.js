import { P } from 'vue-router/dist/index-DFCq6eJK';

const BASE_URL = 'https://api.tvmaze.com';

async function request(endpoint) {
    const response = await fetch(`${BASE_URL}{endpoint}`);

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    return response.json;
}

export const tmMazeClient = {
    request,
};
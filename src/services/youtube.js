import axios from 'axios';

const apiKey = 'AIzaSyC1iOZxglu9SuUHUx-hWg1ToY-IuxrfJHs';
const baseUrl = 'https://www.googleapis.com/youtube/v3';

export const fetchVideos = async (query) =>{
    const url = `${baseUrl}/search`;

    try{
        const response = await axios.get(url, {
            params: {
                key: apiKey,
                part: 'snippet',
                maxResults: 5,
                q: query,
                type: 'video'
            },
        });
        return response.data.items;
    }catch (error){
        console.error("Error fetching videos", error);
        return;
    }
}
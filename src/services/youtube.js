import axios from 'axios';

const apiKey = "AIzaSyDc4rHZ7zCiaFa4gkIfdvDGj1FblvVCqF0";
const baseUrl = 'https://www.googleapis.com/youtube/v3';

export const fetchVideos = async (categoryId = '') => {
    const url = `${baseUrl}/videos`;

    try {
        const response = await axios.get(url, {
            params: {
                key: apiKey,
                part: 'snippet',
                chart: 'mostPopular',
                regionCode: 'FR',
                maxResults: 50,
                videoCategoryId: categoryId,
            },
        });

        if (response.status >= 200 && response.status < 300) {
            return response.data.items;
        } else {
            console.error(`Error fetching videos. Status: ${response.status}`);
            return [];
        }
    } catch (error) {
        console.error("Error fetching videos", error);
        return [];
    }
};

export const fetchVideoCategories = async () => {
    const url = `${baseUrl}/videoCategories`;

    try {
        const response = await axios.get(url, {
            params: {
                key: apiKey,
                part: 'snippet',
                regionCode: 'FR',
            },
        });

        if (response.status >= 200 && response.status < 300) {
            return response.data.items;
        } else {
            console.error(`Error fetching video categories. Status: ${response.status}`);
            return [];
        }
    } catch (error) {
        console.error("Error fetching video categories", error);
        return [];
    }
};

export const fetchVideoDetails = async (videoId) => {
    const url = `${baseUrl}/videos`;

    try {
        const response = await axios.get(url, {
            params: {
                key: apiKey,
                part: 'snippet,statistics',
                id: videoId,
            },
        });

        if (response.status >= 200 && response.status < 300) {
            const videoDetails = response.data.items[0];
            return videoDetails;
        } else {
            console.error(`Error fetching video details. Status: ${response.status}`);
            return null;
        }
    } catch (error) {
        console.error("Error fetching video details", error);
        return null;
    }
};

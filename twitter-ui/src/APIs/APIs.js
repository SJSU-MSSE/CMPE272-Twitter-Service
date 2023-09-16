const BASE_URL = 'https://api.example.com'; // Base server url

export const createTweet = async (tweet) => {
    try {
        const response = await fetch(`${BASE_URL}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tweet),
        });
        if (!response.ok) {
            throw new Error(`Failed to create item: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating data:', error);
        throw error;
    }
};

export const deleteTweet = async (tweetId) => {
    try {
        const response = await fetch(`${BASE_URL}/items/${tweetId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Failed to delete tweet: ${response.statusText}`);
        }
        return tweetId;
    } catch (error) {
        console.error('Error deleting tweet:', error);
        throw error;
    }
};

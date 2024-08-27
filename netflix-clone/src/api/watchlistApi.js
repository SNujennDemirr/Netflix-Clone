// src/api/watchlistApi.js
import apiClient from './index';

export const getWatchlistData = async (userId) => {
  try {
    const response = await apiClient.get(`/watchlist/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching watchlist data:', error);
    throw error;
  }
};

export const updateWatchlistData = async (userId, watchlist) => {
  try {
    const response = await apiClient.put(`/watchlist/${userId}`, watchlist);
    return response.data;
  } catch (error) {
    console.error('Error updating watchlist data:', error);
    throw error;
  }
};

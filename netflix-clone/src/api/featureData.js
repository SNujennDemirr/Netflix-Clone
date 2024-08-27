// src/api/featureApi.js
import apiClient from './index';

export const getFeatureData = async () => {
  try {
    const response = await apiClient.get('/features');
    return response.data;
  } catch (error) {
    console.error('Error fetching feature data:', error);
    throw error;
  }
};

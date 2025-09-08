import { MedplumClient } from '@medplum/core';

// Configuration for Medplum client
const MEDPLUM_BASE_URL = import.meta.env.VITE_MEDPLUM_BASE_URL || 'https://api.medplum.com/';
const MEDPLUM_CLIENT_ID = import.meta.env.VITE_MEDPLUM_CLIENT_ID || '';

// Create Medplum client instance
export const medplum = new MedplumClient({
  baseUrl: MEDPLUM_BASE_URL,
  clientId: MEDPLUM_CLIENT_ID,
});

// Authentication helper
export const authenticateWithMedplum = async (email: string, password: string) => {
  try {
    const result = await medplum.startLogin({ email, password });
    return { success: true, data: result };
  } catch (error) {
    console.error('Medplum authentication error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Authentication failed' };
  }
};

// Helper to check if user is authenticated
export const isAuthenticated = () => {
  return medplum.getActiveLogin() !== undefined;
};

// Helper to get current user profile
export const getCurrentUser = async () => {
  try {
    if (!isAuthenticated()) {
      throw new Error('User not authenticated');
    }
    
    const profile = await medplum.getProfile();
    return { success: true, data: profile };
  } catch (error) {
    console.error('Error getting user profile:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Failed to get user profile' };
  }
};

// Helper to sign out
export const signOut = async () => {
  try {
    await medplum.signOut();
    return { success: true };
  } catch (error) {
    console.error('Error signing out:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Failed to sign out' };
  }
};

export default medplum;
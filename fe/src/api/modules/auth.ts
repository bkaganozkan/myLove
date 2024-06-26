import apiClient, { handleError, handleResponse } from '@/api/config';

export interface UserData {
    access_token: string,
    user_role: string
}


// Register fonksiyonu
export const register = async (username: string, password: string) => {
    try {
        const response = await apiClient.post('/register', { username, password });
        return handleResponse(response);
    } catch (error) {
        handleError(error);

    }
};

// Login fonksiyonu
export const login = async (username: string, password: string) => {
    try {
        const response : UserData = await apiClient.post('/login', { username, password });
        return handleResponse(response);
    } catch (error) {
        handleError(error);
        
    }
};

// Logout fonksiyonu
export const logout = async () => {
    try {
        const response = await apiClient.post('/logout');
        return handleResponse(response);
    } catch (error) {
        handleError(error);
        localStorage.removeItem('authToken');
    }
};
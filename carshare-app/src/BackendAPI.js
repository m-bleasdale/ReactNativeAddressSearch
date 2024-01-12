import axios from 'axios';

class BackendAPI {
    constructor(baseURL){
        this.baseURL = baseURL;
    }

    async get(endpoint, params = {}){
        try {
            const response = await axios.get(`${this.baseURL}${endpoint}`, { params })
            return response;
            
        } catch (error) {
            console.error('Error making API request:', error);
            throw error;
        }
    }
}

const backendAPI = new BackendAPI('http://192.168.1.37:3001');

export default backendAPI;
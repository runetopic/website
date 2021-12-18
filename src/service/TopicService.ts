import ApiService from './ApiService';

const apiService = new ApiService('https://api.runetopic.com/api');

export interface CreateTopicRequest {
    title: string;
    description: string;
    markdown: string;
    private: boolean;
}

export const postTopicRequest = (data: CreateTopicRequest) => apiService.postRequest('/topics', JSON.stringify(data));

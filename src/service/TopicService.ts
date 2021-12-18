import ApiService from './ApiService';

const apiService = new ApiService('http://localhost:8081/api');

export interface TopicRequest {
    title: string;
    description: string;
    markdown: string;
    private: boolean;
}

export const postTopicRequest = (data: TopicRequest) => apiService.postRequest('/topics', JSON.stringify(data));
export const getTopicRequest = (uuid: string) => apiService.getRequest(`/topics/${uuid}`);

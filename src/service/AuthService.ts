import ApiService from './ApiService';

const authService = new ApiService('https://api.runetopic.com/api');

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
    dateOfBirth: string;
}

export const fetchLogin = (data: LoginRequest) => authService.postRequest('/login', JSON.stringify({
    username: data.username,
    password: data.password,
}));

export const fetchRegisterUser = async (data: RegisterRequest) => authService.postRequest('/register', JSON.stringify({
    username: data.username,
    password: data.password,
    email: data.email,
    dateOfBirth: data.dateOfBirth,
})).then((response) => response);

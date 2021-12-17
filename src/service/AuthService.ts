import ApiService from './ApiService';

const authService = new ApiService('http://localhost:8081/api');

interface LoginData {
    username: string;
    password: string;
}

interface RegisterData {
    username: string;
    email: string;
    password: string;
    dateOfBirth: string;
}

const login = (data: LoginData) => authService.postRequest('/login', JSON.stringify({
    username: data.username,
    password: data.password,
})).then((response) => response.json());

const registerUser = (data: RegisterData) => authService.postRequest('/register', JSON.stringify({
    username: data.username,
    password: data.password,
    email: data.email,
    dateOfBirth: data.dateOfBirth,
})).then((response) => response);

export default {
    login,
    registerUser,
};

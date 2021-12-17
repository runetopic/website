class ApiService {
    readonly apiGateway: string;

    constructor(apiGateway: string) {
        this.apiGateway = apiGateway;
    }

    private async fetchJson(
        ourEndpoint = '',
        ourMethod = '',
        ourHeaders = {},
        ourPayload = '',
    ): Promise<Record<string, any>> {
        const fetchInit = ourMethod === 'GET' || ourMethod === 'DELETE'
            ? {
                method: ourMethod,
                headers: ourHeaders,
            }
            : {
                method: ourMethod,
                body: ourPayload,
                headers: ourHeaders,
            };

        return fetch(`${this.apiGateway}${ourEndpoint}`, fetchInit);
    }

    private static mapHeaders(headerOptions = {}): Record<string, any> {
        const token = window.localStorage.getItem('accessToken');
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        if (token) {
            headers.append('Authorization', `Bearer: ${token}`);
        }

        if (Object.keys(headerOptions).length > 0) {
            const headerOptionsArray = Object.entries(headerOptions);
            headerOptionsArray.forEach((key, value) => headers.append(`${key}`, `${value}`));
        }
        return headers;
    }

    async getRequest(
        path: string,
        headerOptions = {},
    ): Promise<Record<string, any>> {
        const ourHeaders = ApiService.mapHeaders(headerOptions);
        return this.fetchJson(path, 'GET', ourHeaders);
    }

    async postRequest(
        path: string,
        body: string,
        headerOptions = {},
    ): Promise<Record<string, any>> {
        const ourHeaders = ApiService.mapHeaders(headerOptions);
        return this.fetchJson(path, 'POST', ourHeaders, body);
    }

    protected async putRequest(
        path: string,
        body: string,
        headerOptions = {},
    ): Promise<Record<string, any>> {
        const ourHeaders = ApiService.mapHeaders(headerOptions);
        return this.fetchJson(path, 'PUT', ourHeaders, body);
    }

    protected async deleteRequest(
        path: string,
        headerOptions = {},
    ): Promise<Record<string, any>> {
        const ourHeaders = ApiService.mapHeaders(headerOptions);
        return this.fetchJson(path, 'DELETE', ourHeaders);
    }
}

export default ApiService;

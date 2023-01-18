import { httpAdapter } from '../interfaces/http-adapter.interface';
export declare class AxiosAdapter implements httpAdapter {
    private axios;
    get<T>(url: string): Promise<T>;
}

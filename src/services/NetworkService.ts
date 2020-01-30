import axios from 'axios';
import { ErrorService } from './ErrorService';

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

type Request = {
  url?: string;
  baseURL?: string;
  api?: string;
  httpMethod?: string;
  payload?: object;
  params?: undefined; // TODO: 未実装
};

export class NetworkService {
  private request: Request = {};
  private timeout: number = 25 * 1000;

  constructor(request: Request) {
    this.request = {
      ...request,
      url: request.url ? request.url : `${request.baseURL || process.env.apiRoot}${request.api || '/'}`
    };
  }

  private async get() {
    try {
      const response = await axios({
        method: 'get',
        url: this.request.url,
        timeout: this.timeout
      });
      return await response.data;
    } catch (e) {
      const errorService = new ErrorService(e);
      errorService.showError();
    }
  }

  private async post() {
    try {
      const response = await axios({
        method: 'post',
        url: this.request.url,
        data: this.request.payload,
        timeout: this.timeout
      });
      return await response.data;
    } catch (e) {
      const errorService = new ErrorService(e);
      errorService.showError();
    }
  }

  public async execute() {
    switch (this.request.httpMethod) {
      case HTTPMethod.GET:
        return await this.get();
      case HTTPMethod.POST:
        return await this.post();
    }
  }
}

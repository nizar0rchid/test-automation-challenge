import { HttpClient } from '../adapters/httpClient.js';
import { Coin } from '../domain/coin.js';

export class CoinService {
  constructor() {
    this.httpClient = new HttpClient();
  }

  async getCoins() {
    const response = await this.httpClient.get('/coins');
    return response.data.data.coins.map(c => new Coin(c));
  }

  async getCoinByUuid(uuid) {
    const response = await this.httpClient.get(`/coin/${uuid}`);
    return new Coin(response.data.data.coin);
  }
}

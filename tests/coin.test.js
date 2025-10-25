import { expect } from 'chai';
import { CoinService } from '../src/usecases/coinService.js';

describe('CoinRanking API Tests - Clean Architecture', () => {
  const coinService = new CoinService();

  it('TC001 - should fetch list of coins', async () => {
    const coins = await coinService.getCoins();
    expect(coins).to.be.an('array').that.is.not.empty;
    expect(coins[0].isValid()).to.be.true;
  });

  it('TC002 - should fetch single coin by UUID', async () => {
    const coin = await coinService.getCoinByUuid('Qwsogvtv82FCd'); // Bitcoin example
    expect(coin).to.be.instanceOf(Object);
    expect(coin.isValid()).to.be.true;
  });

  it('TC003 - response time < 2s', async () => {
    const start = Date.now();
    await coinService.getCoins();
    const duration = Date.now() - start;
    expect(duration).to.be.below(2000);
  });
});

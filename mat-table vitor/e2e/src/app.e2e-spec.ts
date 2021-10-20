import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('espaço de trabalho do app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Exibir mensagem de bem vindo', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('o app esta em execucao!');
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

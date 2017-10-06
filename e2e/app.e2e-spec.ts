import { BlueHunterPage } from './app.po';

describe('blue-hunter App', () => {
  let page: BlueHunterPage;

  beforeEach(() => {
    page = new BlueHunterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

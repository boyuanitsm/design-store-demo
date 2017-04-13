import { DesignStoreDemoPage } from './app.po';

describe('design-store-demo App', () => {
  let page: DesignStoreDemoPage;

  beforeEach(() => {
    page = new DesignStoreDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

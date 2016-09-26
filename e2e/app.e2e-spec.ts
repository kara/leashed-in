import { LeashedInPage } from './app.po';

describe('leashed-in App', function() {
  let page: LeashedInPage;

  beforeEach(() => {
    page = new LeashedInPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

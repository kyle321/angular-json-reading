import { AngularJsonReadingPage } from './app.po';

describe('angular-json-reading App', () => {
  let page: AngularJsonReadingPage;

  beforeEach(() => {
    page = new AngularJsonReadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

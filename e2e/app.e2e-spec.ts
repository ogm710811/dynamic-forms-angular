import { MyDynamicComponentPage } from './app.po';

describe('my-dynamic-component App', () => {
  let page: MyDynamicComponentPage;

  beforeEach(() => {
    page = new MyDynamicComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

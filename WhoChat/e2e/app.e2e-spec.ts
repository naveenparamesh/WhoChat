import { WhoChatPage } from './app.po';

describe('who-chat App', function() {
  let page: WhoChatPage;

  beforeEach(() => {
    page = new WhoChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

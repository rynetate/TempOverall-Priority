import { OverallPriorityPage } from './app.po';

describe('overall-priority App', function() {
  let page: OverallPriorityPage;

  beforeEach(() => {
    page = new OverallPriorityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

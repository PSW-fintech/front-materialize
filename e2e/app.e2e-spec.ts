import { PswMaterializePage } from './app.po';

describe('psw-materialize App', function() {
  let page: PswMaterializePage;

  beforeEach(() => {
    page = new PswMaterializePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

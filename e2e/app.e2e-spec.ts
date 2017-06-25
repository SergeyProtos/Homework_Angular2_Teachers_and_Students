import { HomeworkAngularPage } from './app.po';

describe('homework-angular App', () => {
  let page: HomeworkAngularPage;

  beforeEach(() => {
    page = new HomeworkAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

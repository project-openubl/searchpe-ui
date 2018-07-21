import { SearchpUIModule } from './ui.module';

describe('UiModule', () => {
  let uiModule: SearchpUIModule;

  beforeEach(() => {
    uiModule = new SearchpUIModule();
  });

  it('should create an instance', () => {
    expect(uiModule).toBeTruthy();
  });
});

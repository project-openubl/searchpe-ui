import { CompanyBasicInfoModule } from './company-basic-info.module';

describe('CompanyBasicInfoModule', () => {
  let companyBasicInfoModule: CompanyBasicInfoModule;

  beforeEach(() => {
    companyBasicInfoModule = new CompanyBasicInfoModule();
  });

  it('should create an instance', () => {
    expect(companyBasicInfoModule).toBeTruthy();
  });
});

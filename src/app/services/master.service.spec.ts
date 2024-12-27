import { TestBed } from '@angular/core/testing';
import { MasterService } from './master.service';
import { ValueService } from './value.service';
import { FakeValueService } from './value-fake.service';


describe('MasterService', () => {
  let masterService: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterService]
    });
    masterService= TestBed.inject(MasterService);
  });

  it('should be created', () => {
       expect(masterService).toBeTruthy();
     });

  it('should return "my value" from the real service', () => {
    const valueService = new ValueService();
    const masterService = new MasterService(valueService);
    expect(masterService.getValue()).toBe("my value");
  });

  it ('should return "other value" from the fake object', () => {
    const fake = { getValue:  ()=>'fake from obj'};
    const masterService = new MasterService(fake as ValueService);
    expect(masterService.getValue()).toBe('fake from obj');
  });

  it ('should call to getValue from ValueService', () => {
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
    valueServiceSpy.getValue.and.returnValue('fake value');
    // const fake = { getValue:  ()=>'fake from obj'};
    const masterService = new MasterService(valueServiceSpy);
    expect(masterService.getValue()).toBe('fake value');
    expect(valueServiceSpy.getValue).toHaveBeenCalled();
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
   });

});

import { TestBed } from '@angular/core/testing';

import { WelcomeService } from './welcome.service';

describe('WelcomeService', () => {
  let service: WelcomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#greet',()=>{

    it("should return 'Hello Vamsy' given Vamsy",()=>{
      expect(service.greet("Vamsy")).toBe("Hello Vamsy");
    })
    
    it("should return 'Hello Somebody' given null",()=>{
      expect(service.greet(null)).toBe("Hello Somebody");
    })
  })
});

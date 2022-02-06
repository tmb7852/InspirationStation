import { TestBed } from '@angular/core/testing';

import { TextFileReaderAndWriterService } from './text-file-reader-and-writer.service';

describe('TextFileReaderAndWriterService', () => {
  let service: TextFileReaderAndWriterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextFileReaderAndWriterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { Info } from './info.service';

describe('Info', () => {
  let provider: Info;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Info],
    }).compile();

    provider = module.get<Info>(Info);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptionHashService {
  private readonly saltRound = 10;

  constructor() {}

  public async hash(value: string): Promise<string> {
    const encrypted = await bcrypt.hash(value, this.saltRound);
    return encrypted;
  }

  public async compare(cadidateHash, targetHash): Promise<boolean> {
    const matched = await bcrypt.compare(cadidateHash, targetHash);
    return matched;
  }
}

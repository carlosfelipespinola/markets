import { Module } from '@nestjs/common';
import { EncryptionHashService } from './encryption.hash.service';

@Module({
    providers: [EncryptionHashService],
    exports: [EncryptionHashService]
})
export class EncryptionModule {}

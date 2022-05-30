import { Module } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { FornecedorController } from './fornecedor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fornecedor, FornecedorSchema } from './entities/fornecedor.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Fornecedor.name, schema: FornecedorSchema },
    ]),
  ],
  controllers: [FornecedorController],
  providers: [FornecedorService],
})
export class FornecedorModule {}

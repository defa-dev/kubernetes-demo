import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FornecedorDocument = Fornecedor & Document;

@Schema()
export class Fornecedor {
  @Prop()
  nome: string;

  @Prop()
  cnpj: number;

  @Prop()
  cep: number;
}

export const FornecedorSchema = SchemaFactory.createForClass(Fornecedor);

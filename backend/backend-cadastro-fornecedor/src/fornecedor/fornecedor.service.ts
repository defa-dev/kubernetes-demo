import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';
import { Fornecedor, FornecedorDocument } from './entities/fornecedor.entity';

@Injectable()
export class FornecedorService {
  constructor(
    @InjectModel(Fornecedor.name)
    private fornecedorModel: Model<FornecedorDocument>,
  ) {}

  create(createFornecedorDto: CreateFornecedorDto) {
    const fornecedor = new this.fornecedorModel(createFornecedorDto);
    return fornecedor.save();
  }

  findAll() {
    return this.fornecedorModel.find();
  }

  findOne(id: string) {
    return this.fornecedorModel.findById(id);
  }

  update(id: string, updateFornecedorDto: UpdateFornecedorDto) {
    return this.fornecedorModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateFornecedorDto,
      },
      {
        new: true,
      },
    );
  }

  async remove(cnpj: string) {
    const data = await this.fornecedorModel.findOne({
      cnpj: Number(cnpj),
    });

    if (!data) return { errorMessage: 'CNPJ NOT FOUND' };
    return this.fornecedorModel
      .deleteOne({
        _id: data._id,
      })
      .exec();
  }
}

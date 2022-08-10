import { CatCurrentDto } from './dto/cats.current.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
import { CatRequestDto } from './dto/cats.request.dto';

@Injectable()
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  findAll() {
    return this.catModel.find();
  }

  async findCatByIdWithoutPassword(
    catId: string,
  ): Promise<CatCurrentDto | null> {
    const cat = await this.catModel.findById(catId).select('-password');
    return cat;
  }

  async findCatByEmail(email: string): Promise<Cat | null> {
    const cat = await this.catModel.findOne({ email });
    return cat;
  }

  async existsByEmail(email: string): Promise<any> {
    const result = await this.catModel.exists({ email });
    return result;
  }

  async create(cat: CatRequestDto): Promise<Cat> {
    return await this.catModel.create(cat);
  }

  async findByIdAndUpdateImg(email: string, fileName: string) {
    const cat = await this.catModel.findOne({ email });
    cat.imgUrl = `http://localhost:5000/media/${fileName}`;

    const newCat = await cat.save();

    return newCat.readOnlyData;
  }
}

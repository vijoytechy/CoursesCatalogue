import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course, CourseDocument } from './schemas/course.schema';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name) private readonly courseModel: Model<CourseDocument>,
  ) { }

  async create(createCourseDto: CreateCourseDto): Promise<CourseDocument> {
    const course = new this.courseModel(createCourseDto);
    return course.save();
  }

  async findAll(): Promise<CourseDocument[]> {
    return this.courseModel.find();
  }

  findOne(id: string) {
    return this.courseModel.findById(id);
  }

  async update(
    id: string,
    updateCourseDto: UpdateCourseDto,
  ): Promise<CourseDocument> {
    return this.courseModel.findByIdAndUpdate(id, updateCourseDto);
  }

  async remove(id: number) {
    return this.courseModel.findByIdAndRemove(id);
  }
}

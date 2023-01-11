import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourseDocument = Course & Document | null;

@Schema({
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Course {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    price: number;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
import mongoose from 'mongoose';
import { courseSchema } from '../course/courseModel.js';

export const semesterSchema = mongoose.Schema({
    term: {
        type: String,
        enum: ['fall', 'winter', 'spring', 'summer'],
        default: 'fall'
    },
    year: {
        type: Number,
        min: [1, 'Please enter a valid year'],
        max: [100, 'Please enter a valid year'],
        default: 1
    },
    Courses_list: [courseSchema]
})

var semesterItem = mongoose.model('semesteritem', semesterSchema);

export default semesterItem
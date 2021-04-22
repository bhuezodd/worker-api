import {model, Schema, Document } from 'mongoose'

export interface IComment extends Document{
    name: string,
    description: string
}

const CommentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
},{
    timestamps: true,
    versionKey: false
})

export default model<IComment>('User', CommentSchema);
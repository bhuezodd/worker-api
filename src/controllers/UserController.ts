import { Request, Response } from "express";
import Comment, { IComment } from "../models/User";
import Controller from "./Controller";

class UserController extends Controller {
    async index(req : Request, res : Response) {
        const user : IComment[] = await Comment.find();
        res.json(user)
    }

    async store(req : Request, res : Response) {
        const {name, description} = req.body
        const user : IComment = await Comment.create({
            name,
            description,
        })
        res.json(user)
    }
    async update(req : Request, res : Response) {
        const {id} = req.params;
        const {name, description} = req.body
        const user : IComment = await Comment.findByIdAndUpdate(id,{
            name,
            description,
        }, {
            new: true
        })
        res.json(user)
    }
    async delete(req : Request, res : Response) {
        const {id} = req.params;
        const user : IComment = await Comment.findByIdAndDelete(id);
        res.json(user)
    }
}
export default new UserController()
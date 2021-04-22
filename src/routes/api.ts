import {Application} from 'express'
import {prefix, resourcesRouter} from '../config/registerRouter'
import UserController from '../controllers/UserController';

export default class Api {
    constructor(app: Application) {
        prefix(app, '/comments', (route) => {
            resourcesRouter(route, '', UserController);
        })
    }
}
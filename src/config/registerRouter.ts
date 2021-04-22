import { Router} from 'express'
import { Application, IRouter } from 'express-serve-static-core'

import Controller from '../controllers/Controller'
const controller = new Controller();

export function prefix (app: Application, prefix :string, func: Function) {
    let router = Router()
    app.use(prefix, router)
    func(router)
}

export function resources (app: Application, prefix :string, handle: typeof controller) {
    let router = Router()
    router.get('', handle.index);
    router.post('', handle.store);
    router.put('/:id', handle.update);
    router.patch('/:id', handle.update);
    router.delete('/:id', handle.delete);
    app.use(prefix, router)
}
export function resourcesRouter (app: IRouter, prefix :string, handle: typeof controller) {
    let router = Router()
    router.get('', handle.index);
    router.post('', handle.store);
    router.put('/:id', handle.update);
    router.patch('/:id', handle.update);
    router.delete('/:id', handle.delete);
    app.use(prefix, router)
}
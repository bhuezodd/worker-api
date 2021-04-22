import { Request, Response } from 'express-serve-static-core'

class Controller {

    index(req: Request, res: Response) {
        res.send('index');
    }

    store(req: Request, res: Response) {
        res.send('store');
    }

    update(req: Request, res: Response) {
        res.send('update');
    }

    delete(req: Request, res: Response) {
        res.send('delete');
    }
}

export default Controller;
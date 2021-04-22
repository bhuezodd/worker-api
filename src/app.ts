import express from 'express'
import morgan from 'morgan'
import Api from './routes/api'
import cors from 'cors';


export class App {
    protected app: express.Application;

    constructor(PORT: string = "3000") {

        this.app = express();
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(cors());
        // Router
        new Api(this.app);
        
        this.app.listen(PORT, function(){
            console.log('The server is running in port localhost: ', PORT);
        });
    }
}
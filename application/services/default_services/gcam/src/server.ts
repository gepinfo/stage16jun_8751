import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { WinstonLogger } from './config/Winstonlogger';
import { Routes } from './routes/routes'
import mongoose = require('mongoose');
import { SCMService } from './apiservices/systemcredentialsmanager';


import { SeedService } from './seed';

const PORT = 8007;

class App {
    public app = express();
    public routerPrv: Routes = new Routes();
    public logger: WinstonLogger = new WinstonLogger();
    public DB_Url: string;
    public DB_Domain: any = process.env.MONGO_DOMAIN;
    public SCMcredits = new SCMService();

    constructor() {
        
        this.config();
        this.routerPrv.routes(this.app);
        this.DatabaseCredentials();
        
       
       }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static("public"));
        this.app.use(cors({ credentials: true, origin: true }));

    }

    private DBSetup(): void {
        console.log('Database', this.DB_Url);
        mongoose.Promise = global.Promise;
        mongoose.connect(this.DB_Url, { useNewUrlParser: true, useUnifiedTopology: true }).then( async data => {
            await this.DBSeedData();
        });
    }


    private DatabaseCredentials() {
        this.SCMcredits.SCMData( async result => {
            let db_auth = result.data.DB_AUTH_stage16jun_8751;
            let db_coll = result.data.DB_COLL_stage16jun_8751;
            this.DB_Url = db_auth+this.DB_Domain+db_coll;
            await this.DBSetup();
        });
    }





    private DBSeedData(): void {
        let seedData = new SeedService();
        seedData.create();
    }






}

new App().app.listen(PORT, () => {
    console.log('Express server listening on port  ' + PORT);
})
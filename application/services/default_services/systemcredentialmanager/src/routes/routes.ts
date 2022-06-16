import { Request, Response, NextFunction } from "express";
import { systemCredentialsManagerController } from '../controller/systemCredentialsManagerController';


export class Routes {
    private systemCredentialsManager: systemCredentialsManagerController = new systemCredentialsManagerController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
app.route('/scm/search').get(this.systemCredentialsManager.GpSearch);
app.route('/scm/update').put(this.systemCredentialsManager.GpUpdate);
app.route('/scm').get(this.systemCredentialsManager.GpGetAllValues);
app.route('/scmbyname').get(this.systemCredentialsManager.GpGetVaultByName);
app.route('/scm').delete(this.systemCredentialsManager.GpDelete);
app.route('/scm').post(this.systemCredentialsManager.GpCreate);
//DB store External vault data
app.route('/scm/external').get(this.systemCredentialsManager.GpExternalAll);
app.route('/scm/external').post(this.systemCredentialsManager.GpExternaladd);
app.route('/scm/external/:id').delete(this.systemCredentialsManager.GpExternalDelete);
app.route('/scm/external/update').put(this.systemCredentialsManager.GpExternalUpdate);
     }

}
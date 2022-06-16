import { Request, Response } from 'express';
import { systemCredentialsManagerDBDao } from '../dao/systemCredentialsManagerDBDao';
import { systemCredentialsManagerVaultDao } from '../dao/systemCredentialsManagerVaultDao';
import { CustomLogger } from '../config/Logger'
//import systemCredentialsManagerModel from '../models/systemCredentialsManager';
let systemCredentialsManagerVault = new systemCredentialsManagerVaultDao();
let systemCredentialsManagerDB = new systemCredentialsManagerDBDao();


export class systemCredentialsManagerService {

    constructor() { }
        public GpSearch(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerService.ts: GpSearch')
        const systemCredentialsManagerId = req.query.connector_name;
        /* const systemCredentialsManagerData = req.query;
        systemCredentialsManager.GpSearch(systemCredentialsManagerData, (response) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpSearch')
        callback(response);
        });*/
        systemCredentialsManagerVault.GpVaultGet(systemCredentialsManagerId, (response) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpDelete')
        callback(response);
        });
    }

    public GpUpdate(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerService.ts: GpUpdate');
        const systemCredentialsManagerId = req.query.connector_name;
        const systemCredentialsManagerData = req.body;
        /*systemCredentialsManager.GpSearch(systemCredentialsManagerData, (response) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpSearch')
        callback(response);
        }); */
        systemCredentialsManagerVault.GpVaultUpdate(systemCredentialsManagerId, systemCredentialsManagerData, (response) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpUpdate')
        callback(response);
        });
    }

    public GpGetAllValues(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerService.ts: GpGetAllValues')
        // if (systemCredentialsManagerData.type == 'db') {
        //     systemCredentialsManager.GpGetAllValues((response) => {
        //         new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpGetAllValues')
        //         callback(response);
        //     });
        // }
        // else {
        systemCredentialsManagerVault.GpVaultGetAll((response) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpGetAllValues')
        callback(response);
        });
        // }
    }
    public GpGetVaultByName(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerService.ts: GpGetVaultByName');
        let connectorName = req.query.connector_name;
        // if (systemCredentialsManagerData.type == 'db') {
        //     systemCredentialsManager.GpGetAllValues((response) => {
        //         new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpGetAllValues')
        //         callback(response);
        //     });
        // }
        // else {
        systemCredentialsManagerVault.GpVaultGetByConnectorName(connectorName, (response) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpGetVaultByName');
        callback(response);
        });
        // }
    }
    public GpDelete(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerService.ts: GpDelete')
        const systemCredentialsManagerId = req.params.userName;
        // const systemCredentialsManagerData = req.body;
        // if (systemCredentialsManagerData.type == 'db') {
        //     systemCredentialsManager.GpDelete(systemCredentialsManagerId, (response) => {
        //         new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpDelete')
        //         callback(response);
        //     });
        // }
        // else {
        systemCredentialsManagerVault.GpVaultDelete(systemCredentialsManagerId, (response) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpDelete')
        callback(response);
        });
        //}

    }
    public GpCreate(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerService.ts: GpCreate')
        const systemCredentialsManagerData: any = req.body;
        const connectorName = req.query.connector_name;
        // if (systemCredentialsManagerData.type == 'db') {
        //     systemCredentialsManager.GpCreate(systemCredentialsManagerData, (response) => {
        //         new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpCreate')
        //         callback(response);
        //     });
        // }
        // else {
        systemCredentialsManagerVault.GpVaultCreate(connectorName, systemCredentialsManagerData, (response) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpCreate')
        callback(response);
        });
    }

    public GpExternalAll(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerService.ts: GpGetAllValues')
        // if (systemCredentialsManagerData.type == 'db') {
        //     systemCredentialsManager.GpGetAllValues((response) => {
        //         new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpGetAllValues')
        //         callback(response);
        //     });
        // }
        // else {
        systemCredentialsManagerDB.GpExternalVaultAll((response) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpDelete')
        callback(response);
        });
        // }
    }

    public GpExternaladd(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerService.ts: GpCreate')
        const systemCredentialsManagerData: any = req.body;
        const connectorName = req.query.connector_name;
        // if (systemCredentialsManagerData.type == 'db') {
        //     systemCredentialsManager.GpCreate(systemCredentialsManagerData, (response) => {
        //         new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpCreate')
        //         callback(response);
        //     });
        // }
        // else {
        systemCredentialsManagerDB.GpExternalVaultadd(systemCredentialsManagerData, (response) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpCreate')
        callback(response);
        });
    }

    public GpExternalDelete(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerService.ts: GpDelete')
        const systemCredentialsManagerId = req.params.id;
        // const systemCredentialsManagerData = req.body;
        // if (systemCredentialsManagerData.type == 'db') {
        //     systemCredentialsManager.GpDelete(systemCredentialsManagerId, (response) => {
        //         new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpDelete')
        //         callback(response);
        //     });
        // }
        // else {
            systemCredentialsManagerDB.GpExternalVaultDelete(systemCredentialsManagerId, (response) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpDelete')
        callback(response);
        });
        //}

    }

    public GpExternalUpdate(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerService.ts: GpUpdate');
        const systemCredentialsManagerId = req.query.id;
        const systemCredentialsManagerData = req.body;
        /*systemCredentialsManager.GpSearch(systemCredentialsManagerData, (response) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpSearch')
        callback(response);
        }); */
        systemCredentialsManagerDB.GpExternalVaultUpdate( systemCredentialsManagerData, (response) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerService.ts: GpUpdate')
        callback(response);
        });
    }

}


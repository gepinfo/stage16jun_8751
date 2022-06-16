
import { CustomLogger } from '../config/Logger'
import * as dotenv from 'dotenv';


dotenv.config();
let vaultOptions = {
    apiVersion: 'v1',
    endpoint: process.env.VAULT_URL,
    token: process.env.VAULT_TOKEN
};

var vault = require("node-vault")(vaultOptions);
export class systemCredentialsManagerVaultDao {
vault: any;

    constructor() {
       
    }
    public GpVaultGetAll(callback) {
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerVaultDao.ts: GpReadAll')
        vault.read('kv/database/mongodb').then((data) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerVaultDao.ts: GpReadAll');
        callback(data);
        }).catch((error) => {
        callback(error);
        });
    }

    public GpVaultGetByConnectorName(connectorName, callback) {
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerVaultDao.ts: GpReadAll')
        vault.read('kv/database/' + connectorName).then((data) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerVaultDao.ts: GpReadAll');
        callback(data);
        }).catch((error) => {
        callback(error);
        });
    }

    public GpVaultCreate(connectorName, data, callback) {
        const temp = data;
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerVaultDao.ts: GpCreate')
        vault.write(`kv/database/${connectorName}`, temp).then((data) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerVaultDao.ts: GpCreate');
        callback(data);
        }).catch((error) => {
        callback(error);
        });
    }


    public GpVaultUpdate(connectorName, data, callback) {
        const temp = data;
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerVaultDao.ts: GpUpdate')
        vault.put(`kv/database/${connectorName}`, data).then((data) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerVaultDao.ts: GpUpdate');
        callback(data);
        }).catch((error) => {
        callback(error);
        });
    }

    public GpVaultGet(id, callback) {
        const temp = id;
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerVaultDao.ts: GpRead')
        vault.read(`kv/database/${temp}`, id).then((data) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerVaultDao.ts: GpRead');
        callback(data);
        }).catch((error) => {
        callback(error);
        });
    }


    public GpVaultDelete(id, callback) {
        const temp = id;
        new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerVaultDao.ts: GpDelete')
        vault.delete(`kv/database/${temp}`, id).then((data) => {
        new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerVaultDao.ts: GpDelete');
        callback(data);
        }).catch((error) => {
        callback(error);
        });
    }










}
// import mongoose = require('mongoose');
// import { Resourceschema } from './model/resource';
//  import { resource_types } from './assets/resources';
//  import { resourcetypes } from './assets/screen';
// import { Screenschema } from './model/screen';

// const resourcemodel = mongoose.model('Resource', Resourceschema);
// const screenmodel = mongoose.model('screen', Screenschema);

import * as FormData from 'form-data';
import * as fs from 'fs';
import * as fetch from 'node-fetch';
import * as path from 'path';
import { credentials } from './credentials/securecredentials'; 

export class SeedService {

    constructor() { }

    public initkvdata(vaultUrl, callback): void {
        fetch(`${vaultUrl}/v1/sys/mounts/kv`, {
            method: 'POST',
            headers: {
                'X-Vault-Token': 'vault-geppetto-2021',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: '{"type": "kv", "options": {"version": "1"}}'
        }).then(data => {
            fetch(`${vaultUrl}/v1/kv/database/mongodb`, {
                method: 'POST',
                headers: {
                    'X-Vault-Token': 'vault-geppetto-2021',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(credentials)
            });
            callback('vaultsave');
        })

    }
    
    public post(): void {
        // resourcetypes.map(something =>{
        //     console.log('enter into seed resurce name', something);
        //      screenmodel.findOneAndUpdate({resources: something['resources']},
        //       something, {new: true}, (err, data)=>{
        //               if (data === null){
        //                   console.log('recheck data post', data);
        //             let screenroute = new screenmodel(something);
        //             console.log('data a save', screenroute);
        //             screenroute.save();
        //           }
        //     })
        //  })
    }
   
 }

   
 


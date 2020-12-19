import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response) => {
            const result = (new (route.controller as any))[route.action](req, res);
            if (result instanceof Promise) {
                //result already is a reponse object. Thus, we only need to return it.
                //There is no need to do res.send(result);
                result
                    .then(result => result !== null && result !== undefined ? result : undefined)
                    .catch(error => console.log(error));

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    app.listen(3000);

    console.log("Express server has started on port 3000.");

}).catch(error => console.log(error));

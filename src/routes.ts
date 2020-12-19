import {CityController} from "./controller/CityController";
import { UserController } from "./controller/UserController";


export const Routes = [
    {
        method: "post",
        route: "/city",
        controller: CityController,
        action: "save"
    },
    {
        method: "get",
        route: "/city/:name",
        controller: CityController,
        action: "getCityByName"
    },
    {
        method: "get",
        route: "/city/state/:state",
        controller: CityController,
        action: "getCityByState"
    },
    {
        method: "post",
        route: "/user",
        controller: UserController,
        action: "save"
    },
    {
        method: "put",
        route: "/user",
        controller: UserController,
        action: "updateUserName"
    },
    {
        method: "get",
        route: "/user/:name",
        controller: UserController,
        action: "getUserByName"
    },
    {
        method: "get",
        route: "/user/id/:id",
        controller: UserController,
        action: "getUserById"
    },
    {
        method: "delete",
        route: "/user/id/:id",
        controller: UserController,
        action: "removeUserById"
    },
    
];
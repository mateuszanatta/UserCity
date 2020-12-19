import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {User} from "../entity/User";
import userViewer from "../views/user_view";

export class UserController{
    private userRepository = getRepository(User);

    async save(request: Request, response: Response){
        try{
            const {
                name,
                sex,
                birthday,
                age,
                city_id
            } = request.body;

            const data = {
                name: name, 
                sex: sex,
                birthday: birthday,
                age: age,
                city: city_id
            };
            
            const user = this.userRepository.create(data);
            
            await this.userRepository.save(user);

            return response.json(userViewer.render(user));

        }catch(ex){
            console.log(ex)
            return response.status(400).json({error: "User registration failed!"})
        }
    }

    async getUserByName(request: Request, response: Response){
        try{
            const {
                name
            } = request.params;

            const user = await this.userRepository.findOne(
                {
                    relations:['city'],
                    where : { name: name }
                });

            return response.json(userViewer.render(user));

        }catch{
            return response.status(400).json({error: "Can't get User information!"})
        }
    }

    async getUserById(request: Request, response: Response){
        try{
            const {
                id
            } = request.params;

            const user = await this.userRepository.findOneOrFail(id,
                {
                    relations:['city'],
                });

            return response.json(user);

        }catch{
            return response.status(400).json({error: "Can't get User information!"})
        }
    }

    async updateUserName(request: Request, response: Response){
        try{
            const { id, name } = request.body;

            const user = await this.userRepository.findOneOrFail(id,
                {
                    relations:['city'],
                });
            
            user.name = name;

            const userUpdated = await this.userRepository.merge(user);
            
            await this.userRepository.save(userUpdated);

            return response.status(202).json(userViewer.render(userUpdated));

        }catch{
            return response.status(400).json({error: "Can't get User information!"})
        }
    }

    async removeUserById(request: Request, response: Response){
        try{
            const { id } = request.params;

            const user = await this.userRepository.findOneOrFail(id);

            await this.userRepository.remove(user);

            return response.status(200)
        }catch{
            return response.status(400).json({error: "Can't delete User"})
        }

    }
}
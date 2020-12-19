import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {City} from "../entity/City";
import cityViewer from '../views/city_views';


export class CityController {

    private cityRepository = getRepository(City);

    async save(request: Request, response: Response){
        try{
            const {
                name,
                state
            } = request.body;
            const data = {name: name, state: state};

            const finalData = this.cityRepository.create(data);

            const city = await this.cityRepository.save(finalData);

            return response.json(cityViewer.render(city));

        }catch{
            return response.status(400).json({error: "City registration failed!"})
        }
    }

    async getCityByName(request: Request, response: Response){
        try{
            const {
                name,
            } = request.params;

            const city = await this.cityRepository.findOne({where : [{name: name}]});

            return response.json(cityViewer.render(city));

        }catch{
            return response.status(400).json({error: "Can't get City information!"})
        }
    }

    async getCityByState(request: Request, response: Response){
        try{
            const {
                state
            } = request.params;
            
            const city = await this.cityRepository.find({where : {state: state}});

            return response.json(cityViewer.renderMany(city));

        }catch{
            return response.status(400).json({error: "Can't get City information!"})
        }
    }
}
import {City} from '../entity/City';

export default{
    render(city: City){
        return{
            id: city.id,
            name: city.name,
            state: city.state
        }
    },
    renderMany(cities: City[]){
        return cities.map(city => this.render(city));
    }
}
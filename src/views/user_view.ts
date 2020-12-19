
import {User} from '../entity/User';
import cityView from './city_views';

export default{
    render(user: User){
        return{
            id: user.id,
            name: user.name,
            sex: user.sex,
            birthday: user.birthday,
            age: user.age,
            city: cityView.render(user.city)
        }
    },
    renderMany(users: User[]){
        return users.map(user => this.render(user))
    }
}

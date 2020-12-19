[![LinkedIn][linkedin-shield]][linkedin-url]

<h3 align="center">User - City</h3>
<p align="center">
    A simple user/city listing API in NodeJS, Express and TypeORM
</p>

# RUN

Steps to run this project:

1. Clone the repo `https://github.com/mateuszanatta/UserCity.git`
2. Run `yarn run start` command to start it
3. The app will start on `localhost:3000`

## ENDPOINTS

`POST: /city` include a city into the database

    {"name"  : "São Paulo",
        "state" : "São Paulo"
    }

`GET: /city/:name` search a city using its name

`GET: /city/state/:state` search a cities using the state's name

`POST: /user` include a User into the database

    {
        "name": "Mateus da Rosa Zanatta", 
        "sex": "1",
        "birthday": "1991-10-30",
        "age": "29",
        "city_id": 1
    }

`PUT: /user` update the name of a given User

    {
        "id":14,
        "name": "Mateus da Rosa Zanatta Updated" 
    }

`GET: /user/:name` get a user by its name

`GET: /user/id/:id` get a user by its ID

`DELETE: /user/id/:id` delete a user by its ID

##Examples
There is an Insomnia Workspace file ready to be imported on folde insomnia (Insomnia Core 2020.5.2). You may use these examples to make calls to the API

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mateuszanatta/
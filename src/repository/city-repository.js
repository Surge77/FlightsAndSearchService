//The repository folder is crucial in backend development for organizing and abstracting data access logic, enabling cleaner code and easier testing.

const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {

        try{
            const city = await City.create({ name });
            return city;

        }catch (error) {
            throw {error};
        }

    }


    async deleteCity({ cityid }) {
        
        try{
            await City.destroy({
                where: {
                    id: cityid
                }
            });


        }catch (error){
            throw {error};
        }
    }
}


module.exports = CityRepository;
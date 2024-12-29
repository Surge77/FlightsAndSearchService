//The repository folder is crucial in backend development for organizing and abstracting data access logic, enabling cleaner code and easier testing.

const { City } = require('../models/index');

class CityRepository {

    async createCity({ name }) { 
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) { // {name: "Prayagraj"}
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}

module.exports = CityRepository;
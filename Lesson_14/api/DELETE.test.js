const axios = require('axios');
const { Validator } = require('jsonschema');
const validator = new Validator();
const activitiesJsonSchema = require('../data/activitiesDelete.v1.json')


describe('Activities Delete methods validations', () => {
    let response
    test('should be status code 200 when successfully deleting an activity', async () =>{
        response = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Activities/12', {
            headers: {
                'access-control-allow-origin': '*',
                'api-supported-versions': '1.0', 
                'content-length': '0',
                'date': 'Thu22 Aug 2024 07:22:39 GMT', 
                'server': 'Kestrel', 
            }
        })
        expect(response.status).toEqual(200)
    })
    test('should be appropriate json schema', async () => {
        const result = validator.validate(response.headers, activitiesJsonSchema)
        expect(result.valid).toEqual(true)
    })
})

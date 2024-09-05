const axios = require('axios');
const { Validator } = require('jsonschema');
const validator = new Validator();
const activitiesJsonSchema = require('../data/activitiesPut.v1.json')


describe('Activities Put methods validations', () => {
    let response
    test('should be status code 200 when pass valid data', async () =>{
        response = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/12', {
            "id": 0,
            "title": "string",
            "dueDate": "2024-08-22T07:03:59.047Z",
            "completed": true
        },
        {
            headers: {
                'access-control-allow-origin': '*',
                'api-supported-versions': '1.0', 
                'content-type': 'application/json; charset=utf-8; v=1.0', 
                'date': 'Thu22 Aug 2024 07:08:09 GMT', 
                'server': 'Kestrel', 
                'transfer-encoding': 'chunked' 
            }
        },
        )
        expect(response.status).toEqual(200)
    })
    test('should be appropriate json schema', async () => {
        const result = validator.validate(response.data, activitiesJsonSchema)
        expect(result.valid).toEqual(true)
    })
})

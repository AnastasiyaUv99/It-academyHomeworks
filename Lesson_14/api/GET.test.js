const axios = require('axios');
const { Validator } = require('jsonschema');
const validator = new Validator();
const activitiesJsonSchema = require('../data/activitiesGet.v1.json')
const activitiesJsonSchema2 = require('../data/activitiesGet2.v1.json')

describe('Activities Get methods validations', () => {
    let response
    test('should be status code 200 when pass valid data', async () =>{
        response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
            headers: {
                'api-supported-versions': '1.0', 
                'content-type': 'application/json; charset=utf-8; v=1.0', 
                'date': 'Mon19 Aug 2024 18:33:53 GMT', 
                'server': 'Kestrel', 
                'transfer-encoding': 'chunked' 
            }
        })
        expect(response.status).toEqual(200)
    })
    test('should be appropriate json schema', async () => {
        const result = validator.validate(response.data, activitiesJsonSchema)
        expect(result.valid).toEqual(true)
    })
})

describe('Activities Get#2 methods validations', () => {
    let response
    test('should be status code 200 when pass valid data', async () =>{
        response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/12', {
            headers: {
                'api-supported-versions': '1.0', 
                'content-type': 'application/json; charset=utf-8; v=1.0', 
                'date': 'Wed21 Aug 2024 18:51:23 GMT', 
                'server': 'Kestrel', 
                'transfer-encoding': 'chunked' 
            }
        })
        expect(response.status).toEqual(200)
    })
    test('should be appropriate json schema', async () => {
        const result = validator.validate(response.data, activitiesJsonSchema2)
        expect(result.valid).toEqual(true)
    })
})
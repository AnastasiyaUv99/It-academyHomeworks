const axios = require('axios');
const { Validator } = require('jsonschema');
const validator = new Validator();
const activitiesJsonSchema = require('../data/activitiesPost.v1.json')


describe('Activities Post methods validations', () => {
    let response
    test('should be status code 200 when pass valid data', async () => {
        response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
            "id": 0,
            "title": "string",
            "dueDate": "2024-08-21T18:06:56.876Z",
            "completed": true
        },
        {
            headers: {
                'access-control-allow-origin': '*',
                'api-supported-versions': '1.0' ,
                'content-type': 'application/json; charset=utf-8; v=1.0',
                'date': 'Wed21 Aug 2024 18:06:58 GMT',
                'server': 'Kestrel',
                'transfer-encoding': 'chunked'
            }
        },
        )
        expect(response.status).toEqual(200)
    })
    test('should be appropriate json schema', async () => {
        const result = await validator.validate(response.data, activitiesJsonSchema)
        expect(result.valid).toEqual(true)
    })
})
const bookJSONSchema = {
    type: 'object',
    properties:{
        id: { type:'string' },
        title: {
            type:'string',
            maxLength: 20
            },
        description: {
            type:'string',
            maxLength: 200
        },
        ownerEmail: {
            type: 'string',
            format: 'email'
        }
    },
    required: ['title', 'description', 'ownerEmail'],
    additionalProperties: false
};

module.exports = bookJSONSchema;

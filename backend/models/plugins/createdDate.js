// Add a 'createdAt' property to owr documents
module.exports = function(schema) {
    schema.add({createdAt: {type: Date, default: Date.now}});
};

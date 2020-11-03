class Repository {
    constructor(model) {
        this._entity = model;
    }

    getList(query, filter) {
        return this._entity.find(filter, {}, query).exec();
    }

    get(id) {
        return this._entity.findById(id);
    }

    create(params) {
        return this._entity.create(params);
    }

    update(id, data) {
        return this._entity.updateOne({ _id: id }, data);
    }

    delete(id) {
        return this._entity.findByIdAndDelete(id).exec();
    }
}

module.exports = Repository;

import http from "../utils/http-common";

const getAll = () => {
    return http.get("/customer")
}

const findByCname = (cname) => {
    return http.get(`/customer?cname=${cname}`)
}

const create = (data) => { 
    return http.post("/customer", data);
}

const get = (id) => { 
    return http.get(`/customer/${id}`);
}

const remove = (id) => {
    return http.delete(`/customer/${id}`)
}

const update = (data, id) => {
    return http.put(`/customer/${id}`,data);
}

const EmpService = {
    getAll,
    findByCname,
    create,
    get,
    remove,
    update,
}

export default EmpService;
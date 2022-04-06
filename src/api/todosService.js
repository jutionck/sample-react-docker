import http from './http';

const baseUrl = '/todos';

const getTodos = () => {
    return http.get(`${baseUrl}`)
}

const insertTodos = todo => {
    return http.post(`${baseUrl}`, todo)
}

export {getTodos, insertTodos}
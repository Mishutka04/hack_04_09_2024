// Получение списка команд

let a = []

axios.get('http://127.0.0.1:8000/api/hack/', { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjQxNTYxLCJpYXQiOjE3MjgwNDk1NjEsImp0aSI6ImM1MGRmODJjZDJiMDRhMjE4OGVkYjg4YmZhMDYyZWYyIiwidXNlcl9pZCI6NCwidXNlcm5hbWUiOiIxQyBcdTA0NDdcdTA0MzVcdTA0M2JcdTA0MzhcdTA0M2EgMjMifQ.Jfsvq_3EIyPZTnfq4fFckz51-y89tMrGIBfGexiN6o8" } })
    .then(function (response) {
        a = response.data;

    })
    .catch(function (error) {
        console.log(error);

    });

// Получение определенной команды по ее id - 1

axios.get('http://127.0.0.1:8000/api/hack/1', { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjQxNTYxLCJpYXQiOjE3MjgwNDk1NjEsImp0aSI6ImM1MGRmODJjZDJiMDRhMjE4OGVkYjg4YmZhMDYyZWYyIiwidXNlcl9pZCI6NCwidXNlcm5hbWUiOiIxQyBcdTA0NDdcdTA0MzVcdTA0M2JcdTA0MzhcdTA0M2EgMjMifQ.Jfsvq_3EIyPZTnfq4fFckz51-y89tMrGIBfGexiN6o8" } })
    .then(function (response) {
        a = response.data;

    })
    .catch(function (error) {
        console.log(error);

    });

// Создание хакатона
var now = new Date();
axios.post('http://127.0.0.1:8000/api/create/hack/', {name:"sdasd",descriptions:"sdasd",data_start:now,data_end:now
    , headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjQxNTYxLCJpYXQiOjE3MjgwNDk1NjEsImp0aSI6ImM1MGRmODJjZDJiMDRhMjE4OGVkYjg4YmZhMDYyZWYyIiwidXNlcl9pZCI6NCwidXNlcm5hbWUiOiIxQyBcdTA0NDdcdTA0MzVcdTA0M2JcdTA0MzhcdTA0M2EgMjMifQ.Jfsvq_3EIyPZTnfq4fFckz51-y89tMrGIBfGexiN6o8" } })
    .then(function (response) {
        a = response.data;

    })
    .catch(function (error) {
        console.log(error);

    });
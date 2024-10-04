// Получение списка хаков

let a = []

axios.get('http://127.0.0.1:8000/api/hack/', { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjQxNTYxLCJpYXQiOjE3MjgwNDk1NjEsImp0aSI6ImM1MGRmODJjZDJiMDRhMjE4OGVkYjg4YmZhMDYyZWYyIiwidXNlcl9pZCI6NCwidXNlcm5hbWUiOiIxQyBcdTA0NDdcdTA0MzVcdTA0M2JcdTA0MzhcdTA0M2EgMjMifQ.Jfsvq_3EIyPZTnfq4fFckz51-y89tMrGIBfGexiN6o8" } })
    .then(function (response) {
        a = response.data;

    })
    .catch(function (error) {
        console.log(error);

    });
// Получение списка критериев хакатона



axios.get('http://127.0.0.1:8000/api/criteria/1/', { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjQxNTYxLCJpYXQiOjE3MjgwNDk1NjEsImp0aSI6ImM1MGRmODJjZDJiMDRhMjE4OGVkYjg4YmZhMDYyZWYyIiwidXNlcl9pZCI6NCwidXNlcm5hbWUiOiIxQyBcdTA0NDdcdTA0MzVcdTA0M2JcdTA0MzhcdTA0M2EgMjMifQ.Jfsvq_3EIyPZTnfq4fFckz51-y89tMrGIBfGexiN6o8"
}})
.then(function (response) {
        a = response.data;

    })
    .catch(function (error) {
        console.log(error);

    });

// Получение списка баллов по хакатону



axios.get('http://127.0.0.1:8000/api/points/hack/1/', { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjQxNTYxLCJpYXQiOjE3MjgwNDk1NjEsImp0aSI6ImM1MGRmODJjZDJiMDRhMjE4OGVkYjg4YmZhMDYyZWYyIiwidXNlcl9pZCI6NCwidXNlcm5hbWUiOiIxQyBcdTA0NDdcdTA0MzVcdTA0M2JcdTA0MzhcdTA0M2EgMjMifQ.Jfsvq_3EIyPZTnfq4fFckz51-y89tMrGIBfGexiN6o8"
}})
.then(function (response) {
        a = response.data;

    })
    .catch(function (error) {
        console.log(error);

    });


// Получение списка команд по хаку



axios.get('http://127.0.0.1:8000/api/team/hack/1/', { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjQxNTYxLCJpYXQiOjE3MjgwNDk1NjEsImp0aSI6ImM1MGRmODJjZDJiMDRhMjE4OGVkYjg4YmZhMDYyZWYyIiwidXNlcl9pZCI6NCwidXNlcm5hbWUiOiIxQyBcdTA0NDdcdTA0MzVcdTA0M2JcdTA0MzhcdTA0M2EgMjMifQ.Jfsvq_3EIyPZTnfq4fFckz51-y89tMrGIBfGexiN6o8"
}})
.then(function (response) {
        a = response.data;

    })
    .catch(function (error) {
        console.log(error);

    });


// Получение информацию по команде



axios.get('http://127.0.0.1:8000/api/team/description/1/', { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjQxNTYxLCJpYXQiOjE3MjgwNDk1NjEsImp0aSI6ImM1MGRmODJjZDJiMDRhMjE4OGVkYjg4YmZhMDYyZWYyIiwidXNlcl9pZCI6NCwidXNlcm5hbWUiOiIxQyBcdTA0NDdcdTA0MzVcdTA0M2JcdTA0MzhcdTA0M2EgMjMifQ.Jfsvq_3EIyPZTnfq4fFckz51-y89tMrGIBfGexiN6o8"
}})
.then(function (response) {
        a = response.data;

    })
    .catch(function (error) {
        console.log(error);

    });

// Получение списка баллов по exspert



axios.get('http://127.0.0.1:8000/api/points/user/1/', { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjQxNTYxLCJpYXQiOjE3MjgwNDk1NjEsImp0aSI6ImM1MGRmODJjZDJiMDRhMjE4OGVkYjg4YmZhMDYyZWYyIiwidXNlcl9pZCI6NCwidXNlcm5hbWUiOiIxQyBcdTA0NDdcdTA0MzVcdTA0M2JcdTA0MzhcdTA0M2EgMjMifQ.Jfsvq_3EIyPZTnfq4fFckz51-y89tMrGIBfGexiN6o8"
}})
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
var data_start = now.toISOString().split('T')[0]; // Получаем только дату в формате YYYY-MM-DD
var data_end = now.toISOString().split('T')[0]; // Получаем только дату в формате YYYY-MM-DD
axios.post('http://127.0.0.1:8000/api/create/hack/',
    {
        name: "sdasd",
        descriptions: "sdasd",
        data_start: data_start, // Преобразуем дату в строку ISO для корректной отправки
        data_end: data_end
    },
    {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjQxNTYxLCJpYXQiOjE3MjgwNDk1NjEsImp0aSI6ImM1MGRmODJjZDJiMDRhMjE4OGVkYjg4YmZhMDYyZWYyIiwidXNlcl9pZCI6NCwidXNlcm5hbWUiOiIxQyBcdTA0NDdcdTA0MzVcdTA0M2JcdTA0MzhcdTA0M2EgMjMifQ.Jfsvq_3EIyPZTnfq4fFckz51-y89tMrGIBfGexiN6o8"
        }
    })
    .then(function (response) {
        console.log(response.data); // Обработка успешного ответа
    })
    .catch(function (error) {
        console.log(error); // Обработка ошибки
    });

// Генерация QR code для хакатона
axios.post('http://127.0.0.1:8000/api/generator/',
    { hack_pk: 1 },
    {
        responseType: 'blob', headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjQxNTYxLCJpYXQiOjE3MjgwNDk1NjEsImp0aSI6ImM1MGRmODJjZDJiMDRhMjE4OGVkYjg4YmZhMDYyZWYyIiwidXNlcl9pZCI6NCwidXNlcm5hbWUiOiIxQyBcdTA0NDdcdTA0MzVcdTA0M2JcdTA0MzhcdTA0M2EgMjMifQ.Jfsvq_3EIyPZTnfq4fFckz51-y89tMrGIBfGexiN6o8"
        }
    } // Указываем тип ответа
)
    .then(function (response) {
        // Создаем URL для скачивания файла
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Создаем временный элемент <a> для скачивания
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'metanit_qr.png'); // Имя файла для скачивания

        // Добавляем элемент на страницу и инициируем клик
        document.body.appendChild(link);
        link.click();

        // Удаляем элемент после скачивания
        link.parentNode.removeChild(link);
    })
    .catch(function (error) {
        console.log(error); // Обработка ошибки
    });

// Привязка Жюри по QR
axios.get('http://127.0.0.1:8000/api/link/exspert/?code=8ff6f2be-8263-11ef-bca1-70d82354725d',
    {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjQxNTYxLCJpYXQiOjE3MjgwNDk1NjEsImp0aSI6ImM1MGRmODJjZDJiMDRhMjE4OGVkYjg4YmZhMDYyZWYyIiwidXNlcl9pZCI6NCwidXNlcm5hbWUiOiIxQyBcdTA0NDdcdTA0MzVcdTA0M2JcdTA0MzhcdTA0M2EgMjMifQ.Jfsvq_3EIyPZTnfq4fFckz51-y89tMrGIBfGexiN6o8"
        }
    } // Указываем тип ответа
)
    .then(function (response) {
        // 
        console.log(response.status)

    })
    .catch(function (error) {
        console.log(error); // Обработка ошибки
    });




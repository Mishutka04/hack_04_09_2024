// Получение списка хаков

let a = []
let bearer = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjUwMjI5LCJpYXQiOjE3MjgwNTgyMjksImp0aSI6IjgwNjRhZTVkMGEyNDRmMTA4YzY0NWI2ZDcwZGVlOGQ5IiwidXNlcl9pZCI6NiwidXNlcm5hbWUiOiIxQyBcdTA0NDdcdTA0MzVcdTA0M2JcdTA0MzhcdTA0M2EgMjM0MjMifQ.fEG9pS2rgNExpyPtpNaH-H_cDgBhdb_V9bRwJQM554M"
axios.get('http://127.0.0.1:8000/api/hack/', { headers: { Authorization: "Bearer " + bearer } })
    .then(function (response) {
        let name = response.data[0].name; // Имя
        let descriptions = response.data[0].descriptions; // Описание
        let data_start = response.data[0].data_start; // Начало хака
        let data_end = response.data[0].data_end; // Окончание
        let administrator = response.data[0].administrator; // ID администратора
        let id = response.data[0].id; // ID записи

    })
    .catch(function (error) {
        console.log(error);

    });
// Получение списка критериев хакатона



axios.get('http://127.0.0.1:8000/api/criteria/1/', {
    headers: {
        Authorization: "Bearer " + bearer
    }
})
    .then(function (response) {
        let name = response.data[0].name; // Имя
        let max_ball = response.data[0].descriptions; // Макс балл
        let hack = response.data[0].data_start; // ID хакатона
        let id = response.data[0].id; // ID записи

    })
    .catch(function (error) {
        console.log(error);

    });

// Получение списка баллов по хакатону



axios.get('http://127.0.0.1:8000/api/points/hack/1/', {
    headers: {
        Authorization: "Bearer " + bearer
    }
})
    .then(function (response) {
        let ball = response.data[0].name; // Балл
        let criteria = response.data[0].descriptions; // ID критерия
        let hack = response.data[0].data_start; // ID хакатона
        let team = response.data[0].data_start; // ID команды
        let exspert = response.data[0].data_start; // ID эксперта
        let id = response.data[0].id; // ID записи

    })
    .catch(function (error) {
        console.log(error);

    });

// Получение списка баллов по exspert



axios.get('http://127.0.0.1:8000/api/points/user/1/', {
    headers: {
        Authorization: "Bearer " + bearer
    }
})
    .then(function (response) {
        let ball = response.data[0].name; // Балл
        let criteria = response.data[0].descriptions; // ID критерия
        let hack = response.data[0].data_start; // ID хакатона
        let team = response.data[0].data_start; // ID команды
        let exspert = response.data[0].data_start; // ID эксперта
        let id = response.data[0].id; // ID записи

    })
    .catch(function (error) {
        console.log(error);

    });
// Получение списка команд по хаку



axios.get('http://127.0.0.1:8000/api/team/hack/1/', {
    headers: {
        Authorization: "Bearer " + bearer
    }
})
    .then(function (response) {
        let name = response.data[0].name; // Имя
        let descriptions = response.data[0].descriptions; // Описание
        let hack = response.data[0].data_start; // ID хакатона
        let id = response.data[0].id; // ID записи

    })
    .catch(function (error) {
        console.log(error);

    });


// Получение информацию по команде



axios.get('http://127.0.0.1:8000/api/team/description/1/', {
    headers: {
        Authorization: "Bearer " + bearer
    }
})
    .then(function (response) {
        let name = response.data[0].name; // Имя
        let descriptions = response.data[0].descriptions; // Описание
        let hack = response.data[0].data_start; // ID хакатона
        let id = response.data[0].id; // ID записи

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
        name: "sdasd", // Имя
        descriptions: "sdasd", // Описание
        data_start: data_start, // Дата старта
        data_end: data_end // Дата окончания
    },
    {
        headers: {
            Authorization: "Bearer " + bearer
        }
    })
    .then(function (response) {
        let hack_id = response.data[0].hack_id // Вывод id созданного хака 
    })
    .catch(function (error) {
        console.log(error); // Обработка ошибки
    });

// Генерация QR code для хакатона и его скачивание
axios.post('http://127.0.0.1:8000/api/generator/',
    { hack_pk: 1 // ID хакатона

     },
    {
        responseType: 'blob', headers: {
            Authorization: "Bearer " + bearer
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

let code = "8ff6f2be-8263-11ef-bca1-70d82354725d" // Код из QR кода
axios.get('http://127.0.0.1:8000/api/link/exspert/?code=' + code, 
    {
        headers: {
            Authorization: "Bearer " + bearer
        }
    } // Указываем тип ответа
)
    .then(function (response) {
        // 
        console.log(response.status) // Вывод статуса об успешности

    })
    .catch(function (error) {
        console.log(error); // Обработка ошибки
    });




//const username = document.getElementById("username");


/*
document.getElementById('benderform').addEventListener('submit', submitForm);


function submitForm(event) {
    // Отменяем стандартное поведение браузера с отправкой формы
    event.preventDefault();

    // event.target — это HTML-элемент form
    let formData = new FormData(event.target);

    // Собираем данные формы в объект
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    
    // Собираем запрос к серверу
    let request = new Request(event.target.action, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    fetch(request).then(
        function(response) {
            // Запрос успешно выполнен
            console.log(response);
            // return response.json() и так далее см. документацию
        },
        function(error) {
            // Запрос не получилось отправить
            console.error(error);
        }
    );
    console.log('Запрос отправляется');
}
*/
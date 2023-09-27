const btnSend = document.getElementById('btn_send');
const btnGeolocation = document.getElementById('btn_geolocation');

btnSend.addEventListener('click', () => {
    const url = 'wss://echo-ws-service.herokuapp.com';
    let chat = document.getElementById('correspondence');
    let wb = new WebSocket(url);
    
    function client(text) {
        let message = document.createElement('p');
        chat.appendChild(message);
        message.textContent = text;
    }
    function server(text) {
        let message = document.createElement('p');
        chat.appendChild(message);
        message.classList.add('server');
        message.textContent = text;
    }
    wb.onopen =  function (event) {
        let text = document.getElementById('message').value;
        client(text);
        wb.send(text);
    }
    wb.onmessage = function (event) {
        server(event.data);
    } 
});

btnGeolocation.addEventListener('click', () => {
    let chat = document.getElementById('correspondence');
    
    const error = () => {
        let message = document.createElement('p');
        chat.appendChild(message);
        message.classList.add('server');
        message.textContent = "Ошибка получения геоданных";
    }
    let success = (position) => {
        let message = document.createElement('a');
        chat.appendChild(message);
        message.classList.add('server');
        message.textContent = 'Ссылка';
        message.href = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
    }
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});
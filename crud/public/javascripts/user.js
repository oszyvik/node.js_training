//Get users.


let fetchUsers = () => {
    fetch('/users/api/user')
        .then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
            fillTable(json);
        }).catch(err => {
            console.log(err);
        });
};

let postUser = (user) => {
    fetch('users/api/user/' + user.id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        });
};

document.querySelector('.fetch-users').addEventListener('click', () => {
    fetchUsers();
});

let tableRow = (user) => {
    let output = `<td>${user.id}</td>`;
    output += `<td>${user.name}</td>`;
    output += `<td>${user.email}</td>`;
    output += `<button class="send-btn">Send</button>`;
    let tr = document.createElement('tr');
    tr.innerHTML = output;
    let button = tr.querySelector('button');
    button.user = user;
    button.addEventListener('click', () => {
        postUser(this.user);
    });
    return tr;
}
    ;
let fillTable = (json) => {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for (let k in json) {
        tbody.appendChild(tableRow(json[k]));
    }
};
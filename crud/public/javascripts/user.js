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

//Send user data to the server
let postUser = (user) => {
    fetch('/users/api/user/' +user.id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            console.log(response.status);
            return response.json();
        })
        .then(json => {
            console.log(json);
        });
};

//Send user data to the server
let putUser = (user) => {
    fetch('users/api/user/' + user.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
           // fillTable(json);
        }).catch(err => {
            console.log(err);
        });
};

//Send user data to the server
let deleteUser = (user) => {
    fetch('users/api/user/' + user.id, {
        method: 'DELETE'
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
    output += `<button class="send-btn btn btn-success">Send</button> 
    <button class="delete-btn btn btn-danger">Delete</button>`;
    let tr = document.createElement('tr');
    tr.innerHTML = output;
    let buttonSend = tr.querySelector('.send-btn');
    buttonSend.user = user;
    buttonSend.addEventListener('click', () => {
        postUser(user);
    });
    let buttonDelete = tr.querySelector('.delete-btn');
    buttonDelete.user = user;
    buttonDelete.addEventListener('click', () => {
        deleteUser(user);
    });


    
    return tr;
};

let fillTable = (json) => {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for (let k in json) {
        tbody.appendChild(tableRow(json[k]));
    }
};

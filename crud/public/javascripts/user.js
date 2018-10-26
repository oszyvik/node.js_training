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
}

document.querySelector('.fetch-users').addEventListener('click', () => {
    fetchUsers();
});

let tableRow = (options) => {
    let output = `<td>${options.id}</td>`;
    output += `<td>${options.name}</td>`;
    output += `<td>${options.email}</td>`;
    return `<tr>${output}</tr>`;
}
;
let fillTable = (json) => {
    let content = '';
    for(let k in json){
        content += tableRow(json[k]);
    }
    document.querySelector('tbody').innerHTML = content;
};
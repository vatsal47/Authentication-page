// Get users array from local storage
let getUsers = () => {
    let userJSON = localStorage.getItem('users')
    return (userJSON) ? JSON.parse(userJSON) : []
}

// Declare users array and variables to store user input
let users = getUsers()
let username, password

// Push username and password in users array and store it in local storage
document.getElementById('signup').addEventListener('click', (e) => {
    e.preventDefault()
    username = document.getElementById('username').value
    password = document.getElementById('password').value
    updateUsers()
    saveUsers()
})

// Check if username exist in users array
let userExistence = () => {
    for (let user of users) {
        if (user.username === username) {
            return true
        }
    }
    return false
}

// Update users array according to user's input
let updateUsers = () => {
    if (!username || !password) {
        alert('Invalid Input')
    } else if (users.length === 0) {
        users.push({
            username: username,
            password: password,
        })
    } else if (userExistence()) {
        alert('Username already exist')
    } else {
        users.push({
            username: username,
            password: password,
        })
    }
}

//Save users data in local storage
let saveUsers = () => {
    let userJSON = JSON.stringify(users)
    localStorage.setItem('users', userJSON) 
}





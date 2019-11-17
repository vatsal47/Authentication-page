// Get users array from local storage
getUsers = () => {
    let userJSON = localStorage.getItem('users')
    return (userJSON) ? JSON.parse(userJSON) : []
}

// Declare users array , username and password
let users = getUsers()
let username, password 

// Interact with user according to its input
document.getElementById('login').addEventListener('click', () => {
    username = document.getElementById('username').value
    password = document.getElementById('password').value
    userInteraction()
})

// Check if user exists in user array
let checkUserExistence = () => { 
    for (let user of users) {
        if (user.username === username) {
            return true
        } 
    }
    return false
}

// Check is username and password in array matches to user input
let validateUser = () => {
    for (let user of users) {
        if (user.username === username && user.password === password) {
            return true
        }
    }
    return false
}

// Handle what alert is to be shown to user
let userInteraction = () => {
    if (!username || !password) {
        alert('Invalid Input')
    } else if (checkUserExistence()){
        if (validateUser()) {
            alert('Successfully logged in')
        } else {
            alert('Password Incorrect')
        }
    } else {
        alert('Username doesnot exist')
    }

}

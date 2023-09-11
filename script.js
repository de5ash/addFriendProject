var istatus = document.querySelector("h5")

var addFriend = document.querySelector("#add")
var btntxt = document.querySelector("#add")

var check = 0
addFriend.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friends Now!!"
        istatus.style.color = "green"
        btntxt.innerHTML = "Remove Friend"
        btntxt.style.backgroundColor = "black"
        check = 1

    } else {
        istatus.innerHTML = "Strangers"
        istatus.style.color = "red"
        btntxt.innerHTML = "Add Friend"
        btntxt.style.backgroundColor = "cadetblue"
        check = 0

    }

})

// removeFriend.addEventListener("click", function () {
//     istatus.innerHTML = "Stranger"
//     istatus.style.color = "red"
// })
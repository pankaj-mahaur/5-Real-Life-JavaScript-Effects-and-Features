var istatus = document.querySelector("h4")

var addFriend = document.querySelector("#add")
var check = 0

addFriend.addEventListener("click", function(){
    if(check == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    addFriend.innerHTML = "Remove Friend"
    check = 1
}else{
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
    addFriend.innerHTML = "Add Friend"
    check = 0
}

}
)
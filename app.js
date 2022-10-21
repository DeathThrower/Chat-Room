const list = document.querySelector('.chat-list');
const newChat = document.querySelector('.new-chat');
const newName = document.querySelector('.new-name');
const update = document.querySelector('.update-mssg');
const chatrooms = document.querySelector('.chat-rooms');
const emojitable = document.querySelector('.emojis');

emojitable.addEventListener('click', e=>{
    if(e.target.tagName === 'SPAN'){
        newChat.message.value += e.target.innerText;
    }
})


newChat.addEventListener('submit', e=>{
    e.preventDefault();
    const message = newChat.message.value.trim();
    chatroom.addchat(message)
    .then(() => newChat.reset())
    .catch(err => console.log(err));
})

newName.addEventListener('submit', e => {
    e.preventDefault();
    const name  = newName.name.value.trim();
    chatroom.updateName(name);
    newName.reset();
    update.innerText = `Your name was updated to ${name}`;
    setTimeout(() => update.innerText='',3000);
})

chatrooms.addEventListener('click', e => {
    if(e.target.tagName === "BUTTON"){
        chatUI.clear();
        const room = e.target.id;
        chatroom.updateRoom(room).getChats(data => chatUI.render(data));
    }
})

const chatUI = new ChatUI(list);

const UserName = localStorage.username ? localStorage.username : 'anon'
const chatroom = new Chatroom(UserName ,'gaming');

const emojis = ["😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾"];
emojis.forEach(emoji => {
    emojitable.innerHTML += `<span>${emoji}</span>`;
});
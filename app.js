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

const emojis = ["๐","๐","๐","๐","๐","๐","๐","๐คฃ","๐","๐","๐","๐","๐","๐","๐","๐ฅฐ","๐","๐","๐","๐","๐","๐","๐","๐","๐คช","๐คจ","๐ง","๐ค","๐","๐คฉ","๐ฅณ","๐","๐","๐","๐","๐","๐","๐","โน๏ธ","๐ฃ","๐","๐ซ","๐ฉ","๐ฅบ","๐ข","๐ญ","๐ค","๐ ","๐ก","๐คฌ","๐คฏ","๐ณ","๐ฅต","๐ฅถ","๐ฑ","๐จ","๐ฐ","๐ฅ","๐","๐ค","๐ค","๐คญ","๐คซ","๐คฅ","๐ถ","๐","๐","๐ฌ","๐","๐ฏ","๐ฆ","๐ง","๐ฎ","๐ฒ","๐ฅฑ","๐ด","๐คค","๐ช","๐ต","๐ค","๐ฅด","๐คข","๐คฎ","๐คง","๐ท","๐ค","๐ค","๐ค","๐ค ","๐","๐ฟ","๐น","๐บ","๐คก","๐ฉ","๐ป","๐","โ ๏ธ","๐ฝ","๐พ","๐ค","๐","๐บ","๐ธ","๐น","๐ป","๐ผ","๐ฝ","๐","๐ฟ","๐พ"];
emojis.forEach(emoji => {
    emojitable.innerHTML += `<span>${emoji}</span>`;
});
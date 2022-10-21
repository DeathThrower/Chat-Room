class Chatroom {
    constructor(username,room){
        this.username = username;
        this.room = room;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addchat(message){
        const now = new Date();
        const chat = {
            message,
            created_at: firebase.firestore.Timestamp.fromDate(now),
            username: this.username,
            room: this.room
        }
        const response = await this.chats.add(chat);
        return response;
    }
    getChats(callback){
        this.unsub = this.chats
        .where("room", "==", this.room)
        .orderBy("created_at")
        .onSnapshot( snapshot => {
            snapshot.docChanges().forEach( change =>{
                if(change.type === 'added'){
                    callback(change.doc.data())
                }
            })
        })
    }
    updateName(username){
        this.username = username;
        localStorage.setItem('username',username);
    }
    updateRoom(room){
        this.room = room;
        console.log("room updated");
        if(this.unsub){
            this.unsub();
        }
        return this;
    }
}


class ChatUI{
    constructor(list){
        this.list = list
    }
    render(data){
        const time = dateFns.distanceInWordsToNow(data.created_at.toDate(),{addSuffix: true});
        let html = `
        <li class = 'list-group-item'>
            <span class = 'username'>${data.username}</span>
            <span class = 'message'>${data.message}</span>
            <div class = 'time'>${time}</div>
        </li>
        `;
        this.list.innerHTML += html;
    }
    clear(){
        this.list.innerHTML = '';
    }
}
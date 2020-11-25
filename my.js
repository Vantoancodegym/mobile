class Moblie {
    constructor(name,brand,int) {
        this.bettery=int;
        this.name=name;
        this.brand=brand;
        this.Mesg="";
        this.Inbox=[];
        this.Outbox=[];
        this.board="";
    }
    showBettery() {
        return this.bettery;
    }
    chargeBettery(){
        this.bettery=this.bettery+1
        }
    writeMesg(mess){
       this.Mesg=mess;
    }
    sendMesg(mobile){
        mobile.reciveMesg(this.Mesg);
        this.Outbox.push(this.Mesg);
        this.bettery=this.bettery-1
    }
    reciveMesg(mess){
        this.Inbox.push(mess);
    }
}
let arr =[['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l',';'],
    ['z','x','c','v','b','n','m','<','>',' ']
]


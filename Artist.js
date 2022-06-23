class Artist {
constructor(name, cur){
    this.name = name;
    this.cur = cur;
    this.workprice = 0;
    this.songlist = [];
    this.songlistheader = [`${this.name}'s playlist:`, '='.repeat(this.name.length+12)];
    this.totalplayed = 0;
    this.sesionPlayed = 0;
    this.profit = 0;
}
intro(){
 return `Hi, my ${this.name} is Raimonda and I am a musician!`
}
songPrice(num){
    this.workprice = (num/100).toFixed(2);
    return `${this.name}'s price per song is ${this.workprice} ${this.cur}`
}
addSong(songname){
    this.songlist.push({id: `${this.songlist.length+1}.`, sname: songname, count: 0})
}
playlist(){

let res =[]
 for (let i = 0; i < this.songlist.length; i++){
    res.push(Object.values(this.songlist[i]).join(' '))
 }
return this.songlistheader.concat(res).join('\r\n');
}
playSong(num){
    this.sesionPlayed += 1;
for (let j = 0; j < this.songlist.length; j++ ){
    if (num === j){
        this.songlist[j].count += 1;
        return `Playing song: ${this.songlist[j].sname}.`;
    }
    
}

}
fortune(){
    this.profit += this.sesionPlayed*this.workprice
 return `Total lifetime wealth of ${this.name} is ${this.profit.toFixed(2)} ${this.cur} right now!`
}
}

module.exports = Artist;
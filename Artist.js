class Artist {
constructor(name, cur){
    this.name = name;
    this.cur = cur;
    this.workprice = 0;
    this.songlist = [];
    this.songlistheader = `${this.name}'s playlist:`;
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
    this.songlist.push({ sname: songname, count: 0})
    return `Song added: ${songname}`
}
playlist(){
let maxLength = this.songlistheader.length
let res =[]
 for (let i = 0; i < this.songlist.length; i++){
    res.push(`${i+1}. `+Object.values(this.songlist[i].sname +' ('+ this.songlist[i].count+')').join(''));
    if (res[i].length > maxLength){
        maxLength = res[i].length;
    }
 }
return this.songlistheader+`\r\n`+('='.repeat(maxLength)+`\r\n`)+(res).join('\r\n');
}
playSong(num){
    this.totalplayed += 1;
for (let j = 0; j < this.songlist.length; j++ ){
    if (num === j){
        this.songlist[j].count += 1;
        return `Playing song: ${this.songlist[j].sname}.`;
    }
    
}

}
fortune(){
    this.profit += (this.totalplayed - this.sesionPlayed)*this.workprice
    this.sesionPlayed = this.totalplayed;
 return `Total lifetime wealth of ${this.name} is ${this.profit.toFixed(2)} ${this.cur} right now!`
}
}

module.exports = Artist;
function ClozeCard (text, cloze, err){
  this.text = text;
  this.cloze = cloze;
  this.partial = function (){
    console.log("this.partial");
  }
  this.fullText = function (){
    console.log("this.fulltext");
  }
}

module.exports = ClozeCard;

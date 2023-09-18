class main{
constructor(){

this.spanishwords = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve","veinte","veintiuno","veintidós","veintitrés","veinticuatro","veinticinco","veintiséis","veintisiete","veintiocho","veintinueve","treinta", //week1
"yo","él","ella","nosotros","nosotras","ellos","ellas","el","tú","usted","ustedes","más","menos"] //week1
this.englishwords = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, //week1
    "I","he","she","we (M or mix)","we (F)","they (M or mix)","they (F)","the","you","you (Formal)","you all","more/plus","less/minus"]//week1
//
}


start(){

    document.getElementById('question').hidden = false
    document.getElementById('englishword').hidden = false
    document.getElementById('textbox').hidden = false
    document.getElementById('submit').hidden = false
    document.getElementById('butdiv').hidden = true
    document.getElementById('promptdiv').hidden = false
    document.getElementById('e').hidden = false
    document.getElementById('o').hidden = false
    document.getElementById('u').hidden = false
    document.getElementById('a').hidden = false

}

newWord(){
this.temp = Math.floor(Math.random()*this.spanishwords.length)
sWord = this.spanishwords[this.temp]
eWord = this.englishwords[this.temp]
document.getElementById("englishword").innerText = eWord
document.getElementById("textbox").value =""
console.log(this.spanishwords.length)
}

checkWord(word){
if(word.toLowerCase() == sWord){
document.getElementById('correct').hidden = false
document.getElementById("a2").hidden =true
} else{
document.getElementById('incorrect').hidden = false
}
document.getElementById("solution").innerText = sWord
}

}
//outside
const m = new main();
let sWord = "";
let eWord = "";
let cWord = "";

window.onload = () => {

    document.getElementById('butdiv').hidden = false
    document.querySelector('#start').onclick = (e) => {
        m.start();
        m.newWord();
        }
        document.querySelector('#submit').onclick = (e) => {
            document.getElementById('next').hidden = false  
             document.getElementById('a2').hidden = false
             document.getElementById("submit").hidden=true
            cWord = document.getElementById("textbox").value
            m.checkWord(cWord);

            }
            document.querySelector('#next').onclick = (e) => {
           m.newWord();
           document.getElementById("submit").hidden=false
           document.getElementById('correct').hidden = true
           document.getElementById('incorrect').hidden = true
             document.getElementById('a2').hidden = true
             document.getElementById('next').hidden = true
             document.getElementById("number").innerText++
            }
            document.querySelector("#o").onclick = (e) =>{
                document.getElementById("textbox").value +="ó"
            }
            document.querySelector("#e").onclick = (e) =>{
                document.getElementById("textbox").value += "é"
            }
            document.querySelector("#u").onclick = (e) =>{
                document.getElementById("textbox").value += "ú"
            }
            document.querySelector("#a").onclick = (e) =>{
                document.getElementById("textbox").value += "á"
            }
}


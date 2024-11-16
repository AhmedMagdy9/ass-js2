var preNUM ;

var Quotes = [

    Quoteobj = {
        name : '-- Oscar Wilde',
        body : '“Be yourself; everyone else is already taken.”',
        img : '<img class="demo rounded-circle" src="img/imgapi6.jpg" alt="ghandi"> '
    },
    Quoteobj = {
        name : '-- Frank Zappa',
        body : '“So many books, so little time.” ',
        img : '<img class="demo rounded-circle" src="img/imgapi3.jpg" alt="ghandi">'
    },
    Quoteobj = {
        name : '-- Marcus Tullius Cicero',
        body : '“A room without books is like a body without a soul.”',
        img : '<img class="demo rounded-circle" src="img/imgapi2.jpg" alt="ghandi"> '
    },
    Quoteobj = {
        name : '-- Mahatma Gandhi',
        body : '“Be the change that you wish to see in the world.”',
        img : '<img class="demo rounded-circle" src="img/imgapi1.jpg" alt="ghandi">'
    },
    Quoteobj = {
        name : '-- Oscar Wilde',
        body : '“In three words I can sum up everything I.ve learned about life: it goes on.” ',
        img : '<img class="demo rounded-circle" src="img/imgapi5.jpg" alt="ghandi">'
    },
    Quoteobj = {
        name : '-- Ralph Waldo Emerson',
        body : '“If you tell the truth, you don.t have to remember anything.” ',
        img : '<img class="demo rounded-circle" src="img/imgapi7.jpg" alt="ghandi">'
    },
    Quoteobj = {
        name : '-- Oscar Wilde',
        body : '“Always forgive your enemies; nothing annoys them so much.” ',
        img : '<img class="demo rounded-circle" src="img/imgapi8.jpg" alt="ghandi">'
    },
    Quoteobj = {
        name : '-- Andre Gide',
        body : '“It is better to be hated for what you are than to be loved for what you are not.” ',
        img : '<img class="demo rounded-circle" src="img/imgapi4.jpg" alt="ghandi">'
    }

];













function getrandam(length){

 var    randNum;

 do {
    var randNum = Math.floor(Math.random()*length);
    
 } while (randNum === preNUM);

    preNUM =randNum

return preNUM
    


}

 function QuotesRand (){

var randomNUM = getrandam(Quotes.length)
        
    
    
       
    
        var QuoteBady = Quotes[randomNUM].body
        var QuoteName = Quotes[randomNUM].name
        var QuoteImg = Quotes[randomNUM].img
    
        document.getElementById('item').innerHTML = QuoteImg
        document.getElementById('demo').innerHTML = QuoteBady
        document.getElementById('demo2').innerHTML = QuoteName
        
        console.log(randomNUM);
        
    
    
        
    }



























































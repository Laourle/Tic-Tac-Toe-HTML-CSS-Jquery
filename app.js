$(document).ready(function() {

let count = 1;
let coup=1;
var jeu = true;




$('div').click(function () { 
    if($(this).text()=="" && jeu){
       if(count%2==1){
            $(this).append('X')
            $(this).css('color','red')
       }else{
            $(this).append('O')
            $(this).css('color','green')
       }
       count++;
       if(SolutionVictoire()!=-1 && SolutionVictoire()!=''){
           if(SolutionVictoire()=='X'){
            $('.resultat').append('<div> X Wins </div>').addClass('xWin')
            $('.resultat').append('<button onclick="location.reload()">Play Again</button>').addClass('button')
           }else{
            $('.resultat').append('<div> O Wins </div>').addClass('oWin')
            $('.resultat').append('<button onclick="location.reload()">Play Again</button>')
           }
           jeu=false
       }
       if(SolutionVictoire()==-1 && SolutionVictoire()!='' && coup==9){
         $('.resultat').append('<div class=non> Nobody wins </div>').addClass('noWin')
         $('.resultat').append('<button onclick="location.reload()">Play Again</button>')
       }
        coup++;
       }
     });  




function SolutionVictoire(){

let case1=$('.div1').text();
let case2=$('.div2').text();
let case3=$('.div3').text();
let case4=$('.div4').text();
let case5=$('.div5').text();
let case6=$('.div6').text();
let case7=$('.div7').text();
let case8=$('.div8').text();
let case9=$('.div9').text();

//row

    if((case1===case2) && (case2===case3)){
        return case3;
    }
    if((case4===case5) && (case5===case6))
    {
        return case6;
    }
    if((case7===case8) && (case8===case9))
    {
        return case9;
    }

//columns
    if((case1===case4) && (case4===case7))
    {
        return case7;
    }
    if((case2===case5) && (case5===case8))
    {
        return case8;
    }
    if((case3===case6) && (case6===case9))
    {
        return case9;
    }

//diagonals
    if((case1 === case5) && (case5 === case9))
    {
        return case9;
    }
    if((case3 === case5) && (case5 === case7))
    {
        return case7;
    }
    return -1
};






});



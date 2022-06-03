const main1 = document.getElementById('main1');
const main2 = document.getElementById('main2');
const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const img3 = document.querySelector('.img-3');
const userScore = document.getElementById('userpoint');
const aiScore = document.getElementById('aipoint');
const ready = document.querySelector('.ready');
const restart = document.querySelector('.restart');

userScore.textContent = 0;
aiScore.textContent = 0;

let finaluservalue = 0;
let finalaivalue = 0;
let scores =[];
let value =0 ;

img1.addEventListener('click',function(){
    main1.src = "./img/rock.png";//change img
    value = 'rock';
});

img2.addEventListener('click',function(){
    value = 'paper';//get value
    main1.src = "./img/paper.png";//change img
    
});

img3.addEventListener('click',function(){
    value = 'scissor';//get value
    main1.src = "./img/scissor.png";//change img
    
});

ready.addEventListener('click',function(){
    scores[0] =value;
    if(scores[0] ?? true){
        if(finaluservalue < 3 && finalaivalue < 3){
    let aivalue2 =['rock','paper','scissor'];
    let aivalue1 = Math.floor(Math.random()*3);
    let aivalue = aivalue2[aivalue1];

    main2.src =  "./img/"+ aivalue +".png";

    switch(scores[0]+aivalue){
                case 'rockrock':
                case 'paperpaper':  
                case 'scissorscissor':  
                    break;  
                case 'rockscissor':
                case 'paperrock':
                case 'scissorpaper':
                    finaluservalue += 1;
                    break;
                case 'scissorrock':
                case 'rockpaper':
                case 'paperscissor':
                    finalaivalue += 1;
                    break;
            }
    if(finaluservalue === 3){
        document.querySelector('.title1').innerHTML = 'USER <span class="red">WIN!</span>';
        
    }else if(finalaivalue === 3){
        document.querySelector('.title2').innerHTML = 'AI <span class="red">WIN!</span>';
    };

    

    userScore.textContent = finaluservalue;   
    aiScore.textContent = finalaivalue;
}
}
});

restart.addEventListener('click',function(){ 
    finaluservalue = 0;
    finalaivalue = 0;

    main1.src = "./img/questionmark.png";
    main2.src = "./img/questionmark.png";

    document.querySelector('.title1').innerHTML = 'USER';
    document.querySelector('.title2').innerHTML = 'AI';

    userScore.textContent = 0;
    aiScore.textContent = 0;

})






































// function change(value){
//     userScore.textContent =0;
//     aiScore.innerHTML =0;


//     main1.src = '../img/'+ value +'.png';
//     let user =  value;

    
//     function ai(){
//     let str = ['rock','paper','scissor'];
//     let aivalue =str[Math.floor(Math.random()*3)];
//     main2.src = "../img/"+ aivalue +".png";
//     let userPoint=0;
//     switch(user+aivalue){
//         case 'rockrock':
//         case 'paperpaper':  
//         case 'scissorscissor':  
//             console.log('draw');

//             break;  
//         case 'rockscissor':
//         case 'paperrock':
//         case 'scissorpaper':
//             console.log('USER');
            
//             console.log(userPoint);
//             break;
//             default:
//             console.log('AI');
//     }
//     };
//     ai();
// }



// let aivalue = function(){
//     let str = ['rock','paper','scissor'];
//     let aivalue =str[Math.floor(Math.random()*3)];

//     main2.src = "../img/"+ aivalue +".png";
//     return aivalue;
// }
// aivalue();

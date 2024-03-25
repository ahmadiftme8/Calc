document.addEventListener("DOMContentLoaded" , function(){

    let calculation =  localStorage.getItem('calculation') || ''  ;

    document.querySelector('.display-paragraph')
displayCalculation();

document.querySelector('.btn-1').addEventListener('click' , function(){
    updateCalculate('1')
} )

document.querySelector('.btn-2').addEventListener('click' , function(){
    updateCalculate('2')
} )

document.querySelector('.btn-3').addEventListener('click' , function(){
    updateCalculate('3')
} )

document.querySelector('.btn-4').addEventListener('click' , function(){
    updateCalculate('4')
} )

document.querySelector('.btn-5').addEventListener('click' , function(){
    updateCalculate('5')
} )

document.querySelector('.btn-6').addEventListener('click' , function(){
    updateCalculate('6')
} )

document.querySelector('.btn-7').addEventListener('click' , function(){
    updateCalculate('7')
} )

document.querySelector('.btn-8').addEventListener('click' , function(){
    updateCalculate('8')
} )

document.querySelector('.btn-9').addEventListener('click' , function(){
    updateCalculate('9')
} )

document.querySelector('.btn-0').addEventListener('click' , function(){
    updateCalculate('0')
} )

document.querySelector('.btn-plus').addEventListener('click' , function(){
    updateCalculate(' + ')
} )

document.querySelector('.btn-minus').addEventListener('click' , function(){
    updateCalculate(' - ')
} )

document.querySelector('.btn-multiply').addEventListener('click' , function(){
    updateCalculate(' * ')
} )

document.querySelector('.btn-devide').addEventListener('click' , function(){
    updateCalculate(' / ')
} )

document.querySelector('.btn-dot').addEventListener('click' , function(){
    updateCalculate('.')
} )

document.querySelector('.btn-equal').addEventListener('click' , function(){
    
    calculation = eval(calculation);

    updateAndSave();

    document.querySelector('.display-paragraph').innerHTML = calculation;
} )

document.querySelector('.clear').addEventListener('click' , function(){
    calculation ='';
    displayCalculation();
    
    updateAndSave();
    
} ) 

function updateCalculate(value){
    calculation += value;
    displayCalculation();
    updateAndSave();
}

function updateAndSave(){
    displayCalculation();
    localStorage.setItem('calculation', calculation );
}

function displayCalculation(){
    localStorage.setItem('calculation', calculation );
    document.querySelector('.display-paragraph').innerHTML = calculation;
}

} );






const buttons = document.querySelectorAll('button');
const clickSound = new Audio('sounds/zapsplat_multimedia_button_click_bright_002_92099.mp3'); // Replace with the path to your click sound file

buttons.forEach(button => {
  button.addEventListener('click', () => {
    clickSound.currentTime = 0; 
    clickSound.play();
  });
});
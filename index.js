let value = 0;

function add(){
    let newBtn = document.createElement('BUTTON');
    value += 1;
    newBtn.textContent = 'Clicked ' + value + ' times';
    document.querySelector('#btns').append(newBtn);
    document.querySelector('#myBtn').textContent = 'Clicked ' + value + ' times';

}
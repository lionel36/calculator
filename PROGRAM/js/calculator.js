//計算用の数値をリセット
var value1 = 0;
var value2 = 0;
var result = 0;

//小数の桁数
var order = 0;

//計算用の演算子をリセット
var operator = '';
var dot = '';

//数値ボタンを取得
var arrayForNumberButton = document.getElementsByClassName('number');

for(var i_numbers = 0; i_numbers < arrayForNumberButton.length; i_numbers++){
	var eachNumber = arrayForNumberButton[i_numbers];
	eachNumber.addEventListener('click',showNumber,false);
}

//演算子ボタンを取得
var arrayForOperatorButton = document.getElementsByClassName('operator');

for(var i_operators = 0; i_operators < arrayForOperatorButton.length; i_operators++){
	var eachOperator = arrayForOperatorButton[i_operators];
	eachOperator.addEventListener('click',operate,false);
}

//イコールボタンを取得
var equalButton = document.getElementById('equal');
equalButton.addEventListener('click',equal,false);

//小数点ボタンを取得
var dotButton = document.getElementById('dot');
dotButton.addEventListener('click',setDot,false);

//クリアボタンを取得
var allClearButton = document.getElementById('clear');
allClearButton.addEventListener('click',allClear,false);

//デリートボタンを取得
var deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click',deleteNumber,false)

//押した数字を表示する関数
function showNumber(event){
	var number = Number(event.target.value);
	var screen = document.getElementById('span_screen');

	if(operator !== ''){
		if(dot !== ''){
			order = checkOrderOfNumber(value2);

			value2 = value2 + (number/10);

			screen.innerText = value2;
		}else{
			value2 = (value2*10) + number;

			screen.innerText = value2;
		}
	}else{
		result = 0;

		if(dot !== ''){
			value1 = value1 + (number/10);

			screen.innerText = value1;
		}else{
			value1 = (value1*10) + number;

			screen.innerText = value1;
		}
	}
}

//演算子を登録する関数
function operate(event){
	operator = event.target.value;
	dot = '';
}

function setDot(){
	dot = '.';
}

//計算結果を表示する関数
function equal(){
	var screen = document.getElementById('span_screen');

	if(result !== 0){
		value1 = result;
	}

	if(operator === '+'){
		result = value1 + value2;
	}else if(operator === '-'){
		result = value1 - value2;
	}else if(operator === '×'){
		result = value1*value2;
	}else if(operator === '÷'){
		result = value1/value2;
	}

	value1 = 0;
	value2 = 0;
	operator = '';
	dot = '';

	screen.innerText = result;
}

//表示をリセットする関数
function allClear(){
	var screen = document.getElementById('span_screen');
	value1 = 0;
	value2 = 0;
	result = 0;
	operator = '';
	dot = '';

	screen.innerText = value1;
}

//表示を右から削除していく関数
function deleteNumber(){
	var screen = document.getElementById('span_screen');
	result = 0;

	if(operator !== ''){
		value2 = Math.floor(value2/10);

		screen.innerText = value2;
	}else{
		value1 = Math.floor(value1/10);

		screen.innerText = value1;
	}
}

function checkOrderOfNumber(number){
	var stringNumber = String(number);
	var syousuu = stringNumber.split('.');

	if(syousuu.length <= 1){
		return 0;
	}else{
		return syousuu[1].length;
	}
}
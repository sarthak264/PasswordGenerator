const lowerCaseBox = document.getElementById("lowercase")
const upperCaseBox = document.getElementById("uppercase")
const numberBox = document.getElementById("numbers")
const symbolsBox = document.getElementById("symbols")

const lengthSlider = document.getElementById('slider')
const lengthDisplay = document.getElementById('length')
const passwordStrength = document.getElementById('password-strength')
const passwordStrengthImg = document.getElementById('strength-img')
const passwordContainer = document.querySelector('.password-container')
const refreshBtn = document.getElementById('refresh')
const input = document.getElementById('password-input')

let passwordLength = lengthSlider.value;
let characters = "";

lengthSlider.addEventListener('input',()=>{
    passwordLength = lengthSlider.value;
    displayLength();
    passwordStrengthChange();
    passwordStrengthImgChange();
    containerColorChange();
    generatePassword();
})

// refreshBtn.addEventListener('click',generatePassword());

function displayLength(){
    lengthDisplay.textContent = passwordLength;
}
function passwordStrengthChange(){
    if(passwordLength<8){
        passwordStrength.textContent = 'Weak';
    }else if(passwordLength>8&&passwordLength<11){
        passwordStrength.textContent = 'Strong';
    }else if(passwordLength>13){
        passwordStrength.textContent = 'Very Strong';
    }
}
function passwordStrengthImgChange(){
    if(passwordLength<8){
        passwordStrengthImg.setAttribute('src',"images/weak.png");
    }else if(passwordLength>8&&passwordLength<11){
        passwordStrengthImg.setAttribute('src',"images/strong.png");
    }else if(passwordLength>13){
        passwordStrengthImg.setAttribute('src',"images/very strong.png");
    }
}
function containerColorChange(){
    if(passwordLength<8){
        passwordContainer.style.background='tomato';
    }else if(passwordLength>8&&passwordLength<11){
        passwordContainer.style.background='skyblue';
    }else if(passwordLength>13){
        passwordContainer.style.background='rgba(84, 218, 106, 0.829)';
    }
}
function generatePassword(){
    passwordLength = lengthSlider.value;
    characters = "";
    if(lowerCaseBox.checked){characters+='abcdefghijklmnopqrstuvwxyz'}
    if(upperCaseBox.checked){characters+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
    if(numberBox.checked){characters+='1234567890'}
    if(symbolsBox.checked){characters+='!@#$%^&*()_+<>?{}[],./'}
    // if(lowerCaseBox.checked==0&&upperCaseBox.checked==0&&numberBox.checked==0&&symbolsBox.checked==0){
    //     input.value = "Please Select atleast one Checkbox.."
    //     break;
    // }
    let password="";
    for(i=0;i<passwordLength;i++){
        let ind_char=characters[index()]
        password+=ind_char;
    }
    input.value=password;
    // console.log(password);
}
function index(){
    return Math.floor(Math.random()*characters.length);
}

function disableOnlyCheckbox(){
	let totalChecked = [lowerCaseBox, upperCaseBox, numberBox, symbolsBox].filter(el => el.checked)
	totalChecked.forEach(el => {
		if(totalChecked.length == 1){
			el.disabled = true;
		}else{
			el.disabled = false;
		}
	})
}

[lowerCaseBox, upperCaseBox, numberBox, symbolsBox].forEach(el => {
	el.addEventListener('click', () => {
		disableOnlyCheckbox()
	})
})

function copy(){
    let copyText = document.getElementById('password-input');
    copyText.select();
    // copyText.setSelectionRange(0,9999);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}
function generatePassword(length, 
                        includeLowercase, 
                        includeUppercase, 
                        includeNumbers, 
                        includeSymbols) {
    
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = "!@#$%^&*()_-+=";
     
    let allowedChars = '';
    let password = '';

    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeUppercase ? uppercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';
   

    if (length <= 7) {
        return `Password must be at least 8 characters!`;  
    }
    if(allowedChars.length === 0){
        return `At least 1 set of characters needs to be selected`;
    }

    for(let i = 0; i < length; i++){    
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}


const passwordLength = 16;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true; 

const password = generatePassword(passwordLength, 
                                includeLowercase, 
                                includeUppercase, 
                                includeNumbers,
                                includeSymbols);

console.log(`Generated password: ${password}`);

const btn = document.getElementById("btn");

btn.onclick = function() {
   p.textContent=`Generated password: ${password}`
}
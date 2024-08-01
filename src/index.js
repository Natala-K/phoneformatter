// src/index.js
import PhoneFormatter from './phoneFormatter';

const _formattedNumber1 = PhoneFormatter.formatPhoneNumber('8 (927) 000-00-00');
const _formattedNumber2 = PhoneFormatter.formatPhoneNumber('+7 960 000 00 00');
const _formattedNumber3 = PhoneFormatter.formatPhoneNumber('+86 000 000 0000');

// Использование переменных
function useFormattedNumbers(...numbers) {
  numbers.forEach(number => {
    // Здесь вы можете делать что-то полезное с каждым номером
    console.log(number); // Закомментируйте эту строку после тестирования
  });
}

useFormattedNumbers(_formattedNumber1, _formattedNumber2, _formattedNumber3);

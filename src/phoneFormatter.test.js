// src/phoneFormatter.test.js
import PhoneFormatter from './phoneFormatter';

test('formatting Russian phone numbers', () => {
  expect(PhoneFormatter.formatPhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
  expect(PhoneFormatter.formatPhoneNumber('+7 960 000 00 00')).toBe('+79600000000');
});

test('formatting Chinese phone numbers', () => {
  expect(PhoneFormatter.formatPhoneNumber('+86 000 000 0000')).toBe('+860000000000');
});

// src/phoneFormatter.js
export default class PhoneFormatter {
  static formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/[^\d+]/g, '');
    if (cleaned.startsWith('8')) {
      return `+7${cleaned.slice(1)}`;
    }
    return cleaned;
  }
}

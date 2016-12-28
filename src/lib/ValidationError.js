export default class ValidationError extends Error {
  constructor(code = '') {
    super(ValidationError.generateMessageFromCode(code));
    this.code = code;
  }
  static generateMessageFromCode(code) {
    let message = code.split('/');
    message = message[message.length - 1].split('-');
    message[0] = `${message[0].charAt(0).toUpperCase()}${message[0].slice(1)}`;
    return `${message.join(' ')}.`;
  }
}

export default function emailValidator(email) {
    // eslint-disable-next-line
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regex.test(String(email).toLowerCase());
  }
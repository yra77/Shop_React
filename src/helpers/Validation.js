

export const EmailValidation = (email) => {

    if (email.length < 4) {
        return { message: "Email is too short", style: 'red' };
    }
    let reg = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i);
    if (!email.match(reg)) {
        return { message: "Error email. aaa@aa.aa", style: 'red' };
    }
    return { message: "Ok!", style: 'green' };
}

export const PasswordValidation = (password) => {
    if (password.length < 4) {
        return { message: "Password is too short", style: 'red' };
    }
    let reg = new RegExp(/^([A-Z]{1}[A-Za-z0-9]{0,}[0-9]{1,})/);
    if (!password.match(reg)) {
        return { message: "Requires 8 symbols at least one capital letter and numbers", style: 'red' };
    }
    return { message: "Ok!", style: 'green' };
}

export const NameValidation = (name) => {
    if (name.length < 2) {
        return { message: "Name is too short", style: 'red' };
    }
    let reg = new RegExp(/([sa-zA-Z])/);
    if (!name.match(reg)) {
        return { message: "Only letters", style: 'red' };
    }
    return { message: "Ok!", style: 'green' };
}
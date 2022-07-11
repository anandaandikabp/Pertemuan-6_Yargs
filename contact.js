const fs = require('fs');
const validator = require('validator');

// buat folder jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}
// buat file json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]','utf-8');
}

const answer = (name, email, mobile) => {
    const contact = {name,email,mobile};
    const file = fs.readFileSync('data/contacts.json','utf-8');
    const contacts = JSON.parse(file);

    // cek duplikat
    const duplikat = contacts.find(contact => contact.name === name);
        if (duplikat) {
            console.log('Sudah ada');
            return false;
        } 
    
    // validator email
    const valEmail = validator.isEmail(contact.email);
    if (valEmail == false) {
        console.log('Email tidak valid');
        return false;
    }        
    
    // validator nomor
    const valMobile = validator.isMobilePhone(contact.mobile,'id-ID');
    if (valMobile == false) {
        console.log('Nomor Salah');
        return false;
    }        

    contacts.push(contact);
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
    console.log('Thankyou');
};

module.exports = {answer};
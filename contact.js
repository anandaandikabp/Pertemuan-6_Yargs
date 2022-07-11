// const readline = require("readline");
const fs = require('fs');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

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

const question = (ask) => {
    return new Promise((resolve,reject) => {
        rl.question(ask, (inputVariable) => {
            resolve(inputVariable);
        });
    });
};

const answer = (nama, mobile, email) => {
    const contact = {nama,mobile,email};
    const file = fs.readFileSync('data/contacts.json','utf-8');
    const contacts = JSON.parse(file);

    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
        if (duplikat) {
            console.log('Sudah ada');
        } else {
            contacts.push(contact);
            fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
            console.log('Thankyou');
        }    
};

module.exports = {question, answer};
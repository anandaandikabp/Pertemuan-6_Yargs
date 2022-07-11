const contact = require('./contact');

// // program
// const main = async () => {
//     const nama = await contact.question('Nama? ');    
//     const mobile = await contact.question('Nomor HP? ');
//     const email = await contact.question('Email? ');

//     contact.answer(nama, mobile, email);
// };

// main();

const yargs = require('yargs')

yargs.command({
    command:'add',
    describe:'add new contact',
    builder:{
        name:{
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
        email:{
            describe: 'Contact Email',
            demandOption: false,
            type: 'string',
        },
        mobile:{
            describe: 'Contact Mobile Number',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contact.answer(argv.name,argv.email,argv.mobile)
    },
});

yargs.parse();



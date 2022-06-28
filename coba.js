const yargs = require('yargs');
const {simpanContact} = require('./pertanyaan')
yargs.command({
command: 'add',
describe : 'menambahkan Contact baru',
builder :{
    nama :{
        describe : 'Nama Lengkap',
        demandOption : true,
        type : "string"
    },
    email :{
        demandOption : false,
        type : "string",
        describe :"email"
    },
    noHP :{
        describe : "No HP",
        demandOption : true,
        type : "string"
    },
},
handler(argv){
simpanContact(argv.nama,argv.email,argv.noHP)
}
})
yargs.parse()













// const {simpanContact,question} = require('./pertanyaan')

//  const main = async()=>{
//   const nama = await question("Masukan Nama Anda :")
//   const nomor = await question("Masukan Nomor Anda :")
//   const email = await question("Masukan Email Anda :")
//         simpanContact(nama,nomor,email)
//  }
//  main()
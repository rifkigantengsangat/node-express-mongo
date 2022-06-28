const fs = require("fs")
const validator = require('validator')


const dirPath = './data'
if(!fs.existsSync(dirPath)){
fs.mkdirSync(dirPath);
}
const filePath = './data/contact.json'
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath,'[]',"utf-8")
}



const simpanContact = (nama,nomor,email) =>{
    const contact = {nama,nomor,email};
          const fileBuffer = fs.readFileSync("data/contact.json", "utf8");
          const contacts = JSON.parse(fileBuffer);
          const duplikat = contacts.find(contact => contact.nama ===nama)
          if(duplikat){
            console.log("masukan Nama Lain nama itu dah ada bego")
            return false
          }
        if(email){
            if(!validator.isEmail(email)){
         console.log("email tidak Valid")
         return false
            }
        }
        if(!validator.isMobilePhone(nomor,'id-ID')){
            console.log("mobile phone tidak Valid")
            return false;
        }
          contacts.push(contact);
           fs.writeFileSync("data/contact.json",JSON.stringify(contacts));
           console.log("terimaKasih sudah Memasukan Data Diri Anda");
  
 
}

module.exports = {simpanContact};
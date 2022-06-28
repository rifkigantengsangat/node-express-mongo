const fs = require('fs');

// try {
//     fs.writeFileSync ("data/test.txt", "utf8");
// } catch (error) {
//     console.log(error)
// }

//tulis string secara async
// fs.writeFile("data/text.txt", "utf8",(e)=>{
//  console.log(e)
// });

// const data = fs.readFileSync("data/test.txt",'utf-8',(e)=>{
//     console.log(e);
// })
// console.log(data.toString());

// const asyn = fs.readFile('data/test.txt','utf-8',(err, data)=>{
//   if(err) throw err;
//   console.log(data)
// })
// console.log(asyn);
// console.log("readfile callled")

const readline =  require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout

});
const question1 = ()=>{
    return new Promise((resolve, reject)=>{
        rl.question("siapa Nama anda :", (nama)=>{
          fs.readFile("data/info.json","utf8",(error,data)=>{
            if(error)throw error;
            
          })
            resolve();
        })
    })
}

const question2 =()=> {
    return new Promise((resolve, reject) => {
        rl.question("berapa Umur Anda",(umur)=>{
            const num = Number(umur);
            if(num <18){
                console.log(`umur anda ${num} belum mencukupi`)
            }else{
                console.log(`umur anda ${num} sudah  mencukup`)
            }
            resolve()
        })
    
    })
}

const main= async () => {
     await question1()
    await question2()
    rl.close()
}
main()
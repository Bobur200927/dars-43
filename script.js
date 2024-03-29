
// ? ============================== Vaqt bilan ishlash =================================

// =============== Vaqt =====================
// SETTIMEOUT, SETINTERVAL, CLEARINTERVAL

// setTimeout(()=>{
//     console.log('Salom dunyo');
// }, 5000)

// let a = setInterval(()=>{
//     console.log('a');

//     setTimeout(()=>{
//         clearInterval(a)
//     }, 5000)
// }, 1000)


// ================== Sana ===================

// let d = new Date()
let d = new Date('12-31-2002')
console.log(d);
console.log(d.getDate());         //sana
console.log(d.getDay());          //Hafta kuni
console.log(d.getMonth());        //Oy
console.log(d.getFullYear());     //yil
console.log(d.getHours());        //soat
console.log(d.getMinutes());      //minut
console.log(d.getMilliseconds()); //Millisekund
console.log(d.getSeconds());      //sekund
console.log(d.getTime());         //millisekund - 1970-01-01-00:00:01


// ? ========== Vazifa ===========

let h = document.querySelector('h1')
let p = document.querySelector('p')
setInterval(() => {
    let currentTime = new Date()
    p.innerHTML = `
    ${(currentTime.getDate() < 10) 
        ? '0' + currentTime.getDate() 
        :currentTime.getDate()}/${(currentTime.getMonth() < 10) 
            ? "0" + (currentTime.getMonth() + 1) 
            : currentTime.getMonth()}/${currentTime.getFullYear()}`
    h.innerHTML = `
    ${(currentTime.getHours() < 10) 
        ? "0" + currentTime.getHours() 
        : currentTime.getHours()}:${(currentTime.getMinutes() < 10) 
            ? "0" + currentTime.getMinutes() 
            : currentTime.getMinutes()}<sup>${(currentTime.getSeconds() < 10) 
                ? "0" + currentTime.getSeconds() 
                : currentTime.getSeconds()}</sup>`
}, 1000);
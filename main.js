// const imgs = document.getElementById('imgs')
// const letfBtn = document.getElementById('left')
// const rightBtn = document.getElementById('right')

// const img =document.querySelectorAll('#imgs  img') //QuarySelector ni uzini ishlatadigan bulsak u holda bitta rasm ning code lari chiqib keladi ammo QuarySelectorAll ni ishlatadigan bulsak unda console da  object holda bizga barcha rasmni chiqarib beradi
// console.log(img); //Bu ish orqali biz nechta rasm kelayotganini aniqlab olamiz ....

// let idx = 0; //idx ning qiymati 0 va shuning uchun u ++ yoki -- qilib ishlatilgan ... Agarda biz unga 2 qiymat beradigan bulsak unda 1-refresh dan so'ng u 1 marta next bosilganda 2 ta rasmga sakraydi va undan keyin tuxtaydi ya'ni avvalgidek bittalab uta boshlaydi ...

// function changeImage(){//Bu yerdagi pastda css ichidagi transform translateX chaqirib olingan ...  va usha ni chaqirib unga 500 qiymat berilgan 
//     if(idx > img.length - 1){
//         idx = 0 ;
//     }else if (idx < 0 ){
//        idx =  img.length - 1
      
//     }
//     imgs.style.transform = `translateX(${-idx * 500}px)`; //Agar biz telda ni ichida gi idx ga - berib quymasak unda u teskari bajaradi ya'ni oldin bosilganda orqaga orqa bosilganda oldinga ishlaydi ....

// }

// rightBtn.addEventListener('click' , function change(){ //Bu yerda ham ixtiyoriy function ishlatilgan chunki code ishlashi uchun kerak change esa universal funksiya hisoblanadi ....
//     idx++
//     changeImage()
// })//Bunday holda rasmlarning utib turganini sababi bu idx++ da ya'ni bitta bitta + 500 qushib tur degan ma'noni bildiradi ...
// letfBtn.addEventListener('click' , function change(){//Event qushish ya'ni biror narsani ustiga bosilganda biror nima bulishi uchun yoki ma'lum bir ishni osonlashtirish uchun xizmat qiladi ...
//     idx--
//     changeImage()
// }) 
// let interval = setInterval(run ,2000) //Buning vazifasi har ikki sekund da utqazib boraverish uchun yordam beradi .. interval setInterval ga ta'minlab quyilgan 
// function run(){
//     idx++
//     changeImage()
// } //run 2000 ga ya'ni 2 sekundga ta'minlangani uchun funksiya ichida idx ++ berilgab chunki usha 2 sekund ichida utkazib turish uchun ... va changeImage() chaqirib quyilgan ..

let idx = 0
window.addEventListener("load", () =>{
    let imgs = document.querySelectorAll("img")
    console.log(imgs)
    imgs.forEach((item) => {
        console.log(item)
        console.log(item.src)
        document.getElementById("right").addEventListener("click", () => {
            console.log(imgs[0])
            imgs[0].src = 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg'
            document.getElementById("left").addEventListener("click", () =>{
                if(imgs[0].src = 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg'){
                imgs[0].src = 'images/photo_2021-07-08_00-39-52.jpg'
                }
            })
            let rightBtn = document.getElementById("right")
            rightBtn.onclick = function(){
                if(imgs[0].src = 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg'){
                imgs[0].src = 'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                document.getElementById("left").addEventListener("click", () => {
                    if(imgs[0].src = 'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'){
                        imgs[0].src = 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg'   
                    }
                })
            }
            }
            
        })
    })
})
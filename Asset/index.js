const dataa = {
    "1" : {
        name : "Cappuccino",
        img : "https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price : "เลือก"
    },
    "2" : {
        name : "Green Tea",
        img : "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price : "เลือก"
    },
    "3" : {
        name : "Orange Juice",
        img : "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price : "เลือก"
    },
    "4" : {
        name : "Lemonade",
        img : "https://images.unsplash.com/photo-1575596510825-f748919a2bf7?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price : "เลือก"
    },
    "5" : {
        name : "Mango Juice",
        img : "https://images.unsplash.com/photo-1623400518626-6ea9ab64c5ec?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price : "เลือก"
    },
    "6" : {
        name : "Apple Juice",
        img : "https://images.unsplash.com/photo-1575159240102-4331f59433ac?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price : "เลือก"
    },
    "7" : {
        name : "Iced Chocolate",
        img : "https://images.unsplash.com/photo-1515316416554-1af1fbca57a2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price : "เลือก"
    },
    "8" : {
        name : "Caramel Latte",
        img : "https://images.unsplash.com/photo-1649780567041-344d8f485e74?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price : "เลือก"
    },
    "9" : {
        name : "Lemon Iced Tea",
        img : "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price : "เลือก"
    },
    "10" : {
        name : "Milkshake",
        img : "https://images.unsplash.com/photo-1502719414926-613118be79d3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price : "เลือก"
    }

}

let _page = 1
let user = 0
const data1 = []
const data2 = []
const data3 = []

function page() {

    
    document.getElementById('process').style.display = 'none'

    if (_page == 1) {
        document.getElementById('body-container').style.display = 'block'
        document.getElementById('payment').style.display = 'none'
        document.getElementById('money').style.display = 'none'
    } else if (_page == 2) {
        document.getElementById('body-container').style.display = 'none'
        document.getElementById('payment').style.display = 'block'
        document.getElementById('money').style.display = 'none'

        //console.log(dataa[user])
        document.getElementById('title-img').src = dataa[user].img
        document.getElementById('title-name').innerText = dataa[user].name

    } else if (_page == 3) {
        document.getElementById('body-container').style.display = 'none'
        document.getElementById('payment').style.display = 'none'
        document.getElementById('money-container').style.display = 'flex'
       
        document.getElementById('money').style.display = 'block'


        // console.log(data1)
        // console.log(data2)
        // console.log(data3)
        

        document.getElementById('money-btn').style.display = 'block'
        
        document.getElementById('qr').style.display = 'none'


        document.getElementById('money-title').innerText = dataa[user].name

        const bodytable1 = document.getElementById('sugar')
        const bodytable2 = document.getElementById('topping')
        const bodytable3 = document.getElementById('size')


        data1.forEach(element => {
            const tr1 = document.createElement('tr')
            const td1 = document.createElement('td')
            const li1 = document.createElement('li')
            const td11 = document.createElement('td')

            li1.innerText = element

            tr1.id = "temp"
            td1.id = "temp"
            li1.id = "temp"
            td11.id = "temp"

            td1.append(li1)

            
            td11.innerText = "x1"

            tr1.append(td1, td11)
            bodytable1.append(tr1)
        });
        data2.forEach(element => {
            const tr2 = document.createElement('tr')

            const td2 = document.createElement('td')
            const li2 = document.createElement('li')
            const td22 = document.createElement('td')
            li2.innerText = element
           

            

            tr2.id = "temp"
            td2.id = "temp"
            li2.id = "temp"
            td22.id = "temp"

            td2.append(li2)
            td22.innerText = "x1"

            tr2.append(td2, td22)
            bodytable2.append(tr2)
        });
        data3.forEach(element => {
            const tr3 = document.createElement('tr')
            const td33 = document.createElement('td')
            const td3 = document.createElement('td')
            const li3 = document.createElement('li')
            li3.innerText = element
           
            tr3.id = "temp"
            td3.id = "temp"
            li3.id = "temp"
            td33.id = "temp"
            
            td33.innerText = "x1"
            td3.append(li3)
            tr3.append(td3, td33)
            bodytable3.append(tr3)
        });


    }
}
function mainBtn(x, y) {
    _page = x
    user = y
    //console.log(user)
    page()
}


function qR(x) {
   

    document.getElementById('qr').style.display = 'block'
    document.getElementById('btn-a-qrr').style.display = 'flex'

    if (x == 1) {
        document.getElementById('wallet').style.display = 'flex'
        document.getElementById('promptpay').style.display = 'none'
        document.getElementById('cash').style.display = 'none'

    } else if (x == 2) {
        document.getElementById('wallet').style.display = 'none'
        document.getElementById('promptpay').style.display = 'flex'
        document.getElementById('cash').style.display = 'none'

    } else if (x == 3) {
        document.getElementById('wallet').style.display = 'none'
        document.getElementById('promptpay').style.display = 'none'
        document.getElementById('cash').style.display = 'flex'

    }

    document.getElementById('money-btn').style.display = 'none'
}

function toPro() {

    document.getElementById('money-container').style.display = 'none'
    document.getElementById('process').style.display = 'flex'

    setTimeout(() => {
        document.getElementById('process').style.display = 'none'
        document.getElementById('thx').style.display = 'flex'
    }, 8500)
    
    setTimeout(() => {
        
        document.getElementById('thx').style.display = 'none'
        document.getElementById('money').style.display = 'none'
        document.getElementById('body-container').style.display = 'block'
        reset()
    }, 10500)

}



function onLoad() {
    
    const keys = Object.keys(dataa);
    const randomBeverages = [];

    function getRandomKeyWithoutDuplicates() {
        if (keys.length === 0) {
            keys = Object.keys(dataa);
        }

        const randomIndex = Math.floor(Math.random() * keys.length);
        const randomKey = keys.splice(randomIndex, 1)[0]; // Remove the selected key

        return randomKey;
    }

    for (let i = 0; i < 7; i++) {
        const randomKey = getRandomKeyWithoutDuplicates();
        const randomValue = dataa[randomKey];
        const randomBeverage = { [randomKey]: randomValue };
        randomBeverages.push(randomBeverage);
    }

    
    // randomBeverages.forEach(element => {
    //     const bodySec1 = document.createElement('div')
    //     const bodyImgSec1 = document.createElement('div')
    //     const imgSec1 = document.createElement('img')
    //     const divTitle = document.createElement('div')
    //     const pSec1 = document.createElement('p')

    //     bodySec1.className = "section1-items"
    //     bodyImgSec1.className = "section1-img"
    //     imgSec1.alt = "advice-img.png"
    //     imgSec1.src = Object.values(element)[0].img

    //     divTitle.className = "section1-title"

    //     pSec1.innerText = Object.values(element)[0].name

    //     bodyImgSec1.append(imgSec1)

    //     divTitle.append(pSec1)

    //     bodySec1.append(bodyImgSec1, divTitle)

    //     iDSec1.append(bodySec1)
    
    // });
    




    
    document.addEventListener("DOMContentLoaded", function () {

        document.getElementById('payment').style.display = "none"  //dev
        document.getElementById('body-container').style.display = "block"
        document.getElementById('money').style.display = "none"

        document.getElementById('thx').style.display = 'none'
        document.getElementById('process').style.display = 'none'
        document.getElementById('wallet').style.display = 'none'
        document.getElementById('promptpay').style.display = 'none'
        document.getElementById('cash').style.display = 'none'
        document.getElementById('btn-a-qrr').style.display = 'none'


        const iDSec1 = document.getElementById("section1-content")

        for (k of randomBeverages) {
            const bodySec1 = document.createElement('div')
            const bodyImgSec1 = document.createElement('div')
            const imgSec1 = document.createElement('img')
            const divTitle = document.createElement('div')
            const pSec1 = document.createElement('p')

            bodySec1.className = "section1-items"
            bodySec1.id = Object.keys(k)
            bodySec1.onclick = function() {
                mainBtn(2, this.id)
            }

            bodyImgSec1.className = "section1-img"
            imgSec1.alt = "advice-img.png"
            imgSec1.src = Object.values(k)[0].img

            divTitle.className = "section1-title"

            pSec1.innerText = Object.values(k)[0].name

            bodyImgSec1.append(imgSec1)

            divTitle.append(pSec1)

            bodySec1.append(bodyImgSec1, divTitle)

            iDSec1.append(bodySec1)
        }

        for (const key in dataa) {
            if (dataa.hasOwnProperty(key)) {
                const body = document.getElementById("section2-content");
                const bodyItem = document.createElement("div");
                const itemImg = document.createElement("div");
                const itemBtn = document.createElement("div");
                const img = document.createElement("img");
                const btn = document.createElement("button");
                const p = document.createElement('p');

                img.src = dataa[key].img;
                img.alt = "product.png";
                img.loading = "lazy";

                p.innerText = dataa[key].name;

                btn.innerHTML = dataa[key].price + " &#43;";
                btn.id = key
                btn.onclick = function() {
                    mainBtn(2, this.id)
                }

                bodyItem.className = "section2-items";
                itemImg.className = "section2-img";
                itemBtn.className = "section2-btn";

                itemBtn.appendChild(p);
                itemBtn.appendChild(btn);

                itemImg.appendChild(img);

                bodyItem.appendChild(itemImg);
                bodyItem.appendChild(itemBtn);

                body.appendChild(bodyItem);
            }
        }
    });
}
onLoad();

function func() {
    onLoad();
}

function reset() {
    const c1 = document.querySelectorAll('.ks1 input[type="checkbox"]')
    const c2 = document.querySelectorAll('.ks2 input[type="checkbox"]')
    const c3 = document.querySelectorAll('.ks3 input[type="checkbox"]')
    const qq = document.querySelectorAll("#temp")

    //console.log(qq)
    qq.forEach(el => {
        el.remove()
    })

    c1.forEach(element => {
        if (element.checked) {
            element.checked = false
        }
    });
    c2.forEach(element => {
        if (element.checked) {
            element.checked = false
        }
    });
    c3.forEach(element => {
        if (element.checked) {
            element.checked = false
        }
    });
}

function process() {
    const val1 = document.querySelectorAll('.ks1 input[type="checkbox"]')
    const val2 = document.querySelectorAll('.ks2 input[type="checkbox"]')
    const val3 = document.querySelectorAll('.ks3 input[type="checkbox"]')

    data1.length = 0
    data2.length = 0
    data3.length = 0
    val1.forEach(element => {
        if (element.checked) {
            data1.push(element.value)
        }
    });
   
    val2.forEach(element => {
        if (element.checked) {
            data2.push(element.value)
        }
    });
    
    val3.forEach(element => {
        if (element.checked) {
            data3.push(element.value)
        }
    });

    mainBtn(3, user)
}


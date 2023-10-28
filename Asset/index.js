const dataa = {
    "1" : {
        name : "ช็อคโกแลต",
        img : "https://i.ibb.co/zmVw3cW/395484602-2579720795516096-7106945139039781924-n.jpg",
        price : "เลือก"
    },
    "2" : {
        name : "มัจฉะ",
        img : "https://i.ibb.co/V3pNmKj/395335335-659992379608634-4210268904429680094-n.jpg",
        price : "เลือก"
    },
    "3" : {
        name : "นม",
        img : "https://i.ibb.co/qmMG9Cz/395602323-146658375176964-6995561933296706444-n.jpg",
        price : "เลือก"
    }
}
const productAdvice = {
    "1" : {
        name : "ช็อคโก้ดับเบิ้ลช็อก",
        img : "https://i.ibb.co/ck1wcGy/396513004-324839000194199-634570417577241155-n.jpg",
        price : "79",
        ingredient : ["ช็อคโกแลต"]
    },
    "2" : {
        name : "นมฮอกไกโดบุกบราวชูก้า",
        img : "https://i.ibb.co/w0JPcVf/395511584-826706265810985-8656128346704444592-n.jpg",
        price : "79",
        ingredient : ["มุกบุก"]
    },
    "3" : {
        name : "มัจฉะนมโมจิสตอเบอร์รี่",
        img : "https://i.ibb.co/rxQTXZn/393426069-1456986588198569-7041280943955321738-n.jpg",
        price : "79",
        ingredient : ["สตอเบอร์รี่"]
    },
}

let _page = 1
let user = 0
let sumPrice = 0
let advice = 0
const data1 = []
const data2 = []
const data3 = []

function page() {

    
    document.getElementById('process').style.display = 'none'

    if (_page == 1) {
       
        document.getElementById('body-container').style.display = 'block'
        document.getElementById('payment').style.display = 'none'
        document.getElementById('money').style.display = 'none'

        advice = 0
        const checkB = document.querySelectorAll('input[type=checkbox]')
        checkB.forEach(element => {
            element.checked = false
            element.disabled = false
        });
    } else if (_page == 2) {
        document.getElementById('body-container').style.display = 'none'
        document.getElementById('payment').style.display = 'block'
        document.getElementById('money').style.display = 'none'

        //document.getElementById('pay-alert1').style.display = 'none'
        document.getElementById('pay-alert2').style.display = 'none'
        document.getElementById('pay-alert3').style.display = 'none'
        
        //console.log(dataa[user])
        //console.log(productAdvice[user].img)
        if (advice == 0) {
            document.getElementById('title-img').src = dataa[user].img
            document.getElementById('title-name').innerText = dataa[user].name
        } else {
            document.getElementById('title-img').src = productAdvice[user].img
            document.getElementById('title-name').innerText = productAdvice[user].name

            const checkB = document.querySelectorAll('input[type=checkbox]')
            //console.log(checkB)
            if (checkB[20].id == "XL" || checkB[20].id == "L" || checkB[20].id == "M") {
                document.getElementById("M").disabled = true
                document.getElementById("L").disabled = true
                document.getElementById("XL").disabled = true
                
                document.getElementById("L").checked = true

                checkB.forEach(element => {
                    if (element.value == productAdvice[user].ingredient) {
                        element.checked = true
                        element.disabled = true
                    }
                });
            } else {
                document.getElementById("M").disabled = false
                document.getElementById("L").disabled = false
                document.getElementById("XL").disabled = false
            }
        }

        
        

        

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

        

        
        data2.forEach(element => {

            sumPrice += 10
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

            if (element == "M") {
                sumPrice += 69
                li3.innerHTML = element + " <em>(ฟรีท็อปปิ้ง 1 รายการ)</em>"
            } else if (element == "L") {
                sumPrice += 79
                li3.innerHTML = element + " <em>(ฟรีท็อปปิ้ง 2 รายการ)</em>"
            } else if (element == "XL") {
                sumPrice += 89
                li3.innerHTML = element + " <em>(ฟรีท็อปปิ้ง 3 รายการ)</em>"
            }
            
           
            tr3.id = "temp"
            td3.id = "temp"
            li3.id = "temp"
            td33.id = "temp"
            
            td33.innerText = "x1"
            td3.append(li3)
            tr3.append(td3, td33)
            bodytable3.append(tr3)
        });

        const tr1 = document.createElement('tr')
        const td1 = document.createElement('td')
        const li1 = document.createElement('li')
        const td11 = document.createElement('td')

        if (data3[0] == "M") {
            if (data2.length <= 1) {
                sumPrice -= 10
            } else {
                sumPrice -= 10
            }
        } else if (data3[0] == "L") {
            if (data2.length <= 2) {
                if (data2.length == 1) {
                    sumPrice -= 10
                }else {
                    sumPrice -= 20
                } 
            } else {
                sumPrice -= 20
            }
        } else if (data3[0] == "XL") {
            if (data2.length <= 3) {
                if (data2.length == 1) {
                    sumPrice -= 10
                }else if (data2.length == 2) {
                    sumPrice -= 20
                } else {
                    sumPrice -= 30
                } 
            } else {
                sumPrice -= 30
            }
        }
        
        

        li1.innerHTML = sumPrice + " &#3647;"

        tr1.id = "temp"
        td1.id = "temp"
        li1.id = "temp"
        td11.id = "temp"

        td1.append(li1)

        
        td11.innerText = "x1"

        tr1.append(td1)
        bodytable1.append(tr1)
        

    }
}
function mainBtn(x, y) {
    _page = x
    user = y
    //console.log(user)
    page()
}


function qR(x) {
   
    document.getElementById('sum-cash').innerHTML = sumPrice + " &#3647;"
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
    document.getElementById('process-title').innerText = 'กำลังดำเนินการ ...'
    document.getElementById('money-container').style.display = 'none'
    document.getElementById('process').style.display = 'flex'
    sumPrice = 0
    advice = 0

    const checkB = document.querySelectorAll('input[type=checkbox]')
    checkB.forEach(element => {
        element.checked = false
        element.disabled = false
    });
    
    setTimeout(() => {
        document.getElementById('process-title').innerText = 'กรุณารับสินค้า'
    }, 8500)
    setTimeout(() => {
        document.getElementById('process').style.display = 'none'
        document.getElementById('thx').style.display = 'flex'
        
    }, 12500)
    
    
    setTimeout(() => {
        
        document.getElementById('thx').style.display = 'none'
        document.getElementById('money').style.display = 'none'
        document.getElementById('body-container').style.display = 'block'
        reset()
    }, 13600)

}



function onLoad() {
    
    const keys = Object.keys(dataa);
    const randomBeverages = [];

    // function getRandomKeyWithoutDuplicates() {
    //     if (keys.length === 0) {
    //         keys = Object.keys(dataa);
    //     }

    //     const randomIndex = Math.floor(Math.random() * keys.length);
    //     const randomKey = keys.splice(randomIndex, 1)[0]; // Remove the selected key

    //     return randomKey;
    // }

    // for (let i = 0; i < 7; i++) {
    //     const randomKey = getRandomKeyWithoutDuplicates();
    //     const randomValue = dataa[randomKey];
    //     const randomBeverage = { [randomKey]: randomValue };
    //     randomBeverages.push(randomBeverage);
    // }

    
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

        for (k in productAdvice) {
            
            const bodySec1 = document.createElement('div')
            const bodyImgSec1 = document.createElement('div')
            const imgSec1 = document.createElement('img')
            const divTitle = document.createElement('div')
            const pSec1 = document.createElement('p')
            const price1 = document.createElement('div')

            price1.className = "section1-price"

            price1.innerHTML = productAdvice[k].price + " &#3647;"

            bodySec1.className = "section1-items"
            bodySec1.id = k
            bodySec1.onclick = function() {
                advice = 1
                mainBtn(2, this.id)
            }

            bodyImgSec1.className = "section1-img"
            imgSec1.alt = "advice-img.png"
            imgSec1.src = productAdvice[k].img

            divTitle.className = "section1-title"

            pSec1.innerText = productAdvice[k].name

            bodyImgSec1.append(imgSec1)

            divTitle.append(pSec1)

            bodySec1.append(bodyImgSec1, price1,divTitle)

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

    // document.getElementById('pay-alert1').style.display = 'none'
    document.getElementById('pay-alert2').style.display = 'none'
    document.getElementById('pay-alert3').style.display = 'none'

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

    if (data2.length == 0) {
        document.getElementById('pay-alert2').style.display = 'block'
    } else if (data3.length == 0) {
        document.getElementById('pay-alert3').style.display = 'block'
    } else {
        mainBtn(3, user)

    }
        
    
    
    
}

function uncheckOthers(checkbox) {
    //console.log(checkbox)
    
    if (checkbox.checked) {
        const checkboxes = document.getElementsByName('option');
        checkboxes.forEach((box) => {
            if (box !== checkbox) {
                box.checked = false;
            }
        });
    }
}
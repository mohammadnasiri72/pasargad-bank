// var date = new Date
// var time = date.getDate()
// console.log(time);


const iconSearch = document.querySelector(".icon-search")
const boxInputSearch = document.querySelector(".box-input-search")
const menuItemBox = document.querySelector(".menu-item-box")
var flagInput = 0
iconSearch.addEventListener("click", function () {
    if (flagInput == 0) {
        menuItemBox.classList.add("d-none")
        boxInputSearch.classList.remove("d-none")
        iconSearch.innerHTML = "close"
        flagInput = 1
    } else if (flagInput == 1) {
        menuItemBox.classList.remove("d-none")
        boxInputSearch.classList.add("d-none")
        iconSearch.innerHTML = "search"
        flagInput = 0
    }
})


const menuItem = document.querySelectorAll(".menu-link")
const arrowBox = document.querySelectorAll(".arrow-box")
const overMenu = document.querySelector(".over-menu")

menuItem.forEach(function (e, i) {

    e.addEventListener("mouseenter", function () {
        e.style.color = "#fcb92d"
        e.style.borderTop = "1px solid #fcb92d"

        if (i == 1) {
            overMenu.style.height = "500px"
            arrowBox[0].style.display = "block"
            overMenu.innerHTML = ""
            overMenu.innerHTML = `
            <div class="box-link-over-menu">
            <p class="text-over-menu arrow-over-menu"><a href="">سپرده‌ها</a><span class="material-symbols-outlined icon-arrow-left">chevron_left</span></p>
            <p class="text-over-menu arrow-over-menu"><a href="">تسهیلات و تعهدات</a><span class="material-symbols-outlined icon-arrow-left">chevron_left</span></p>
            <p class="text-over-menu arrow-over-menu"><a href="">امور ارزی</a><span class="material-symbols-outlined icon-arrow-left">chevron_left</span></p>
            <p class="text-over-menu arrow-over-menu"><a href="">خدمات ریالی</a><span class="material-symbols-outlined icon-arrow-left">chevron_left</span></p>
            <p class="text-over-menu arrow-over-menu"><a href="">محاسبات و بروشورها</a><span class="material-symbols-outlined icon-arrow-left">chevron_left</span></p>
            <p class="text-over-menu"><a href="">قانون جدید چک</a></p>
            <p class="text-over-menu"><a href="">صندوق امانات</a></p>
            <p class="text-over-menu"><a href="">بانکداری شرکتی</a></p>
            <p class="text-over-menu"><a href="">بانکداری اختصاصی</a></p>
            </div>
            <div class ="over-over-menu">

            </div>
            <div class="box-img-over-menu">
            <img class="img1-over-menu" src="assets/img/1.jpg" alt="">
            </div>
            `
            const overOverMenu = document.querySelector(".over-over-menu")
            const arrOverMenu = document.querySelectorAll(".arrow-over-menu")
            arrOverMenu.forEach(function (e, j) {
                e.addEventListener("mouseenter", function () {
                    overOverMenu.style.width = "35%"
                    if (j == 0) {
                        overOverMenu.innerHTML = `
                        <p class="text-over-over-menu"><a href="">معرفی انواع سپرده‌ها</a></p>
                        <p class="text-over-over-menu"><a href="">سپرده قرض‌الحسنه جاری</a></p>
                        <p class="text-over-over-menu"><a href="">سپرده قرض‌الحسنه پس‌انداز</a></p>
                        <p class="text-over-over-menu"><a href="">سپرده سرمایه‌گذاری کوتاه مدت</a></p>
                        <p class="text-over-over-menu"><a href="">سپرده‌های کوتاه مدت ویژه 3 ماهه و 6 ماهه</a></p>
                        <p class="text-over-over-menu"><a href="">سپرده سرمایه‌گذاری بلند مدت یک ساله</a></p>
                        <p class="text-over-over-menu"><a href="">سپرده سرمایه‌گذاری بلند مدت 2 ساله</a></p>
                        <p class="text-over-over-menu"><a href="">گواهی سپرده مدت دار ويژه سرمايه گذاری خاص</a></p>
                        <p class="text-over-over-menu"><a href="">گواهی سپرده مدت دار ويژه سرمايه گذاری عام</a></p>
                        <p class="text-over-over-menu"><a href="">سپرده ویژه معاملات آنلاین سهام</a></p>
                        <p class="text-over-over-menu"><a href="">سپرده دانش‌آموزی</a></p>
                        `
                    } else if (j == 1) {
                        overOverMenu.innerHTML = `
                        <p class="text-over-over-menu"><a href="">بسته حمایتی ویژه</a></p>
                        <p class="text-over-over-menu"><a href="">مشارکت مدنی</a></p>
                        <p class="text-over-over-menu"><a href="">ضمانت نامه بانکی</a></p>
                        <p class="text-over-over-menu"><a href="">مضاربه</a></p>
                        <p class="text-over-over-menu"><a href="">جعاله</a></p>
                        <p class="text-over-over-menu"><a href="">خرید آنلاین اقساطی بانک‌پاسارگاد</a></p>
                        <p class="text-over-over-menu"><a href="">کاپ کارت (کارت اعتباری پاسارگاد)</a></p>
                        `
                    } else if (j == 2) {
                        overOverMenu.innerHTML = `
                        <p class="text-over-over-menu"><a href="">حساب‌های ارزی قابل افتتاح در بانک پاسارگاد</a></p>
                        <p class="text-over-over-menu"><a href="">انتقال وجوه ارزی از محل حساب مشتریان</a></p>
                        <p class="text-over-over-menu"><a href="">تأییدیه موجودی لاتین و فارسی و صورتحساب لاتین</a></p>
                        <p class="text-over-over-menu"><a href="">دریافت و پرداخت اسکناس ارزی</a></p>
                        <p class="text-over-over-menu"><a href="">خرید ارز غیربازرگانی از مشتریان</a></p>
                        <p class="text-over-over-menu"><a href="">راهنمای افتتاح حساب ایرانیان خارج از کشور</a></p>
                        <p class="text-over-over-menu"><a href="">راهنمای استفاده از خطوط اعتباری فاینانس</a></p>
                        <p class="text-over-over-menu"><a href="">نرخ ارز</a></p>
                        
                        `
                    } else if (j == 3) {
                        overOverMenu.innerHTML = `
                        <p class="text-over-over-menu"><a href="">افتتاح حساب ایرانیان خارج از کشور</a></p>            
                        `
                    } else if (j == 4) {
                        overOverMenu.innerHTML = `
                        <p class="text-over-over-menu"><a href="">محاسبه سود سپرده های ریالی</a></p>
                        <p class="text-over-over-menu"><a href="">محاسبه مبلغ مورد نیاز برای سودی خاص</a></p>
                        <p class="text-over-over-menu"><a href="">محاسبات تسهیلات</a></p>
                        <p class="text-over-over-menu"><a href="">محاسبه شماره حساب ایران(شبا)</a></p>
                        <p class="text-over-over-menu"><a href="">بروشور و فایل های راهنما</a></p>
                        <p class="text-over-over-menu"><a href="">مبدل ارز</a></p>
                        
                        
                        `
                    }
                })
                e.addEventListener("mouseleave", function () {
                    overOverMenu.style.width = "0"
                })
                overOverMenu.addEventListener("mouseenter", function () {
                    overOverMenu.style.width = "35%"
                })
                overOverMenu.addEventListener("mouseleave", function () {
                    overOverMenu.style.width = "0"
                })
            })

            overMenu.addEventListener("mouseenter", function () {
                overMenu.style.height = "500px"
                menuItem.forEach(function (e) {
                    e.style.color = "white"
                    e.style.borderTop = "none"
                })
                arrowBox.forEach(function (e) {
                    e.style.display = "none"
                })
                arrowBox[0].style.display = "block"
                e.style.color = "#fcb92d"
                e.style.borderTop = "1px solid #fcb92d"









            })
            overMenu.addEventListener("mouseleave", function () {
                arrowBox.forEach(function (e) {
                    e.style.display = "none"
                })
                overMenu.style.height = "0"
                menuItem.forEach(function (e) {
                    e.style.color = "white"
                    e.style.borderTop = "none"
                })
            })
        } else if (i == 2) {
            overMenu.style.height = "400px"
            arrowBox.forEach(function (e) {
                e.style.display = "none"
            })
            arrowBox[1].style.display = "block"
            overMenu.innerHTML = ""
            overMenu.innerHTML = `
            <div class="box-link-over-menu">
                <p class="text-over-menu"><a href="">بانکداری مجازی</a></p>
                <p class="text-over-menu arrow-over-menu"><a href="">مبتنی بر موبایل</a><span class="material-symbols-outlined icon-arrow-left">chevron_left</span></p>
                <p class="text-over-menu arrow-over-menu"><a href="">مبتنی بر کارت</a><span class="material-symbols-outlined icon-arrow-left">chevron_left</span></p>
                <p class="text-over-menu arrow-over-menu"><a href="">مبتنی بر تلفن</a><span class="material-symbols-outlined icon-arrow-left">chevron_left</span></p>
                <p class="text-over-menu"><a href="">سرزمین هوشمند پاد</a></p>
                <p class="text-over-menu"><a href="">درگاه پرداخت اینترنتی</a></p>
                <p class="text-over-menu"><a href="">سامانه پیوند بانک مرکزی</a></p>
            </div>
            <div class ="over-over-menu">

            </div>
            <div class="box-img-over-menu">
                <img class="img1-over-menu" src="assets/img/2.jpg" alt="">
            </div>
            `
            const overOverMenu = document.querySelector(".over-over-menu")
            const arrOverMenu = document.querySelectorAll(".arrow-over-menu")
            arrOverMenu.forEach(function (e, j) {
                e.addEventListener("mouseenter", function () {
                    overOverMenu.style.width = "35%"
                    if (j == 0) {
                        overOverMenu.innerHTML = `
                        <p class="text-over-over-menu"><a href="">همراه بانک پاسارگاد(موبایل بانک)</a></p>
                        <p class="text-over-over-menu"><a href="">بانکداری اجتماعی پاسارگاد(ویپاد)</a></p>
                        <p class="text-over-over-menu"><a href="">کیف پول همراه پاسارگاد(پی پاد)</a></p>
                        <p class="text-over-over-menu"><a href="">فعال سازی رمز یکبار مصرف</a></p>
                        <p class="text-over-over-menu"><a href="">سامانه نوبت دهی هوشمند</a></p>
                        <p class="text-over-over-menu"><a href="">سامانه‌های موبایلی</a></p>
                        <p class="text-over-over-menu"><a href="">آنی بانک</a></p>
                        `
                    } else if (j == 1) {
                        overOverMenu.innerHTML = `
                        <p class="text-over-over-menu"><a href="">تعاریف کارت</a></p>
                        <p class="text-over-over-menu"><a href="">کارت اعتباری</a></p>
                        <p class="text-over-over-menu"><a href="">کارت‌های نقدی</a></p>
                        <p class="text-over-over-menu"><a href="">حساب‌های کارتی</a></p>
                        <p class="text-over-over-menu"><a href="">خدمات خودپرداز</a></p>
                        <p class="text-over-over-menu"><a href="">من‌کارت پاسارگاد</a></p>
                        <p class="text-over-over-menu"><a href="">غیر فعال کردن رمز دوم کارت</a></p>
                        <p class="text-over-over-menu"><a href="">کیوسک‌های صدور کارت هدیه</a></p>
                        <p class="text-over-over-menu"><a href="">دستگاه‌های خودگردان</a></p>
                        `
                    } else if (j == 2) {
                        overOverMenu.innerHTML = `
                        <p class="text-over-over-menu"><a href="">تلفن بانک</a></p>
                        <p class="text-over-over-menu"><a href="">سامانه پرداخت تلفنی</a></p>
                        `
                    }
                })
                e.addEventListener("mouseleave", function () {
                    overOverMenu.style.width = "0"
                })
                overOverMenu.addEventListener("mouseenter", function () {
                    overOverMenu.style.width = "35%"
                })
                overOverMenu.addEventListener("mouseleave", function () {
                    overOverMenu.style.width = "0"
                })
            })
            overMenu.addEventListener("mouseenter", function () {
                overMenu.style.height = "400px"
                menuItem.forEach(function (e) {
                    e.style.color = "white"
                    e.style.borderTop = "none"
                })
                arrowBox.forEach(function (e) {
                    e.style.display = "none"
                })
                arrowBox[1].style.display = "block"
                e.style.color = "#fcb92d"
                e.style.borderTop = "1px solid #fcb92d"

            })
            overMenu.addEventListener("mouseleave", function () {
                arrowBox.forEach(function (e) {
                    e.style.display = "none"
                })
                overMenu.style.height = "0"
                menuItem.forEach(function (e) {
                    e.style.color = "white"
                    e.style.borderTop = "none"
                })
            })
        } else if (i == 3) {
            overMenu.style.height = "400px"
            arrowBox[2].style.display = "block"
            overMenu.innerHTML = ""
            overMenu.innerHTML = `
            <div class="box-link-over-menu">
                <p class="text-over-menu"><a href="">آموزش و معرفی همراه بانک (موبایل بانک)</a></p>
            </div>
            <div class="box-img-over-menu">
                <img class="img1-over-menu" src="assets/img/3.jpg" alt="">
            </div>
            `
            overMenu.addEventListener("mouseenter", function () {
                overMenu.style.height = "400px"
                menuItem.forEach(function (e) {
                    e.style.color = "white"
                    e.style.borderTop = "none"
                })
                arrowBox.forEach(function (e) {
                    e.style.display = "none"
                })
                arrowBox[2].style.display = "block"
                e.style.color = "#fcb92d"
                e.style.borderTop = "1px solid #fcb92d"

            })
            overMenu.addEventListener("mouseleave", function () {
                arrowBox.forEach(function (e) {
                    e.style.display = "none"
                })
                overMenu.style.height = "0"
                menuItem.forEach(function (e) {
                    e.style.color = "white"
                    e.style.borderTop = "none"
                })
            })
        } else if (i == 4) {
            overMenu.style.height = "400px"
            arrowBox.forEach(function (e) {
                e.style.display = "none"
            })
            arrowBox[3].style.display = "block"
            overMenu.innerHTML = ""
            overMenu.innerHTML = `
            <div class="box-link-over-menu">
                <p class="text-over-menu arrow-over-menu"><a href="">مسئولیت‌های اجتماعی در بانک پاسارگاد</a><span class="material-symbols-outlined icon-arrow-left">chevron_left</span></p>
                <p class="text-over-menu arrow-over-menu"><a href="">حوزه های فعالیت و طرح‌های بانک</a><span class="material-symbols-outlined icon-arrow-left">chevron_left</span></p>
                <p class="text-over-menu arrow-over-menu"><a href="">گزارش مسئولیت‌های اجتماعی</a><span class="material-symbols-outlined icon-arrow-left">chevron_left</span></p>
                <p class="text-over-menu"><a href="">دریافت ایده و پیشنهاد در زمینه فعالیت‌های تعاملی</a></p>
            </div>
            <div class ="over-over-menu">

            </div>
            <div class="box-img-over-menu">
                <img class="img1-over-menu" src="assets/img/4.jpg" alt="">
            </div>
            `


            const overOverMenu = document.querySelector(".over-over-menu")
            const arrOverMenu = document.querySelectorAll(".arrow-over-menu")
            arrOverMenu.forEach(function (e, j) {
                e.addEventListener("mouseenter", function () {
                    overOverMenu.style.width = "35%"
                    if (j == 0) {
                        overOverMenu.innerHTML = `
                        <p class="text-over-over-menu"><a href="">درباره مسئولیت های اجتماعی</a></p>
                        `
                    } else if (j == 1) {
                        overOverMenu.innerHTML = `
                        <p class="text-over-over-menu"><a href="">ورزشی</a></p>
                        <p class="text-over-over-menu"><a href="">توسعه پایدار</a></p>
                        <p class="text-over-over-menu"><a href="">محیط زیست</a></p>
                        <p class="text-over-over-menu"><a href="">علمی آموزشی</a></p>
                        <p class="text-over-over-menu"><a href="">هنری و فرهنگی</a></p>
                        <p class="text-over-over-menu"><a href="">انسان دوستانه و خیریه</a></p>
                        <p class="text-over-over-menu"><a href="">پشتیبانی و حمایت ها</a></p>
                        `
                    } else if (j == 2) {
                        overOverMenu.innerHTML = `
                        <p class="text-over-over-menu"><a href="">گزارش مسئولیت های اجتماعی سال 1392</a></p>
                        <p class="text-over-over-menu"><a href="">گزارش مسئولیت های اجتماعی سال 1393</a></p>
                        <p class="text-over-over-menu"><a href="">گزارش مسئولیت های اجتماعی سال 1394</a></p>
                        <p class="text-over-over-menu"><a href="">گزارش مسئولیت های اجتماعی سال 1395</a></p>
                        <p class="text-over-over-menu"><a href="">گزارش مسئولیت های اجتماعی سال 1396</a></p>
                        <p class="text-over-over-menu"><a href="">گزارش مسئولیت های اجتماعی سال 1397</a></p>
                        <p class="text-over-over-menu"><a href="">گزارش مسئولیت های اجتماعی سال 1398</a></p>
                        <p class="text-over-over-menu"><a href="">گزارش مسئولیت های اجتماعی سال 1399</a></p>
                        <p class="text-over-over-menu"><a href="">گزارش مسئولیت های اجتماعی سال 1400</a></p>
                        `
                    }
                })
                e.addEventListener("mouseleave", function () {
                    overOverMenu.style.width = "0"
                })
                overOverMenu.addEventListener("mouseenter", function () {
                    overOverMenu.style.width = "35%"
                })
                overOverMenu.addEventListener("mouseleave", function () {
                    overOverMenu.style.width = "0"
                })
            })
            overMenu.addEventListener("mouseenter", function () {
                overMenu.style.height = "400px"
                menuItem.forEach(function (e) {
                    e.style.color = "white"
                    e.style.borderTop = "none"
                })
                arrowBox.forEach(function (e) {
                    e.style.display = "none"
                })
                arrowBox[3].style.display = "block"
                e.style.color = "#fcb92d"
                e.style.borderTop = "1px solid #fcb92d"

            })
            overMenu.addEventListener("mouseleave", function () {
                arrowBox.forEach(function (e) {
                    e.style.display = "none"
                })
                overMenu.style.height = "0"
                menuItem.forEach(function (e) {
                    e.style.color = "white"
                    e.style.borderTop = "none"
                })
            })
        } else if (i == 5) {
            overMenu.style.height = "400px"
            arrowBox[4].style.display = "block"
            overMenu.innerHTML = ""
            overMenu.innerHTML = `
            <div class="box-link-over-menu">
            <p class="text-over-menu"><a href="">بانک پاسارگاد در یک نگاه</a></p>
            <p class="text-over-menu"><a href="">سند راهبردی بانک پاسارگاد</a></p>
            <p class="text-over-menu"><a href="">گروه مالی پاسارگاد</a></p>
            <p class="text-over-menu"><a href="">دعوت به همکاری</a></p>
            <p class="text-over-menu"><a href="">گزارشات سالیانه</a></p>
            <p class="text-over-menu"><a href="">شفافیت</a></p>
            <p class="text-over-menu arrow-over-menu"><a href="">رسانه</a><span class="material-symbols-outlined icon-arrow-left">chevron_left</span></p>
            <p class="text-over-menu arrow-over-menu"><a href="">اطلاع رسانی</a><span class="material-symbols-outlined icon-arrow-left">chevron_left</span></p>
            </div>
            <div class ="over-over-menu">

            </div>
            <div class="box-img-over-menu">
            <img class="img1-over-menu" src="assets/img/5.jpg" alt="">
            </div>
            `
            const overOverMenu = document.querySelector(".over-over-menu")
            const arrOverMenu = document.querySelectorAll(".arrow-over-menu")
            arrOverMenu.forEach(function (e, j) {
                e.addEventListener("mouseenter", function () {
                    overOverMenu.style.width = "35%"
                    if (j == 0) {
                        overOverMenu.innerHTML = `
                        <p class="text-over-over-menu"><a href="">گالری تصاویر</a></p>
                        <p class="text-over-over-menu"><a href="">گالری ویدیو</a></p>
                        `
                    } else if (j == 1) {
                        overOverMenu.innerHTML = `
                        <p class="text-over-over-menu"><a href="">ساعت کار واحدهای بانک</a></p>
                        <p class="text-over-over-menu"><a href="">بروشور و فایل های راهنما</a></p>
                        <p class="text-over-over-menu"><a href="">معرفی حساب های راکد</a></p>
                        <p class="text-over-over-menu"><a href="">معرفی حساب های راکد</a></p>
                        <p class="text-over-over-menu"><a href="">مبارزه با پولشویی</a></p>
                        <p class="text-over-over-menu"><a href="">پیوندها</a></p>
                        `
                    }
                })
                e.addEventListener("mouseleave", function () {
                    overOverMenu.style.width = "0"
                })
            })
            overOverMenu.addEventListener("mouseenter", function () {
                overOverMenu.style.width = "35%"
            })
            overOverMenu.addEventListener("mouseleave", function () {
                overOverMenu.style.width = "0"
            })
            overMenu.addEventListener("mouseenter", function () {
                overMenu.style.height = "400px"
                menuItem.forEach(function (e) {
                    e.style.color = "white"
                    e.style.borderTop = "none"
                })
                arrowBox.forEach(function (e) {
                    e.style.display = "none"
                })
                arrowBox[4].style.display = "block"
                e.style.color = "#fcb92d"
                e.style.borderTop = "1px solid #fcb92d"
            })
            overMenu.addEventListener("mouseleave", function () {
                arrowBox.forEach(function (e) {
                    e.style.display = "none"
                })
                overMenu.style.height = "0"
                menuItem.forEach(function (e) {
                    e.style.color = "white"
                    e.style.borderTop = "none"
                })
            })
        }
    })
    e.addEventListener("mouseleave", function () {
        arrowBox.forEach(function (e) {
            e.style.display = "none"
        })
        overMenu.style.height = "0"
        e.style.color = "white"
        e.style.borderTop = "none"
    })
})
var x = 0
const iconLeftSlider = document.querySelector(".icon-left-slider")
const iconRightSlider = document.querySelector(".icon-right-slider")
const boxSlider = document.querySelector(".box-slider")
const slider1 = document.querySelector(".slider-img1")
const slider2 = document.querySelector(".slider-img2")
const slider3 = document.querySelector(".slider-img3")
const slider4 = document.querySelector(".slider-img4")

iconLeftSlider.addEventListener("click", function () {

    if (x == 0) {
        slider1.style.zIndex = "1"
        slider2.style.zIndex = "9"
        slider3.style.zIndex = "1"
        slider4.style.zIndex = "1"
        slider1.style.transform = "translateX(100%)"
        slider2.style.transform = "translateX(0)"
        slider3.style.transform = "translateX(-100%)"
        slider4.style.transform = "translateX(-200%)"
        x = 1
    } else if (x == 1) {
        slider1.style.zIndex = "1"
        slider2.style.zIndex = "1"
        slider3.style.zIndex = "9"
        slider4.style.zIndex = "1"
        slider1.style.transform = "translateX(-200%)"
        slider2.style.transform = "translateX(100%)"
        slider3.style.transform = "translateX(0)"
        slider4.style.transform = "translateX(-100%)"
        x = 2
    } else if (x == 2) {
        slider1.style.zIndex = "1"
        slider2.style.zIndex = "1"
        slider3.style.zIndex = "1"
        slider4.style.zIndex = "9"
        slider1.style.transform = "translateX(-100%)"
        slider2.style.transform = "translateX(-200%)"
        slider3.style.transform = "translateX(100%)"
        slider4.style.transform = "translateX(0)"
        x = 3
    } else if (x == 3) {
        slider1.style.zIndex = "9"
        slider2.style.zIndex = "1"
        slider3.style.zIndex = "1"
        slider4.style.zIndex = "1"
        slider1.style.transform = "translateX(0)"
        slider2.style.transform = "translateX(-100%)"
        slider3.style.transform = "translateX(-200%)"
        slider4.style.transform = "translateX(100%)"
        x = 0
    }
})

iconRightSlider.addEventListener("click" , function(){
    if (x == 0) {
        slider1.style.zIndex = "1"
        slider2.style.zIndex = "1"
        slider3.style.zIndex = "1"
        slider4.style.zIndex = "9"
        slider1.style.transform = "translateX(-100%)"
        slider2.style.transform = "translateX(-200%)"
        slider3.style.transform = "translateX(100%)"
        slider4.style.transform = "translateX(0)"
        x = 3
    }else if (x == 3) {
        slider1.style.zIndex = "1"
        slider2.style.zIndex = "1"
        slider3.style.zIndex = "9"
        slider4.style.zIndex = "1"
        slider1.style.transform = "translateX(-200%)"
        slider2.style.transform = "translateX(100%)"
        slider3.style.transform = "translateX(0)"
        slider4.style.transform = "translateX(-100%)"
        x = 2
    }else if (x == 2) {
        slider1.style.zIndex = "1"
        slider2.style.zIndex = "9"
        slider3.style.zIndex = "1"
        slider4.style.zIndex = "1"
        slider1.style.transform = "translateX(100%)"
        slider2.style.transform = "translateX(0)"
        slider3.style.transform = "translateX(-100%)"
        slider4.style.transform = "translateX(-200%)"
        x = 1
    }else if (x == 1) {
        slider1.style.zIndex = "9"
        slider2.style.zIndex = "1"
        slider3.style.zIndex = "1"
        slider4.style.zIndex = "1"
        slider1.style.transform = "translateX(0)"
        slider2.style.transform = "translateX(-100%)"
        slider3.style.transform = "translateX(-200%)"
        slider4.style.transform = "translateX(100%)"
        x = 0
    }
})


















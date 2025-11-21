const testdata = [
  {
    id: 1,
    question: "Metrologiya fani nimani o‘rganadi?",
    options: [
      "O‘lchov vositalarini ishlab chiqarishni",
      "Texnologik jarayonlarni nazorat qilishni",
      "Standartlar tasdiqlash tartibini",
      "O‘lchovlarning aniqligi va birliklarini ta’minlashni"
    ],
    answer: "O‘lchovlarning aniqligi va birliklarini ta’minlashni",
  },
  {
    id: 2,
    question: "Standartlashtirishning asosiy maqsadi nima?",
    options: [
      "Ishlab chiqarishni kamaytirish",
      "Mahsulot va xizmatlar sifatini barqaror saqlash",
      "O‘lchov xatolarini kamaytirish",
      "Yangi materiallar yaratish"
    ],
    answer: "Mahsulot va xizmatlar sifatini barqaror saqlash",
  },
  {
    id: 3,
    question: "O‘lchov birligi deganda nimani tushunasiz?",
    options: [
      "Tajriba natijasidagi o‘rtacha qiymat",
      "Me’yoriy hujjatdagi parametr",
      "Asbobning sezgirlik chegarasi",
      "Miqdorni ifodalash uchun qabul qilingan asosiy o‘lchov qiymati"
    ],
    answer: "Miqdorni ifodalash uchun qabul qilingan asosiy o‘lchov qiymati",
  },
  {
    id: 4,
    question: "Xalqaro o‘lchov birliklari tizimi qanday ataladi?",
    options: ["CGS", "MKS", "SI", "MKSA"],
    answer: "SI",
  },
  {
    id: 5,
    question: "O‘lchov xatosi nima?",
    options: [
      "Asbobning markasi",
      "Asbob narxi",
      "O‘lchov birligi",
      "O‘lchov natijasining haqiqiy qiymatdan og‘ish darajasi"
    ],
    answer: "O‘lchov natijasining haqiqiy qiymatdan og‘ish darajasi",
  },
  {
    id: 6,
    question: "Standart nima?",
    options: [
      "Mahsulot turi",
      "Laboratoriya asbobi",
      "Sifat sertifikati",
      "Ma’lum sohada qabul qilingan me’yoriy hujjat"
    ],
    answer: "Ma’lum sohada qabul qilingan me’yoriy hujjat",
  },
  {
    id: 7,
    question: "Kalibrlash jarayoni nimani anglatadi?",
    options: [
      "O‘lchov vositasini ta’mirlash",
      "O‘lchov natijasini qayta hisoblash",
      "Asbobni tekshirishdan chiqarish",
      "O‘lchov vositasining ko‘rsatkichini etalon bilan solishtirish"
    ],
    answer: "O‘lchov vositasining ko‘rsatkichini etalon bilan solishtirish",
  },
  {
    id: 8,
    question: "Etalon nima?",
    options: [
      "Tajriba namunasi",
      "Hisoblash asbobi",
      "Qonuniy hujjat",
      "O‘lchov birligini eng yuqori aniqlikda ifodalovchi vosita"
    ],
    answer: "O‘lchov birligini eng yuqori aniqlikda ifodalovchi vosita",
  },
  {
    id: 9,
    question: "Sifatni boshqarish tizimi qanday hujjatlar asosida amalga oshiriladi?",
    options: ["Texnik shartlar", "Tajriba protokoli", "Laboratoriya bayonnomasi", "Standartlar"],
    answer: "Standartlar",
  },
  {
    id: 10,
    question: "Metrologiya necha turga bo‘linadi?",
    options: ["2", "3", "4", "5"],
    answer: "3",
  },
  {
    id: 11,
    question: "O‘lchov aniqligi nimaga bog‘liq?",
    options: [
      "Texnik shartlarga",
      "Tashkiliy tuzilmasiga",
      "Xodimning malakasiga",
      "O‘lchov vositasining sezgirligi va stabilligiga"
    ],
    answer: "O‘lchov vositasining sezgirligi va stabilligiga",
  },
  {
    id: 12,
    question: "ISO 9001 standarti nimani belgilaydi?",
    options: [
      "Ekologik me’yorlarni",
      "Energiya tejashni",
      "Xavfsizlik talablarini",
      "Sifat menejmenti tizimini"
    ],
    answer: "Sifat menejmenti tizimini",
  },
  {
    id: 13,
    question: "O‘lchov vositasining verifikatsiyasi deganda nima tushuniladi?",
    options: [
      "Ta’mirlash",
      "Aniqligini tekshirish va tasdiqlash jarayoni",
      "Xatolikni hisoblash",
      "Dasturiy sozlash"
    ],
    answer: "Aniqligini tekshirish va tasdiqlash jarayoni",
  },
  {
    id: 14,
    question: "Standartlashtirishning xalqaro tashkiloti qaysi?",
    options: ["UNESCO", "WTO", "UNDP", "ISO"],
    answer: "ISO",
  },
  {
    id: 15,
    question: "O‘lchovning aniqligi qanday ifodalanadi?",
    options: [
      "Asbob narxi orqali",
      "Foydalanish davri bilan",
      "Ish harorati bilan",
      "Nisbiy yoki absolyut xatolik orqali"
    ],
    answer: "Nisbiy yoki absolyut xatolik orqali",
  },
  {
    id: 16,
    question: "Metrologik izchillik nima?",
    options: [
      "Tajriba davomiyligi",
      "O‘lchovlarning ketma-ket bajarilishi",
      "Asbob ishlash tezligi",
      "O‘lchov natijalarining etalonlar tizimi orqali bog‘liqligi"
    ],
    answer: "O‘lchov natijalarining etalonlar tizimi orqali bog‘liqligi",
  },
  {
    id: 17,
    question: "O‘lchov vositalarini davlat nazoratida kim boshqaradi?",
    options: [
      "OTMlar",
      "ISO tashkiloti",
      "Sertifikatlashtirish agentligi",
      "Milliy metrologiya xizmati"
    ],
    answer: "Milliy metrologiya xizmati",
  },
  {
    id: 18,
    question: "Standartlashtirish jarayonining bosqichlari nechta?",
    options: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    id: 19,
    question: "O‘lchov atamasining mohiyati nima?",
    options: [
      "Tajriba o‘tkazish",
      "Qurilmani sozlash jarayoni",
      "Hisoblash natijasi",
      "Miqdorni birlikka solishtirish jarayoni"
    ],
    answer: "Miqdorni birlikka solishtirish jarayoni",
  },
  {
    id: 20,
    question: "O‘lchov birligining xalqaro ta’rifi kim tomonidan belgilanadi?",
    options: ["ISO", "IEC", "WTO", "BIPM"],
    answer: "BIPM",
  },
  {
    id: 21,
    question: "Sertifikatlashtirishning maqsadi nima?",
    options: [
      "Narxni belgilash",
      "Xodimni baholash",
      "Ishlab chiqarishni kengaytirish",
      "Mahsulotning standartlarga muvofiqligini tasdiqlash"
    ],
    answer: "Mahsulotning standartlarga muvofiqligini tasdiqlash",
  },
  {
    id: 22,
    question: "Etalonlarning asosiy turi qaysi?",
    options: ["Korxona etaloni", "Ishchi etalon", "O‘quv etaloni", "Davlat etaloni"],
    answer: "Davlat etaloni",
  },
  {
    id: 23,
    question: "O‘lchov vositasining sezgirligi nima?",
    options: [
      "Ishlab chiqaruvchi nomi",
      "Narxi",
      "Asbob og‘irligi",
      "Kirish kattalikdagi o‘zgarishga javob berish qobiliyati"
    ],
    answer: "Kirish kattalikdagi o‘zgarishga javob berish qobiliyati",
  },
  {
    id: 24,
    question: "Sifat menejmenti tizimining asosiy printsipi qaysi?",
    options: [
      "Bozor tahlili",
      "Xatolikni kamaytirish",
      "Ishlab chiqarish hajmini oshirish",
      "Mijoz ehtiyojini qondirish"
    ],
    answer: "Mijoz ehtiyojini qondirish",
  },
  {
    id: 25,
    question: "Metrologik nazorat deganda nima tushuniladi?",
    options: [
      "Laboratoriya tahlili",
      "Texnik xizmat ko‘rsatish",
      "Statistik tahlil",
      "O‘lchov vositalarining aniqligini ta’minlash bo‘yicha faoliyat"
    ],
    answer: "O‘lchov vositalarining aniqligini ta’minlash bo‘yicha faoliyat",
  },
  {
    id: 26,
    question: "ISO tashkiloti qachon tashkil etilgan?",
    options: ["1940-yil", "1951-yil", "1960-yil", "1947-yil"],
    answer: "1947-yil",
  },
  {
    id: 27,
    question: "O‘lchov vositasi deganda nima tushuniladi?",
    options: [
      "Elektron qurilma",
      "Sifatni baholash tizimi",
      "Me’yoriy hujjat",
      "Miqdorni o‘lchash uchun mo‘ljallangan texnik vosita"
    ],
    answer: "Miqdorni o‘lchash uchun mo‘ljallangan texnik vosita",
  },
  {
    id: 28,
    question: "Standartlashtirish jarayonida “unifikatsiya” nimani anglatadi?",
    options: [
      "Ishlab chiqarishni to‘xtatish",
      "O‘lchovlarni kamaytirish",
      "Sinovlarni soddalashtirish",
      "Turli mahsulotlarni yagona shaklga keltirish"
    ],
    answer: "Turli mahsulotlarni yagona shaklga keltirish",
  },
  {
    id: 29,
    question: "Qonuniy metrologiyaning asosiy vazifasi nima?",
    options: [
      "Xatoliklarni hisoblash",
      "O‘lchov vositalarini ishlab chiqarish",
      "Sinov natijalarini tahlil qilish",
      "O‘lchovlarning huquqiy ishonchliligini ta’minlash"
    ],
    answer: "O‘lchovlarning huquqiy ishonchliligini ta’minlash",
  },
  {
    id: 30,
    question: "Raqamli texnologiyalar metrologiyada nima uchun qo‘llaniladi?",
    options: [
      "Ma’lumotlarni to‘plash uchun",
      "Faqat hisobot yaratish uchun",
      "Qog‘oz ishlarini kamaytirish uchun",
      "O‘lchov jarayonlarini avtomatlashtirish va aniqligini oshirish uchun"
    ],
    answer: "O‘lchov jarayonlarini avtomatlashtirish va aniqligini oshirish uchun",
  },
];



const user_answer = new Array(25).fill(null);
const select_answer = new Array(25).fill(null);

// console.log(user_answer)
let ansverId;
let arrayTest = [];
let arrOption = [];
var k = 1;
let fine=0;
let attemp=5;

$(document).ready(() => {
  arrayTest = massivTuzish(testdata.length, 25);
  for (var k = 1; k <= arrayTest.length; k++) {
    arrOption.push(massivTuzish(4, 4));
    testbtnlist.innerHTML += `
      <li>
        <a class="done" id="que_${k}" onclick="clickbtn(${k})" href="#">${k}</a>
      </li>
    `;
  }
  setValue(1);
  timer1();
});

function massivTuzish(m, n) {
  let massiv = [];
  let i = 0;

  while (i < n) {
    var k = Math.floor(Math.random() * m);
    if (!massiv.includes(k)) {
      massiv.push(k);
      i++;
    }
  }
  return massiv;
}



function toggleParentClass(radio) {
  var parent = radio.parentNode;

  // Remove 'checked' class from all answer-items
  var answerItems = document.querySelectorAll(".answer-item");

  for (var i = 0; i < answerItems.length; i++) {
    if (answerItems[i] == parent) {
      select_answer[ansverId - 1] = i;
      user_answer[ansverId - 1] = parent.querySelector("span").innerHTML;
    }

    if (answerItems[i] !== parent) {
      answerItems[i].classList.remove("checked");
      answerItems[i].querySelector('input[type="radio"]').checked = false;
    }
  }

  if (radio.checked) {
    parent.classList.add("checked");
    // console.log(testdata[ansverId].answer)
  } else {
    parent.classList.remove("checked");
  }

  // alert(k);
  let cur = document.querySelector(`#que_${ansverId}`);
  cur.style.background = "rgb(0, 156, 255)";
}

function checked_ansver() {
  var answerItems = document.querySelectorAll(".answer-item");

  for (var i = 0; i < answerItems.length; i++) {
    answerItems[i].classList.remove("checked");
    answerItems[i].querySelector('input[type="radio"]').checked = false;
  }

  if (user_answer[ansverId - 1] != null) {
    for (var i = 0; i < answerItems.length; i++) {
      if (i == select_answer[ansverId - 1]) {
        answerItems[i].classList.add("checked");
        answerItems[i].querySelector('input[type="radio"]').checked = true;
      }
    }
  }
}

const el = (e) => document.querySelector(e);

const testbtnlist = el("#questionbtn");
const count_question = el("#count_question");
const number_question = el("#question-num");
const question_text = el(".question-text");
const timer_teg = el("#timer");

const option1 = el("#op1");
const option2 = el("#op2");
const option3 = el("#op3");
const option4 = el("#op4");

let n,
  a = 1;

function setValue(k) {
  n = arrayTest.length;
  ansverId = k;
  number_question.innerHTML = k;
  count_question.innerHTML = k + "/" + n;
  question_text.innerHTML = testdata[arrayTest[k - 1]].question;

  option1.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][0]];
  option2.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][1]];
  option3.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][2]];
  option4.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][3]];

  checked_ansver();
}

function clickbtn(id) {
  k = document.getElementById(`que_${id}`).innerHTML;
  setValue(k);
}

function pClick() {
  var b = parseInt(number_question.innerHTML);

  if (b > 1) {
    b -= 1;
    setValue(b);
  }
}

function nClick() {
  var b = parseInt(number_question.innerHTML);
  if (b < n) {
    b += 1;
    setValue(b);
  }
}

function timer1() {
  var timeLimitInMinutes = 50;
  var timeLimitInSeconds = timeLimitInMinutes * 60;
  var timerElement = document.getElementById("timer");

  function startTimer() {
    timeLimitInSeconds--;

    var minutes = Math.floor(timeLimitInSeconds / 60);
    var seconds = timeLimitInSeconds % 60;

    if (timeLimitInSeconds < 0) {
      timerElement.textContent = "00:00";
      clearInterval(timerInterval);
      return;
    }

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    timerElement.innerHTML = minutes + ":" + seconds;
  }

  var timerInterval = setInterval(startTimer, 1000);
}

let ansverId1=document.querySelector("#answerId")
function getAnsver(){
  fine++;
  q=number_question.innerHTML;
  ansverId1.textContent=testdata[arrayTest[q - 1]].answer;
}
function endTest() {
  var c = 0, inc = 0, usc = 0;
  
  for (var i = 0; i < arrayTest.length; i++) {
      if (user_answer[i] != null) {
          if (user_answer[i] == testdata[arrayTest[i]].answer) {
              c++;
          } else {
              inc++;
          }
      } else {
          usc++;
      }
  }

  // Natijalarni ekranga chiqarish
  document.querySelector("#cans").textContent = `To'g'ri: ${c}`;
  document.querySelector("#icans").textContent = `Noto'g'ri: ${inc}`;
  document.querySelector("#fine").textContent = `Jarima: ${fine}`;
  document.querySelector("#fullball").textContent = `Umumiy ball: ${(c - fine)*4}`;
  document.querySelector("#noselect").textContent = `Belgilanmagan: ${usc}`;

  // Vaqtni olish
  const now = new Date();
  const timestamp = now.toLocaleString("uz-UZ"); // O'zbek formati
  const email1 = localStorage.getItem("userEmail");

  // Telegram bot ma'lumotlari
  const botToken = "8321370672:AAELYGYZY1ir0iEJUr9dWL0bHHqq9Zg1nzc"; // Bot tokenini o'zgartiring
  const chatId = "7438762563"; // O'zingizning chat ID ni kiriting

  // Xabar matni
  const message = `
🕒 Test tugallangan vaqt: ${timestamp}
📧 Email address: ${email1}
📊 *Test natijasi:*
✅ To'g'ri javoblar: ${c}
❌ Noto'g'ri javoblar: ${inc}
⚪ Belgilanmagan javoblar: ${usc}
🏆 Umumiy ball: ${(c - fine)*4}`;

  // Telegram API-ga so‘rov yuborish
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          chat_id: chatId,
          text: message
      })
  })
  .then(response => response.json())
  .then(data => {
      console.log("Xabar yuborildi:", data);
      
      // 1.5 soniya kutish va keyin sahifani o‘zgartirish
      setTimeout(() => {
          window.location = "studentindex.html";
      }, 20000);
  })
  .catch(error => {
      console.error("Xatolik yuz berdi:", error);
  });
}

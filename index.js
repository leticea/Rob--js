const puppeteer = require('puppeteer');

console.log('Bem-vindo ao Bot conversor');

async function robot() {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const baseCoin = 'dolar';
    const finalCoin = 'real';
    const anyUrl = `https://www.google.com/search?q=${baseCoin}+para+${finalCoin}&oq=${baseCoin}+para+&aqs=chrome.0.0i131i433i512j69i57j0i433i512l2j0i512j0i131i433i512l2j0i512l3.2073j1j15&sourceid=chrome&ie=UTF-8`;
    await page.goto(anyUrl);
    //await page.screenshot({path: 'example.png'});

    const result =

    console.log(`O valor de 1 ${baseCoin} em ${finalCoin} é ${result}`);
    await browser.close();
}

robot();



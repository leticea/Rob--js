const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('Bem-vindo ao Bot conversor');

async function robot() {

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const baseCoin = readlineSync.question('Informe uma moeda base:') || 'dolar';
    const finalCoin = readlineSync.question('Informe uma moeda desejada:') || 'real';

    const anyUrl = `https://www.google.com/search?q=${baseCoin}+para+${finalCoin}&oq=${baseCoin}+para+&aqs=chrome.0.0i131i433i512j69i57j0i433i512l2j0i512j0i131i433i512l2j0i512l3.2073j1j15&sourceid=chrome&ie=UTF-8`;
    await page.goto(anyUrl);
    //await page.screenshot({path: 'example.png'});

    const result = await page.evaluate(() => {

        return document.querySelector('.lWzCpb.a61j6').value;
    });

    console.log(`O valor de 1 ${baseCoin} em ${finalCoin} é ${result}`);
    await browser.close();
}

robot();
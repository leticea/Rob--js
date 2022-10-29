const puppeteer = require('puppeteer');

console.log('Bem-vindo ao Bot conversor');

async function robot() {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});

    await browser.close();
}

robot();



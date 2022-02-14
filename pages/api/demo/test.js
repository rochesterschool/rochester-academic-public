const puppeteer = require('puppeteer');
const jsdom = require('jsdom');


/* export default async function handler(req, res) {
    try {
        // Abrimos una instancia del puppeteer y accedemos a la url de google
        const browser  = await puppeteer.launch();
        const page     = await browser.newPage();
        const response = await page.goto('https://www.google.com/search?q=web+scraping+libros');
        const body     = await response.text();

        // Creamos una instancia del resultado devuelto por puppeter para parsearlo con jsdom
        const { window: { document } } = new jsdom.JSDOM(body);

        // Seleccionamos los titulos y lo mostramos en consola
        document.querySelectorAll('.g h3')
            .forEach(element => console.log(element.textContent));
        
        console.log(JSON.stringify(document.querySelectorAll('.g h3'), null, 2));
        
        res.status(200).json(document.querySelectorAll('.g'))

        // Cerramos el puppeteer
        await browser.close();
    } catch (error) {
        console.error(error);
    }
} */

export default async function run(req, res) {
    const url = "https://docs.google.com/document/u/1/d/e/2PACX-1vRFz2ykywO28rVLszG3iR2eGEywCTobJRYkrtmEumR329j_dtgp1OmLX0nWRHPsHmUC3Mosu_K8a0PP/pub"

    try {
        // Abrimos una instancia del puppeteer y accedemos a la url de google
        const browser  = await puppeteer.launch();
        const page     = await browser.newPage();
        
        //const body     = await response.text();

        function getPageData(){
            const response = await page.goto(url);
            const data = await page.evaluate(() => {
                const $courses = document.querySelectorAll('p');
                const dataCourse = []
                $courses.forEach(($course) => {
                    dataCourse.push({
                        content: $course.innerHTML,
                        classes: $course.className
                    })
                })
                return{

                }
            })
        }

        /* // Creamos una instancia del resultado devuelto por puppeter para parsearlo con jsdom
        const { window: { document } } = new jsdom.JSDOM(body);

        // Seleccionamos los titulos y lo mostramos en consola
        document.querySelectorAll('.g h3')
            .forEach(element => console.log(element.textContent));
        
        console.log(JSON.stringify(document.querySelectorAll('.g h3'), null, 2));
        
        res.status(200).json(document.querySelectorAll('.g'))
        */
        // Cerramos el puppeteer
        await browser.close(); 
    } catch (error) {
        console.error(error);
    }
}
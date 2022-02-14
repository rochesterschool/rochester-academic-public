const axios = require('axios');
const cheerio = require('cheerio');

async function cheerioExample() {
    
}

export default async function handler(req, res) {
    const pageContent = await axios.get('https://slides.com/carboleda');
    const $ = cheerio.load(pageContent.data);
    const presentations = $('li.deck.public').map((_, el) => {
        el = $(el);
        const title = el.find('span.deck-title-value').text();
        const description = el.find('span.deck-description-value').text();
        const link = el.find('a.deck-link').attr('href');
        return { title, description, link };
    }).get();
    console.log(presentations);
}
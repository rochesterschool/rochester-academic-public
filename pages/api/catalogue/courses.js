// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');
const scrapeIt = require("scrape-it")


export default async function handler(req, res) {
  
  const dataweb = await scrapeIt("https://docs.google.com/document/u/1/d/e/2PACX-1vRFz2ykywO28rVLszG3iR2eGEywCTobJRYkrtmEumR329j_dtgp1OmLX0nWRHPsHmUC3Mosu_K8a0PP/pub", {
      articles: {
        listItem: "p, h1, h2, h3, h4, h5, h6", 
        data: {
          // Get the article date and convert it into a Date object
          // createdAt: {
          //   selector: ".date"
          //   , convert: x => new Date(x)
          // }

          // Get the title
          title: "span", 

          // Nested list
          tags: {
            listItem: ".tags > span"
          },

          // Get the content
          content: {
            selector: "span",
            //how: "html"
          },

          image: {
            selector: "img"
            , attr: "src"
          },

          // Get attribute value of root listItem by omitting the selector
          classes: {
            attr: "class"
          }
        }
      }
    }).then(({ data, response }) => {
      console.log(`Status Code: ${response.statusCode}`)
      console.log(data)
      return data
    })

  res.status(200).json(dataweb)
}

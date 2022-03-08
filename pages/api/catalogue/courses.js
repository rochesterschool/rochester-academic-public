// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');
const scrapeIt = require("scrape-it")

const keywords = require('../keywords-config.json');

export default async function handler(req, res) {

  const dataweb = await scrapeIt("https://docs.google.com/document/u/1/d/e/2PACX-1vRFz2ykywO28rVLszG3iR2eGEywCTobJRYkrtmEumR329j_dtgp1OmLX0nWRHPsHmUC3Mosu_K8a0PP/pub", {
    articles: {
      listItem: "p, h1, h2, h3, h4, h5, h6, ul, table",
      data: {
        // Get the title
        //title: "span",

        table: {
          listItem: 'table > tbody > tr ',
        },

        list: {
          listItem: "ul > li",
          attr: "class",
        },

        // Get the content
        content: {
          selector: "span"
        },

        content_class: {
          selector: "span",
          attr: "class"
        },

        image: {
          selector: "img",
          attr: "src"
        },

        // Get attribute value of root listItem by omitting the selector
        classes: {
          attr: "class"
        }
      }
    }
  }).then(({ data, response }) => {
    console.log(`***Status Code: ${response.statusCode}`)
    console.log(data.articles[0])
    return data
  })

  console.log(`Total web data elements: ${dataweb.articles.length}`)      //1200

  const onlyTable = dataweb.articles.filter(item => item.table.length > 0) // Filter out non-table items
                                    .map(item => item.table)               // Map to array of arrays
                                    .flat()                                // Flatten array of arrays // 23

  const onlyList = dataweb.articles.filter(item => item.list.length > 1)   // Filter out non-list items
                                   .map(item => item.list)                 // Map to array of arrays
                                   .flat()                                 // Flatten array of arrays // 52

  console.log(`Total table elements: ${onlyTable.length}`)
  console.log(`Total list elements: ${onlyList.length}`)

  const purgeWebData = dataweb.articles.filter(item => !onlyTable.includes(item.content)) // Filter out <p> table items
                                       .filter(item => !onlyList.includes(item.content))  // Filter out <p> list items

  console.log(`**Purge web data elements: ${purgeWebData.length}`) // 1050

  const stylingWebData = purgeWebData.map(item => {
    return {
      ...item,
      length: item.content.length,
      type: itemType(item.content, item.image, item.list, item.table),
      subtype: itemSubType(item.content, item.image, item.list, item.table),
      is_list: item.list.length > 0 ? true : false,
      is_table: item.table.length > 0 ? true : false,
      is_image: item.image.length > 0 ? true : false
    }
  })

  function itemType(content, image, list, table) {
    if (content.length > 100) { return 'long_text' }
    else if (content.length > 0 && content.length <= 100) { return 'short_text' }
    else if (image.search("googleusercontent") != -1) { return 'image' }
    else if (list.length > 0) { return 'list' }
    else if (table.length > 0) { return 'table' }
    else { return 'long_text' }
  }

  function itemSubType(instr, inimg, inlist, intable) {
    if (keywords.title.includes(instr)) { return "title" }
    else if (keywords.subtitle.includes(instr)) { return "subtitle" }
    else if (keywords.title1.includes(instr)) { return "title1" }
    else if (keywords.title2.includes(instr)) { return "title2" }
    else if (keywords.title3.includes(instr)) { return "title3" }
    else if (keywords.title4.includes(instr)) { return "title4" }
    else if (keywords.style.includes(instr)) { return "bold" }

    else if (inimg.search("googleusercontent") != -1 || inimg.search("drawings") != -1) { return "image" } // the images uploaded are stored in google, url contains googleusercontent 
    else if (inlist.length > 0) { return "list" }
    else if (intable.length > 0) { return "table" }
    else { return "general_text" }
  }

  const dataWebAssignSection = () => {
    let counter = 0;
    return stylingWebData.map((item, index) => {
      if (keywords.sections.includes(item.content)) 
      counter++
      return {
        ...item,
        uuid: index,
        section: counter
      }
    })
  }

  console.log(dataWebAssignSection().length)

  //res.status(200).json(dataweb.articles)
  res.status(200).json(dataWebAssignSection())
}
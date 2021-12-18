// run `node index.js` in the terminal
const scrapeIt = require('scrape-it');
const axios = require('axios');

//const Storage = window.localStorage;

export async function getData() {
  const url = "https://www.parsehub.com/"
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        //console.log(response.data);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}

export async function scrapeItExample() { 
  console.log('scrapeItExample');
  //Storage.setItem('myCat', 'Tom');


  // Callback interface
  scrapeIt("https://docs.google.com/document/d/e/2PACX-1vRFz2ykywO28rVLszG3iR2eGEywCTobJRYkrtmEumR329j_dtgp1OmLX0nWRHPsHmUC3Mosu_K8a0PP/pub", {
    // Fetch the articles
    articles: {
      listItem: "p"
      , data: {

        // Get the article date and convert it into a Date object
        // createdAt: {
        //   selector: ".date"
        //   , convert: x => new Date(x)
        // }

        // Get the title
        title: "span"

        // Nested list
        , tags: {
          listItem: ".tags > span"
        }

        // Get the content
        , content: {
          selector: "span",
          how: "html"
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

    // Fetch the blog pages
    , pages: {
      listItem: "li.page"
      , name: "pages"
      , data: {
        title: "a"
        , url: {
          selector: "a"
          , attr: "href"
        }
      }
    }

    // Fetch some other data from the page
    , title: ".header h1"
    , desc: ".header h2"
    , avatar: {
      selector: ".header img"
      , attr: "src"
    }
  }).then(({ data, response }) => { 
    console.log(`Status Code: ${response.statusCode}`)
    //console.log(data)
    return data
  }) 

}

//scrapeItExample();

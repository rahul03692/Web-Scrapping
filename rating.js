const axios = require("axios");
const cheerio = require("cheerio");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const userName = "rahul03692";

const cc_url = `https://www.codechef.com/users/${userName}`;


axios(url)
  .then((response) => {
    extractHTML(response.data);
  })
  .catch((err) => {
    console.log(err.message);
  });



//using cheerio
// function extractHTML(html){
//     const $ = cheerio.load(html);

//     //rating
//     let rating = $('.rating-number').text();
//     console.log(rating);

//     let probSolved = $('.content h5').html();
//     console.log(probSolved);
// }


//using jsdom
function extractHTML(html) {
  const { document } = new JSDOM(html).window;
  let rating = document.querySelector(".rating-number").textContent;
  console.log(rating);

  let probSolved = document.querySelector(".content h5").textContent;
  console.log(probSolved);
}

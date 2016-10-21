import axios from 'axios'
function getCardData() {
  return axios.get(`https://raw.githubusercontent.com/DarkFlameMastaa/datas/master/for-me/cardData.json?${Math.random()}`)
  .then(
    (res) => (
      res.data
    )
  )
  .catch(function (error) {
    console.log(error);
  });
}
function getArticle(name) {
  return axios.get(`https://raw.githubusercontent.com/DarkFlameMastaa/datas/master/for-me/${name}.md`)
  .then(
    (res) => (
      res.data
    )
  )
  .catch(function (error) {
    console.log(error);
  });
}

export {getCardData}
export {getArticle}

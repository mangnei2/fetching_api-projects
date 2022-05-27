const randomButton = document.querySelector('.random');

randomButton.addEventListener('click', getRandomDoggo);

//random dog image
function getRandomDoggo(){
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(checkStatus)
      .then(response => response.json())
      .then(data => handleData(data))
      .catch(error => notifyUser(error))
  }
  
//checkStatus
function checkStatus(response){
    if(response.ok){
      return Promise.resolve(response);
    }else{
      return Promise.reject(new Error(response.statusText));
    }
  }
  
  //handleData
function handleData(data){
    let url = data.message;
    console.log(url)
    let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+\-?\w+)\/.+/g;
    let breedName = regex.exec(url);
    document.getElementById('randomImageContainer').innerHTML = `<img src='${url}'/>`;
  }
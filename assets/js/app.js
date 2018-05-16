// Variable

const tweetList = document.getElementById("tweet-list");
const tweets    = []

// EventListener
EventListener();
loadToLocalStorage();

// add Listener to element
function EventListener(){
  document.querySelector("#form").addEventListener('submit',newTweet);
  tweetList.addEventListener("click",removeTweet);
}

// Load Element to localStorage
function loadToLocalStorage(){
  let all_tweets = [];
  all_tweets = JSON.parse(localStorage.getItem("tweets"));

  if (all_tweets){
    all_tweets.forEach(function(tweet){
       appendTweet(tweet);
    })
  }
}

//Add newTweet
function newTweet(e){
  e.preventDefault();
  const tweet = document.getElementById('tweet').value;
  //create a remove button
  appendTweet(tweet)
  addTweetToLocalStorage();
  this.reset();
}

//Remove Tweet
function removeTweet(e){
 if (e.target.classList.contains('remove-tweet')){
       let elt = e.target.parentElement.textContent;
       elt = elt.substring(0,elt.length -1);
       deleteToLocalStorage(elt);
      e.target.parentElement.remove();



 }
}

//Append new Tweet
function appendTweet(tweet){
  const removeBtn = document.createElement("a");
  removeBtn.classList = 'remove-tweet';
  removeBtn.textContent = 'X';

  //create a li element
  const li = document.createElement("li");
  li.textContent = tweet;
  // add de remove to li
  li.appendChild( removeBtn )
  tweetList.appendChild(li);
  tweets.push(tweet);
}


// Add or Update localStorage
function addTweetToLocalStorage(){
  localStorage.setItem("tweets",JSON.stringify(tweets))
}

//Delete Item to localStorage
function deleteToLocalStorage(elt){
  tweets.forEach(function(tweet,index){
    if (elt === tweet){
        tweets.splice(index,1)
    }
  })
 addTweetToLocalStorage();
}

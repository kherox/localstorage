// Variable

const tweetList = document.getElementById("tweet-list");
const tweets    = []

// EventListener
EventListener();
loadToLocalStorage();

function EventListener(){
  document.querySelector("#form").addEventListener('submit',newTweet);
  tweetList.addEventListener("click",removeTweet);
}

function loadToLocalStorage(){
  let all_tweets = [];
  all_tweets = JSON.parse(localStorage.getItem("tweets"));

  if (all_tweets){
    all_tweets.forEach(function(tweet){
       appendTweet(tweet);
    })
  }
}

//Function

function newTweet(e){
  e.preventDefault();
  const tweet = document.getElementById('tweet').value;
  //create a remove button
  appendTweet(tweet)
  document.getElementById("tweet").value = " ";
  tweets.push(tweet);

  addTweetToLocalStorage();
}

function removeTweet(e){
 if (e.target.classList.contains('remove-tweet')){
       let elt = e.target.parentElement.textContent;
       elt = elt.replace("X","");
       deleteToLocalStorage(elt);
      e.target.parentElement.remove();



 }
}

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


function addTweetToLocalStorage(){
  localStorage.setItem("tweets",JSON.stringify(tweets))
}

function deleteToLocalStorage(elt){
 let index = 0;
 for (var i = 0; i < tweets.length; i++) {
      if (tweets[i] == elt) {
        index = i;
        break;
      }
 }
 tweets.pop(index);
 addTweetToLocalStorage();
}

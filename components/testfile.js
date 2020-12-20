
function cardCreator () {

    const card = document.createElement('div'); 
    const img = document.createElement('img');
    const cardInfo = document.createElement('div'); 
    const name = document.createElement('h3');
    const userName = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');
    const pageLink = document.createElement('a');
  
  
    card.classList.add('card');
    cardInfo.classList.add('card-info');
    name.classList.add('name');
    userName.classList.add('username');
  
    //skipping image for now //
     name.textContent = 'test';
     userName.textContent = 'test';
     location.textContent = 'test';
     profile.textContent = 'Profile';
     pageLink.textContent = 'test';
     followers.textContent = 'test';
     following.textContent = 'test';
     bio.textContent = 'test';
  
     //append image to 'card' parent // 
     cardInfo.append(name);
     cardInfo.append(userName);
     cardInfo.append(location);
     cardInfo.append(profile);
     cardInfo.append(pageLink);
     cardInfo.append(followers);
     cardInfo.append(following);
     cardInfo.append(bio); 
  
  
     return cardCreator; 
  
  }; 

let cardInfo = document.querySelector('.card-info'); 
data.forEach(item => {
  cardInfo.append(articleMaker(item))
})



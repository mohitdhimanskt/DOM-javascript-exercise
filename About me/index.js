const bodyTag = document.body;
bodyTag.style.fontFamily = 'Arial, sans-serif';

const nickName = document.getElementById('nickname').innerText ='Mohit Dhiman';
const favFood = document.getElementById('fav-food').innerText ='Dal-Makhni';
const homeTown = document.getElementById('hometown').innerText ='Mandi';
const listItem = document.getElementsByTagName('li');
for (let i = 0; i < listItem.length; i++) {
  listItem[i].className = 'list-item';
}
const imgOfMe = document.createElement('img');
imgOfMe.setAttribute('src','https://www.dropbox.com/s/gqw18re9n5766tk/97kUE580.jpg%20small.jpeg?dl=1');

const h1 = document.querySelector('h1');
bodyTag.insertBefore(imgOfMe, h1); 
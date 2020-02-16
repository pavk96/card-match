var 가로=4;
var 세로=3;
// var 이미지후보1=[
// 'C:/Users/user/Desktop/web/a.jpg',
// 'C:/Users/user/Desktop/web/b.png',
// 'C:/Users/user/Desktop/web/a.jpg',
// 'C:/Users/user/Desktop/web/c.jpg',
// 'C:/Users/user/Desktop/web/d.jpg',
// 'C:/Users/user/Desktop/web/c.jpg',
// 'C:/Users/user/Desktop/web/d.jpg',
// 'C:/Users/user/Desktop/web/e.jpg',
// 'C:/Users/user/Desktop/web/b.png',
// 'C:/Users/user/Desktop/web/f.jpg',
// 'C:/Users/user/Desktop/web/e.jpg',
// 'C:/Users/user/Desktop/web/f.jpg'];
// var 이미지후보2=['C:/Users/user/Desktop/web/1.jpg',
// 'C:/Users/user/Desktop/web/2.jpg',
// 'C:/Users/user/Desktop/web/3.jpg',
// 'C:/Users/user/Desktop/web/4.jpg',
// 'C:/Users/user/Desktop/web/5.jpg',
// 'C:/Users/user/Desktop/web/6.jpg',
// 'C:/Users/user/Desktop/web/7.jpg',
// 'C:/Users/user/Desktop/web/8.jpg',
// 'C:/Users/user/Desktop/web/9.jpg',
// 'C:/Users/user/Desktop/web/10.jpg',
// 'C:/Users/user/Desktop/web/11.jpg',
// 'C:/Users/user/Desktop/web/12.jpg'];
// var 이미지=[];
var 색깔후보 =['red','red','blue','blue','pink','pink','yellow','yellow','green','green','black','black'];
var 색깔 = [];
var 클릭플래그 = true;
var 클릭카드 =[];
var 완성카드 = [];
for(var i=0;i<색깔.length;i+=1){
    색깔 = 색깔.concat(색깔후보.splice(Math.floor(Math.random()*색깔후보.length), 1));
  }
console.log(색깔);


function 카드세팅(가로,세로){
  클릭플래그 = false;
  for (var i = 0; i<가로*세로;i+=1){
    var card=document.createElement('div');
    card.className='card';
    var cardInner=document.createElement('div');
    cardInner.className ='card-inner';
    var cardFront=document.createElement('div');
    cardFront.className='card-front';
    //cardFront.style.backgroundImage = "url('" + 이미지후보2[i] + "')";
    //cardFront.style.backgroundSize = 'cover';
    
    var cardBack=document.createElement('div');
    cardBack.className='card-back';
    //cardBack.style.backgroundImage = "url('" + 이미지후보1[i] + "')";
    cardBack.style.backgroundColor =색깔[i];
    //cardBack.style.backgroundSize = 'cover';
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    (function (c){
      card.addEventListener('click', function() {
        if(클릭플래그 && !완성카드.includes(c)) {
          c.classList.toggle('flipped');
          클릭카드.push(c);
          if(클릭카드.length===2){
            if(클릭카드[0].querySelector('.card-back').style.backgroundColor===클릭카드[1].querySelector('.card-back').style.backgroundColor) {
              완성카드.push(클릭카드[0]);
              완성카드.push(클릭카드[1]);
              클릭카드=[];
              if(완성카드.length===12){
                alert('성공! 축하합니다~\n생일축하해');
              }
            }else {
              클릭플래그=false;
              setTimeout(function(){
                클릭카드[0].classList.remove('flipped');
                클릭카드[1].classList.remove('flipped');
                클릭플래그 = true;
                클릭카드 =[];
              }, 1000);
            }
          }
        }
      });
    })(card);
    document.body.appendChild(card);
  }
    document.querySelectorAll('.card').forEach(function(card, index) {
      setTimeout(function(){
        card.classList.add('flipped');
      }, 1000 + 100 * index);
    });

    setTimeout(function() {
      document.querySelectorAll('.card').forEach(function(card,index) {
        card.classList.remove('flipped');
      });
    클릭플래그=true;
  }, 3000);
  }



카드세팅(가로,세로);

var sendE = document.querySelector('.button');
sendE.onclick = function(){
    subject = document.querySelector('#mail').value;
    if(subject !== '')
    {
        window.open('mailto:ynaj2200@gmail.com?subject='+encodeURIComponent(subject))
    }
}
var spot = document.getElementsByClassName('spoto').item(0);
var madnessLevel = 0;
spot.onclick = function(e){
    madnessLevel++;
    spot.innerText = madnessLevel;
    blow(e.clientX,e.clientY);
    
    if(madnessLevel >= 6)
    {
        var x = (Math.round(Math.random() * (-60 - -2000) + -2000)) + 'px';
        var y = (Math.round(Math.random() * 5000 ))+ 'px';

        spot.style.animation = ' red-dead 0.5s 4';
        spot.style.left = x;
        spot.style.top = y;

        madnessLevel = -22;
        setTimeout(function(){
            spot.style.left = (Math.random() * window.innerWidth) + 'px';
            spot.style.top = (Math.random() * window.innerHeight) + 'px';
            madnessLevel = 0;
            spot.style.animation = '';
            spot.innerText = '0';
        },4000);
    }
}

window.ondblclick = function(e){
    if( madnessLevel !== -22 )
    {
        spot.style.left = (e.clientX - 25) + 'px';
        spot.style.top = (window.pageYOffset + e.clientY - 25) + 'px';
    }
}



function blow(x,y){
    var div = document.createElement('div');
    div.classList.add('blow');
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    spot.style.animation = ' proto-anger .7s 3';
    document.body.append(div);
    setTimeout(function(){
        div.remove();
        spot.style.animation = '';
    },1000)
}
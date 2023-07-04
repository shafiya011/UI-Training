var countdownElement = document.getElementById('countdown');
var initial=countdownElement.innerHTML;
var bgimgchange=document.getElementById('bgimg1');
//  console.log(bgimgchange.src);
// toupdate
setInterval(() => {
    // if(initial>0){
    // initial--;
    initial=initial>0?initial-1:0;
    countdownElement.innerHTML=initial;
    
    var bgchange = initial%2 == 0 ? 'https://w0.peakpx.com/wallpaper/452/608/HD-wallpaper-sunset-sky-gradient-abstraction.jpg':'https://w0.peakpx.com/wallpaper/118/226/HD-wallpaper-sky-sunset-gradient-abstraction.jpg';
    bgimgchange.src=bgchange;

    countdownElement.style.fontSize=initial * 50 +'px';
    console.log(countdownElement.style.fontSize);
    
    bgimgchange.style.width = initial * 10 + '%';
},1000);

// tobgchange



let rotatingArray=[1,2,3,4];

let slideIndex=rotatingArray[0];

let carousel=document.querySelector(".carousel");

let slideImg=[...document.getElementsByClassName("slide-img")];

mainSlide(slideIndex);




function changeSlide(n){
  if(n<0){
    mainSlide(arrayRotate(rotatingArray,true));
  }else{
    mainSlide(arrayRotate(rotatingArray,false));
  }
}

function arrayRotate(rotatingArray, flag) {
  if (flag){
    let last = rotatingArray.pop();
    rotatingArray.unshift(last);
  }
  else{
    let first = rotatingArray.shift();
    rotatingArray.push(first);
  }
  return rotatingArray;
}



function mainSlide(slideIndex){


for(let i=0;i<3;i++){
  slideImg[i].style.display="none";
}



slideImg[0].setAttribute("src",`c${rotatingArray[0]}.jpg`);
slideImg[1].setAttribute("src",`c${rotatingArray[1]}.jpg`);
slideImg[2].setAttribute("src",`c${rotatingArray[2]}.jpg`);






// left side image opacity dec
slideImg[0].style.display="inline";
slideImg[0].style.filter="opacity(50%)";

//main image
slideImg[1].style.filter="none";
slideImg[1].style.display="inline";

// right side image opacity dec
slideImg[2].style.display="inline";
slideImg[2].style.filter="opacity(50%)";

dots[rotatingArray[0]-1].className +=" active";
}
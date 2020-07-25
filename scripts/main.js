let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/xd.jpg') {
      myImage.setAttribute('src', 'images/xd2.png');
    } else {
      myImage.setAttribute('src', 'images/xd.jpg');
    }
}
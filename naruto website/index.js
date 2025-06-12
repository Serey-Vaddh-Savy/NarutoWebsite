
let displaySasuke = document.getElementById("displaySasuke");

function SasukeIntroduction(check){
    let title = document.createElement("h2");
    let title_text = document.createTextNode("Sasuke Uchiha");
    title.appendChild(title_text);
    let intro = document.createElement("p");
    let intro_text = document.createTextNode("Sasuke Uchiha is a key character from Naruto, known for his powerful abilities and complex personality. As one of the last surviving members of the Uchiha clan, he seeks revenge against his older brother, Itachi, who massacred their family. A gifted ninja, Sasuke begins as a member of Team 7 with Naruto and Sakura but eventually leaves the village to gain power. His journey is marked by darkness, inner conflict, and redemption. Though once consumed by vengeance, Sasuke later becomes a protector from the shadows, dedicating himself to peace and justice in his own way by the end of the series.");
    intro.appendChild(intro_text);
    let picContainer = document.createElement("div");
    picContainer.className = "picContainer"
    const img = document.createElement("img");
    img.style.width = "80%";
    img.style.height = "auto";
    img.style.objectFit = "cover";

    img.style.transition = "opacity 0.5s ease-in-out";

    img.className = "sasuke-gif-reset";



    const images = [
        "sasukeChildhoot/img1.webp",
        "sasukeChildhoot/img2.jpg",
        "sasukeChildhoot/img3.jpg",
        "sasukeChildhoot/img4.jpg",
        "sasukeChildhoot/img5.jpg"
        
    ];
    let index = 0;
    
    let slideshowImg = document.createElement("img");
    slideshowImg.style.width = "80%";
    slideshowImg.style.height = "auto";
    slideshowImg.style.objectFit = "cover";
    slideshowImg.style.transition = "opacity 0.5s ease-in-out";
    slideshowImg.className = "sasuke-slideshow-img";
    slideshowImg.src = images[0];

    function changeImage() {
    slideshowImg.style.opacity = 0;
    setTimeout(() => {
        slideshowImg.src = images[index];
        slideshowImg.style.opacity = 1;
        index = (index + 1) % images.length;
        }, 700);
    }

    slideshowImg.className = "sasuke-gif-reset";

    // Set initial image


    // Start cycling images every 2 seconds
    setInterval(changeImage, 2000);

    let main = document.createElement("div");
    main.className = "mainContainer";
    main.style.display =  "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";

    main.appendChild(title);
    main.appendChild(intro);
    main.appendChild(slideshowImg);
    main.style.marginRight = "10vw";
    
    main.className = "characterSummary"
    if(check == true){
        displaySasuke.style.justifyContent = "space-between";
        displaySasuke.appendChild(main);
    }

}


function SasukeOnclick() {
    let displayedSharingan = document.getElementById("sasukeSharingan");
    let displaySasuke = document.getElementById("displaySasuke");
    displayedSharingan.style.animationName = "spin";
    displayedSharingan.style.animationDuration = "200ms";
    displayedSharingan.style.animationTimingFunction = "linear";
    let img = document.createElement("img");
    img.src = "pics/sasukeusingms.gif";
    img.className = "sasuke-gif-reset";
    displayedSharingan.style.transition = "margin-left 1s, margin-top 1s";
    displayedSharingan.style.transition = "margin-left 0.5s";
    displayedSharingan.style.marginLeft = "-150px";
    displayedSharingan.style.transition = "margin-top 0.5s";
    displayedSharingan.style.marginTop = "-100px";
    displaySasuke.style.backgroundColor = "rgb(20, 20, 20)";
    displayedSharingan.style.width = "6vw";
    displayedSharingan.style.height = "auto"
    let secondImg = document.createElement("img");
    secondImg.src = "pics/sasuke ems.png"
    
    

    setTimeout(function() {
        displaySasuke.style.backgroundColor = "black";
        displaySasuke.removeChild(displayedSharingan);
        displaySasuke.appendChild(img);
    }, 2000);


    setTimeout(function() {
        displaySasuke.style.backgroundColor = "black";
        displaySasuke.removeChild(img);
        
        displaySasuke.appendChild(secondImg);
        displaySasuke.style.backgroundColor = "#123460";
    }, 4000);

    let thirdImage = document.createElement("img");
    thirdImage.src = "pics/susanoo.jpg";
    thirdImage.style.height = "100%";
    thirdImage.className = "sasuke-gif-reset";

    let fourthImage = document.createElement("img");
    fourthImage.src = "pics/sasukesigma.jpg";
    fourthImage.className = "sasuke-gif-reset";
    fourthImage.style.height = "80%";
    fourthImage.style.marginLeft = "50px";
    fourthImage.style.boxShadow = "-10px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";

    

    secondImg.onclick = function(){
        secondImg.style.animationName = "spin";
        secondImg.style.animationDuration = "700ms";
        secondImg.style.animationIterationCount = "2.5";
        secondImg.style.animationTimingFunction = "linear";
        displaySasuke.style.backgroundColor = "black";
        secondImg.style.filter = "brightness(300%)";
        thirdImage.style.animationName = "shakeImg";
        thirdImage.style.animationDuration = "10ms";
        thirdImage.style.animationIterationCount = "infinite"; 
        thirdImage.style.animationTimingFunction = "linear";
        
        


        setTimeout(function(){

            
            displaySasuke.style.backgroundColor = "#26141f";
            displaySasuke.style.justifyContent = "flex-start";
            displaySasuke.removeChild(secondImg);
            displaySasuke.appendChild(fourthImage);
            SasukeIntroduction(true);

        }, 2000)
        
            

    }

    
     
    
   
        

}

let displayNaruto = document.getElementById("displayNaruto");

function NarutoIntroduction(check){
    let title = document.createElement("h2");
    let title_text = document.createTextNode("Uzumaki Naruto");
    title.appendChild(title_text);
    let intro = document.createElement("p");
    let intro_text = document.createTextNode("Naruto Uzumaki is the main protagonist of Naruto, known for his determination, optimism, and unbreakable spirit. Born as the host of the Nine-Tails Fox, he was shunned by his village and grew up lonely and misunderstood. Despite this, he dreams of becoming Hokage—the strongest ninja and leader of the village—to earn respect and protect others. Through hard work and perseverance, Naruto grows into a powerful ninja, forming strong bonds with friends like Sasuke and Sakura. His journey is one of growth, friendship, and overcoming adversity. In the end, Naruto achieves his dream and brings peace to the ninja world");
    intro.appendChild(intro_text);
    let picContainer = document.createElement("div");
    picContainer.className = "picContainer"
    const img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";

    img.style.transition = "opacity 0.5s ease-in-out";
    picContainer.appendChild(img);
    img.className = "sasuke-gif-reset";

    const images = [
        "narutoChildhood/img1.webp",
        "narutoChildhood/img2.webp",
        "narutoChildhood/img3.webp",
        "narutoChildhood/img4.webp"
        
    ];
    let index = 0;
    let slideshowImg = document.createElement("img");
    slideshowImg.style.width = "80%";
    slideshowImg.style.height = "auto";
    slideshowImg.style.objectFit = "cover";
    slideshowImg.style.transition = "opacity 0.5s ease-in-out";

    // Set the initial image
    slideshowImg.src = images[0];

    slideshowImg.className = "slideShow";

    // Append the image to a container (e.g., displayNaruto or a specific div)
   

    function changeImage() {
        slideshowImg.style.opacity = 0;
        setTimeout(() => {
            slideshowImg.src = images[index];
            slideshowImg.style.opacity = 1;
            index = (index + 1) % images.length;
        }, 500);
    }

    // Start the slideshow
    setInterval(changeImage, 2000);

    displayNaruto.appendChild(img);

    

    let main = document.createElement("div");
    main.className = "mainContainer";
    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";
    main.appendChild(title);
    main.appendChild(intro);
    main.appendChild(slideshowImg);
    


    main.className = "characterSummary"
    if(check == true){
        displayNaruto.appendChild(main);

    }

}

function NarutoOnClick(){

    let sealPic = document.getElementById("narutoSeal");
    sealPic.style.width = "0";
    sealPic.style.height = "0";
    let img = document.createElement("img");
    img.src = "pics/narutogif.gif"
    setTimeout(function() {
        
        displayNaruto.appendChild(img);
        img.style.width = "100%";
        img.style.height = "auto";

    }, 500);
    setTimeout(function() {
        displayNaruto.style.display = "flex";
        displayNaruto.style.justifyContent = "space-between";
        displayNaruto.removeChild(img);
        displayNaruto.style.backgroundColor = "#EB6A28";
        let img2 = document.createElement("img");
        img2.src = "pics/naruto9tails.jpg";
        img2.style.height = "80%";
        img2.style.width = "auto";
        img2.style.opacity = "0";
        img2.style.transition = "opacity 1s";
        img2.style.marginRight = "50px";
        NarutoIntroduction(true);
        img2.style.boxShadow = "10px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        displayNaruto.appendChild(img2);
        setTimeout(() => {
            img2.style.opacity = "1";
        }, 10);
        
    }, 4200);

}


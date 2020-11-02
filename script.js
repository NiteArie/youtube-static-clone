const randomNumber = (to) => {
    return Math.floor(Math.random() * to) + 1;
}

let moreVideoDiv = document.querySelector(".more__videos");
let moreCount = 10;

for ( let i = 0; i < moreCount; i++ ) {
    let section = document.createElement("section");
    section.classList.add("more__videos__card");
    
    let image = document.createElement("img");
    image.src ="./assets/placeholder.png";
    image.classList.add("more__videos__card__img")

    let contentDiv = document.createElement("div");
    let contentTitle = document.createElement("h3");
    let contentCreator = document.createElement("h4");
    let contentMeta = document.createElement("span");

    contentDiv.classList.add("more__videos__card__info");
    contentTitle.textContent = `Contributing to Open Source Part ${i + 2}: The Real Way`;
    contentCreator.textContent = "The Odin Project";
    contentMeta.textContent = `${randomNumber(30)}K views - ${randomNumber(5)} years ago`;

    contentDiv.appendChild(contentTitle);
    contentDiv.appendChild(contentCreator);
    contentDiv.appendChild(contentMeta);

    section.append(image);
    section.append(contentDiv);

    moreVideoDiv.append(section);
}
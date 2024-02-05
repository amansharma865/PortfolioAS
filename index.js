
        const dynamicText = document.querySelector(".first-text")
        const words = ["WEB DEVELOPER...", "WEB DESIGNER...", "PROGRAMMER...","UI/UX Designer..."];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 150);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));
const hidden1Elements=document.querySelectorAll('.hidden1');
hidden1Elements.forEach((el)=>observer.observe(el));
const hidden2Elements=document.querySelectorAll('.hidden2');
hidden2Elements.forEach((el)=>observer.observe(el));
const hidden3Elements=document.querySelectorAll('.hidden3');
hidden3Elements.forEach((el)=>observer.observe(el));
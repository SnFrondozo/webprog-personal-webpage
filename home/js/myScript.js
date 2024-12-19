
function updateDemoText(newText) {
    document.getElementById("demo").innerHTML = newText;
}


function showFirstParagraphText() {
    const paragraphs = document.getElementsByTagName("p");
    if (paragraphs.length > 0) {
        const firstParagraphText = paragraphs[0].innerHTML;
        updateDemoText(`The text in the first paragraph (index 0) is: ${firstParagraphText}`);
    } else {
        updateDemoText("No paragraphs found.");
    }
}


function changeParagraphText() {
    updateDemoText("Paragraph changed.");
}


document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.querySelector('button[onclick="myFunction1()"]');
    const button2 = document.querySelector('button[onclick="myFunction2()"]');
    
    if (button1) {
        button1.addEventListener("click", () => changeParagraphText());
    }

    if (button2) {
        button2.addEventListener("click", () => showFirstParagraphText());
    }
});

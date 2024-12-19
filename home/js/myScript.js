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

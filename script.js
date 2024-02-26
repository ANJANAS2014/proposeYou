function goToNextPage() {
    window.location.href = "nextpage.html";
}
function goToQuizPage() {
    window.location.href = "nextpage1.html"
}

// Text animation
const text = "Hi LalluKutty! Anju wants to have some fun with you.......Hihi....I know my baby likes challenges. So I created a questionnaire to see whether you know some basic things about us or not. Let's see how you crack it!....... Well here's the thing, you have 10 questions and all of it is related to us .Let's see how it goes!!!!!! If you are ready , click OK.";
let index = 0;

function animateText() {
    if (index < text.length) {
        document.getElementById("text").innerHTML += text.charAt(index);
        index++;
        setTimeout(animateText, 50); // Adjust the speed of typing animation (milliseconds)
    } else {
        document.getElementById("ok-button").style.display = "block"; // Display the OK button
    }
}

animateText();

// Timeout to enable the "Yes" button after 1 minute
setTimeout(function() {
    document.getElementById("yes-button").disabled = false;
    document.getElementById("notification").textContent = "You can now click 'Yes'!";
}, 60000); // 1 minute = 60,000 milliseconds

// Function to make the "No" button float when hovered
function floatButton() {
    // No action needed in JavaScript for floating effect, handled by CSS
}




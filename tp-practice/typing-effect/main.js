document.addEventListener('DOMContentLoaded', function () {
    const texts = ["Hello, I'm Nguyễn Trọng Phú!", "Welcome to my profile!"];
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100; // tốc độ đánh chữ, đơn vị: ms
    const deletingSpeed = 50; // tốc độ xóa chữ, đơn vị: ms
    const delayBetweenTexts = 1000; // thời gian chờ giữa các chuỗi, đơn vị: ms

    function type() {
        if (charIndex < texts[textIndex].length) {
            document.getElementById('typing-text').textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(deleteText, delayBetweenTexts);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            document.getElementById('typing-text').textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

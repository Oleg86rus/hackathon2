export function stopTyping() {
  const typingtext = document.querySelector(".typing-demo");
  console.log(typingtext);
  setTimeout(() => {
    typingtext.style.borderRight = "none";
  }, 2000);
}
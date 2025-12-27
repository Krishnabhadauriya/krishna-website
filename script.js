(function(){
  emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY"
  });
})();

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Form submit detected ✅");
});
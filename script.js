window.onload = function() {
    document.querySelectorAll('.progress').forEach(function(bar){
        setTimeout(() => {
            bar.style.width = bar.getAttribute('data-value') + "%";
        }, 500);
    });

    // Simple contact button animation
    document.getElementById("contactBtn").addEventListener("click", function(){
        this.innerText = "Thanks for reaching out!";
        this.style.background = "linear-gradient(90deg, #a1ffce 0%, #faffd1 100%)";
        setTimeout(() => {
            this.innerText = "Get In Touch";
            this.style.background = "";
        }, 2000);
    });
};

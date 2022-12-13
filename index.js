window.onload = () => {
    const shareButton = document.getElementById("share1");
    const shareDiv = document.getElementById("contain1");

    shareButton.addEventListener("click", () => {
        shareDiv.style.display = "flex";
    });
    };
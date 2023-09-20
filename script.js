var firstButtonPress = true;
var currentContentId = 'homeContent';

document.querySelectorAll(".button").forEach(function(button) {
    button.addEventListener("click", function() {
        var contentId = this.getAttribute("data-content");

        if (contentId === currentContentId) {
            return;
        }

        var selectedContent = document.getElementById(contentId);

        var containerContent = document.getElementById('containerContent');
        var contents = containerContent.querySelectorAll(".content");

        if (firstButtonPress) {
            contents.forEach(function(content) {
                content.style.opacity = 0;
            });
            selectedContent.style.opacity = 1;
            firstButtonPress = false;
        } else {
            contents.forEach(function(content) {
                content.style.opacity = 0;
            });
            setTimeout(function() {
                selectedContent.style.opacity = 1;
            }, 1000);
        }

        var activeButton = document.querySelector(".button.active");
        if (activeButton) {
            activeButton.classList.remove("active");
        }

        this.classList.add("active");
        currentContentId = contentId;
    });
});

// Set the initial active button
var initialButton = document.querySelector(".button[data-content='" + currentContentId + "']");
initialButton.classList.add("active");

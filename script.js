document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.querySelector(".info h1");
    const titleElement = document.querySelector(".info h3");

    nameElement.addEventListener("mouseover", function() {
        this.style.fontSize = "36px";
    });

    nameElement.addEventListener("mouseout", function() {
        this.style.fontSize = "";
    });

    titleElement.addEventListener("mouseover", function() {
        this.style.fontSize = "24px"; 
    });

    titleElement.addEventListener("mouseout", function() {
        this.style.fontSize = "";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const technicalSkillsList = document.querySelector(".technical-skills"); // Target the parent container
  
    technicalSkillsList.addEventListener("mouseover", function() {
      this.querySelectorAll("ul").forEach(function(ul) {
        ul.style.backgroundColor = 'skyblue';
        ul.style.fontSize = '';
      });
    });
  
    technicalSkillsList.addEventListener("mouseout", function() {
      this.querySelectorAll("ul").forEach(function(ul) {
        ul.style.backgroundColor = 'white';
        ul.style.fontSize = ''; 
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const technicalSkillsList = document.querySelector(".soft-skills"); 
  
    technicalSkillsList.addEventListener("mouseover", function() {
      this.querySelectorAll("ul").forEach(function(ul) {
        ul.style.backgroundColor = 'skyblue';
        ul.style.fontSize = '';
      });
    });
  
    technicalSkillsList.addEventListener("mouseout", function() {
      this.querySelectorAll("ul").forEach(function(ul) {
        ul.style.backgroundColor = 'white';
        ul.style.fontSize = ''; 
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const technicalSkillsList = document.querySelector(".hobbies"); 
  
    technicalSkillsList.addEventListener("mouseover", function() {
      this.querySelectorAll("ul").forEach(function(ul) {
        ul.style.backgroundColor = 'skyblue';
        ul.style.fontSize = '';
      });
    });
  
    technicalSkillsList.addEventListener("mouseout", function() {
      this.querySelectorAll("ul").forEach(function(ul) {
        ul.style.backgroundColor = 'white';
        ul.style.fontSize = ''; 
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;
            
            document.querySelector('.advice').textContent = advice;
        })
        .catch(error => console.error("Error fetching advice:", error));
});
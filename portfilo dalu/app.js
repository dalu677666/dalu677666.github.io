 
        window.onscroll = function() {
            let scrollTopBtn = document.getElementById("scrollTopBtn");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };

        
        function scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }


 function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth' // Enables smooth scrolling
            });
        }

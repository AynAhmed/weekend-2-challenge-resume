function toggleMode(){
        var element = document.body;
        element.classList.toggle("dark-mode");

    }

    $(document).ready(function() {
        var experienceSection = $('#experience');

        // Set up the initial state
        experienceSection.css('opacity', 0);
        experienceSection.css('transform', 'translateY(50px)');

        $(window).scroll(function() {
            var windowTop = $(window).scrollTop();
            var experienceSectionTop = experienceSection.offset().top;

            if (windowTop >= experienceSectionTop - 600) {
                experienceSection.animate({
                    opacity: 1,
                    transform: 'translateY(0)'
                }, 1000);
            }
        });


            $("#expandBtn").click(function() {
              $("#soclinks").slideToggle(400); // Toggle the visibility with a slide animation
             
            });
       
 
    });

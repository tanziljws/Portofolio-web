        const interests = document.querySelectorAll('#interests li');
        const interestText = document.querySelector('#interest-text');
        const pathSpan = document.querySelector('.terminal-path');
        const cursorSpan = document.querySelector('.terminal-cursor');

        const UNDERSCORE_CLASS = 'blink-underscore'; 

        interests.forEach(interest => {
            interest.addEventListener('click', () => {
                const interestTextValue = interest.dataset.interest;
                showInterestText(interestTextValue);
            });
        });

        function showInterestText(text) {
            const userHost = 'user@hostname';
            const baseDirectory = '~/user/info/interest';
            const separator = ':';


            let specificPath;
            if (text === "['kabab'], ['kabuli'], ['fruits']") {
                specificPath = '/tanzil/fav/food';
            } else if (text === "['japan'], ['rusia'], ['swiss']") {
                specificPath = '/tanzil/fav/country';
            } else if (text === "['pop']") {
            specificPath = '/tanzil/fav/music';
        } else {
            specificPath = '/tanzil/fav/hobbies'
        }

            pathSpan.textContent = ` ${baseDirectory}${specificPath} ${separator}`;

            interestText.innerHTML = '';

            const resultSpan = createTypewriterSpan(`${text}_`);
            resultSpan.classList.add(UNDERSCORE_CLASS); 

            interestText.appendChild(resultSpan);

            setTimeout(() => {
                cursorSpan.classList.add('hidden');
            }, 500);
        }

        function createTypewriterSpan(text) {
            const span = document.createElement('span');
            span.style.whiteSpace = 'nowrap';
            span.className = 'typewriter';

            for (let i = 0; i < text.length; i++) {
                const charSpan = document.createElement('span');
                charSpan.textContent = text[i];

                if (text[i] === '_') {
                    charSpan.classList.add(UNDERSCORE_CLASS);
                } else {
                    charSpan.style.animation = `typewriter 0.5s steps(1) ${i * 0.1}s both`;
                }

                span.appendChild(charSpan);
            }

            return span;
        }

        $(document).ready(function () {

            $('#project-link').on('click', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $('#project-section').offset().top
                }, 800);
            });
        });


        document.addEventListener('DOMContentLoaded', function () {
        var footer = document.querySelector('.footers');
        var isFooterVisible = false;

        window.addEventListener('scroll', function () {
            var scrollHeight = document.documentElement.scrollHeight;
            var windowHeight = window.innerHeight;
            var scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

            var threshold = 10;

            if (scrollHeight - scrollPosition <= windowHeight + threshold && !isFooterVisible) {
                footer.style.opacity = '1';
                isFooterVisible = true;
            } else if (scrollHeight - scrollPosition > windowHeight + threshold && isFooterVisible) {
                footer.style.opacity = '0';
                isFooterVisible = false;
            }
        });
        });


        $(window).scroll(function() {
            var hT = $('#skill-bar-wrapper').offset().top,
                hH = $('#skill-bar-wrapper').outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT+hH-1.4*wH)){
                jQuery(document).ready(function(){
                    jQuery('.skillbar-container').each(function(){
                        jQuery(this).find('.skills').animate({
                            width:jQuery(this).attr('data-percent')
                        }, 5000); // 5 seconds
                    });
                });
            }
         });

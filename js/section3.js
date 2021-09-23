export function s3carousel() {

    const test1 = document.querySelector('.testimonial1');
    const test2 = document.querySelector('.testimonial2');
    const test3 = document.querySelector('.testimonial3');
    const test4 = document.querySelector('.testimonial4');
    const test5 = document.querySelector('.testimonial5');
    const test6 = document.querySelector('.testimonial6');
    const leftcarouselbutton = document.querySelector('.leftchange');
    const rightcarouselbutton = document.querySelector('.carouselrightarrow');


    // Left Carousel Button Logic

    leftcarouselbutton.addEventListener('click', (e) => {

        e.preventDefault();

        //Testimonial 1 Logic
        if (test1.classList.contains('shown')) {

            test1.classList.remove('shown');
            test1.classList.add('hidden');
            test2.classList.add('shown');
            test2.classList.remove('hidden');

        }

        //Testimonial 2 Logic
        else if (test2.classList.contains('shown')) {

            test2.classList.remove('shown');
            test2.classList.add('hidden');
            test3.classList.add('shown');
            test3.classList.remove('hidden');

        }


        //Testimonial 3 Logic
        else if (test3.classList.contains('shown')) {

            test3.classList.remove('shown');
            test3.classList.add('hidden');
            test4.classList.add('shown');
            test4.classList.remove('hidden');

        }

        //Testimonial 4 Logic
        else if (test4.classList.contains('shown')) {

            test4.classList.remove('shown');
            test4.classList.add('hidden');
            test5.classList.add('shown');
            test5.classList.remove('hidden');

        }


        //Testimonial 5 Logic
        else if (test5.classList.contains('shown')) {

            test5.classList.remove('shown');
            test5.classList.add('hidden');
            test6.classList.add('shown');
            test6.classList.remove('hidden');

        }


        //Testimonial 6 Logic
        else if (test6.classList.contains('shown')) {

            test6.classList.remove('shown');
            test6.classList.add('hidden');
            test1.classList.add('shown');
            test1.classList.remove('hidden');

        };
    });




    // Right Carousel Button Logic

    rightcarouselbutton.addEventListener('click', (e) => {

        e.preventDefault();

        //Testimonial 1 Logic
        if (test1.classList.contains('shown')) {

            test1.classList.remove('shown');
            test1.classList.add('hidden');
            test6.classList.add('shown');
            test6.classList.remove('hidden');

        }

        //Testimonial 2 Logic
        else if (test2.classList.contains('shown')) {

            test2.classList.remove('shown');
            test2.classList.add('hidden');
            test1.classList.add('shown');
            test1.classList.remove('hidden');

        }


        //Testimonial 3 Logic
        else if (test3.classList.contains('shown')) {

            test3.classList.remove('shown');
            test3.classList.add('hidden');
            test2.classList.add('shown');
            test2.classList.remove('hidden');

        }

        //Testimonial 4 Logic
        else if (test4.classList.contains('shown')) {

            test4.classList.remove('shown');
            test4.classList.add('hidden');
            test3.classList.add('shown');
            test3.classList.remove('hidden');

        }


        //Testimonial 5 Logic
        else if (test5.classList.contains('shown')) {

            test5.classList.remove('shown');
            test5.classList.add('hidden');
            test4.classList.add('shown');
            test4.classList.remove('hidden');

        }


        //Testimonial 6 Logic
        else if (test6.classList.contains('shown')) {

            test6.classList.remove('shown');
            test6.classList.add('hidden');
            test5.classList.add('shown');
            test5.classList.remove('hidden');

        };
    });
}
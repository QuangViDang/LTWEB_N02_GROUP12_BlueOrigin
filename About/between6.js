
            let currentIndex = 0;
            let time;
               
            const slides = document.querySelectorAll('.img');
            const texts = document.querySelectorAll('.between6-text-im');

        // Hàm chuyển ảnh tiếp theo
        function nextSlide() {
            
            if (slides.length === 0 || texts.length === 0) {
            return; // Không có phần tử, thoát khỏi hàm
            }
        // Ẩn ảnh và chữ hiện tại
            slides[currentIndex].classList.remove('opacity');
            texts[currentIndex].classList.remove('active');

        // Tăng chỉ số hiện tại và kiểm tra xem đã đến ảnh cuối cùng chưa
            currentIndex++;
            if (currentIndex >= slides.length) {
                currentIndex = 0;
  
            }
            if (currentIndex === 3) {
                texts.forEach(function(text) {
                text.style.opacity = 1;
            });
            }else{
                texts.forEach(function(text) {
                text.style.opacity = '';
                });    
            }
  

        // Hiển thị ảnh tiếp theo
        slides[currentIndex].classList.add('opacity');
        texts[currentIndex].classList.add('active');
    }
        function play() {
            time = setInterval(nextSlide, 7000);
           
        }

        function stop() {
                clearInterval(time);
          

        }
        play(); 

        // JS play
        const btnplay = document.querySelector('.btn-play');
        
        btnplay.addEventListener('click', () => {
            btnplay.classList.toggle('pause');
            
            if (btnplay.classList.contains('pause')) {
                // Dừng slider
                stop();
            } else {
                // Tiếp tục slider
                play();
            }
        });
        

texts.forEach(function(text, index) {
    text.setAttribute('data-index', index);

    text.addEventListener('mouseover', function() {
        stop();
        const dataIndex = parseInt(text.getAttribute('data-index'));
        texts.forEach(function(text) {
            text.classList.remove('active');
        });
        slides.forEach(function(slide) {
            slide.classList.remove('opacity');
        });
        text.classList.add('active');
        slides[dataIndex].classList.add('opacity');
        btnplay.classList.add('pause');
    });

    text.addEventListener('mouseleave', function() {
        const dataIndex = parseInt(text.getAttribute('data-index'));
        // text.classList.remove('active');
        // slides[dataIndex].classList.remove('opacity');
        btnplay.classList.remove('pause');
        play();
    });
});

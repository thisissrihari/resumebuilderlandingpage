if (!window.matchMedia("(max-width: 768px)").matches){
    console.log("yes")
    document.addEventListener('DOMContentLoaded', function() {

        var elementsToAnimate1 = document.querySelectorAll('.i1');
        elementsToAnimate1.forEach(function(element) {
            element.classList.add('animated-slide-in-center1');
        });
    
        var elementsToAnimate2 = document.querySelectorAll('.i2');
        elementsToAnimate2.forEach(function(element) {
            element.classList.add('animated-slide-in-center2');
        });
    
        var elementsToAnimate3 = document.querySelectorAll('.i3');
        elementsToAnimate3.forEach(function(element) {
            element.classList.add('animated-slide-in-center3');
        });
    
        const page2flex1 = document.getElementById("page2flex1");
        const page2flex2 = document.getElementById("page2flex2");
        const aboutus = document.getElementById("aboutus");
        const page3flex = document.getElementById("page3flex");
        const featureimg = document.getElementById("featureimg");
        const page3 = document.getElementById("page3");
        const pro1 = document.getElementById("pro1");
        const pro2 = document.getElementById("pro2");
        const page4 = document.getElementById("page4");
        const page5 = document.getElementById("page5");
        const pri1 = document.getElementById("pri1");
        const pri2 = document.getElementById("pri2");
        const pri3 = document.getElementById("pri3");
        const t1 = document.getElementById("t1");
        // const t2 = document.getElementById("t2");
        // const t3 = document.getElementById("t3");
        // const t4 = document.getElementById("t4");
        const page6 = document.getElementById("page6");
        
    
        let animationTriggered = false;
        let animationTriggered2 = false;
        let animationTriggered3 = false;
        let animationTriggered4 = false;
        let animationTriggered5 = false;
    
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 
        };
    
        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    page2flex1.style.transform = "translateX(0)";
                    page2flex2.style.transform = "translateX(0)";
                    animationTriggered = true;
                } else if (!entry.isIntersecting && animationTriggered) {
                    page2flex1.style.transform = "translateX(-200%)";
                    page2flex2.style.transform = "translateX(200%)";
                    animationTriggered = false;
                }
            });
        }, options);
        
        observer.observe(aboutus);
    
        const observer2 = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    page3flex.style.transform = "translateX(0)";
                    featureimg.style.transform = "translateX(0)";
                    animationTriggered2 = true;
                } else if (!entry.isIntersecting && animationTriggered2) {
                    page3flex.style.transform = "translateX(-200%)";
                    featureimg.style.transform = "translateX(200%)";
                    animationTriggered2 = false;
                }
            });
        }, options);
    
        observer2.observe(page3);
    
        const observer3 = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    pro1.style.transform = "translateX(0)";
                    pro2.style.transform = "translateX(0)";
                    animationTriggered3 = true;
                } else if (!entry.isIntersecting && animationTriggered3) {
                    pro1.style.transform = "translateX(-200%)";
                    pro2.style.transform = "translateX(200%)";
                    animationTriggered3 = false;
                }
            });
        }, options);
    
        observer3.observe(page4);
    
        const observer4 = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    pri1.style.transform = "translateX(0)";
                    pri2.style.transform = "translateY(0)";
                    pri3.style.transform = "translateX(0)";
                    animationTriggered4 = true;
                } else if (!entry.isIntersecting && animationTriggered4) {
                    pri1.style.transform = "translateX(-200%)";
                    pri2.style.transform = "translateY(-2000%)";   
                    pri3.style.transform = "translateX(200%)";
                    animationTriggered4 = false;
                }
            });
        }, options);
    
        observer4.observe(page5);
    
        const observer5 = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    t1.style.transform = "translateY(0)";
                    // t2.style.transform = "translateY(0)";
                    // t3.style.transform = "translateY(0)";
                    // t4.style.transform = "translateY(0)";
                    animationTriggered5 = true;
                } else if (!entry.isIntersecting && animationTriggered5) {
                    t1.style.transform = "translateY(-2000%)";
                    // t2.style.transform = "translateY(2000%)";
                    // t3.style.transform = "translateY(-2000%)";
                    // t4.style.transform = "translateY(2000%)";
                    animationTriggered5 = false;
                }
            });
        }, options);
    
        observer5.observe(page6); 
    });
} else {

    const page2flex1 = document.getElementById("page2flex1");
    const page2flex2 = document.getElementById("page2flex2");
    const aboutus = document.getElementById("aboutus");
    const page3flex = document.getElementById("page3flex");
    const featureimg = document.getElementById("featureimg");
    const page3 = document.getElementById("page3");
    const pro1 = document.getElementById("pro1");
    const pro2 = document.getElementById("pro2");
    const page4 = document.getElementById("page4");
    const page5 = document.getElementById("page5");
    const pri1 = document.getElementById("pri1");
    const pri2 = document.getElementById("pri2");
    const pri3 = document.getElementById("pri3");
    const t1 = document.getElementById("t1");
    const t2 = document.getElementById("t2");
    const t3 = document.getElementById("t3");
    const t4 = document.getElementById("t4");
    const page6 = document.getElementById("page6");

    t1.style.transform = "translateY(0)";
    t2.style.transform = "translateY(0)";
    t3.style.transform = "translateY(0)";
    t4.style.transform = "translateY(0)";
    pri1.style.transform = "translateX(0)";
    pri2.style.transform = "translateY(0)";
    pri3.style.transform = "translateX(0)";
    pro1.style.transform = "translateX(0)";
    pro2.style.transform = "translateX(0)";
    page3flex.style.transform = "translateX(0)";
    featureimg.style.transform = "translateX(0)";
    page2flex1.style.transform = "translateX(0)";
    page2flex2.style.transform = "translateX(0)";
}

document.getElementById('contactBtn').addEventListener('click', function () {
    const screenHeight = window.innerHeight;
    const footerHeight = footer.offsetHeight;
    const navBack = -parseInt(window.getComputedStyle(backNav).getPropertyValue("margin-left"))
    const hiddenContent = screenHeight - footerHeight;

    gsap.to('.title', {
        x: navBack,
        duration: 1,
        delay: 0
    });
    gsap.to('.back-nav', {
        x: navBack,
        opacity: 1,
        display: 'block',
        duration: 1,
        delay: 1
    });

    gsap.to('.title', {
        color: '#007bff',
        duration: 1,
        delay: 1
    });
    gsap.to('.bg-blue', {
        background: 'white',
        duration: 1,
        delay: 1
    });
    gsap.to(['.content', '.info'], {
        opacity: 0,
        duration: 1,
        delay: 1
    });


    gsap.to(content, {
        y: -hiddenContent,
        opacity: 0,
        duration: 1,
        delay: 2
    });
    gsap.to(footer, {
        y: -hiddenContent,
        duration: 1,
        delay: 2,
        onStart: () => {
            document.body.style.overflow = "hidden";
        }
    });

    gsap.to('.btn-back', {
        opacity: 1,
        display: 'block',
        duration: 1,
        delay: 2
    });
    gsap.to('.form', {
        display: 'block',
        opacity: 1,
        duration: 1,
        delay: 2,
        onComplete: () => {
            gsap.set(footer, { 
                maxHeight: '100vh',
                overflow: 'scroll'
              });
        }
    });
    gsap.to(['.content', '.info'], {
        opacity: 0,
        display: 'none',
        duration: 1,
        delay: 3
    });

});

document.getElementById('backBtn').addEventListener('click', function () {
    gsap.to(content, {
        y: 0,
        opacity: 1,
        duration: 1,
        onStart: () => {
            document.body.style.overflow = "auto";
        }
    });
    gsap.to(footer, {
        y: 0,
        height: 'auto',
        duration: 1
    });

    gsap.to(['.btn-back', '.form'], {
        opacity: 0,
        display: 'none',
        duration: 2,
        delay: 1
    });
    gsap.to('.title', {
        color: 'white',
        duration: 1,
        delay: 1
    });
    gsap.to('.bg-blue', {
        background: 'linear-gradient(-180deg, rgba(57, 139, 245, 1), rgba(69, 183, 244, 1))',
        duration: 1,
        delay: 1
    });

    gsap.to(['.content', '.info'], {
        opacity: 1,
        display: 'flex',
        duration: 3,
        delay: 3
    });
    gsap.to('.title', {
        x: '0rem',
        duration: 1,
        delay: 2
    });
    gsap.to('.back-nav', {
        opacity: 0,
        display: 'none',
        duration: 1,
        delay: 2
    });

});

document.getElementById('browseBtn').addEventListener('click', function () {
    document.getElementById('fileUpload').click();
});
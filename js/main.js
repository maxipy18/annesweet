window.addEventListener('load', ()=>{
    
    const header = document.querySelector('.header');
    const headerBg = document.querySelector('title').textContent;    
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');
    const selectThemeBtn = document.querySelector('.select-theme-btn');
    const themeList = document.querySelector('.theme-list');    
    

    header.style.height = `${header.clientWidth*0.4}px`;    
    if(headerBg.includes('Article')){
        header.style.backgroundImage = 'url(img/Article-header-bg.jpg)'
    };

     
    window.addEventListener('resize', ()=>{
        header.style.height = `${header.clientWidth*0.4}px`;                                                
    });    


    burger.addEventListener('click', ()=>{
        navList.classList.toggle('active');
        burger.classList.toggle('active');
    });
    

    selectThemeBtn.addEventListener('click', ()=>{
        selectThemeBtn.classList.toggle('active');
        themeList.classList.toggle('active');
    })


});





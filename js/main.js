window.addEventListener('load', ()=>{
    
    const header = document.querySelector('.header');
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');
    

    header.style.height = `${header.clientWidth*0.4}px`;
        

    const headerHeight = ()=>{  
        window.addEventListener('resize', ()=>{
            header.style.height = `${header.clientWidth*0.4}px`;
                                    
        });
    };

    const headerImg = ()=> {
        const titleName = document.querySelector('title').textContent;
        if(titleName == 'Article'){
            header.style.backgroundImage = `url(img/article-header-bg.jpg)`;
        };        
    };


    burger.addEventListener('click', ()=>{
        navList.classList.toggle('active');
        burger.classList.toggle('active');
    });



    headerImg();
    headerHeight();
});





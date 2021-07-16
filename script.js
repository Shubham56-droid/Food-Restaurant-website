/*--------------------Toggle--NavBar--Start---------------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",()=>{
    toggleNav();
    blackback();
})

function toggleNav()
{
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

function blackback()
{
    document.querySelector(".home-section").classList.toggle("active-black");
    console.log("background  is  black");
}
/*--------------------Toggle--NavBar--End-----------------------*/

/*-------------------Closing of navbar after clicking on option in navbar--start-------------*/
document.addEventListener("click",(e)=>{
    if(e.target.closest(".nav-item"))
    {
        toggleNav();
    }
})
/*-------------------Closing of navbar after clicking on option in navbar--end--------------*/

/*------------------------------Document--Sticky--Header--start---------------------------- */
window.addEventListener("scroll",()=>{
    if(this.pageYOffset > 60)
    {
        document.querySelector(".header").classList.add("sticky");
    }
    else
    {
        document.querySelector(".header").classList.remove("sticky");
    }
})
/*------------------------------Document--Sticky--Header--end------------------------------ */
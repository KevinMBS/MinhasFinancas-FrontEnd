class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"
        this.handeClick = this.handeClick.bind(this)
    }
    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
    }
    handeClick(){
        this.navList.classList.toggle(this.activeClass)
        this.animateLinks()
        this.mobileMenu.classList.toggle(this.activeClass);
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handeClick)
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent()
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobileMenu",
    ".navList",
    ".navList li",
)
mobileNavbar.init()
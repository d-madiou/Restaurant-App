import about from "./about.js";
import contact from "./contact.js";
import home from "./home.js";
import menu from "./menu.js";
import "./styles.css";

home()
document.body.addEventListener('click', switchTab)


function switchTab(e) {
    const element = e.target
    const homeButton = element.id.includes('Home')
    const servicesButton = element.id.includes('Contact')
    const aboutButton = element.id.includes('About')
    const menuButton = element.id.includes('Menu')


    if(homeButton){
        home()
    }
    if(aboutButton){
        about()
    }
    if(menuButton){
        menu()
    }
    if(servicesButton){
        contact()
    }
}
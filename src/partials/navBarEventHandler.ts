const HIGHLIGHT = '#ee6f57'

const rem = parseInt(getComputedStyle(document.documentElement).fontSize)

const navBarEventHandler = () => {

    const navigation = document.querySelector<HTMLElement>('#navDesktop');
    const navTopPos = window.scrollY
    
    const introduction = navigation.querySelector<HTMLElement>('.introduction')
    const vision = navigation.querySelector<HTMLElement>('.vision')
    const stacks = navigation.querySelector<HTMLElement>('.stacks')
    const projects = navigation.querySelector<HTMLElement>('.projects')
    const contact = navigation.querySelector<HTMLElement>('.contact')
    
    const introductionElement = document.querySelector<HTMLElement>('#introduction');
    const visionElement = document.querySelector<HTMLElement>('#vision');
    const stacksElement = document.querySelector<HTMLElement>('#stacks');
    const projectsElement = document.querySelector<HTMLElement>('#projects');
    const contactElement = document.querySelector<HTMLElement>('#contact');
    
    const introductionTopPos = introductionElement.offsetTop - ( 9 * rem ) ;
    const visionTopPos = visionElement.offsetTop - ( 9 * rem ) ;
    const stacksTopPos = stacksElement.offsetTop - ( 9* rem ) ;
    const projectsTopPos = projectsElement.offsetTop - ( 10 * rem ) ;
    const contactTopPos = contactElement.offsetTop - ( 9 * rem ) ;

    if ( navTopPos >= introductionTopPos && navTopPos < visionTopPos ) {
        introduction.style.borderBottom = `3px solid ${HIGHLIGHT}`
        vision.removeAttribute('style')
        stacks.removeAttribute('style')
        projects.removeAttribute('style')
        contact.removeAttribute('style')
    }
    else if ( navTopPos >= visionTopPos && navTopPos < stacksTopPos ) {
        introduction.removeAttribute('style')
        vision.style.borderBottom = `3px solid ${HIGHLIGHT}`
        stacks.removeAttribute('style')
        projects.removeAttribute('style')
        contact.removeAttribute('style')
    }
    else if ( navTopPos >= stacksTopPos && navTopPos < projectsTopPos ) {
        introduction.removeAttribute('style')
        vision.removeAttribute('style')
        stacks.style.borderBottom = `3px solid ${HIGHLIGHT}`
        projects.removeAttribute('style')
        contact.removeAttribute('style')
    }
    else if ( navTopPos >= projectsTopPos && navTopPos < contactTopPos ) {
        introduction.removeAttribute('style')
        vision.removeAttribute('style')
        stacks.removeAttribute('style')
        projects.style.borderBottom = `3px solid ${HIGHLIGHT}`
        contact.removeAttribute('style')
    }
    else if ( navTopPos >= contactTopPos) {
        introduction.removeAttribute('style')
        vision.removeAttribute('style')
        stacks.removeAttribute('style')
        projects.removeAttribute('style')
        contact.style.borderBottom = `3px solid ${HIGHLIGHT}`
    }
    else {
        introduction.removeAttribute('style')
        vision.removeAttribute('style')
        stacks.removeAttribute('style')
        projects.removeAttribute('style')
        contact.removeAttribute('style')
    }

    if (navTopPos >= introductionTopPos) {
        navigation.style.backgroundColor = 'white';
        navigation.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        
        introduction.style.color = 'black';
        vision.style.color = 'black';
        stacks.style.color = 'black';
        projects.style.color = 'black';
        contact.style.color = 'black';
    }
    else {
        navigation.removeAttribute('style')

        introduction.style.color = 'white';
        vision.style.color = 'white';
        stacks.style.color = 'white';
        projects.style.color = 'white';
        contact.style.color = 'white';
    }
};

export default navBarEventHandler;


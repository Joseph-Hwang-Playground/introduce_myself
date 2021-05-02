
window.onload(()=>{
    const screenWidthCondition = 'screen and (min-width: 640px)';
    if ( !window.matchMedia(screenWidthCondition) ) {
        alert(
            `
            This web page is currently optimized for PC. 
            I recommend you to view this page at PC.
            `
        )
    }
})
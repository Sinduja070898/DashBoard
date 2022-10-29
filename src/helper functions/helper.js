export const fetchRoute=()=>{
    let route
    if(window!== undefined){
       route= window.location.pathname.split('/')[1]
    }
    return route
}
var topSearchInput = document.querySelector(".search-input");
var topSearchBtn = document.querySelector(".search-btn");

topSearchInput.addEventListener("input",(e)=>{
    
    if(e.target.value.length > 0){
        topSearchBtn.style.transform='translate(0px)';
    }else{
        topSearchBtn.style.transform='translate(-62px)';
    }

})
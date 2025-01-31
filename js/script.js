let navbar = document.querySelector(".navbar2")
let secondList = document.querySelector(".nav2Element")
let hamB = document.querySelector(".hamburgerIcon")
let hambClick = false
hamB.addEventListener("click",()=>{
    if(hambClick == false){
    hamB.src = "https://png.pngtree.com/element_our/20190601/ourmid/pngtree-gray-cross-icon-free-illustration-image_1338616.jpg"
    hambClick = true; 
    navbar.classList.add("extNav")
    navbar.classList.remove("compNav") 
    setTimeout(() => {
        
        secondList.style.display = "block"
    }, 300);
    
}
else{
    hamB.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACNCAMAAAC9gAmXAAAAVFBMVEX///8jHyAAAAAGAAC9vL3Ew8TIyMjZ2Nn8/PwXEhPn5+fOzc2Pjo7j4+MgHB0KAACGhIWvrq9fXV6VlJRJRkfv7++enZ0bFxhRTk5/fX41MjMOAQehNmRPAAAAsElEQVR4nO3abU5CMRAF0NIqxfcEBNTnx/73yRqYZJIxnrOCm0n7o9PbGgAAAADwXyxPGdZYmNee4+cYCDPHaZfi/HZ4PM2l54TZvVwDaWbfctKMyGza7bePBP19CYRp7ficYY1MBgAAgLC5z7B+hMJ8bjkv36/Iy3f2pI3J+I5sTEZOmOjGpNJsap2bYncKAACAoFL/4aW6ArV6FMU6JqX6N7W6ScV6WwAAAADAH3YHxzIWvd+RDLoAAAAASUVORK5CYII="
    hambClick = false;
    navbar.classList.add("compNav")   
    navbar.classList.remove("extNav")
    secondList.style.display = "none"
    
    }
})
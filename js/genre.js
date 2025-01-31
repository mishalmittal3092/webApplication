let content = document.querySelector(".recomment")
let contentElements = content.children
let bookName,bookImg,bookDesc,coverId;
let search = document.querySelector(".searchbar");
let selectGenre = document.getElementsByClassName("selectGenre");
let spinner = document.querySelector(".spinner")
// console.log((selectGenre))
let catName = document.querySelector(".catName")



async function books(param,param2,param3) {

    let promise1 = fetch(`https://openlibrary.org/${param2}${param3}`)
    content.style.opacity = ".3"
    spinner.style.opacity = "1"
    spinner.style.display = "block"
    let promise2 = ((await promise1).json())
    let data = await promise2
    // console.log(data.works)
    for (let i = 0; i < 9; i++) {

        bookName = contentElements[i].children[1]
        bookImg = contentElements[i].children[0].children[0]

        try {
            coverId = data.docs[i].cover_i
            bookName.innerText = data.docs[i].title
            
        } catch
        {
            coverId = data.works[i].cover_id
            bookName.innerText = data.works[i].title
        }
       
        // console.log(coverId)
        bookImg.src = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
        
        catName.innerText =  String(param).toUpperCase()
        
    }
    spinner.style.display = "none"
    content.style.opacity = "1"

}


for (const element of selectGenre) {
   element.addEventListener("click",()=>{
    books(element.value,"subjects",`/${element.value}.json`)
   })
}



search.addEventListener("keyup",(e)=>{
    console.log(e.key)

        let str = search.value
        str = str.replaceAll(" ","+");
        // let promise1 = fetch(`https://openlibrary.org/search.json?title=${str}`)
        if(e.key=="Backspace"){
            console.log(200)
            //Nothing
        }

        else{
            books(search.value,"search.json",`?title=${str}`)
        }
        
        })

    


books("history","subjects","/history.json")


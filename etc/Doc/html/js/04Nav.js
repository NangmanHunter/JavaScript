fetch(`..`)
.then(response => response.text())    
.then(response => {

    const parser = new DOMParser();
    const doc = parser.parseFromString(response, 'text/html');

    let names=doc.querySelectorAll(`.icon-cLayer`);

    let listArr=[];
    names.forEach( (item, index) =>{
        item=item.querySelector(`.name`)
        item=item.innerText
        item=item.replace(`.cLayer`,``)
        
        listArr.push(item);

    })

    let s=``
    listArr.forEach(item=> {

        itemOrigin=item;
        
        item=`<a href="${item}.html">${item}</a>`


        if(itemOrigin==fileName){
            item=`<li style="list-style-type : '📌'">${item}</li>`
        }
        else{
            item=`<li>${item}</li>`
        }


        s+=item;
    })

    s=`<ul>${s}</ul>`

    document.getElementById("nav").innerHTML=s;


})    
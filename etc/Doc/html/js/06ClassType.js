function classType(data){
    let div;
    div=document.getElementById("div");
    div.innerHTML=data;

}



fetch(`../${fileName}.cLayer`)
.then(response => response.text())
.then(response => {
    response=response.split("\r\n");

    let className=response[0];
    let instanceName;
    if(className==className.toUpperCase()){
        instanceName=className.toLowerCase();
    }
    else if(className==className.toLowerCase()){
        instanceName='';
    }
    else{
        instanceName=className.substring(0, 1).toLowerCase() + className.substring(1)
    }


    let regWord=`\\w\\$\\&\\+\`'`
    let regType01 = new RegExp(`^ㄴ${className}\\(\\)$`);  
    let regType02 = new RegExp(`^ㄴ${className}.[${regWord}]+$`);  
    let regType03 = new RegExp(`^ㄴ${className}.[${regWord}]+\\(\\)$`);  
    let regType04 = new RegExp(`^ㄴ${instanceName}.[${regWord}]+$`);  
    let regType05 = new RegExp(`^ㄴ${instanceName}.[${regWord}]+\\(\\)$`);  
    
    let regType02_01 = new RegExp(`^ㄴ${className}\\[[.${regWord}]+\\]$`);  
    let regType03_01 = new RegExp(`^ㄴ${className}\\[[.${regWord}]+\\]\\(\\)$`);  
    let regType04_01 = new RegExp(`^ㄴ${instanceName}\\[[.${regWord}]+\\]$`);  
    let regType05_01 = new RegExp(`^ㄴ${instanceName}\\[[.${regWord}]+\\]\\(\\)$`);  


    response.forEach((item, index)=>{

        if(regType01.test(item)){
            item=`<span class="classType01">${item}</span>`
            response[index]=item;
        }
        if(regType02.test(item)){
            item=`<span class="classType02">${item}</span>`
            response[index]=item;
        }
        if(regType03.test(item)){
            item=`<span class="classType03">${item}</span>`
            response[index]=item;
        }
        if(regType04.test(item)){
            item=`<span class="classType04">${item}</span>`
            response[index]=item;
        }
        if(regType05.test(item)){
            item=`<span class="classType05">${item}</span>`
            response[index]=item;
        }


        
        if(regType02_01.test(item)){
            item=`<span class="classType02">${item}</span>`
            response[index]=item;
        }
        if(regType03_01.test(item)){
            item=`<span class="classType03">${item}</span>`
            response[index]=item;
        }
        if(regType04_01.test(item)){
            item=`<span class="classType04">${item}</span>`
            response[index]=item;
        }
        if(regType05_01.test(item)){
            item=`<span class="classType05">${item}</span>`
            response[index]=item;
        }

    })

    response=response.join("<br>");
    classType(response);
})


/*
정규식
- \w
- \w\$\&\+\`'
- \\w\\$\\&\\+\\`'



console
ㄴstatic
ㄴclassname
instance회피
ㄴclassname-> ... ->static
ㄴinstance ->``
나중에
ㄴ소문자Object - instance
ㄴ그런경우나오면
ㄴ그때정리ㄱㄱ.
ㄴ그때는
ㄴ ... ==console
ㄴ이런식으로 처리ㄱㄱ.


*/

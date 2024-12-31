for(i=0;i<10;i++){
    console.log(i)
}

let obj={
    name: "Rohit",
    role: "Devops",
    company: "SM"
}

for (const key in obj) {

        const element = obj[key];
        console.log(key,":",element)
        
}

for (const c of "object") {
    console.log(c)
}

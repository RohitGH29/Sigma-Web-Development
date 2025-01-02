// create a callback function

const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sr =document.createElement('script');
    sr.src = src;
    sr.onload = () => callback("Rohit");
    document.head.append(sr);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js',callback)
// create a card view which contains a thumbnail image, a title, channel name, the number of views, months ago, and a duration of the video.

function createcard(title,cName,views,monthsOld,duration,thumbnail){
    let viewsStr 
    if(views>1000000){
        viewsStr = `${views/1000000}M`
    }
    else if (views>1000){
        viewsStr = `${views/1000}K`
    }
    else{
        viewsStr = views
    }    
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="no">
                <div class="capsule">21:05</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewsStr} views . ${monthsOld}</p>
            </div>
            </div>
        </div>`

        document.querySelector('.container').innerHTML += html
}


createcard('Title','Channel Name',13,'2 months ago','10:00','https://cdn.pixabay.com/photo/2024/05/24/02/09/krishna-8784102_960_720.jpg')
createcard('Title','Channel Name',120,'2 months ago','10:00','https://cdn.pixabay.com/photo/2024/05/24/02/09/krishna-8784102_960_720.jpg')
createcard('Title','Channel Name',1120,'2 months ago','10:00','https://cdn.pixabay.com/photo/2024/05/24/02/09/krishna-8784102_960_720.jpg')
createcard('Title','Channel Name',13120,'2 months ago','10:00','https://cdn.pixabay.com/photo/2024/05/24/02/09/krishna-8784102_960_720.jpg')
createcard('Title','Channel Name',120311,'2 months ago','10:00','https://cdn.pixabay.com/photo/2024/05/24/02/09/krishna-8784102_960_720.jpg')
createcard('Title','Channel Name',1123000,'2 months ago','10:00','https://cdn.pixabay.com/photo/2024/05/24/02/09/krishna-8784102_960_720.jpg')
createcard('Title','Channel Name',1000000,'2 months ago','10:00','https://cdn.pixabay.com/photo/2024/05/24/02/09/krishna-8784102_960_720.jpg')
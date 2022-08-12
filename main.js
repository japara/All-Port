let data =[
    {
        img: 'https://images.unsplash.com/photo-1616832880699-8541b04005ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW58ZW58MHx8MHx8&w=1000&q=80',
        txt1: 'Capital Confidential: ‘Big Short’ author contemplates taking on Brexit',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET '

    },
    {
        img: 'https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        txt1: 'U.K. assets are too hot to handle right now, top investors say',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET '

    },
    {
        img: 'https://images.unsplash.com/photo-1556474688-479399d655d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW4lMjBjaXR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        txt1: 'Europe’s largest money manager warns of an investment industry liquidity crisis',
        txt2: 'Oct. 25, 2019 at 4:17 a.m. ET'

    },
    {
        img: 'https://thumbs.dreamstime.com/b/st-louis-united-states-america-14026911.jpg',
        txt1: 'Short-seller Muddy Waters attacks litigation fund Burford',
        txt2: 'Oct. 23, 2019 at 3:55 a.m. ET '

    },

    {
        img: 'https://oec.world/api/image?slug=partner&memberSlug=usa&size=splash',
        txt1: 'Wall Street falls on stalling economic rebound, stimulus impasse',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET '

    },
    {
        img: 'https://www.voyanyc.com/viajar-a-estados-unidos/wp-content/uploads/2019/01/Visitar-Estados-Unidos-Nueva-York-@Voy-a-USA-e1546360282652.jpg',
        txt1: 'Exclusive: U.S. offers tariff truce if Airbus repays billions in aid, sources say',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET '

    },
    {
        img: 'https://transporteca.de/wp-content/uploads/2018/03/USA-IMPORT.jpg',
        txt1: 'New York could emerge the winner from Brexit derivatives clash',
        txt2: 'Oct. 25, 2019 at 4:17 a.m. ET'

    },
    {
        img: 'https://media.istockphoto.com/photos/times-square-in-nyc-picture-id1070531042?k=20&m=1070531042&s=612x612&w=0&h=F4JVYzCuPFkIJ66iGCFC9imrLOY6CO5D42uqEltg75M=',
        txt1: 'Analysis: Imported tortillas? Big Mexican farmers fear cuts will hit harvests',
        txt2: 'Oct. 23, 2019 at 3:55 a.m. ET '

    }
]

let box = document.querySelector('.api');
for(elem of data){
let card = document.createElement('div');
let img = document.createElement('img');
let text = document.createElement('p');
let smallText = document.createElement('p');

box.appendChild(card);
card.append(img, text, smallText);
card.classList.add('api-card');
smallText.classList.add('green-txt')
img.src=elem.img;
text.innerHTML=elem.txt1;
smallText.innerHTML=elem.txt2
}

////////////////////////////////
///////carousel

// let slide = document.querySelector()
//https://media.istockphoto.com/id/1327737045/es/foto/perro-feliz-corriendo-en-la-playa.webp?b=1&s=170667a&w=0&k=20&c=p9oooNosH24U34m76xyTZ0npVazlx9xPXg2Pdpzjm4U=
//https://media.istockphoto.com/id/509488176/es/foto/paradise-beach.webp?b=1&s=170667a&w=0&k=20&c=a9PMUCLw79FcaxnA72dz20l3zOTv1JsJNewcbuI4a10=
//https://media.istockphoto.com/id/597213406/es/foto/mujer-caminando-en-la-playa-de-arena-dejando-huellas-en-la-arena.webp?b=1&s=170667a&w=0&k=20&c=83OQz6cXhiD7x2IV3symyK7lnqah6-x9RX5TgtJhX70=
//https://media.istockphoto.com/id/1482790388/es/foto/horizonte-a%C3%A9reo-de-la-playa-del-grao-del-puerto-de-gand%C3%ADa-al-atardecer-en-la-valencia.webp?b=1&s=170667a&w=0&k=20&c=wMji_sh7bTMhqBiWGGnYk-uIv8EaZ1oSg1vlcJnFLlE=
//https://plus.unsplash.com/premium_photo-1676494046521-1a0b9270a437?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWFzfGVufDB8fDB8fHww
//https://images.unsplash.com/photo-1544067612-e676aca74a1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYXlhc3xlbnwwfHwwfHx8MA%3D%3D
//https://images.unsplash.com/photo-1532254497630-c74966e79621?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYXlhc3xlbnwwfHwwfHx8MA%3D%3D
//https://images.unsplash.com/photo-1601456713871-996c8765d82c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYXlhc3xlbnwwfHwwfHx8MA%3D%3D
//https://media.istockphoto.com/id/910214486/es/foto/pic-nic-en-la-playa-agradable-con-mis-amigos.webp?b=1&s=170667a&w=0&k=20&c=JbfeLUN5k8cHYZyaVB_HpLeo0S1622fABaBTLkax3O0=
//https://images.unsplash.com/photo-1608347212618-87abc72d4835?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYXlhc3xlbnwwfHwwfHx8MA%3D%3D
document.addEventListener('DOMContentLoaded', function() {
    var imageUrls = [
        'https://media.istockphoto.com/id/1327737045/es/foto/perro-feliz-corriendo-en-la-playa.webp?b=1&s=170667a&w=0&k=20&c=p9oooNosH24U34m76xyTZ0npVazlx9xPXg2Pdpzjm4U=',
        'https://media.istockphoto.com/id/509488176/es/foto/paradise-beach.webp?b=1&s=170667a&w=0&k=20&c=a9PMUCLw79FcaxnA72dz20l3zOTv1JsJNewcbuI4a10=',
        'https://media.istockphoto.com/id/597213406/es/foto/mujer-caminando-en-la-playa-de-arena-dejando-huellas-en-la-arena.webp?b=1&s=170667a&w=0&k=20&c=83OQz6cXhiD7x2IV3symyK7lnqah6-x9RX5TgtJhX70=',
        'https://media.istockphoto.com/id/1482790388/es/foto/horizonte-a%C3%A9reo-de-la-playa-del-grao-del-puerto-de-gand%C3%ADa-al-atardecer-en-la-valencia.webp?b=1&s=170667a&w=0&k=20&c=wMji_sh7bTMhqBiWGGnYk-uIv8EaZ1oSg1vlcJnFLlE=',
        'https://plus.unsplash.com/premium_photo-1676494046521-1a0b9270a437?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWFzfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1544067612-e676aca74a1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYXlhc3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1532254497630-c74966e79621?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYXlhc3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1601456713871-996c8765d82c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYXlhc3xlbnwwfHwwfHx8MA%3D%3D',
        'https://media.istockphoto.com/id/910214486/es/foto/pic-nic-en-la-playa-agradable-con-mis-amigos.webp?b=1&s=170667a&w=0&k=20&c=JbfeLUN5k8cHYZyaVB_HpLeo0S1622fABaBTLkax3O0=',
        'https://images.unsplash.com/photo-1608347212618-87abc72d4835?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYXlhc3xlbnwwfHwwfHx8MA%3D%3D'
    ];

    var body = document.body;
    var index = 0;

    function changeBackground() {
        body.style.backgroundImage = 'url("' + imageUrls[index] + '")';
        index = (index + 1) % imageUrls.length;
    }

    changeBackground(); 

    setInterval(changeBackground, 15000); 
});

  
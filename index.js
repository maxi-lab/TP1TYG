const usr=document.getElementById('Usr');
const json=document.getElementById('json');
let contenedor=document.getElementById('datos')
const frses=["'Vive una vida que sea recordada'-Avicii",
    "'La unica manera de hacer un trabajo genial es amar lo que hacer'-Stive Jobs",
    "'La duda es uno de los nomberes de la inteligencia'-Jorge Luis Borges",
];
const ids=['tim','steve','jorge']
let elemento=document.getElementsByClassName('frases')[0];
console.log(elemento);
let numero=Math.floor(Math.random()*3)
elemento.innerHTML=frses[numero]
elemento.id=ids[numero];
function usuarios() {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          contenedor.hidden=false;
          console.log(data.results[0])
          contenedor.innerHTML=data.results[0].name.title+'. '+data.results[0].name.first +' '+ data.results[0].name.last;
          let imagen=document.createElement('img');
          imagen.id='perfil';
          imagen.src=data.results[0].picture.medium;
          contenedor.appendChild(imagen);
          let parafo=document.createElement('span');
          contenedor.appendChild(document.createElement('br'));
          parafo.innerHTML='Nombre de usuario: '+data.results[0].login.username;
          contenedor.appendChild(parafo);
          contenedor.appendChild(document.createElement('br'));
          let dir=document.createElement('span');
          dir.innerHTML=data.results[0].location.city+', '+data.results[0].location.state+', '+data.results[0].location.country;
          contenedor.appendChild(dir)
        }
      });
}
function jsonData() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then((json) => {
                    contenedor.hidden=false;
                    let r=Math.floor(Math.random()*100);
                    contenedor.appendChild(document.createElement('h2')).innerHTML=json[r].title;
                    contenedor.appendChild(document.createElement('p')).innerHTML=json[r].body;
                  }
          );
}
json.addEventListener('click',()=>{
    contenedor.hidden=true;
    contenedor.innerHTML='';
    jsonData()
})
usr.addEventListener('click',()=>{
    contenedor.hidden=true;
    contenedor.innerHTML='';
    usuarios()
})
        
  
$(document).ready(()=>{
    console.log("listo");
    
    //slider / Galeria
    if(window.location.href.indexOf('index') >-1){
      $(()=>{
        $('.slider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200
        });
      });
    };
    


      // posts
      if(window.location.href.indexOf('index')>-1){
      var posts=[
          {
              title:'Prueba de titulo 1',
              date: 'publicado el dia '+moment().date()+ ' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
              content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis dolorem nihil laboriosam accusantium, ex assumenda ipsam sint architecto pariatur magnam, vero minus aspernatur incidunt corporis laborum nam! Quis, neque.'
          },
          {
            title:'Prueba de titulo 2',
            date: 'publicado el dia '+moment().date()+ ' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis dolorem nihil laboriosam accusantium, ex assumenda ipsam sint architecto pariatur magnam, vero minus aspernatur incidunt corporis laborum nam! Quis, neque.'
        },
            {
            title:'Prueba de titulo 3',
            date: 'publicado el dia '+moment().date()+ ' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis dolorem nihil laboriosam accusantium, ex assumenda ipsam sint architecto pariatur magnam, vero minus aspernatur incidunt corporis laborum nam! Quis, neque.'
        },
            {
            title:'Prueba de titulo 4',
            date: 'publicado el dia '+moment().date()+ ' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis dolorem nihil laboriosam accusantium, ex assumenda ipsam sint architecto pariatur magnam, vero minus aspernatur incidunt corporis laborum nam! Quis, neque.'
        },
            {
            title:'Prueba de titulo 5',
            date: 'publicado el dia '+moment().date()+ ' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis dolorem nihil laboriosam accusantium, ex assumenda ipsam sint architecto pariatur magnam, vero minus aspernatur incidunt corporis laborum nam! Quis, neque.'
        },
        {
            title:'Prueba de titulo 6',
            date: 'publicado el dia '+moment().date()+ ' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis dolorem nihil laboriosam accusantium, ex assumenda ipsam sint architecto pariatur magnam, vero minus aspernatur incidunt corporis laborum nam! Quis, neque.'

        }
      ];
      console.log(posts);

    var index;
      posts.forEach((item, index)=>{
        var post= `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">
                ${item.date}
            </span>
            <p>
               ${item.content}
            </p>
            <a href="#" class="buttom-more">Leer más</a>
        </article>
        `;

        $("#posts").append(post);
      });
      };
      
      // Boton de cambio de tema //

    //options = { /* see below */ };
    //$("input#great").switchButton(options);
    $("input[type=checkbox]").switchButton({
      checked: false
      
    });


    /*Esta es la función que verifica si esta cheked el input y cambia el href de la hoja de estilo linkeada por la del Darkmode*/
    var theme=$("#theme");
    $(function()
    {
      $('[name="great"]').change(function()
      {
        if ($(this).is(':checked')) {
           // agrega el atributo href al css que esta empty por default
          theme.attr("href", "css/darkmode.css");
          //agregar local storage
        }
        else{
          theme.attr("href","")
        };
      });
    });

//oculta switch de theme
    $("#abrir").click(function(){
      
      $("#selectTheme").toggle(500);
    });
    
    $("#abrir").mouseover(function(){
      $("#abrir").css("cursor","pointer");
    });
    

    // Posible local:
    


    /*var dark= localStorage.getItem("Black");
    if(dark.href == "Black"){
        localStorage.setItem(dark);
      };*/


    //scroll arriba de la web
    $("#subir").click((e)=>{
      e.preventDefault();
      $("html, body").animate({
        scrollTop: 0
      }, 400);
      return false;
    });

    //login Falso

    $("#login form").submit(()=>{
      var form_name= $("#form_name").val();
      
      localStorage.setItem("form_name", form_name);

    });

    var form_name= localStorage.getItem("form_name");
    if(form_name !=null && form_name!="undefined"){
      var sesion_parrafo=$("#sesion p");
      $("#sesion p").html("<br><strong>Bienvenido,"+form_name+"</strong>");
      sesion_parrafo.append("<hr/><br><a href='#' id='logout'>Cerrar Sesion</a>");
      $("#login").hide();

      $("#logout").click(()=>{
        localStorage.clear();
        location.reload();
      });

    }
    if(window.location.href.indexOf('about')>-1){
    $("#acordeon").accordion();
    }

    //Seccion del Reloj//
    if(window.location.href.indexOf('reloj')>-1){
          setInterval(()=>{
                var reloj=moment().format('hh:mm:ss');
                $("#reloj").html(reloj);
          }, 1000);
      
          //imprime el formato del reloj en el div #reloj;
    };

//plugin de validación jquery;
if(window.location.href.indexOf('contact')>-1){
  $("#datepicker").datepicker({
    dateFormat:'dd-mm-yy'
  });
  $.validate({
    lang: 'es',
    errorMessagePosition:'top',
    scrollTopOnError:true
  });
};

      //llaves del ready
});
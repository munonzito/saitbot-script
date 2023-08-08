var scriptElement = document.currentScript || document.querySelector('script[data-src]');
        var iframeSrc = scriptElement.getAttribute('data-src');
        // Crea el elemento div para el botón chat
      var chatButton = document.createElement("div");
      chatButton.id = "chatButton";
      chatButton.style.padding = "10px";
      chatButton.style.backgroundColor = "white"; //#512DA8
      chatButton.style.zIndex = "999999";
      chatButton.style.width = "60px";
      chatButton.style.height = "60px";
      chatButton.style.borderRadius = "50%";
      chatButton.style.position = "fixed";
      chatButton.style.bottom = "10px";
      chatButton.style.right = "10px";
      chatButton.style.border = "none";
      chatButton.style.overflow = "hidden";
      chatButton.style.display = "block";
      chatButton.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
      
      // Crea el elemento iframe
      var widgetIframe = document.createElement("iframe");
      widgetIframe.id = "widgetIframe";
      widgetIframe.src = iframeSrc;
      widgetIframe.style.borderRadius = "10px";
      widgetIframe.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
      widgetIframe.style.width = "60vh";
      widgetIframe.style.height = "60vh";
      widgetIframe.style.position = "fixed";
      widgetIframe.style.bottom = "65px";
      widgetIframe.style.right = "10px";
      widgetIframe.style.border = "none";
      widgetIframe.style.overflow = "hidden";
      widgetIframe.style.zIndex = "999999";
      widgetIframe.style.display = "none";

       var chatButtonImage = document.createElement("img");
   chatButtonImage.src = "https://pixlok.com/wp-content/uploads/2021/12/Message-icon-098uyhgv.png"; // Reemplaza "ruta-de-la-imagen.jpg" por la URL de la imagen que deseas mostrar
   chatButtonImage.style.width = "100%"; // Ajusta el tamaño de la imagen al 100% del div
   chatButtonImage.style.height = "100%"; 
     
  
  // Agrega el <i> como hijo del div chatButton
 
  chatButton.appendChild(chatButtonImage);
      // Agrega los elementos al body
      document.body.appendChild(chatButton);
      document.body.appendChild(widgetIframe);
    
      document.addEventListener('DOMContentLoaded', function () {
    // Obtén el elemento sobre el que deseas detectar el clic
    var myButton = document.getElementById('chatButton');
    var iFrame = document.getElementById('widgetIframe');
    
    // Agrega un EventListener para el evento 'click'
    myButton.addEventListener('click', function () {
    if(iFrame.style.display == "none") {
    iFrame.style.display = "block";
    chatButtonImage.src = 'https://cdn-icons-png.flaticon.com/512/75/75519.png'
    } else {
    iFrame.style.display = "none";
    chatButtonImage.src = "https://pixlok.com/wp-content/uploads/2021/12/Message-icon-098uyhgv.png";
    }
    
    // Aquí ejecutas la acción que deseas cuando se hace clic en el botón
    
    });
    });

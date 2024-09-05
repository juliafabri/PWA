document.getElementById('enviarN').addEventListener('click', function(event) {
    addEventListener("click", () => {
        let promise = Notification.requestPermission();
        // wait for permission
      });
      
    if (!("Notification" in window)) {
        Notification.requestPermission();
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification("Isso é uma notificação") 
      })

    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          const notification = new Notification("Hi there!");
          // …
        }
      });
    }
  }
)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }

  function requestNotificationPermission() {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notificação permitida.');
        } else {
          console.log('Notificação não permitida.');
        }
      });
    }
  }
  
  requestNotificationPermission();


  function showNotification() {
    if (Notification.permission === 'granted') {
      new Notification('Notificação', {
        body: 'Isso é uma notificação!',
      });
    }
  }
  
  // Exemplo de chamada para enviar notificação
  document.getElementById('enviarN').addEventListener('click', showNotification);


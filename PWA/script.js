
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
  
  


  function enviarNotificacao() {
    requestNotificationPermission();
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(reg => {
        const options = {
          body: 'Isso é uma notificação!',
        };
        reg.showNotification('Notificação PWA', options);
      });
    }
  }
  
  // Exemplo de chamada para enviar notificação
  document.getElementById('enviarN').addEventListener('click', enviarNotificacao());


function enviarN() {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Permission granted');
      }
    });
  }

  pedirPerm();

  function enviarN() {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(reg => {
        const options = {
          body: 'Isso é uma notificação!',
        };
        reg.showNotification('Isso é uma notificação!', options);
      });
    }
  }

  enviarN();
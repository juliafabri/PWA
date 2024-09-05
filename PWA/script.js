function enviarN() {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(reg => {
        const options = {
          body: 'Essa é uma notificação!'
        };
        reg.showNotification('Notificação PWA', options);
      });
    }
  }

  enviarNotificacao();

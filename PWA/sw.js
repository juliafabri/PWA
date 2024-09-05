Notification.requestPermission();
self.addEventListener('push', (event) => {
    event.waitUntil(
      self.registration.showNotification('Notificação', {
        body: 'Isso é uma notificação!',
        icon: 'custom-notification-icon.png',
      }));
);
  });
  
  self.addEventListener('notificationclick', (event) => {
    event.notification.close(); 
    var fullPath = self.location.origin + event.notification.data.path; 
    clients.openWindow(fullPath); 
});

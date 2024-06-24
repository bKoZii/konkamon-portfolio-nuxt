export default defineAppConfig({
  ui: {
    primary: 'ocean-green',
    gray: 'neutral',
    icons: {
      dynamic: true
    },
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 bottom-auto'
    },
    notification: {
      default: {
        timeout: 2500
      }
    }
  }
})

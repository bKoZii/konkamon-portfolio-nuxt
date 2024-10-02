export default defineAppConfig({
  ui: {
    primary: 'ocean-green',
    gray: 'neutral',
    icons: {
      dynamic: true,
    },
    notifications: {
      position: 'bottom-0 top-auto',
    },
    notification: {
      default: {
        timeout: 2500,
      },
    },
    pagination: {
      default: {
        nextButton: {
          icon: 'ph:arrow-right',
        },
        prevButton: {
          icon: 'ph:arrow-left',
        },
      },
    },
  },
})

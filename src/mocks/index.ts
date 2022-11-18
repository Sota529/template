if (typeof window === 'undefined') {
  void (async () => {
    const { server } = await import('./server')
    server.listen()
  })()
} else {
  void (async () => {
    const { worker } = await import('./browser')
    await worker.start({ onUnhandledRequest: 'bypass' })
  })()
}
export {}

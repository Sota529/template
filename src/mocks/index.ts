/* eslint-disable @typescript-eslint/no-var-requires */
async function initMocks(): Promise<void> {
  if (typeof window === 'undefined') {
    const { server } = require('./server')
    server.listen()
  } else {
    const { worker } = require('./browser')
    worker.start({ onUnhandledRequest: 'bypass' })
  }
}

void initMocks()

export {}

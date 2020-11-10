import{Plugin } from '@remixproject/engine';
export class ConsolePlugin extends Plugin {
    constructor() {
      super({
        name: 'console',
        methods: ['print']
      })
    }
    print(msg: string) {
      console.log(msg)
    }
  }
  
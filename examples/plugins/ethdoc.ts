import { PluginProfile, RemixExtension } from "../../src"
import { Api } from '../../src'

export interface Ethdoc extends Api {
  type: 'ethdoc'
  events: {
    createDoc: any
  }
  getDoc: any
}

export const EthdocProfile: PluginProfile<Ethdoc> = {
  type: 'ethdoc',
  methods: ['getDoc'],
  events: ['createDoc'],
  notifications: [{type: 'solCompiler', key : 'compilationFinished'}],
  url: ''
}

// Plugin: This should be in an Iframe
export class EthdocApi extends RemixExtension<Ethdoc> {

  private doc: any

  constructor() {
    super('ethdoc')
    this.listen('solCompiler', 'compilationFinished', (result) => {
      this.doc = result.data
      this.emit('createDoc', this.doc)
    })
  }

  public getDoc() {
    return this.doc
  }

}
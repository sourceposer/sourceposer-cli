import {Command} from '@oclif/core'

export class Init extends Command {
  static description = 'description of this example command'

  async run(): Promise<void> {
    this.log('implement init command')
  }
}

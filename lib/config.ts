import * as fs from 'fs'
import * as chalk from 'chalk'

export interface IConfig {
  token: string
  name: string
  bundle_id: string
}

export class Config {
  private configPath = `${process.env.HOME}/.fir/config.json`
  private _config: IConfig

  get config() {
    return this._config
  }

  set config(t) {
    this._config = t
  }

  readconfig(): IConfig {
    try {
      fs.accessSync(this.configPath, fs.constants.F_OK)
    } catch (error) {
      console.error(chalk.red(error))
    }

    const configStr = fs.readFileSync(this.configPath, 'utf-8')
    const config = JSON.parse(configStr)
    return config
  }

  init(configPath: string) {
    if (configPath) {
      this.configPath = configPath
    }
    this.config = this.readconfig()
  }
}

export default new Config()

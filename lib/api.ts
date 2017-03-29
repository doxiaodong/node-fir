import * as fs from 'fs'
import * as request from 'request-promise-native'
import configStore from './config'

export async function getUploadCert() {
  const data = await request.post('http://api.fir.im/apps', {
    form: {
      type: 'android',
      bundle_id: configStore.config.bundle_id,
      api_token: configStore.config.token
    },
    json: true
  })
  return data
}

export interface IUploadBody {
  key: string
  token: string
  file: fs.ReadStream
  'x:name': string
  'x:version': string
  'x:build': string
  'x:release_type'?: string
  'x:changelog'?: string
}

export async function upload(url, body: IUploadBody) {
  const data = await request.post(url, {
    formData: body,
    json: true
  })
  return data
}

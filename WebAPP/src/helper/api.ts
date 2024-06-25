import { Convert } from '@/helper/apiModels'
import { DateOnly } from '@/helper/date'
import type { SignUpEmail } from './apiModels'
import { dataKeys, dataManager } from '@/helper/dataManager'
const apiUrls = {
  SendSignUpEmail: '/api/Email/SendSignUp'
}
enum dataFormEnum {
  json = 'application/json',
  formData = 'multipart/form-data',
  any = '*/*'
}
enum requestTypeEnum {
  get = 'GET',
  post = 'POST',
  delete = 'DELETE',
  put = 'PUT'
}
class api {
  static request = async function (
    reqType: requestTypeEnum,
    url: string,
    auth: boolean,
    body: any = null,
    requestType = dataFormEnum.json,
    responseType: dataFormEnum = dataFormEnum.json
  ): Promise<any> {
    const headers = new Headers()
    if (requestType === dataFormEnum.json) {
      headers.append('Content-Type', dataFormEnum.json)
    }
    if (auth) {
      headers.append('Authorization', `Bearer ${dataManager.get(dataKeys.token)}`)
    }
    return await new Promise((resolve, reject) => {
      fetch(url, {
        method: reqType,
        headers: headers,
        body: reqType === requestTypeEnum.post || reqType === requestTypeEnum.put ? body : null
      })
        .then((response) => {
          if (response.ok) {
            if (responseType === dataFormEnum.json) {
              response
                .json()
                .then((data) => {
                  resolve(data)
                })
                .catch((error) => {
                  reject(error)
                })
            }
          } else {
            reject(response)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export class useApi {
  // getMe = async () => {
  //     const url = apiUrls.GetMe;
  //     return await new Promise<Contact>((resolve, reject) => {
  //         api.request(requestTypeEnum.get,url,true).then((data) => {
  //             resolve(Convert.toContact(data))
  //         }).catch((e) => {
  //             reject(e)
  //         })
  //     })
  // }
  // authenticate = async (email: string, password: string) => {
  //     const url = apiUrls.Authenticate;
  //     return await new Promise<string>((resolve, reject) => {
  //         const dataBody = Convert.toJson(Convert.toContactModelForJson({
  //             ContactEmail: email,
  //             ContactPassword: password,
  //             ContactFirstName: '',
  //             ContactLastName: '',
  //         }))
  //         api.request(requestTypeEnum.post,url,false,dataBody).then((data) => {
  //             resolve(data.token)
  //         }).catch((e) => {
  //             reject(e)
  //         })
  //     })
  // }
  sendSignUp = async (data: SignUpEmail) => {
    const url = apiUrls.SendSignUpEmail
    return await new Promise<Boolean>((resolve, reject) => {
      const dataBody = Convert.toJson(Convert.toSignUpEmailModelForJson(data))
      api
        .request(requestTypeEnum.post, url, false, dataBody, dataFormEnum.json)
        .then((response) => {
          resolve(true)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }
}

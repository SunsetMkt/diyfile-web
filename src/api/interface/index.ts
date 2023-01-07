// 请求响应参数
export interface Result<T = any> {
  code: number
  message: string
  data: T
}

// 分页请求响应参数
export interface PageResultData<T = any> extends Result {
  list: T[]
  pageNum: number
  pageSize: number
  total: number
  totalPage: number
}

// 分页请求参数
export interface ReqPage {
  pageNum: number
  pageSize: number
}

// 登录模块
export namespace Login {
  export interface ReqLoginForm {
    username: string
    password: string
    isRememberMe: Boolean
  }
  export interface ResLogin {
    token: string
    expiresIn: number
    tokenHead: string
    refreshToken: string
  }
  export interface ResAuthButtons {
    [key: string]: {
      [key: string]: boolean
    }
  }
}

// 用户管理模块
export namespace User {
  export interface ReqGetUserParams extends ReqPage {
    username: string
    gender: number
    idCard: string
    email: string
    address: string
    createTime: string[]
    status: number
  }
  export interface ResUserList {
    id: string
    username: string
    gender: string
    age: number
    idCard: string
    email: string
    address: string
    createTime: string
    status: number
    avatar: string
    children?: ResUserList[]
  }
  export interface ResStatus {
    userLabel: string
    userValue: number
  }
  export interface ResGender {
    genderLabel: string
    genderValue: number
  }
  export interface ResDepartment {
    id: string
    name: string
    children?: ResDepartment[]
  }
}

// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    fileUrl: string
  }
}

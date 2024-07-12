import {fetch , post} from './getdata'
import axios from 'axios'


//登录接口
const login = (params) => post('/sys/login',params)
//获取用户信息列表
const logout = function (logoutToken) {
    return axios({
      url: '/sys/logout',
      method: 'get',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'X-Access-Token':  logoutToken
      }
    })
  }
const userAdd = (params) => post('/sys/user/add',params)
const createApi = (params) => post('/admin/api/manage/createApi',params)
//添加API分组
const creatApiGroup = (params) => post('/admin/api/group/createApiGroup',params)
//查询api分组
const searchApiGroup = (params) => fetch('/admin/api/group/list',params)
//列表查询
const userList = (params) => fetch('/sys/user/list',params)
const apiList = (params) => fetch('/admin/api/manage/list',params)
//API基本配置保存
const saveBaseInfo = (params) => post('/admin/api/manage/configApiBaseInfo',params)
//限流接口开关
const createPlugin = (params) => post('/admin/gateway/manage/managePlugin',params)
//开启API开关
const isEffectApi = (params) => post('/admin/api/manage/isEffectApi',params)

const openplugin = (params) => post('/admin/gateway/manage/createPlugin',params)
//API详情接口
const apiDetail = (params) => post('/admin/api/manage/getApiDetail',params)
//删除API接口
const deleteApi = (params) => post('/admin/api/manage/deleteApi',params)

//全局插件查询接口
const globalPluginList = () => fetch('admin/gateway/manage/selectGlobalPlugin')
const deleteAPIGroup = (params) => post('admin/gateway/manage/deleteApiGroup',params)
//API详情保存数据模型
const configApiParam = (params) => post('/admin/api/manage/configApiParam',params)
//数据解析
const resolveJson = (params) =>post('/tool/resolveJson',params)
//创建数据模型
const createModal = (params) =>post('/tool/createDataModel',params)
//获取数据模型列表
const getModalList = () => fetch('/tool/getDataModels')
export {
    login,
    logout,
    userAdd,
    createApi,
    creatApiGroup,
    searchApiGroup,
    userList,
    apiList,
    saveBaseInfo,
    createPlugin,
    isEffectApi,
    openplugin,
    apiDetail,
    deleteApi,
    globalPluginList,
    deleteAPIGroup,
    resolveJson,
    createModal,
    getModalList,
    configApiParam
}
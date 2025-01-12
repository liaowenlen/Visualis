import { ViewModelVisualTypes } from 'containers/View/constants'
import { ITableCellStyle } from '../types'

export interface ITableHeaderConfig {
  key: string
  headerName: string
  alias: string
  visualType: ViewModelVisualTypes
  isGroup: boolean
  // 是否隐藏列
  hide: boolean
  style: ITableCellStyle
  children: ITableHeaderConfig[]
}

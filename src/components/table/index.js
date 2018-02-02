"use strict";
import React, { Component } from 'react';
import { Table, Icon, LocaleProvider, Checkbox, Tooltip } from 'antd';
import TextOverflow from '../textOverflow';
import { PropTypes } from 'prop-types';
import enUS from 'antd/lib/locale-provider/en_US';
import './style';
//组件国际化
import en_US from '../language/en_US.json';
import zh_CN from '../language/zh_CN.json';
const language = {
  'en': en_US,
  'zh': zh_CN
};
//当前语言风格
const curLocale = localStorage.getItem('LANGUAGE_STYLE');
const i18n = language[curLocale];

export default class MyTable extends Component {
  static propTypes = {
    setColumn: PropTypes.bool,
  }
  static defaultProps = {
    setColumn: false,
  }
  state = {
    dynamicColumns: [],//动态列
    showPanel: false,//是否显示操作列面板
  }
  componentDidMount() {
    const columns = this.getColumnsByLocked(this.props.columns);
    this.init(columns);
    this.initEvent();
  }
  componentWillReceiveProps(newProps) {
    if (newProps.columns != this.props.columns) {
      this.init(this.getColumnsByLocked(newProps.columns));
    }
  }
  init(columns) {
    let dynamicColumns = [];//动态列
    if (columns && Array.isArray(columns)) {
      dynamicColumns = columns;
    }
    this.setState({ dynamicColumns });
  }
  initEvent() {
    const dropDown = this.refs.dropDown;
    const body = document.documentElement || document.body;
    body.addEventListener('click', () => {
      if (!this.state.showPanel) return;
      const elem = event.target || event.srcElement;
      if (elem.parentNode.parentNode.parentNode.id == 'sysMenu' || elem.parentNode.parentNode.parentNode.parentNode.id == 'sysMenu') {
      } else {
        dropDown.style.display = "none";
        this.showSelectedColumns();
      }
    }, false);
  }
  //去掉锁定的列
  getColumnsByLocked(columns) {
    return columns.filter(item => item.locked != true);
  }
  onChange = (index, e) => {
    const {dynamicColumns} = this.state;
    dynamicColumns[index].showColumn = e.target.checked;
    this.setState({ dynamicColumns });
  }
  showSelectedColumns = () => {
    this.setState({ showPanel: !this.state.showPanel });
  }
  render() {
    const {dataSource = [], pagination, rowSelection, columns, setColumn} = this.props;
    const {dynamicColumns, showPanel} = this.state;
    //国际化
    let locale = {};
    if (curLocale == 'en') {
      locale = enUS;
    }
    //显示分页
    if (pagination) {
      const total = pagination.total ? pagination.total : dataSource.length;
      //显示切换大小
      pagination.pageSizeOptions = ['10', '20', '50', '500', '1000'];
      //显示总数
      pagination.showTotal = total => `Total ${total}`;
      //显示跳转
      pagination.showQuickJumper = true;
    }

    //显示选中的行
    let hasSelected = false, selectedLength = 0;
    if (rowSelection && Array.isArray(rowSelection.selectedRowKeys)) {
      selectedLength = rowSelection.selectedRowKeys.length;
      if (selectedLength > 0) {
        hasSelected = true;
      }
    }

    //动态显示列
    const columnList = dynamicColumns.map((item, index) => {
      return (
        <li key={index}><Checkbox checked={item.showColumn} onChange={this.onChange.bind(this, index)}><TextOverflow content={item.title} length={8} /></Checkbox></li>
      )
    });
    //只有setColumn为true才动态设置列
    let newColumns = columns;
    if (setColumn) {
      newColumns = columns.filter((item, index) => item.showColumn);
    }
    const content = (
      <ul className="columns-selected" style={{ display: showPanel ? 'block' : 'none' }} ref='dropDown' id='sysMenu'>
        {columnList}
      </ul>
    );
    return (
      <div className="assistant-table">
        <span className="column-list" style={{ display: setColumn ? 'block' : 'none' }}>
          <Tooltip placement="right" title={i18n.showFeild}>
            <Icon type="anticon anticon-filter" onClick={this.showSelectedColumns.bind(this)} />
          </Tooltip>
          {content}
        </span>
        <LocaleProvider locale={locale}>
          <Table
            {...this.props}
            columns={newColumns}
          />
        </LocaleProvider>
        <span className={pagination?'selected':'no-page-selected'}>
          {hasSelected ? `Selected ${selectedLength}` : ''}
        </span>
      </div>
    )
  }
}
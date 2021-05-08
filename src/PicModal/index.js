import React, { Component } from 'react'
import * as  ReactDOM from 'react-dom'
import './index.css'
 class PicModal extends Component {
  state = {
    curTab: 0,

    select_item: {},
  }
  setTab = (i) => {
    this.setState(() => {
      return {
        curTab: i,
        select_item:{}
      }
    })
  }

  render() {
    const { curTab,select_item } = this.state
    const { container = document.body, ImgList=[],title='请选择封面',visible,onOK=()=>{},onCancel=()=>{}} = this.props

    if (!visible) {
      document.body.classList.remove('tt_ReactDOM_add_body')
      return null
    }
    document.body.classList.add('tt_ReactDOM_add_body')
    return ReactDOM.createPortal(<div className='tt_ReactDOM' >
      <div className="tt_ll_modal">
        <div className="tt_title">{title}</div>
        <div className="tt_content">
          <div className="ll_l_left">
            {Array.isArray(ImgList)&& ImgList.map((v, i) => {

              return <div
                key={v.categoryId}
                onClick={() => {
                  this.setTab(i)
                }}
                className={`ll_tab_item ${curTab === i ? 'active' : ''}`}>
                <img src={v.categoryBackgroundId}
                  alt=""
                />
              </div>
            })}
          </div>

          <div className="ll_r_right">
            {ImgList[curTab]&&Array.isArray(ImgList[curTab]['coverInfos'])&& ImgList[curTab]['coverInfos'].filter((k, l) => l < 10).map((v, i) => {

              return <div key={i} onClick={() => {
                this.setState(() => {
                  return {
                    select_item: v
                  }
                })
              }}
                className={`ll_right_img_item ${select_item.fileId === v.fileId ? 'll_right_imgactive' : ""}`}>
                <img src={v.fpNameurl} alt="" />
              </div>
            })}

          </div>
        </div>

        <div className="bottom">
          <span onClick={()=>{
            onCancel(this.state.select_item)
          }}>取 消</span>
          <span className="down" onClick={()=>onOK(this.state.select_item)}>确 定</span>
        </div>
      </div>
    </div>, container)
  }
}
export default PicModal

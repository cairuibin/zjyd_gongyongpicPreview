import React, { Component, createContext } from 'react';

import * as ReactDOM from 'react-dom';
import './index.css';
const { Provider, Consumer } = createContext({
  imageBaseUrl: '',
});
const CancelBtn = props => {
  return (
    <span
      onClick={props.onCancel}
      style={{
        position: 'absolute',
        right: -2,
        top: -13,
        zIndex: 1,
      }}
    >
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="15.5"
          cy="15.5"
          r="14.5"
          fill="#615C5C"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="10.006"
          y1="10.0947"
          x2="20.6186"
          y2="20.7073"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="10.006"
          y1="10.0947"
          x2="20.6186"
          y2="20.7073"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="10.006"
          y1="10.0947"
          x2="20.6186"
          y2="20.7073"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="20.6182"
          y1="10.0055"
          x2="10.0056"
          y2="20.6181"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="20.6182"
          y1="10.0055"
          x2="10.0056"
          y2="20.6181"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="20.6182"
          y1="10.0055"
          x2="10.0056"
          y2="20.6181"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};
const GetImageBase = props => {
  console.log(props);
  return (
    <Provider
      value={{
        imageBaseUrl: props.imageBaseUrl,
      }}
    >
      {props.children}
    </Provider>
  );
};

class Image extends Component {
  state = {
    curTab: this.props.ImgList[this.props.curPreview || 0][
      this.props.srcProp || 'id'
    ],
  };
  setTab = id => {
    this.setState(() => {
      return {
        curTab: id,
      };
    });
  };

  render() {
    const { curTab } = this.state;
    const srcProp = [this.props.srcProp || 'id'];
    const {
      container = document.body,
      ImgList = [],
      visible,
      onCancel = () => {},
    } = this.props;

    if (!visible) {
      document.body.classList.remove('pic_image_preview_add_body');
      return null;
    }
    document.body.classList.add('pic_image_preview_add_body');
    return ReactDOM.createPortal(
      <div className="pic_image_preview_wrappers">
        <Consumer>
          {({ imageBaseUrl }) => (
            <div className="pic_image_preview_contents">
              <div className="pic_image_preview_img">
                {ImgList.map(v =>
                  curTab === v[srcProp] && curTab ? (
                    <div
                      key={v[srcProp]}
                      className={`imgpositon_btns ${curTab === v[srcProp] &&
                        'animata'}`}
                      style={{
                        position: 'relative',
                      }}
                    >
                      {' '}
                      <CancelBtn onCancel={onCancel} />
                      <img src={imageBaseUrl + curTab} alt="" />
                    </div>
                  ) : null,
                )}
              </div>
              {ImgList.length > 1 && (
                <div className="pic_image_preview_list">
                  {ImgList.map(v => {
                    return (
                      <div
                        key={v[srcProp]}
                        onClick={() => {
                          this.setTab(v[srcProp]);
                        }}
                        className="pic_image_preview_item"
                      >
                        <img src={imageBaseUrl + v[srcProp]} alt="" />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </Consumer>
      </div>,
      container,
    );
  }
}
export const ImagePreview = Image;
export const GetImageBaseUrl = GetImageBase;

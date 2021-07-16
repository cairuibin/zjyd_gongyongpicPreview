## PicModal

```tsx
import React, { Component } from 'react';
import { ImagePreview, GetImageBaseUrl } from './index.js';
export default class App extends Component {
  state = {
    visible: false,
    imglist: [
      {
        id:
          'a5d64be5720d476e8cf4fe79789eeb0e/oth/image/20210422/6fa53b2d60f1415ea49a076296e3ca7f.jpg',
      },
      {
        id:
          'a5d64be5720d476e8cf4fe79789eeb0e/oth/image/20210422/d1f2b9000a86428d919859402506a318.jpg',
      },
      {
        id:
          'a5d64be5720d476e8cf4fe79789eeb0e/oc/image/20210416/557431a651ed4d62a8284961c1e75750.jpg',
      },
      {
        id:
          'a5d64be5720d476e8cf4fe79789eeb0e/oth/image/20210422/e2ba22198cbd42428280a993242f41e1.jpg',
      },
      {
        id:
          'a5d64be5720d476e8cf4fe79789eeb0e/oth/image/20210422/d7c2a39afbbc4dcfaf5be0bfe7f0277e.jpg',
      },
      {
        id:
          'a5d64be5720d476e8cf4fe79789eeb0e/oth/image/20210422/7e602176830243b089885225b923659e.jpg',
      },
      {
        id:
          'a5d64be5720d476e8cf4fe79789eeb0e/oth/image/20210421/297bebda81a04286a0ed68d83ad47611.jpg_m.jpg',
      },
      {
        id:
          'cb827147a22d4c639170f4bb55b4d25d/oc/image/20210414/7e4705460fce4a638e7f0eb070cfe5b4.jpeg_m.jpeg',
      },
      {
        id:
          'cb827147a22d4c639170f4bb55b4d25d/oc/image/20210425/a8cd614a26fa4387b5bb33db2eecdb8a.jpg',
      },
      {
        id:
          'cb827147a22d4c639170f4bb55b4d25d/oth/image/20210423/f456237e45184e849ae912863e792b1b.jpg',
      },
      {
        id:
          'cb827147a22d4c639170f4bb55b4d25d/oc/image/20210421/868ab6d9b19840c591781c4feb4590fb.jpeg',
      },
      {
        id: '000000/oc/image/20210714/2ad7fa1d95f641489d972b2d3bf24212.jpg',
      },
    ],
  };

  cancel = v => {
    console.log(v, 'cancel');
    this.setState(() => {
      return {
        visible: false,
      };
    });
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              visible: true,
            });
          }}
        >
          为谔谔谔谔
        </button>
        <GetImageBaseUrl imageBaseUrl="http://www.zjyd.testa/public_resource/">
          <ImagePreview
            visible={this.state.visible}
            ImgList={this.state.imglist}
            //点击小叉关闭
            onCancel={item => {
              this.cancel(item);
            }}
            //获取图片的src的属性 {id:"xxx"} || {imgid:"xxx"}
            // srcProp='id'
            // srcProp='imgid'

            //默认展示第几张图片(默认是 第一张)
            curPreview={0} // (展示第 三 张)
          ></ImagePreview>
        </GetImageBaseUrl>
      </div>
    );
  }
}
```

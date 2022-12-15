import React, {Component} from 'react';
import {  Button, Dropdown, Menu, Upload, Modal, message} from 'antd';
import ReactDom from 'react-dom';
import './fuwenben.css';
import {StrikethroughOutlined ,
        BgColorsOutlined,
        AlignLeftOutlined,
        BoldOutlined,
        ItalicOutlined,
        UnderlineOutlined,
        FontColorsOutlined,
        FontSizeOutlined,
        HighlightOutlined,
        AlignRightOutlined,
        AlignCenterOutlined,
        RedoOutlined,
        UndoOutlined,
        OrderedListOutlined,
        UnorderedListOutlined,
        PictureOutlined,
        PlaySquareOutlined,
        DownloadOutlined,
      } from '@ant-design/icons';

export default class fuwenben  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyWordColor: '#000000d9', // 结果关键词颜色
            keyWordBgcColor : '#000000d9', // 结果关键词颜色选择器可见性
            fontSize:'',
            open:false,
            loading:false,
            videoUrl:'',
            captureStream:null,
            error:null,
            mediaRecorder:null,
            isRecording:false,
            recording:null,
        }
    }
  
    actions = {
       undo: {
          icon: "UndoOutlined",
          title: "Undo",
          onClick: () => this.exec("undo"),
        },
        redo: {
          icon: "RedoOutlined",
          title: "Redo",
          onClick: () => this.exec("redo"),
        },
        bold: {
          icon: "BoldOutlined",
          title: "Bold",
          onClick: () => this.exec("bold"),
        },
        italic: {
          icon: "ItalicOutlined",
          title: "Italic",
          onClick: () => this.exec("italic"),
        },
        underline: {
          icon: "UnderlineOutlined",
          title: "Underline",
          onClick: () => this.exec("underline"),
        },
        strikeThrough :{
          title:'StrikeThrough',
          icon: "StrikethroughOutlined",
          onClick: () => this.exec("strikeThrough"),
        },
        foreColor: {
          icon: "FontColorsOutlined",
          title: "ForeColor",
          menu:(<Menu
            items={[
              {
                label: (
                  <button  style={{'color':'#000000d9'}} onClick={()=> this.exec("ForeColor",'#000000d9')}>
                    黑色
                  </button>
                ),
                key: '1',
              },
              {
                label: (
                  <button style={{'color':'#fbf2e3'}}  onClick={()=> this.exec("ForeColor",'#fbf2e3')}>
                    粉白
                  </button>
                ),
                key: '2',
              },
              {
                label: (
                  <button style={{'color':'#f04b22'}}  onClick={()=> this.exec("ForeColor",'#f04b22')}>
                    大红
                  </button>
                ),
                key: '3',
              },
              {
                label: (
                  <button style={{'color':'#964d22'}}  onClick={()=> this.exec("ForeColor",'#964d22')}>
                    岩石棕
                  </button>
                ),
                key: '4',
              },
              {
                label: (
                  <button  style={{'color':'#7c1823'}}  onClick={()=> this.exec("ForeColor",'#7c1823')}>
                    枣红
                  </button>
                ),
                key: '5',
              },
              {
                label: (
                  <button  style={{'color':'#2e317c'}}  onClick={()=> this.exec("ForeColor",'#2e317c')}>
                    满天星紫
                  </button>
                ),
                key: '6',
              },
              {
                label: (
                  <button style={{'color':'#51c4d3'}}  onClick={()=> this.exec("ForeColor",'#51c4d3')}>
                    瀑布蓝
                  </button>
                ),
                key: '7',
              },
              {
                label: (
                  <button  style={{'color':'#68b88e'}}  onClick={()=> this.exec("ForeColor",'#68b88e')}>
                    田园绿
                  </button>
                ),
                key: '8',
              },
              {
                label: (
                  <button  style={{'color':'#feba07'}}   onClick={()=> this.exec("ForeColor",'#feba07')}>
                    琥珀黄
                  </button>
                ),
                key: '9',
              },
            ]}
          />),
          onClick: '',
        },
        backColor:{
          icon: "BgColorsOutlined",
          title:'BackColor',
          menu:(<Menu
            items={[
              {
                label: (
                  <button  style={{'color':'#000000d9'}} onClick={()=> this.exec("BackColor",'#ffffff')}>
                    白色
                  </button>
                ),
                key: '0',
              },
              {
                label: (
                  <button  style={{'color':'#000000d9'}} onClick={()=> this.exec("BackColor",'#000000d9')}>
                    黑色
                  </button>
                ),
                key: '1',
              },
              {
                label: (
                  <button style={{'color':'#fbf2e3'}}  onClick={()=> this.exec("BackColor",'#fbf2e3')}>
                    粉白
                  </button>
                ),
                key: '2',
              },
              {
                label: (
                  <button style={{'color':'#f04b22'}}  onClick={()=> this.exec("BackColor",'#f04b22')}>
                    大红
                  </button>
                ),
                key: '3',
              },
              {
                label: (
                  <button style={{'color':'#964d22'}}  onClick={()=> this.exec("BackColor",'#964d22')}>
                    岩石棕
                  </button>
                ),
                key: '4',
              },
              {
                label: (
                  <button  style={{'color':'#7c1823'}}  onClick={()=> this.exec("BackColor",'#7c1823')}>
                    枣红
                  </button>
                ),
                key: '5',
              },
              {
                label: (
                  <button  style={{'color':'#2e317c'}}  onClick={()=> this.exec("BackColor",'#2e317c')}>
                    满天星紫
                  </button>
                ),
                key: '6',
              },
              {
                label: (
                  <button style={{'color':'#51c4d3'}}  onClick={()=> this.exec("BackColor",'#51c4d3')}>
                    瀑布蓝
                  </button>
                ),
                key: '7',
              },
              {
                label: (
                  <button  style={{'color':'#68b88e'}}  onClick={()=> this.exec("BackColor",'#68b88e')}>
                    田园绿
                  </button>
                ),
                key: '8',
              },
              {
                label: (
                  <button  style={{'color':'#feba07'}}   onClick={()=> this.exec("BackColor",'#feba07')}>
                    琥珀黄
                  </button>
                ),
                key: '9',
              },
            ]}
          />),

        },
        fontSize: {
          icon: "FontSizeOutlined",
          title: "FontSize",
          menu:(<Menu
            items={[
              {
                label: (
                  <button  onClick={()=> this.exec("FontSize",'3')}>
                    x-small
                  </button>
                ),
                key: '12',
              },
              {
                label: (
                  <button  onClick={()=> this.exec("FontSize",'4')}>
                    small
                  </button>
                ),
                key: '14',
              },
              {
                label: (
                  <button  onClick={()=> this.exec("FontSize",'5')}>
                    medium
                  </button>
                ),
                key: '16',
              },
              {
                label: (
                  <button  onClick={()=> this.exec("FontSize",'6')}>
                    large
                  </button>
                ),
                key: '18',
              },
              {
                label: (
                  <button  onClick={()=> this.exec("FontSize",'7')}>
                    x-large
                  </button>
                ),
                key: '24',
              },
            ]}
          />),
         onClick: '',
        },
        fontName: {
          icon: "HighlightOutlined",
          title: "FontName",
          menu:(<Menu
            items={[
              {
                label: (
                  <button  onClick={()=> this.exec("FontName",'标楷体')}>
                    标楷体
                  </button>
                ),
                key: '12',
              },
              {
                label: (
                  <button  onClick={()=> this.exec("FontName",'黑体')}>
                    黑体
                  </button>
                ),
                key: '14',
              },
              {
                label: (
                  <button  onClick={()=> this.exec("FontName",'Arial')}>
                    Arial
                  </button>
                ),
                key: '16',
              },
              {
                label: (
                  <button  style={{}} onClick={()=> this.exec("FontName",'宋体')}>
                    宋体
                  </button>
                ),
                key: '18',
              },
              {
                label: (
                  <button  onClick={()=> this.exec("FontName",'Helvetica')}>
                    Helvetica
                  </button>
                ),
                key: '24',
              },
            ]}
          />),
          onClick: () => this.exec("FontName",''),
        },
        insertImage:{
          icon: "PictureOutlined",
          title: "InsertImage",
          isinput:true,
          isFile:false,
          onClick: () => this.exec("InsertInputImage"),
        },
        insertViedo:{
          icon: "PlaySquareOutlined",
          title: "InsertViedo",
          onClick: () => this.exec("InsertViedo"),
        },
        uploadFile:{
          icon: "DownloadOutlined",
          title: "uploadFile",
          isinput:true,
          isFile:true,
          onClick: () => this.exec("uploadFile"), 
        },
        justifyCenter: {
          icon: "AlignCenterOutlined",
          title: "JustifyCenter",
         onClick: () => this.exec("justifyCenter"),
        },
        justifyLeft: {
          icon: "AlignLeftOutlined",
          title: "JustifyLeft",
         onClick: () => this.exec("justifyLeft"),
        },
        justifyRight: {
          icon: "AlignRightOutlined",
          title: "JustifyRight",
          onClick: () => this.exec("justifyRight"),
        }, 
        insertOrderedList: {
          icon: "OrderedListOutlined",
          title: "InsertOrderedList",
          onClick: () => this.exec("InsertOrderedList"),
        }, 
        insertUnorderedList : {
          icon: "UnorderedListOutlined",
          title: "InsertUnorderedList",
          onClick: () => this.exec("InsertUnorderedList"),
        }, 
    };

    async  startRecord (){
      let self = this
      const stopRecording = () => {
        try {
          this.setState({
            isRecording:false
          });
          this.state.mediaRecorder.stop();
          this.state.captureStream.getTracks().forEach(track => track.stop());
        } catch (e) {
          this.setState({
            error:e
          });
        }
      };
      let mediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          cursor: "never",
        },
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100,
        },
      })
      let audioStream = await navigator.mediaDevices.getUserMedia({audio:true})
      this.setState({
        isRecording:true
      });
      mediaStream.getTracks().forEach(track => {
        track.onended = stopRecording;
      });
      audioStream.getAudioTracks().forEach(track=>{
        mediaStream.addTrack(track);
      });
      this.setState({
        captureStream:mediaStream
      });
     
      // 需要更好的浏览器支持
      const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9") 
        ? "video/webm; codecs=vp9" 
        : "video/webm"
      let mediaRecorder = new MediaRecorder(mediaStream);
      let chunks = []
      mediaRecorder.ondataavailable = event => {
        this.setState({
          mediaRecorder:event.data
        })
      };
      mediaRecorder.addEventListener('dataavailable', function(e) {
          chunks.push(e.data)
      })
      this.setState({
        mediaRecorder:mediaRecorder
      })
      mediaRecorder.addEventListener('stop', function(){
          let blob = new Blob(chunks, {
              type: chunks[0].type
          })
          let url = URL.createObjectURL(blob)
          stopRecording()
          self.setState({
            open:true,
            videoUrl:url,
            isRecording:false
          })
      })
      // 必须手动启动
      mediaRecorder.start()
      console.log(mediaStream)
    }

    exec = (commandName, value = null) => {
      console.log(commandName)
      if(commandName === 'ForeColor'){
        const colorStyle = document.querySelector('#FontColorsOutlined')
        ReactDom.findDOMNode(colorStyle).style.color=value
        document.execCommand(commandName, false, value);
      }else if(commandName === 'BackColor' && value !== '#ffffff'){
        const colorStyle = document.querySelector('#BgColorsOutlined')
        ReactDom.findDOMNode(colorStyle).style.color=value
        document.execCommand(commandName, false, value);
      }else if(commandName === 'InsertViedo'){
        this.startRecord()
      }
      else{
        document.execCommand(commandName, false, value);
      }
    };

    propsUpload = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      showUploadList:false,
      onChange(info) {
        console.log(info)
        if (info.file.status !== 'uploading') {
          console.log(info, info.fileList);
        }
        if (info.file.status === 'done') {
          document.querySelector('.content').focus()
          document.execCommand('InsertImage',false,info.file.response.url)
        } else if (info.file.status === 'error') {
          
        }
      },
    };

    uploadProps = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      progress: {
        strokeColor: {
          '0%': '#108ee9',
          '100%': '#87d068',
        },
        strokeWidth: 3,
        format: percent => percent && `${parseFloat(percent.toFixed(2))}%`,
      },
    };

    renderIcon(icon){
      const obj = {
        AlignLeftOutlined:AlignLeftOutlined,
        BoldOutlined:BoldOutlined,
        ItalicOutlined:ItalicOutlined,
        UnderlineOutlined:UnderlineOutlined,
        FontColorsOutlined:FontColorsOutlined,
        FontSizeOutlined:FontSizeOutlined,
        HighlightOutlined:HighlightOutlined,
        AlignCenterOutlined:AlignCenterOutlined,
        AlignRightOutlined:AlignRightOutlined,
        BgColorsOutlined:BgColorsOutlined,
        StrikethroughOutlined:StrikethroughOutlined,
        RedoOutlined:RedoOutlined,
        UndoOutlined:UndoOutlined,
        UnorderedListOutlined:UnorderedListOutlined,
        OrderedListOutlined:OrderedListOutlined,
        PictureOutlined:PictureOutlined,
        PlaySquareOutlined:PlaySquareOutlined,
        DownloadOutlined:DownloadOutlined
      }
      const TagName = obj[icon] || null
      if(icon === 'FontColorsOutlined'){
        return (
          <TagName style={{'color':this.state.keyWordColor}}  id={icon}  className={'iconName'} />
          );
      }else if( icon === 'BgColorsOutlined') {
        return (
          <TagName style={{'color':this.state.keyWordBgcColor}}  id={icon}  className={'iconName'} />
          );
      } 
      else {
        return (
          <TagName   className={'iconName'} id={icon} />
          );
      }  
    }

    submit(){
      let  dom = document.querySelector('.content').innerHTML
      console.log(dom)
      this.example()
    }

    handleOk=() =>{
      this.setState({
        loading:true
      })
      let a = document.createElement('a')
      a.href = this.state.videoUrl
      a.download = 'video.webm'
      a.click()
      // document.querySelector('.content').focus()
      // document.execCommand('InsertInputFileUpload',false,this.state.videoUrl);
      setTimeout(() => {
        this.setState({
          loading:false,
          open:false
        })
      }, 3000);
    }

    handleCancel=() =>{
      this.setState({
        open:false
      })
    }

    render(){
        return (
          <div>
            <div className="textEditor">
              <div className="actions">
                {Object.keys(this.actions).map((action,index) => (
                  this.actions[action].menu?
                  (<Dropdown overlay={this.actions[action].menu}  key={index}>
                  <button onClick={e => e.preventDefault()}>{this.renderIcon(this.actions[action].icon)}</button>
                </Dropdown>):(this.actions[action].isinput?(
                  <Upload {... this.actions[action].isFile? this.uploadProps : this.propsUpload } key={index}>
                  <button  style={{marginTop:'6px'}}>{this.renderIcon(this.actions[action].icon)}</button>
                </Upload>
                ):
                (
                    <button key={index} onClick={this.actions[action].onClick}>{this.renderIcon(this.actions[action].icon)}</button>
                ) 
                )))}
              </div>
              <div suppressContentEditableWarning className="content" contentEditable>
              </div>
              <Button className='submit-button' onClick={this.submit}>提交</Button>
              <Modal
                open={this.state.open}
                title="查看视频"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button key="back" onClick={this.handleCancel}>
                    取消
                  </Button>,
                  <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                    下载
                  </Button>,
                ]}
              >
                <video className="video" src={this.state.videoUrl} controls></video>
              </Modal>
            </div>
            
          </div> 
        
          );
    }

}

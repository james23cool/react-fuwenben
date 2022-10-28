import React, {Component} from 'react';
import {  Dropdown, Menu } from 'antd';
import ReactDom from 'react-dom'
import './fuwenben.css';
import { AlignLeftOutlined,BoldOutlined,ItalicOutlined,UnderlineOutlined,FontColorsOutlined,FontSizeOutlined,HighlightOutlined,AlignRightOutlined,AlignCenterOutlined} from '@ant-design/icons';


export default class fuwenben  extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            keyWordColor: '#000000d9', // 结果关键词颜色
            keyWordPickerVisible : false, // 结果关键词颜色选择器可见性
            fontSize:'',
        }
    }
   
    actions = {
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
    };

    exec = (commandName, value = null) => {
      if(commandName === 'ForeColor'){
        const colorStyle = document.querySelector('#FontColorsOutlined')
        ReactDom.findDOMNode(colorStyle).style.color=value
        document.execCommand(commandName, false, value);
      }else{
        document.execCommand(commandName, false, value);
      }
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
      }
      const TagName = obj[icon] || null
      if(icon === 'FontColorsOutlined'){
        return (
          <TagName style={{'color':this.state.keyWordColor}}  id={icon}  className={'iconName'} />
          );
      }else{
        return (
          <TagName   className={'iconName'} id={icon} />
          );
      }

        
    }

    componentDidMount() {
      
    }
    

    render(){
        return (
            <div className="textEditor">
              <div className="actions">
                {Object.keys(this.actions).map((action,index) => (
                  this.actions[action].menu?
                  (<Dropdown overlay={this.actions[action].menu}  key={index}>
                  <button onClick={e => e.preventDefault()}>{this.renderIcon(this.actions[action].icon)}</button>
                </Dropdown>):(
                  <button key={index} onClick={this.actions[action].onClick}>{this.renderIcon(this.actions[action].icon)}</button>
                ) 
                ))}
              </div>
              <div suppressContentEditableWarning className="content" contentEditable>
              </div>
            </div>
        
          );
    }

}

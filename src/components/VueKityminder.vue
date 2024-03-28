<template>
  <div :class="$options.name" :id="id">
    <div class="toolbar">
      <div :class="`${$options.name}-toolbar-left`">
        <!-- <el-text>图形操作：</el-text> -->
        <el-select v-model="the" placeholder="样式" style="width: 80px;margin-right: 10px;" size="small">
          <el-option v-for="item in themes" :key="item.name" :label="item.title" :value="item.name" size="small" />
        </el-select>
        <el-button @click="handleCommand('ResetLayout')" size="small" circle><el-icon>
            <Refresh />
          </el-icon></el-button>
        <el-button @click="handleCommand('ZoomOut')" size="small" circle><el-icon>
            <Minus />
          </el-icon></el-button>
        <el-button @click="handleCommand('ZoomIn')" size="small" circle><el-icon>
            <Plus />
          </el-icon></el-button>
        <el-divider direction="vertical" />
        <!-- <el-text>节点操作：</el-text> -->
        <el-button @click="handleCommand('ArrangeUp')" size="small" circle ><el-icon>
            <Top />
          </el-icon></el-button>
        <el-button @click="handleCommand('ArrangeDown')" size="small" circle><el-icon>
            <Bottom />
          </el-icon></el-button>
        <el-divider direction="vertical" />
        <el-button @click="onStatusChoose('yes')" size="small" circle><el-icon
            style="color: green;"><Select /></el-icon></el-button>
        <el-button @click="onStatusChoose('no')" size="small" circle><el-icon style="color: red;">
            <Close />
          </el-icon></el-button>
        <el-divider direction="vertical" />
        <div style="margin-left: 0px;">
          <el-dropdown split-button size="small" style="line-height: 24px;" @command="onPriorityChange">
            <span class="el-dropdown-link">序号</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="">无</el-dropdown-item>
                <el-dropdown-item command="1">1</el-dropdown-item>
                <el-dropdown-item command="2">2</el-dropdown-item>
                <el-dropdown-item command="3">3</el-dropdown-item>
                <el-dropdown-item command="4">4</el-dropdown-item>
                <el-dropdown-item command="5">5</el-dropdown-item>
                <el-dropdown-item command="6">6</el-dropdown-item>
                <el-dropdown-item command="7">7</el-dropdown-item>
                <el-dropdown-item command="8">8</el-dropdown-item>
                <el-dropdown-item command="9">9</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div style="margin-left: 6px;">
          <el-dropdown split-button size="small" style="line-height: 24px;" @command="onNodeColorChange">
            <span class="el-dropdown-link">背景</span>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="#409EFF">
                  <div style="width:30px;background: #409EFF;">&nbsp;</div>
                </el-dropdown-item>
                <el-dropdown-item command="#67C23A">
                  <div style="width:30px;background: #67C23A;">&nbsp;</div>
                </el-dropdown-item>
                <el-dropdown-item command="#E6A23C">
                  <div style="width:30px;background: #E6A23C;">&nbsp;</div>
                </el-dropdown-item>
                <el-dropdown-item command="#F56C6C">
                  <div style="width:30px;background: #F56C6C;">&nbsp;</div>
                </el-dropdown-item>
                <el-dropdown-item command="#909399">
                  <div style="width:30px;background: #909399;">&nbsp;</div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <el-divider direction="vertical" />
        <div style="margin-left: 0px;">
          <el-dropdown split-button size="small" style="line-height: 24px;" @command="onFontSizeChoose">
            <span class="el-dropdown-link">字号</span>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="12">12</el-dropdown-item>
                <el-dropdown-item command="14">14</el-dropdown-item>
                <el-dropdown-item command="16">16</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div style="margin-left: 6px;">
          <el-dropdown split-button size="small" style="line-height: 24px;" @command="onNodeFontColorChange">
            <span class="el-dropdown-link">字色</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="#ffffff">
                  <div style="width:30px;background: #ffffff;">&nbsp;</div>
                </el-dropdown-item>
                <el-dropdown-item command="#000000">
                  <div style="width:30px;background: #000000;">&nbsp;</div>
                </el-dropdown-item>
                <el-dropdown-item command="#409EFF">
                  <div style="width:30px;background: #409EFF;">&nbsp;</div>
                </el-dropdown-item>
                <el-dropdown-item command="#67C23A">
                  <div style="width:30px;background: #67C23A;">&nbsp;</div>
                </el-dropdown-item>
                <el-dropdown-item command="#E6A23C">
                  <div style="width:30px;background: #E6A23C;">&nbsp;</div>
                </el-dropdown-item>
                <el-dropdown-item command="#F56C6C">
                  <div style="width:30px;background: #F56C6C;">&nbsp;</div>
                </el-dropdown-item>
                <el-dropdown-item command="#909399">
                  <div style="width:30px;background: #909399;">&nbsp;</div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div :class="`${$options.name}-toolbar-right`">
        <el-button type="primary" @click="onClose" size="small">保存退出</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
function loadScript(url) {
  return new Promise((resolve, reject) => {
    var script = document.createElement("script");
    //script.type = 'module';  //改成了非module的js文件
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
export default defineComponent({
  name: "vue-kityminder",
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          data: {
            text: "新建",
          },
        };
      },
    },
    theme: {
      type: String,
      default: "fresh-blue-compat",
    },
    template: {
      type: String,
      default: "filetree",
    },
  },
  data() {
    return {
      minder: null,
      tpl: this.template,
      templates: [
        // {
        //   name: "default",
        //   title: "思维导图",
        // },
        {
          name: "filetree",
          title: "目录组织图",
        },
        {
          name: "right",
          title: "逻辑结构图",
        },
        {
          name: "structure",
          title: "组织结构图",
        },
        // {
        //   name: "fish-bone",
        //   title: "鱼骨头图",
        // },
        // {
        //   name: "tianpan",
        //   title: "天盘图",
        // },
      ],
      the: this.theme,
      themes: [
        // {
        //   name: "classic",
        //   title: "脑图经典",
        // },
        {
          name: "classic-compact",
          title: "紧凑经典",
        },
        // {
        //   name: "fresh-blue",
        //   title: "天空蓝",
        // },
        {
          name: "fresh-blue-compat",
          title: "紧凑蓝",
        },
        // {
        //   name: "fresh-green",
        //   title: "文艺绿",
        // },
        {
          name: "fresh-green-compat",
          title: "紧凑绿",
        },
        // {
        //   name: "fresh-pink",
        //   title: "脑残粉",
        // },
        {
          name: "fresh-pink-compat",
          title: "紧凑粉",
        },
        // {
        //   name: "fresh-purple",
        //   title: "浪漫紫",
        // },
        {
          name: "fresh-purple-compat",
          title: "紧凑紫",
        },
        // {
        //   name: "fresh-red",
        //   title: "清新红",
        // },
        {
          name: "fresh-red-compat",
          title: "紧凑红",
        },
        // {
        //   name: "fresh-soil",
        //   title: "泥土黄",
        // },
        {
          name: "fresh-soil-compat",
          title: "紧凑黄",
        },
        // {
        //   name: "snow",
        //   title: "温柔冷光",
        // },
        // {
        //   name: "snow-compact",
        //   title: "紧凑冷光",
        // },
        // {
        //   name: "tianpan",
        //   title: "经典天盘",
        // },
        // {
        //   name: "tianpan-compact",
        //   title: "紧凑天盘",
        // },
        // {
        //   name: "fish",
        //   title: "鱼骨图",
        // },
        // {
        //   name: "wire",
        //   title: "线框",
        // },
      ],
      hand: 0,
      selectedNodes: 0,
      text: "",
      evtHandler: null,
      state: 'normal',
      // 选色盘：nodeColors
      nColor: '#fff',
      nFColor: '#fff',
      prioritys: [
        { name: "1", title: "1" },
        { name: "2", title: "2" },
        { name: "3", title: "3" },
        { name: "4", title: "4" },
        { name: "5", title: "5" },
        { name: "6", title: "6" },
        { name: "7", title: "7" },
        { name: "8", title: "8" },
        { name: "9", title: "9" },
      ]
    };
  },
  computed: {
    id() {
      return `${this.$options.name}-${this._.uid}`;
    },
  },
  watch: {
    value: {
      handler: function () {
        this.handleInit();
      },
      deep: true,
    },
    template(val) {
      this.tpl = val;
    },
    tpl(val) {
      this.handleTemplate(val);
    },
    theme(val) {
      this.the = val;
    },
    the(val) {
      this.handleTheme(val);
    },
  },
  async mounted() {
    // 加载并初始化mider -- web调试的情况
    await loadScript("../../kittys/kity.js");
    await loadScript("../../kittys/kityminder.core.js");

    this.minder = new window.kityminder.Minder({
      renderTo: `#${this.id}`,
    });
    this.handleInit();

    // 自定义键盘事件
    var container = document.getElementById(this.id);
    if (undefined == container) {
      console.log("contanier null")
      return
    }
    var element = document.createElement('div');
    element.contentEditable = true;
    element.setAttribute('tabindex', -1);
    element.classList.add('receiver');
    element.onkeydown = element.onkeypress = element.onkeyup = this.dispatchKeyEvent;
    element.addEventListener('compositionstart', this.dispatchKeyEvent);
    container.appendChild(element);
    this.evtHandler = element;


    var that = this;
    this.minder.on('selectionchange', function (e) {
      that.exitInputMode()
      if (that.minder.getSelectedNode()) {
        that.evtHandler.focus()
      } else {
        that.evtHandler.blur()
      }
      // 通知父组件
      // var nodedata = {}
      // nodedata.data = that.getNodeData()
      // if (nodedata.data == null) {
      //   nodedata.isRoot = true
      //   that.$emit("node-change", nodedata);
      // } else {
      //   nodedata.isRoot = false
      //   if (nodedata.data.level == 0) {
      //     nodedata.isRoot = true
      //   }
      //   that.$emit("node-change", nodedata);
      // }
    });
    this.minder.on('layoutallfinish viewchanged selectionchange', function (e) {
      // viewchange event is too frequenced, lazy it
      // console.log(e)
      that.updateEvtHandlerPosition();
      if (e.type == "layoutallfinish") {
        if (that.state == "nodeAppending") {
          that.editText();
          that.enterInputMode();
        }
      }
    });

    this.minder.on("dblclick", () => {
      that.editText();
      that.enterInputMode();
    });

    // this.minder.on("preExecCommand", (e) => {
    //   if ("removenode" === e.commandName) {
    //     that.$emit("node-remove", that.getNodeData());
    //   }
    // });
    // this.minder.on("execCommand", (e) => {
    //   if (["appendchildnode", "appendsiblingnode"].indexOf(e.commandName) !== -1) {
    //     that.minder.getSelectedNode().setData("id", 0);
    //   } else if ("removenode" === e.commandName) {
    //     // that.$emit("content-change", that.minder.exportJson().root);
    //   }
    // });
  },
  methods: {
    handleInit() {
      if (!this.minder) {
        return;
      }
      this.minder.importJson({ root: this.value });
      this.handleTemplate(this.tpl);
      this.handleTheme(this.the);
    },
    // 父组件调用函数
    getExportJson() {
      return this.minder.exportJson().root
    },
    
    // xxxx
    getNodeData() {
      const node = this.minder.getSelectedNode();
      if (!node || node.isArray) {
        return null
      }
      return {
        level: node.getLevel(),
        ...node.getData(),
      };
    },
    setNodeData(key, data) {
      if (this.selectedNodes !== 1) {
        return false;
      }
      this.minder.getSelectedNode().setData(key, data);
      return true;
    },
    removeNode() {
      if (this.selectedNodes !== 1) {
        return false;
      }
      this.handleCommand("RemoveNode");
      return true;
    },
    setNodeText(val = "") {
      val = val || this.text;
      if (!val || this.selectedNodes !== 1) {
        return;
      }
      this.minder.execCommand("text", val);
      // this.$emit("content-change", this.minder.exportJson().root);
      // this.$emit("node-change", this.getNodeData());
    },
    handleCommand(command) {
      this.minder.execCommand(command);
    },
    handleCommand2(command, p1) {
      this.minder.execCommand(command, p1);
    },
    handleCommand3(command, p1, p2) {
      this.minder.execCommand(command, p1, p2);
    },
    handleTemplate(template) {
      this.minder.execCommand("Template", template);
      // this.$emit("template-change", template);
    },
    handleTheme(theme) {
      this.minder.execCommand("Theme", theme);
      // this.$emit("theme-change", theme);
    },
    handleHand() {
      this.minder.execCommand("Hand");
      this.hand = this.minder.queryCommandState("Hand");
    },

    /** 节点交互时间 */
    onClose(e){
      this.$emit("on-close", this.minder.exportJson().root);
    },
    onNodeColorChange(e) {
      console.log(e)
      this.handleCommand2('Background', e);
    },
    onPriorityChange(e) {
      this.handleCommand2('Priority', e);
    },
    onStatusChoose(e) {
      console.log(e)
      if (e == "") {
        this.handleCommand3("Image", "", "")
      } else if (e == "yes") {
        this.handleCommand3('Image', 'https://www.intl.4cd.edu/images/green-check.png', 'check')
      } else if (e == "no") {
        this.handleCommand3("Image", "", "check")
      }
    },
    onFontSizeChoose(e) {
      this.handleCommand2("FontSize", e)
    },
    onNodeFontColorChange(e) {
      this.handleCommand2("ForeColor", e)
    },
    // 处理事件
    dispatchKeyEvent(e) {
      var that = this;
      var node = this.minder.getSelectedNode();
      if (!node) {
        return;
      }
      if (this.state == "normal") {
        e.stopPropagation();
        console.log(e)
        if (e.key == "Tab" && e.code == "Tab" && !e.ctrlKey) {
          this.minder.execCommand('AppendChildNode', "分支主题");
          this.minder.getSelectedNode().setData('id', new Date().getTime() + '');
          this.state = "nodeAppending"
          return
        }
        if (e.key == "Delete" && e.code == "Delete" && e.type == 'keyup') {
          this.minder.execCommand('RemoveNode');
          return
        }
        if (e.key == "Enter" && e.code == "Enter" && e.type == 'keyup') {
          this.minder.execCommand('AppendSiblingNode', "分支主题")
          this.minder.getSelectedNode().setData('id', new Date().getTime() + '');
          this.state = "nodeAppending"
          return
        }
      } else if (this.state == "inputting") {
        // 正在编辑
        this.commitInputResult()
        if (e.key == "Enter" && e.code == "Enter" && e.type == 'keyup') {
          this.exitInputMode()
        }
        e.stopPropagation();
      }
    },
    // 编辑/输入框的位置更新
    updateEvtHandlerPosition() {
      var focusNode = this.minder.getSelectedNode();
      if (!focusNode) {
        return
      };
      var box = focusNode.getRenderBox('TextRenderer');
      this.evtHandler.style.left = Math.round(box.x) + 'px';
      this.evtHandler.style.top = Math.round(box.y) + 'px';
    },
    // 进入编辑状态
    enterInputMode() {
      var node = this.minder.getSelectedNode();
      if (node) {
        var fontSize = node.getData('font-size') || node.getStyle('font-size');
        this.evtHandler.style.fontSize = fontSize + 'px';
        this.evtHandler.style.minWidth = 0;
        this.evtHandler.style.minWidth = this.evtHandler.clientWidth + 'px';
        this.evtHandler.style.fontWeight = node.getData('font-weight') || '';
        this.evtHandler.style.fontStyle = node.getData('font-style') || '';
        this.evtHandler.classList.add('input');

        // 选中内容
        {
          if (!this.evtHandler.innerHTML) this.evtHandler.innerHTML = '&nbsp;&nbsp;&nbsp;';
          var range = document.createRange();
          var selection = window.getSelection();
          range.selectNodeContents(this.evtHandler);
          selection.removeAllRanges();
          selection.addRange(range);
        }

        this.evtHandler.focus();
        this.state = "inputting"
      }
    },
    exitInputMode() {
      this.evtHandler.innerHTML = "";
      this.evtHandler.classList.remove('input');
      this.state = "normal"
      // this.evtHandler.selectAll();
    },
    commitInputResult() {
      // 此处应该判断变化后，在进行更新，避免效率问题
      var inputval = this.evtHandler.textContent;
      this.minder.execCommand("text", inputval);
      console.log(JSON.stringify(this.minder.exportJson()))
      // this.$emit("content-change", this.minder.exportJson().root);
    },
    editText() {
      var node = this.minder.getSelectedNode();
      if (!node) {
        return;
      }
      var textContainer = this.evtHandler;
      this.evtHandler.innerText = "";
      if (node.getData('font-weight') === 'bold') {
        var b = document.createElement('b');
        textContainer.appendChild(b);
        textContainer = b;
      }
      if (node.getData('font-style') === 'italic') {
        var i = document.createElement('i');
        textContainer.appendChild(i);
        textContainer = i;
      }
      textContainer.innerText = this.minder.queryCommandValue('text');

      // if (isGecko) {
      //   // receiver.fixFFCaretDisappeared();
      // };
      // fsm.jump('input', 'input-request');
      // receiver.selectAll();
    }
  }
});
</script>

<style lang="scss">
@import "../assets/css/kityminder.core.css";

$prefix: "vue-kityminder";
$primary: #409eff;

.#{$prefix} {
  position: relative;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .toolbar {
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    align-items: center;
    height: 50px;

    .#{$prefix}-toolbar-left {
      width: calc(100vw - 100px);
      margin-left: 0.5rem;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
    }

    .#{$prefix}-toolbar-right {
      width: 100px;
      margin-right: 0.5rem;
      display: flex;
      flex-direction: row;
      justify-content: end;
    }
  }

  .#{$prefix}-btn {
    color: #fff;
    background: rgba($primary, 0.8);
    border: none;
    cursor: pointer;
    border-radius: 3px;
    font-size: 12px;
    transition: background 0.3s ease;
    padding: 2px 5px;

    &:hover {
      background: $primary;
    }

    &[disabled] {
      cursor: not-allowed;
      background: #bbb;
    }
  }

  .#{$prefix}-ml {
    margin-left: 3px;
  }

  .#{$prefix}-control {
    border: 1px solid #dcdfe6;
    border-radius: 3px;
    outline: none;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: $primary;
    }

    &[disabled] {
      cursor: not-allowed;
      border-color: #dcdfe6;
    }
  }
}

.receiver {
  position: absolute;
  background: white;
  outline: none;
  box-shadow: 0 0 20px fadeout(black, 50%);
  left: 0;
  top: 0;
  padding: 3px 5px;
  margin-left: -3px;
  margin-top: -5px;
  max-width: 600px;
  width: auto;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.4em;
  min-height: 1.4em;
  box-sizing: border-box;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
  border: none;
  -webkit-user-select: text;
  pointer-events: none;
  opacity: 0;
  z-index: 1000;

  &.debug {
    opacity: 1;
    outline: 1px solid green;
    background: none;
    z-index: 0;
  }

  &.input {
    pointer-events: all;
    opacity: 1;
    z-index: 999;
    background: white;
    outline: none;
  }
}
</style>

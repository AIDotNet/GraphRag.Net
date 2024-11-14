(function () {
    try {
        var elementStyle = document.createElement('style');
        elementStyle.appendChild(document.createTextNode("@charset \"UTF-8\";.c-mini-graph[data-v-46ea246f]{height:100px;width:100px;position:absolute;margin-left:60px;margin-top:100px;z-index:999}.c-fixedLayout[data-v-46ea246f]{position:fixed;top:100px}.c-mini-canvas[data-v-46ea246f]{background-color:#aacbff;border:#7BA8FF solid 1px;opacity:.8;position:relative}.c-mini-view[data-v-46ea246f]{background-color:#f5a565;border:#C03639 solid 1px;opacity:.5;color:#fff;font-size:14px;text-align:center;display:flex;align-items:center;justify-content:center;position:absolute}.c-mini-node[data-v-46ea246f]{position:absolute;width:2px;height:2px;background-color:#000;border-radius:1px}.rg-icon[data-v-412be0f2]{width:16px;height:16px;vertical-align:-3px;fill:currentColor;overflow:hidden}.c-mini-toolbar[data-v-412be0f2]{width:44px;position:absolute;margin-top:170px;margin-right:10px;z-index:999;border:#bbbbbb solid 1px;background-color:#fff;box-shadow:0 0 8px #ccc;box-sizing:border-box}.c-fixedLayout[data-v-412be0f2]{position:fixed;top:100px}.c-mb-button[data-v-412be0f2]{height:44px;width:42px;margin-top:0;background-color:#fff;border-top:#efefef solid 1px;opacity:1;text-align:center;padding-top:3px;cursor:pointer;color:#999;font-size:18px;float:left;box-sizing:border-box;line-height:21px}.c-mb-button .c-mb-text[data-v-412be0f2]{display:inline-block;height:14px;width:42px;font-size:12px;line-height:12px;margin-top:24px;margin-left:-28px;position:absolute;color:#262626}.c-mb-button-on[data-v-412be0f2]{background-color:#2e74b5;border-top:#2E4E8F solid 1px;color:#fff}.c-mb-button[data-v-412be0f2]:hover{background-color:#2e4e8f;border-top:#2E4E8F solid 1px;color:#fff}.c-mb-button:hover .c-mb-text[data-v-412be0f2],.c-mb-button-on .c-mb-text[data-v-412be0f2]{color:#fff}.c-mb-button .c-mb-child-panel[data-v-412be0f2]{height:46px;position:absolute;margin-top:-26px;background-color:#fff;display:none;border:#bbbbbb solid 1px;box-shadow:0 0 8px #ccc;box-sizing:border-box}.c-mb-button:hover .c-mb-child-panel[data-v-412be0f2]{display:block}.c-mb-button .c-mb-button[data-v-412be0f2]{height:44px;width:42px;margin:0;border:none}.c-mb-button-c .c-mb-text[data-v-412be0f2]{color:#262626!important}.c-mb-button-c:hover .c-mb-text[data-v-412be0f2],.c-mb-button-on .c-mb-text[data-v-412be0f2]{color:#fff!important}.c-loading-icon[data-v-412be0f2]{animation:turn-data-v-412be0f2 1s linear infinite}@keyframes turn-data-v-412be0f2{0%{-webkit-transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg)}to{-webkit-transform:rotate(360deg)}}.relation-graph{box-sizing:border-box;position:relative}.relation-graph .rel-map svg.rg-icon{height:100%;width:100%}.relation-graph .rel-background{position:absolute;left:0;top:0;width:100%;height:100%;z-index:0}.relation-graph .rel-watermark{position:absolute;z-index:1200;overflow:visible;min-height:100px;min-width:100px;height:var(--mv-height);width:var(--mv-width);box-sizing:border-box}.relation-graph .rel-watermark div{box-sizing:border-box}.relation-graph .rel-watermark.rel-watermark-top{left:calc((100% - var(--mv-width)) / 2);top:10px}.relation-graph .rel-watermark.rel-watermark-bottom{left:calc((100% - var(--mv-width)) / 2);bottom:10px}.relation-graph .rel-watermark.rel-watermark-left{left:10px;top:calc((100% - var(--mv-height)) / 2)}.relation-graph .rel-watermark.rel-watermark-right{right:10px;top:calc((100% - var(--mv-height)) / 2)}.relation-graph .rel-watermark.rel-watermark-tl{left:10px;top:10px}.relation-graph .rel-watermark.rel-watermark-tr{right:10px;top:10px}.relation-graph .rel-watermark.rel-watermark-bl{left:10px;bottom:10px}.relation-graph .rel-watermark.rel-watermark-br{right:10px;bottom:10px}.relation-graph .rel-lines-svg{overflow:visible;width:10px;height:10px;position:absolute;left:0;top:0}.relation-graph .rel-linediv{overflow:visible;position:absolute;z-index:40;width:100%;top:0;left:0;--stroke: url(#lineStyle);--markerEnd: url(#arrow-default);--markerStart: url(#start-arrow-default);--markerEndChecked: url(#arrow-checked);--markerStartChecked: url(#start-arrow-checked);pointer-events:none}.relation-graph .rel-linediv svg{overflow:visible}.relation-graph .rel-linediv-el-lines{z-index:80;pointer-events:none}.relation-graph .rel-lines-svg-el-lines{overflow:visible;width:10px;height:10px;position:absolute;left:0;top:0}.relation-graph .rel-link-peel{pointer-events:auto}.relation-graph .rel-map{background-color:#fff;overflow:hidden;cursor:default;user-select:none;opacity:.01;transition:none}.relation-graph .rel-map-ready{opacity:1;transition:opacity .5s ease}.relation-graph .rel-map-background-norepeat{background-repeat:no-repeat;background-position:right bottom}.relation-graph .rel-nodediv-for-webkit{position:absolute;width:100%;top:0;left:0;z-index:50}.relation-graph .rel-map-canvas{position:relative;top:0;left:0;border:0px;z-index:3;overflow:visible}.relation-graph .rel-canvas-slot{overflow:visible;position:absolute;margin-top:0;margin-left:0}.relation-graph .rel-canvas-slot-behind{z-index:30;overflow:visible}.relation-graph .rel-canvas-slot-above{z-index:70;overflow:visible}.relation-graph .rel-map ::v-deep img{-webkit-user-drag:none;-webkit-user-select:none}.relation-graph .c-rg-line-text{fill:#888;font-size:12px;paint-order:stroke}.relation-graph .c-rg-line-text-checked{stroke:#fd8b374d;stroke-width:2}.relation-graph .c-rg-line{fill-rule:nonzero;stroke-linecap:round}.relation-graph .c-rg-line-bg{stroke:#fff;opacity:.01;fill:none;fill-rule:nonzero;stroke-linecap:round}.relation-graph .rg-line-dashtype-1{stroke-dasharray:2,2,2;stroke-dashoffset:3px;stroke-linecap:butt;stroke-linejoin:bevel}.relation-graph .rg-line-dashtype-2{stroke-dasharray:5,5,5;stroke-dashoffset:3px;stroke-linecap:butt;stroke-linejoin:bevel}.relation-graph .rg-line-dashtype-3{stroke-dasharray:9,9,9;stroke-dashoffset:3px;stroke-linecap:butt;stroke-linejoin:bevel}.relation-graph .rg-line-dashtype-4{stroke-dasharray:5,5,15;stroke-dashoffset:3px;stroke-linecap:butt;stroke-linejoin:bevel}@keyframes ACTRGLineChecked{0%{stroke-dashoffset:352px;stroke-dasharray:5,5,5}50%{stroke-dasharray:5,5,5;stroke-dashoffset:3px}to{stroke-dashoffset:352px;stroke-dasharray:5,5,5}}@keyframes rg-line-anm2{0%{stroke-dashoffset:0;stroke-dasharray:4,4,4}to{stroke-dashoffset:10px;stroke-dasharray:20,20,20}}@keyframes rg-line-anm3{0%{stroke-opacity:1}50%{stroke-opacity:.2}to{stroke-opacity:1}}@keyframes rg-line-anm4{0%{stroke-dasharray:0,100%}to{stroke-dasharray:100%,0}}.relation-graph .rg-line-anm-1{animation:ACTRGLineChecked 10s infinite}.relation-graph .rg-line-anm-2{animation:rg-line-anm2 3s infinite}.relation-graph .rg-line-anm-3{animation:rg-line-anm3 1s infinite}.relation-graph .rg-line-anm-4{animation:rg-line-anm4 3s infinite}.relation-graph .c-rg-line-checked{z-index:100}.relation-graph .c-rg-line-checked-bg{stroke:#fd8b374d;stroke-linecap:round}@keyframes deform1{0%{stroke-dashoffset:0}to{stroke-dashoffset:100%}}.relation-graph .rg-icon{width:19px;height:19px;vertical-align:0px;fill:currentColor;overflow:hidden}.relation-graph .el-icon-remove,.relation-graph .el-icon-circle-plus{cursor:pointer}.relation-graph .relation-graph-node{position:absolute}.relation-graph .rel-node-peel{padding:8px;position:absolute;font-size:14px;box-sizing:border-box}.relation-graph .rel-node-peel-checked{z-index:100}.relation-graph .rel-node{text-align:center;border-style:solid;border-width:0px;box-sizing:border-box}.relation-graph .rg-center-items{display:flex;place-items:center}.relation-graph .rel-node-shape-0{width:80px;height:80px;border-radius:50%}.relation-graph .rel-node-shape-1{border-radius:5px}.relation-graph img,.relation-graph svg,.relation-graph video,.relation-graph canvas,.relation-graph audio,.relation-graph iframe,.relation-graph embed,.relation-graph object{display:unset;vertical-align:unset}.relation-graph .c-node-text{height:100%;width:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:0}.relation-graph .rel-node-shape-1 .c-node-text{padding-left:5px;padding-right:5px}.relation-graph .rel-node-type-button{border-radius:25px;color:#00f;cursor:pointer}.relation-graph .rel-node-checked{transition:background-color .2s ease,outline .2s ease,color .2s ease,-webkit-box-shadow .2s ease;box-shadow:0 0 0 8px #fd8b374d}.relation-graph .rel-node-dragging{z-index:400}.relation-graph .rel-node-selected{box-shadow:0 0 0 2px #d603f6cc;border-radius:5px;z-index:400}.relation-graph .rel-editing-referline{position:absolute;z-index:999;pointer-events:none;width:100%;height:100%;left:0;top:0}.relation-graph .rel-editing-referline .rel-editing-referline-v{width:16px;height:100%;position:absolute;top:0;display:flex;place-items:center;justify-content:center;transform:translate(-8px);border-top:rgb(214,3,246) solid 2px;border-bottom:rgb(214,3,246) solid 2px}.relation-graph .rel-editing-referline .rel-editing-referline-v .referline{width:1px;height:100%;border-left:rgb(214,3,246) dashed 2px;display:flex;place-items:center;justify-content:center;font-size:12px}.relation-graph .rel-editing-referline .rel-editing-referline-v .referline>div{width:70px;height:20px;line-height:20px;background-color:#d603f6;text-align:center;border-radius:5px;padding-left:5px;padding-right:5px;color:#fff}.relation-graph .rel-editing-referline .rel-editing-referline-h{height:16px;width:100%;position:absolute;left:0;display:flex;place-items:center;justify-content:center;transform:translateY(-8px);border-left:rgb(214,3,246) solid 2px;border-right:rgb(214,3,246) solid 2px}.relation-graph .rel-editing-referline .rel-editing-referline-h .referline{height:1px;width:100%;border-top:rgb(214,3,246) dashed 2px;display:flex;place-items:center;justify-content:center;font-size:12px}.relation-graph .rel-editing-referline .rel-editing-referline-h .referline>div{height:20px;line-height:20px;width:70px;background-color:#d603f6;text-align:center;border-radius:5px;color:#fff}.relation-graph .rel-editing-line-ctrl{position:absolute;z-index:500;pointer-events:none;width:100%;height:100%;left:0;top:0}.relation-graph .rel-editing-line-ctrl .rel-line-ctrl-dot{pointer-events:auto;width:10px;height:10px;background-color:#d603f6;box-shadow:0 0 0 1px #700281;position:absolute;border-radius:50%;cursor:move;z-index:1}.relation-graph .rel-editing-line-ctrl .rel-line-ctrl-text{pointer-events:auto;background-color:#d603f6;box-shadow:0 0 0 1px #700281;position:absolute;border-radius:3px;cursor:move;z-index:1;font-size:12px;line-height:12px;white-space:nowrap;color:#fff;display:flex;place-items:center;justify-content:center;box-sizing:border-box}.relation-graph .rel-editing-line-ctrl .rel-line-ctrl-text .rel-line-text-input{white-space:nowrap;pointer-events:auto;background-color:transparent;color:#d603f6;border-radius:3px;width:100%;padding-left:5px;padding-right:5px;height:100%;font-size:12px;line-height:100%;text-align:left;border-width:0px;box-sizing:border-box}.relation-graph .rel-editing-line-ctrl .rel-line-ctrl-text-editing{background-color:#faf191}.relation-graph .rel-editing-ctrl,.relation-graph .rel-editing-connect-ctrl{position:absolute;z-index:500;box-shadow:0 0 0 2px #d603f6cc;border-radius:0;pointer-events:none}.relation-graph .rel-editing-bar{user-select:none;pointer-events:none;position:absolute;border-radius:5px;padding:3px;box-sizing:border-box;display:flex;place-items:center;justify-content:center;flex-wrap:wrap;gap:5px}.relation-graph .rel-editing-bar .rel-gee-icon{background-color:#d603f680;pointer-events:auto;min-width:20px;min-height:20px;border-radius:5px;box-sizing:border-box;display:flex;place-items:center;justify-content:center;cursor:pointer}.relation-graph .rel-editing-bar .rel-gee-icon:hover{background-color:#d603f6;color:#fff}.relation-graph .rel-editing-line-handle{pointer-events:auto}.relation-graph .rel-editing-bar-top{width:110px;height:30px;left:calc((100% - 110px)/2);top:-40px}.relation-graph .rel-editing-bar-bottom{width:110px;height:30px;left:calc((100% - 110px)/2);bottom:-40px}.relation-graph .rel-editing-bar-left{width:30px;height:110px;left:-40px;top:calc((100% - 110px)/2)}.relation-graph .rel-editing-bar-right{width:30px;height:110px;right:-40px;top:calc((100% - 110px)/2)}.relation-graph .rel-editing-bar-tl{width:30px;height:30px;right:calc(100% + 10px);top:-40px}.relation-graph .rel-editing-bar-tr{width:30px;height:30px;left:calc(100% + 10px);top:-40px}.relation-graph .rel-editing-bar-bl{width:30px;height:30px;right:calc(100% + 10px);bottom:-40px}.relation-graph .rel-editing-bar-br{width:30px;height:30px;left:calc(100% + 10px);bottom:-40px}.relation-graph .rel-resize-ctl{position:relative;height:100%;width:100%}.relation-graph .rel-resize-ctl .rel-resize-ctl-handler{pointer-events:auto;width:10px;height:10px;background-color:#d603f6;border:#460172 solid 1px;position:absolute;border-radius:50%}.relation-graph .rel-resize-ctl .rel-resize-ctl-tl{cursor:nwse-resize;left:-7px;top:-7px}.relation-graph .rel-resize-ctl .rel-resize-ctl-tr{cursor:nesw-resize;right:-7px;top:-7px}.relation-graph .rel-resize-ctl .rel-resize-ctl-bl{cursor:nesw-resize;left:-7px;bottom:-7px}.relation-graph .rel-resize-ctl .rel-resize-ctl-br{cursor:nwse-resize;right:-7px;bottom:-7px}.relation-graph .rel-resize-ctl .rel-resize-ctl-t{cursor:n-resize;top:-7px;left:calc((100% - 12px)/2)}.relation-graph .rel-resize-ctl .rel-resize-ctl-b{cursor:s-resize;bottom:-7px;left:calc((100% - 12px)/2)}.relation-graph .rel-resize-ctl .rel-resize-ctl-l{cursor:w-resize;left:-7px;top:calc((100% - 12px)/2)}.relation-graph .rel-resize-ctl .rel-resize-ctl-r{cursor:e-resize;right:-7px;top:calc((100% - 12px)/2)}.relation-graph .rel-editing-connect-ctrl{position:absolute;z-index:1400;box-shadow:0 0 0 2px #ef6705cc;border-radius:0;pointer-events:none}.relation-graph .rel-connect-ctl-handler{pointer-events:auto;background-color:#ef6705;border:#723001 solid 1px;position:absolute;border-radius:3px;z-index:20}.relation-graph .rel-connect-ctl-handler:hover{background-color:#fff}.relation-graph .rel-connect-ctl-center{width:20px;height:20px;border-radius:50%;cursor:cell;top:calc((100% - 22px)/2);left:calc((100% - 22px)/2)}.relation-graph .rel-connect-ctl-t{width:20px;height:10px;cursor:cell;top:-7px;left:calc((100% - 22px)/2)}.relation-graph .rel-connect-ctl-b{width:20px;height:10px;cursor:cell;bottom:-7px;left:calc((100% - 22px)/2)}.relation-graph .rel-connect-ctl-l{width:10px;height:20px;cursor:cell;left:-7px;top:calc((100% - 22px)/2)}.relation-graph .rel-connect-ctl-r{width:10px;height:20px;cursor:cell;right:-7px;top:calc((100% - 22px)/2)}.relation-graph .rel-connect-ctl-lr{width:100%;height:20px;cursor:cell;right:0;top:calc((100% - 22px)/2);z-index:11;opacity:.7}.relation-graph .rel-connect-ctl-tb{width:20px;height:100%;cursor:cell;top:0;left:calc((100% - 22px)/2);z-index:10;opacity:.7}.relation-graph .rel-miniview{position:absolute;overflow:hidden;z-index:1100;min-height:100px;min-width:100px;height:var(--mv-height);width:var(--mv-width);border:#cccccc solid 1px;border-radius:5px;box-shadow:1px 1px 4px 1px #cccccc8c;display:flex;place-items:center;justify-content:center;background-color:#fff}.relation-graph .rel-miniview canvas{background-color:#fff;border:#cccccc solid 1px;opacity:.7}.relation-graph .rel-miniview .rel-mv-canvas-reset{cursor:pointer}.relation-graph .rel-miniview .rel-mv-canvas-reset:hover{background-color:#bbf54794}.relation-graph .rel-miniview .rel-mv-visible-area{z-index:2;position:absolute;border:rgb(214,3,246) solid 1px;cursor:move;background-color:#d603f64d}.relation-graph .rel-miniview.rel-miniview-top{left:calc((100% - var(--mv-width)) / 2);top:10px}.relation-graph .rel-miniview.rel-miniview-bottom{left:calc((100% - var(--mv-width)) / 2);bottom:10px}.relation-graph .rel-miniview.rel-miniview-left{left:10px;top:calc((100% - var(--mv-height)) / 2)}.relation-graph .rel-miniview.rel-miniview-right{right:10px;top:calc((100% - var(--mv-height)) / 2)}.relation-graph .rel-miniview.rel-miniview-tl{left:10px;top:10px}.relation-graph .rel-miniview.rel-miniview-tr{right:10px;top:10px}.relation-graph .rel-miniview.rel-miniview-bl{left:10px;bottom:10px}.relation-graph .rel-miniview.rel-miniview-br{right:10px;bottom:10px}.relation-graph .rel-node-flashing{animation:ACTRGNodeFlashing 2s infinite}.relation-graph .rel-node-vtree-2{transform-origin:0 0;transform:rotate(30deg) translate(0)}.relation-graph .rel-node-vtree{width:130px;height:45px;text-align:left}.relation-graph .c-btn-open-close{position:absolute;height:100%;width:19px;display:flex;align-items:center;justify-content:center;user-select:none;pointer-events:none;cursor:pointer}.relation-graph .c-btn-open-close span{width:19px;height:19px;display:inline-block;text-align:center;border-radius:15px;color:#fff;cursor:pointer;font-size:19px;line-height:16px;background-size:100% 100%;pointer-events:all}.relation-graph .c-expanded{background-image:url(data:image/svg+xml;%20charset=utf8,%3Csvg%20t=%221606310217820%22%20viewBox=%220%200%201024%201024%22%20version=%221.1%22%20xmlns=%22http://www.w3.org/2000/svg%22%20p-id=%223373%22%20width=%2232%22%20height=%2232%22%3E%3Cpath%20d=%22M853.333333%20480H544V170.666667c0-17.066667-14.933333-32-32-32s-32%2014.933333-32%2032v309.333333H170.666667c-17.066667%200-32%2014.933333-32%2032s14.933333%2032%2032%2032h309.333333V853.333333c0%2017.066667%2014.933333%2032%2032%2032s32-14.933333%2032-32V544H853.333333c17.066667%200%2032-14.933333%2032-32s-14.933333-32-32-32z%22%20p-id=%223374%22%20fill=%22white%22%3E%3C/path%3E%3C/svg%3E)}.relation-graph .c-collapsed{background-image:url(data:image/svg+xml;%20charset=utf8,%3Csvg%20t=%221606310454619%22%20class=%22icon%22%20viewBox=%220%200%201024%201024%22%20version=%221.1%22%20xmlns=%22http://www.w3.org/2000/svg%22%20p-id=%223662%22%20width=%22128%22%20height=%22128%22%3E%3Cpath%20d=%22M853.333333%20554.666667H170.666667c-23.466667%200-42.666667-19.2-42.666667-42.666667s19.2-42.666667%2042.666667-42.666667h682.666666c23.466667%200%2042.666667%2019.2%2042.666667%2042.666667s-19.2%2042.666667-42.666667%2042.666667z%22%20p-id=%223663%22%20fill=%22white%22%3E%3C/path%3E%3C/svg%3E)}.relation-graph .c-expand-positon-left{margin-top:-8px;margin-left:-25px}.relation-graph .c-expand-positon-right{height:100%;width:100%;justify-content:center}.relation-graph .c-expand-positon-right span{margin-top:-18px;margin-right:-18px;margin-left:100%}.relation-graph .c-expand-positon-bottom{height:100%;width:100%;margin-top:7px;margin-left:-8px;align-items:flex-end;justify-content:center}.relation-graph .c-expand-positon-top{height:18px;width:100%;margin-top:-20px;margin-left:-6px;align-items:flex-end;justify-content:center}@keyframes ACTRGNodeInit{0%{box-shadow:0 0 15px #fd8b37}50%{box-shadow:0 0 1px #2e4e8f}to{box-shadow:0 0 15px #fd8b37}to{box-shadow:0 0 15px #fd8b37}}@keyframes ACTRGNodeFlashing{0%{box-shadow:0 0 15px #fd8b37}40%{box-shadow:0 0 1px #2e4e8f}70%{box-shadow:0 0 8px #fd8b37}to{box-shadow:0 0 #fd8b37}}.relation-graph .rel-diy-node{padding:0}.relation-graph .c-setting-panel{--height: 300px;--width: 200px;width:300px;height:200px;position:absolute;margin-left:10px;margin-top:5px;font-size:12px;color:#3a5bb2;padding:60px 10px 10px;overflow:hidden;box-shadow:0 0 5px #999;border-radius:5px;z-index:1000;background-color:#fff;border:#999999 solid 1px}.relation-graph .c-setting-panel-button{height:35px;width:35px;font-size:8px;line-height:35px;text-align:center;border-radius:50%;position:absolute;margin-left:25px;margin-top:20px;background-color:#3a5bb2;color:#fff;cursor:pointer;z-index:1001;box-shadow:0 0 8px #999}.relation-graph .c-setting-panel-button:hover{box-shadow:0 0 20px #ffa20a;border:#ffffff solid 1px;color:#ffa20a;-moz-transform:rotate(-89deg) translateX(-190px);animation-timing-function:linear;animation:flashButton 2s infinite}.relation-graph .c-fixedLayout{position:fixed;top:125px}@keyframes flashButton{0%{box-shadow:0 0 8px #2e4e8f}30%{box-shadow:0 0 20px #ffa20a}to{box-shadow:0 0 8px #2e4e8f}}.relation-graph .c-debug-tools-row{text-align:left}.relation-graph .rel-operate{position:absolute;top:0;left:0;width:100%;height:100%;z-index:180}.relation-graph .rel-operate .rel-node{cursor:move}.relation-graph .rel-selection{position:absolute;background-color:#d603f633;border:rgb(214,3,246) solid 1px}.relation-graph .rel-graph-loading{position:absolute;z-index:1600;left:0;top:0;height:100%;width:100%;background-color:#fff}.relation-graph .rel-graph-loading .c-graph-loading-icon{width:16px;height:16px;vertical-align:-3px;fill:currentColor;overflow:hidden;animation:turn 1s linear infinite}.relation-graph .rel-graph-loading .rel-graph-loading-message{position:absolute;width:200px;height:30px;line-height:30px;text-align:center;left:calc((100% - 200px)/2);top:calc((100% - 30px)/2);border-radius:5px;background-color:#00000080;color:#fff;display:flex;place-items:center;justify-content:center;gap:8px}.relation-graph .rel-graph-loading-hide{display:none}@keyframes slowHide{0%{opacity:1}to{opacity:0;display:none}}.relation-graph .rel-easy-view{overflow:visible;height:100%;width:100%;background-color:transparent;position:absolute;left:0;top:0}.relation-graph .rel-easy-view canvas{opacity:0;width:100%;height:100%}.relation-graph .rel-easy-view-active canvas{opacity:1}.relation-graph .rel-toolbar{position:absolute;z-index:300;background-color:#dcdcdc33;color:#999;box-shadow:0 0 2px #ccc;box-sizing:border-box;border-radius:5px;padding:3px}.relation-graph .rel-toolbar .rg-icon{flex-grow:1;width:16px;height:16px;fill:currentColor;overflow:hidden}.relation-graph .rel-toolbar .c-mb-button svg{margin:auto}.relation-graph .rel-toolbar .c-mb-button-on{color:#2e74b5}.relation-graph .rel-toolbar .c-mb-button:hover{background-color:#dcdcdc80}.relation-graph .rel-toolbar .c-loading-icon{animation:turn 1s linear infinite}@keyframes turn{0%{-webkit-transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg)}to{-webkit-transform:rotate(360deg)}}.relation-graph .rel-toolbar .c-current-zoom{margin-top:0;height:20px;color:#262626;font-size:10px;text-align:center;line-height:20px;border-radius:3px;cursor:pointer}.relation-graph .rel-toolbar .c-current-zoom:hover{background-color:#dcdcdc80}.relation-graph .rel-toolbar .c-mb-button{height:40px;margin-top:0;opacity:1;text-align:center;cursor:pointer;font-size:18px;box-sizing:border-box;display:flex;align-items:center;justify-items:center;border-radius:3px}.relation-graph .rel-toolbar-v{width:45px}.relation-graph .rel-toolbar-h{height:45px}.relation-graph .rel-toolbar-h .c-mb-button{width:40px;height:100%;float:left}.relation-graph .rel-toolbar-h .c-current-zoom{width:40px;height:100%;float:left;line-height:40px}.relation-graph .rel-toolbar-h-right{right:15px}.relation-graph .rel-toolbar-h-left{left:15px}.relation-graph .rel-toolbar-h-center{left:calc((100% - 260px)/2)}.relation-graph .rel-toolbar-v-top{top:15px}.relation-graph .rel-toolbar-v-bottom{bottom:15px}.relation-graph .rel-toolbar-v-center{top:calc((100% - 260px)/2)}.relation-graph .rel-xs-toolbar{background-color:#fff;color:#333}.relation-graph .rel-xs-toolbar .c-current-zoom{margin-top:0;height:20px;color:#262626;font-size:10px;border-radius:3px;cursor:pointer}.relation-graph .rel-xs-toolbar .c-current-zoom:hover{background-color:#dcdcdc80}.relation-graph .rel-xs-toolbar .c-mb-button{height:25px}.relation-graph .rel-xs-toolbar.rel-toolbar-v{width:31px}.relation-graph .rel-xs-toolbar.rel-toolbar-h{height:31px}.relation-graph .rel-xs-toolbar.rel-toolbar-h .c-mb-button{width:25px;height:100%;float:left}.relation-graph .rel-xs-toolbar.rel-toolbar-h .c-current-zoom{width:45px;height:100%;float:left;line-height:25px}.relation-graph .rel-xs-toolbar.rel-toolbar-h-right{right:10px}.relation-graph .rel-xs-toolbar.rel-toolbar-h-left{left:10px}.relation-graph .rel-xs-toolbar.rel-toolbar-h-center{left:calc((100% - 160px)/2)}.relation-graph .rel-xs-toolbar.rel-toolbar-v-top{top:10px}.relation-graph .rel-xs-toolbar.rel-toolbar-v-bottom{bottom:10px}.relation-graph .rel-xs-toolbar.rel-toolbar-v-center{top:calc((100% - 160px)/2)}"));
        document.head.appendChild(elementStyle);
    } catch (e) {
        console.error('vite-plugin-css-injected-by-js', e);
    }
})();
(function (P, I) {
    typeof exports == "object" && typeof module != "undefined" ? I(exports, require("vue"), require("screenfull"), require("html2canvas")) : typeof define == "function" && define.amd ? define(["exports", "vue", "screenfull", "html2canvas"], I) : (P = typeof globalThis != "undefined" ? globalThis : P || self, I(P.RelationGraph = {}, P.Vue, P.screenfull, P.html2canvas))
})(this, function (P, I, j, gt) {
    "use strict";
    var Fs = Object.defineProperty, Us = Object.defineProperties;
    var js = Object.getOwnPropertyDescriptors;
    var Oe = Object.getOwnPropertySymbols;
    var Xs = Object.prototype.hasOwnProperty, Ys = Object.prototype.propertyIsEnumerable;
    var Rt = (P, I, j) => I in P ? Fs(P, I, {enumerable: !0, configurable: !0, writable: !0, value: j}) : P[I] = j,
        Re = (P, I) => {
            for (var j in I || (I = {})) Xs.call(I, j) && Rt(P, j, I[j]);
            if (Oe) for (var j of Oe(I)) Ys.call(I, j) && Rt(P, j, I[j]);
            return P
        }, De = (P, I) => Us(P, js(I));
    var v = (P, I, j) => (Rt(P, typeof I != "symbol" ? I + "" : I, j), j);
    var C = (P, I, j) => new Promise((gt, lt) => {
        var _t = Y => {
            try {
                ut(j.next(Y))
            } catch (pt) {
                lt(pt)
            }
        }, ot = Y => {
            try {
                ut(j.throw(Y))
            } catch (pt) {
                lt(pt)
            }
        }, ut = Y => Y.done ? gt(Y.value) : Promise.resolve(Y.value).then(_t, ot);
        ut((j = j.apply(P, I)).next())
    });
    const lt = e => e && typeof e == "object" && "default" in e ? e : {default: e};

    function _t(e) {
        if (e && e.__esModule) return e;
        const s = Object.create(null, {[Symbol.toStringTag]: {value: "Module"}});
        if (e) {
            for (const t in e) if (t !== "default") {
                const o = Object.getOwnPropertyDescriptor(e, t);
                Object.defineProperty(s, t, o.get ? o : {enumerable: !0, get: () => e[t]})
            }
        }
        return s.default = e, Object.freeze(s)
    }

    const ot = lt(I), ut = _t(j), Y = lt(j), pt = _t(gt), Dt = lt(gt), Vt = "2.2.2";
    (function (e) {
        var s, t, o, n, i, a,
            l = '<svg><symbol id="icon-iconset0444" viewBox="0 0 1024 1024"><path d="M960 682.666667l-106.666667 0C844.8 569.6 763.733333 42.666667 64 42.666667 51.2 42.666667 42.666667 51.2 42.666667 64c0 12.8 8.533333 21.333333 21.333333 21.333333 219.733333 0 377.6 106.666667 465.066667 315.733333 51.2 123.733333 64 236.8 66.133333 281.6L490.666667 682.666667c-12.8 0-21.333333 8.533333-21.333333 21.333333 0 6.4 2.133333 10.666667 6.4 14.933333l234.666667 256c4.266667 4.266667 8.533333 6.4 14.933333 6.4 6.4 0 10.666667-2.133333 14.933333-6.4l234.666667-256c4.266667-4.266667 6.4-8.533333 6.4-14.933333C981.333333 691.2 972.8 682.666667 960 682.666667zM725.333333 928 539.733333 725.333333 618.666667 725.333333c12.8 0 21.333333-8.533333 21.333333-21.333333l0-21.333333c-4.266667-87.466667-38.4-396.8-273.066667-554.666667C755.2 251.733333 804.266667 588.8 810.666667 682.666667l0 21.333333c0 12.8 8.533333 21.333333 21.333333 21.333333l78.933333 0L725.333333 928z"  ></path></symbol><symbol id="icon-iconset0445" viewBox="0 0 1024 1024"><path d="M974.933333 305.066667l-234.666667-256C736 44.8 731.733333 42.666667 725.333333 42.666667c-6.4 0-10.666667 2.133333-14.933333 6.4l-234.666667 256C471.466667 309.333333 469.333333 313.6 469.333333 320c0 12.8 8.533333 21.333333 21.333333 21.333333l104.533333 0c-2.133333 44.8-14.933333 157.866667-66.133333 281.6C441.6 832 283.733333 938.666667 64 938.666667c-12.8 0-21.333333 8.533333-21.333333 21.333333 0 12.8 8.533333 21.333333 21.333333 21.333333 699.733333 0 780.8-526.933333 789.333333-640l106.666667 0c12.8 0 21.333333-8.533333 21.333333-21.333333C981.333333 313.6 979.2 309.333333 974.933333 305.066667zM832 298.666667c-12.8 0-21.333333 8.533333-21.333333 21.333333l0 21.333333c-6.4 93.866667-55.466667 430.933333-443.733333 554.666667 234.666667-157.866667 268.8-467.2 273.066667-554.666667l0-21.333333c0-12.8-8.533333-21.333333-21.333333-21.333333l-78.933333 0L725.333333 96l185.6 202.666667L832 298.666667z"  ></path></symbol><symbol id="icon-yuanquanfenxiang" viewBox="0 0 1024 1024"><path d="M751.148705 578.773799c-61.987796 0-117.066229 30.121018-151.388942 76.488045L398.287145 536.382317c1.991354-10.171664 3.046383-20.673855 3.046383-31.419594 0-18.776645-3.196809-36.817534-9.058306-53.621245l193.486736-107.492176c31.949666 58.566884 94.104261 98.391914 165.386748 98.391914 103.803157 0 188.254571-84.450391 188.254571-188.254571S854.951863 65.73105 751.148705 65.73105c-103.804181 0-188.255595 84.450391-188.255595 188.254571 0 14.246469 1.600451 28.125571 4.613064 41.4746L368.032074 406.279167c-29.841655-39.193651-76.976162-64.544015-129.927141-64.544015-90.004897 0-163.228595 73.223698-163.228595 163.228595 0 90.003873 73.223698 163.228595 163.228595 163.228595 60.882626 0 114.078175-33.510208 142.134161-83.049484L575.173808 700.16452c-7.925507 20.788465-12.280698 43.325761-12.280698 66.86385 0 103.803157 84.450391 188.254571 188.255595 188.254571 103.803157 0 188.254571-84.450391 188.254571-188.254571S854.951863 578.773799 751.148705 578.773799zM751.148705 116.89636c75.590606 0 137.089261 61.498656 137.089261 137.089261s-61.498656 137.089261-137.089261 137.089261c-75.591629 0-137.090285-61.498656-137.090285-137.089261S675.557076 116.89636 751.148705 116.89636zM238.105956 617.026008c-61.791321 0-112.063285-50.27094-112.063285-112.063285 0-61.791321 50.27094-112.063285 112.063285-112.063285s112.063285 50.27094 112.063285 112.063285C350.168218 566.755068 299.897278 617.026008 238.105956 617.026008zM751.148705 904.117632c-75.591629 0-137.090285-61.498656-137.090285-137.089261s61.498656-137.089261 137.090285-137.089261c75.590606 0 137.089261 61.498656 137.089261 137.089261S826.739311 904.117632 751.148705 904.117632z"  ></path></symbol><symbol id="icon-hj2" viewBox="0 0 1024 1024"><path d="M963.66 256.607c0-0.244 0-0.607-0.126-0.851 0-0.369 0-0.614-0.119-0.978 0-0.369-0.119-0.733-0.119-1.104 0-0.244 0-0.487-0.126-0.725 0-0.369-0.119-0.859-0.244-1.222 0-0.244-0.119-0.369-0.119-0.613-0.126-0.365-0.126-0.852-0.245-1.216 0-0.244-0.126-0.369-0.126-0.613-0.119-0.365-0.244-0.734-0.364-1.222-0.126-0.244-0.126-0.49-0.244-0.609l-0.369-1.095c-0.119-0.245-0.119-0.49-0.244-0.734-0.121-0.369-0.245-0.613-0.365-0.978-0.126-0.244-0.244-0.613-0.369-0.851-0.119-0.244-0.238-0.613-0.364-0.859-0.119-0.364-0.244-0.607-0.364-0.977l-0.371-0.734c-0.119-0.364-0.364-0.725-0.487-0.971-0.119-0.245-0.244-0.371-0.364-0.614-0.244-0.364-0.369-0.733-0.614-1.097-0.119-0.126-0.244-0.369-0.364-0.487l-0.733-1.097c-0.119-0.126-0.244-0.369-0.365-0.487-0.244-0.369-0.487-0.733-0.733-0.978-0.126-0.244-0.244-0.369-0.487-0.613-0.245-0.238-0.49-0.607-0.734-0.851-0.244-0.245-0.487-0.49-0.607-0.734-0.244-0.244-0.369-0.487-0.614-0.733-0.851-0.972-1.829-1.83-2.681-2.682-0.245-0.244-0.49-0.369-0.734-0.614-0.244-0.244-0.487-0.487-0.733-0.607-0.245-0.244-0.614-0.487-0.859-0.733-0.238-0.121-0.364-0.365-0.607-0.49-0.365-0.244-0.734-0.487-0.978-0.733-0.119-0.119-0.364-0.244-0.487-0.365l-1.097-0.733c-0.119-0.119-0.364-0.244-0.487-0.364-0.365-0.244-0.734-0.369-1.097-0.614-0.244-0.119-0.369-0.244-0.613-0.364-0.365-0.126-0.734-0.369-0.972-0.487l-0.734-0.369c-0.369-0.121-0.613-0.245-0.977-0.365-0.244-0.126-0.614-0.244-0.859-0.369-0.244-0.119-0.607-0.238-0.851-0.364-0.365-0.119-0.609-0.244-0.978-0.364-0.244-0.126-0.487-0.126-0.733-0.245l-1.097-0.369c-0.244-0.119-0.487-0.119-0.609-0.244-0.369-0.119-0.733-0.244-1.22-0.364-0.245 0-0.371-0.126-0.614-0.126-0.364-0.119-0.851-0.244-1.216-0.244-0.244 0-0.487-0.121-0.613-0.121-0.364-0.126-0.852-0.126-1.222-0.244-0.244 0-0.482-0.126-0.725-0.126-0.369 0-0.734-0.119-1.104-0.119-0.364 0-0.607 0-0.978-0.126-0.244 0-0.607 0-0.851-0.119h-242.407c-21.604 0-39.062 17.456-39.062 39.062 0 21.604 17.458 39.055 39.062 39.055h146.102l-3.171 3.177-217.27 217.265 0.369 0.369-49.676 49.676-155.87-155.87c-7.694-7.689-17.827-11.472-27.953-11.472-10.13-0.126-20.263 3.659-27.952 11.472l-282.446 282.322c-15.258 15.258-15.258 40.041 0 55.298 15.258 15.258 40.033 15.258 55.291 0l255.108-255.11 155.746 155.751c7.813 7.815 17.945 11.593 28.076 11.474 10.126 0.119 20.382-3.659 28.070-11.474l182.964-182.969c0.734-0.734 1.347-1.342 1.956-2.075l111.564-111.564v146.109c0 21.604 17.451 39.060 39.055 39.060s39.062-17.456 39.062-39.060v-235.085c0-0.244 0.126-0.49 0.126-0.614 0-0.244 0.119-0.487 0.119-0.733 0-0.364 0.119-0.734 0.119-1.097s0-0.607 0.126-0.977c0-0.245 0-0.609 0.119-0.852-0.122-1.466-0.122-2.807-0.122-4.030v0zM963.66 256.607z"  ></path></symbol><symbol id="icon-circleyuanquan" viewBox="0 0 1024 1024"><path d="M150.1184 150.1184C250.2656 50.0736 370.8928 0 512 0c141.1072 0 261.7344 50.0736 361.8816 150.1184C973.9264 250.2656 1024 370.8928 1024 512c0 141.2096-50.0736 261.8368-150.1184 361.8816C773.7344 973.9264 653.1072 1024 512 1024c-141.1072 0-261.7344-50.0736-361.8816-150.1184C50.0736 773.8368 0 653.2096 0 512 0 370.8928 50.0736 250.2656 150.1184 150.1184zM512 41.8816c-85.2992 0-164.1472 20.8896-236.3392 62.7712C203.4688 146.432 146.432 203.4688 104.6528 275.6608 62.7712 347.9552 41.8816 426.7008 41.8816 512c0 129.6384 45.9776 240.4352 137.8304 332.288C271.5648 936.2432 382.3616 982.1184 512 982.1184c129.6384 0 240.4352-45.8752 332.288-137.8304C936.2432 752.4352 982.1184 641.6384 982.1184 512c0-129.6384-45.9776-240.3328-137.8304-332.288C752.4352 87.7568 641.6384 41.8816 512 41.8816zM512 256c-36.1472 0-70.144 7.0656-102.1952 20.8896C377.856 290.9184 349.4912 309.3504 324.9152 332.288c-22.9376 24.576-41.472 52.9408-55.3984 84.8896S248.6272 483.328 248.6272 519.3728c0 36.1472 6.9632 70.144 20.8896 102.1952s32.4608 60.3136 55.3984 84.8896C349.4912 729.4976 377.856 747.9296 409.8048 761.856 441.856 775.7824 475.8528 782.7456 512 782.7456c36.1472 0 70.144-6.9632 102.1952-20.8896C646.144 747.9296 674.5088 729.4976 699.0848 706.4576c22.9376-24.576 41.472-52.9408 55.3984-84.8896s20.8896-66.048 20.8896-102.1952c0-36.0448-6.9632-70.144-20.8896-102.1952S722.0224 356.9664 699.0848 332.288C674.5088 309.3504 646.144 290.9184 614.1952 276.8896 582.144 263.0656 548.1472 256 512 256z"  ></path></symbol><symbol id="icon-bhjlink" viewBox="0 0 1024 1024"><path d="M901.920618 465.785468c-50.993571 0-94.522533 32.698367-110.688942 78.273953L702.244627 544.059421c1.764013-10.590222 2.890616-21.423121 2.890616-32.694527 0-72.177856-40.480145-134.923579-99.898281-166.857822l34.099901-112.776268c8.829281 2.126492 18.1347 3.327588 27.724265 3.327588 64.833817 0 117.472367-52.597848 117.472367-117.589097C784.532727 52.594008 731.894177 0 667.06036 0c-64.911381 0-117.509229 52.594008-117.509229 117.470063 0 49.305587 30.248562 91.349307 73.177745 108.842756l-33.419485 110.692013c-22.548956-9.588797-47.462473-14.807112-73.540224-14.807112-49.18732 0-93.841349 18.658451-127.540374 49.309426L213.348053 196.583401l-1.886119 2.008226c19.940183-21.103648 32.256788-49.588197 32.256788-81.003297 0-64.872983-52.517212-117.470063-117.470063-117.470063-64.913685 0-117.511533 52.59708-117.511533 117.470063 0 65.034255 52.59708 117.592169 117.511533 117.592169 31.412796 0 59.898881-12.358075 80.921125-32.335888l-6.179038 6.056931 174.960609 174.879973c-30.729308 33.66293-49.506025 78.47516-49.506025 127.661712 0 43.008283 14.401627 82.685138 38.593258 114.501114l-149.845117 120.999625c-21.503757-28.044506-55.285722-46.218372-93.357532-46.218372-64.874519 0-117.430897 52.719186-117.430897 117.592169 0 64.833049 52.556378 117.470063 117.430897 117.470063 64.872983 0 117.549163-52.637014 117.549163-117.470063 0-20.541499-5.335813-39.878062-14.602834-56.68956l151.369526-122.203792c34.584487 37.633303 84.29095 61.384123 139.618142 61.384123 28.082136 0 54.602234-6.057699 78.553492-17.091805l52.716114 119.514383c-35.585143 20.222026-59.497236 58.335306-59.497236 102.106945 0 64.912149 52.637014 117.549163 117.592169 117.549163 64.872983 0 117.388659-52.637014 117.388659-117.549163 0-64.833049-52.516444-117.513069-117.388659-117.513069-15.047485 0-29.248673 2.929782-42.446133 7.903885l-52.798286-120.034294c42.807844-24.554878 75.182898-65.518073 88.46253-114.221576l88.222926 0c-1.405374 7.018422-1.96522 14.241123-1.96522 21.743362 0 64.872983 52.557914 117.509997 117.387123 117.509997 64.995089 0 117.596009-52.637014 117.596009-117.509997C1019.508947 518.383316 966.994039 465.785468 901.920618 465.785468L901.920618 465.785468zM901.920618 465.785468"  ></path></symbol><symbol id="icon-lianjie_connecting5" viewBox="0 0 1024 1024"><path d="M801.25952 251.74016l-28.9792-28.99968-150.79424 150.8352-35.1232-35.10272-99.14368 99.16416 99.14368 99.16416 99.16416-99.16416-35.10272-35.1232zM487.19872 476.8768l-29.94176 29.94176-19.61984-19.61984-99.16416 99.16416 35.10272 35.1232-150.8352 150.79424 28.95872 28.95872 150.8352-150.79424 35.10272 35.10272 99.14368-99.14368-19.61984-19.64032 29.96224-29.96224-59.92448-59.92448z m-15.48288 44.4416l15.4624-15.4624 30.98624 30.98624-15.4624 15.44192-30.98624-30.96576z" fill="" ></path></symbol><symbol id="icon-xiazai" viewBox="0 0 1024 1024"><path d="M840.5 900.3h-657c-16.5 0-29.9 13.4-29.9 29.9s13.4 29.9 29.9 29.9h657.1c16.5 0 29.9-13.4 29.9-29.9-0.1-16.6-13.5-29.9-30-29.9zM631.5 123.7V541.8H763.1L512 769.9l-251.2-228h131.7V123.7h239m0-59.7h-239c-33 0-59.7 26.7-59.7 59.7v358.4H183.5c-26.6 0-39.9 32.2-21.1 51l328.5 298.2c5.8 5.8 13.5 8.7 21.1 8.7s15.3-2.9 21.1-8.7l328.5-298.2c18.8-18.8 5.5-51-21.1-51H691.2V123.7c0-33-26.7-59.7-59.7-59.7z"  ></path></symbol><symbol id="icon-ico_reset" viewBox="0 0 1024 1024"><path d="M925.97087933 277.33133334a479.997 479.997 0 1 0 54.33566 255.9984H916.05094133a415.9974 415.9974 0 1 1-64.191599-255.9984h74.047537z"  ></path><path d="M978.64255033 61.01268534L725.33213333 371.09074734h297.59814z"  ></path></symbol><symbol id="icon-fangda" viewBox="0 0 1024 1024"><path d="M768 448a320 320 0 1 0-320 320 320 320 0 0 0 320-320z m64 0A384 384 0 1 1 448 64a384 384 0 0 1 384 384z"  ></path><path d="M681.28 726.72a32 32 0 0 1 45.44-45.44l160 160a32 32 0 0 1-45.44 45.44zM320 480a32 32 0 0 1 0-64h256a32 32 0 0 1 0 64z"  ></path><path d="M480 576a32 32 0 0 1-64 0V320a32 32 0 0 1 64 0z"  ></path></symbol><symbol id="icon-zidong" viewBox="0 0 1024 1024"><path d="M131.3 363.3c-19.2 47.3-28.9 97.3-28.9 148.7 0 51.3 9.7 101.3 28.9 148.7 7 17.2 15.1 33.8 24.3 49.7l15.8-49.1 42.8 13.8-39.8 123.8-42.8-13.9-80.9-26 13.8-42.8 52.3 16.8c-98-168.4-74.8-387.9 69.4-532.1C342.4 44.7 586.9 30.5 759.1 158.3l-32.2 32.2c-25.1-18-52.1-32.9-80.9-44.6-47.3-19.2-97.3-28.9-148.7-28.9-51.3 0-101.3 9.7-148.7 28.9-49 19.9-92.9 49.1-130.6 86.8s-66.9 81.7-86.7 130.6z m828.3-60.2l13.8-42.8-80.9-26-42.8-13.8-39.8 123.8 42.8 13.8 15-46.7c9.8 16.6 18.4 34 25.8 52.1 19.2 47.3 28.9 97.3 28.9 148.7 0 51.3-9.7 101.3-28.9 148.7-19.9 49-49.1 92.9-86.8 130.6C768.9 829 725 858.2 676 878.1c-47.3 19.2-97.3 28.9-148.7 28.9-51.3 0-101.3-9.7-148.7-28.9-28.8-11.7-55.9-26.6-80.9-44.6l-32.2 32.2c126.3 93.7 382.6 147.7 572.9-42.6 145.8-145.8 167.9-368.6 66.1-537.7l55.1 17.7zM474 241.2L295 730.4h64.8l50.5-148.2h195.3l54 148.2h70.3L539.6 241.2H474z m-45.9 288.3L479.8 386c11-30.9 19.4-62.1 25.4-93.4 6.9 26 17.9 59.9 32.8 101.5l48.2 135.5H428.1z" fill="" ></path></symbol><symbol id="icon-quanping" viewBox="0 0 1024 1024"><path d="M795.5 192H581c-19.6 0-35.6 15.7-36 35.3-0.4 20.3 16.4 36.7 36.7 36.7h128.4L581 393.1c-14 14-14 36.9 0 50.9s36.9 14 50.9 0L760 315.9v129c0 19.6 15.8 35.6 35.3 36 20.2 0.4 36.7-16.4 36.7-36.7V228.5c0-20.1-16.3-36.5-36.5-36.5zM442.2 760H313.8L443 630.9c14-14 14-36.9 0-50.9s-36.9-14-50.9 0L264 708.1V579c0-19.6-15.8-35.6-35.3-36-20.2-0.4-36.7 16.4-36.7 36.7v215.6c0 20.3 16.4 36.7 36.7 36.7H443c19.6 0 35.6-15.7 36-35.3 0.3-20.3-16.5-36.7-36.8-36.7z"  ></path><path d="M838 136c27.6 0 50 22.4 50 50v652c0 27.6-22.4 50-50 50H186c-27.6 0-50-22.4-50-50V186c0-27.6 22.4-50 50-50h652m0-72H186c-16.4 0-32.4 3.2-47.5 9.6-14.5 6.1-27.6 14.9-38.8 26.1-11.2 11.2-20 24.2-26.1 38.8-6.4 15.1-9.6 31.1-9.6 47.5v652c0 16.4 3.2 32.4 9.6 47.5 6.1 14.5 14.9 27.6 26.1 38.8 11.2 11.2 24.2 20 38.8 26.1 15.1 6.4 31.1 9.6 47.5 9.6h652c16.4 0 32.4-3.2 47.5-9.6 14.5-6.1 27.6-14.9 38.8-26.1 11.2-11.2 20-24.2 26.1-38.8 6.4-15.1 9.6-31.1 9.6-47.5V186c0-16.4-3.2-32.4-9.6-47.5-6.1-14.5-14.9-27.6-26.1-38.8-11.2-11.2-24.2-20-38.8-26.1-15.1-6.4-31.1-9.6-47.5-9.6z"  ></path></symbol><symbol id="icon-lianjieliu" viewBox="0 0 1024 1024"><path d="M280.224 425.856h348.608a29.536 29.536 0 1 0 0-59.072H280.224c-52.448 0-93.152-34.304-93.152-73.856s40.704-73.856 93.152-73.856h140.128C432.096 258.816 468.448 288 512 288s79.904-29.184 91.648-68.928h178.08a29.536 29.536 0 1 0 0-59.072h-179.584C588.896 122.784 553.728 96 512 96s-76.896 26.784-90.112 64H280.224C197.184 160 128 218.272 128 292.928s69.184 132.928 152.224 132.928z"  ></path><path d="M895.936 415.2A96 96 0 1 0 800 512c30.656 0 57.632-14.624 75.2-36.992 10.56 12.064 16.832 26.56 16.832 41.92 0 39.552-40.704 73.856-93.152 73.856H306.016A95.584 95.584 0 0 0 224 544a95.68 95.68 0 0 0-95.232 88.352C89.888 656.224 64 695.424 64 740.928c0 74.656 69.184 132.928 152.224 132.928h241.728A95.808 95.808 0 0 0 544 928a96 96 0 1 0 0-192 95.904 95.904 0 0 0-94.272 78.752H216.224c-52.448 0-93.152-34.304-93.152-73.856 0-17.504 8.32-33.792 21.76-46.72A95.808 95.808 0 0 0 224 736a95.68 95.68 0 0 0 95.008-86.144h479.84c83.072 0 152.224-58.272 152.224-132.928 0.032-41.536-21.824-77.568-55.136-101.728z"  ></path></symbol><symbol id="icon-shuaxin" viewBox="0 0 1024 1024"><path d="M512 919.552c-224.768 0-407.552-182.784-407.552-407.552 0-8.704 0.512-17.408 1.024-26.112l71.68 4.608c-0.512 7.168-0.512 14.336-0.512 21.504 0 185.344 150.528 335.872 335.872 335.872 86.528 0 168.448-32.768 230.912-92.16l49.152 52.224C716.288 880.128 616.96 919.552 512 919.552zM919.552 512h-71.68c0-11.776-0.512-23.552-2.048-35.328-17.92-171.52-161.28-300.544-334.336-300.544-67.584 0-132.096 19.968-187.904 57.344L284.16 174.08c67.072-45.568 145.92-69.632 227.84-69.632 209.408 0 384 156.672 405.504 365.056 1.536 13.824 2.048 28.16 2.048 42.496z" fill="#707070" ></path><path d="M140.288 290.816L28.16 491.52c-3.072 5.12 1.024 11.776 6.656 11.776H258.56c6.144 0 9.728-6.144 6.656-11.776L153.6 290.816c-3.072-5.632-10.752-5.632-13.312 0zM870.4 675.84L758.272 475.136c-3.072-5.12 1.024-11.776 6.656-11.776h223.744c6.144 0 9.728 6.144 6.656 11.776L883.712 675.84c-2.56 5.12-10.24 5.12-13.312 0zM270.336 202.24a35.84 35.84 0 1 0 71.68 0 35.84 35.84 0 1 0-71.68 0zM728.576 784.896a35.84 35.84 0 1 0 71.68 0 35.84 35.84 0 1 0-71.68 0z" fill="#707070" ></path></symbol><symbol id="icon-resize-" viewBox="0 0 1024 1024"><path d="M410.816 673.514667L230.997333 853.333333H384v85.333334H85.333333V640h85.333334v153.002667l179.818666-179.84 60.330667 60.373333z m-53.632-256L170.666667 230.997333V384H85.333333V85.333333h298.666667v85.333334h-153.002667l186.517334 186.517333-60.330667 60.330667z m234.666667-45.696L793.002667 170.666667H640V85.333333h298.666667v298.666667h-85.333334v-153.002667l-201.152 201.173334-60.330666-60.373334z m67.029333 226.709333L853.333333 793.002667V640h85.333334v298.666667H640v-85.333334h153.002667l-194.474667-194.453333 60.352-60.352z"  ></path></symbol><symbol id="icon-guanxitu" viewBox="0 0 1024 1024"><path d="M209.003789 401.084632l29.749895-44.948211 107.843369 71.464421-29.749895 44.894316zM682.469053 546.600421l-14.551579-51.846737 124.496842-35.031579 14.551579 51.846737zM315.068632 812.840421l-40.367158-35.678316 85.692631-96.902737 40.421053 35.732211zM597.962105 390.251789l-46.672842-26.947368 43.11579-74.64421 46.672842 26.947368zM615.639579 728.764632l41.121684-34.816 83.536842 98.735157-41.121684 34.816z" fill="#444A5C" ></path><path d="M501.221053 765.305263c-118.568421 0-215.578947-97.010526-215.578948-215.578947s97.010526-215.578947 215.578948-215.578948 215.578947 97.010526 215.578947 215.578948-97.010526 215.578947-215.578947 215.578947z m0-377.263158c-91.621053 0-161.684211 70.063158-161.684211 161.684211s70.063158 161.684211 161.684211 161.68421 161.684211-70.063158 161.68421-161.68421-75.452632-161.684211-161.68421-161.684211zM167.073684 452.715789c-59.284211 0-107.789474-48.505263-107.789473-107.789473s48.505263-107.789474 107.789473-107.789474 107.789474 48.505263 107.789474 107.789474-48.505263 107.789474-107.789474 107.789473z m0-161.68421c-32.336842 0-53.894737 21.557895-53.894737 53.894737s21.557895 53.894737 53.894737 53.894737 53.894737-21.557895 53.894737-53.894737-26.947368-53.894737-53.894737-53.894737zM253.305263 948.547368c-59.284211 0-107.789474-48.505263-107.789474-107.789473s48.505263-107.789474 107.789474-107.789474 107.789474 48.505263 107.789474 107.789474-48.505263 107.789474-107.789474 107.789473z m0-161.68421c-32.336842 0-53.894737 21.557895-53.894737 53.894737s21.557895 53.894737 53.894737 53.894737 53.894737-21.557895 53.894737-53.894737-21.557895-53.894737-53.894737-53.894737zM856.926316 576.673684c-59.284211 0-107.789474-48.505263-107.789474-107.789473s48.505263-107.789474 107.789474-107.789474 107.789474 48.505263 107.789473 107.789474-48.505263 107.789474-107.789473 107.789473z m0-161.68421c-32.336842 0-53.894737 21.557895-53.894737 53.894737s21.557895 53.894737 53.894737 53.894736 53.894737-21.557895 53.894737-53.894736-21.557895-53.894737-53.894737-53.894737zM662.905263 350.315789C592.842105 350.315789 528.168421 291.031579 528.168421 215.578947s59.284211-134.736842 134.736842-134.736842 134.736842 59.284211 134.736842 134.736842-59.284211 134.736842-134.736842 134.736842z m0-215.578947c-43.115789 0-80.842105 37.726316-80.842105 80.842105s37.726316 80.842105 80.842105 80.842106 80.842105-37.726316 80.842105-80.842106-32.336842-80.842105-80.842105-80.842105zM749.136842 921.6c-43.115789 0-80.842105-37.726316-80.842105-80.842105s37.726316-80.842105 80.842105-80.842106 80.842105 37.726316 80.842105 80.842106-37.726316 80.842105-80.842105 80.842105z m0-107.789474c-16.168421 0-26.947368 10.778947-26.947368 26.947369s10.778947 26.947368 26.947368 26.947368 26.947368-10.778947 26.947369-26.947368-10.778947-26.947368-26.947369-26.947369z" fill="#444A5C" ></path></symbol><symbol id="icon-tupian" viewBox="0 0 1024 1024"><path d="M938.666667 553.92V768c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v297.92z m-64-74.624V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v344.48A290.090667 290.090667 0 0 1 192 597.333333a286.88 286.88 0 0 1 183.296 65.845334C427.029333 528.384 556.906667 437.333333 704 437.333333c65.706667 0 126.997333 16.778667 170.666667 41.962667z m0 82.24c-5.333333-8.32-21.130667-21.653333-43.648-32.917333C796.768 511.488 753.045333 501.333333 704 501.333333c-121.770667 0-229.130667 76.266667-270.432 188.693334-2.730667 7.445333-7.402667 20.32-13.994667 38.581333-7.68 21.301333-34.453333 28.106667-51.370666 13.056-16.437333-14.634667-28.554667-25.066667-36.138667-31.146667A222.890667 222.890667 0 0 0 192 661.333333c-14.464 0-28.725333 1.365333-42.666667 4.053334V768a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V561.525333zM320 480a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-64a32 32 0 1 0 0-64 32 32 0 0 0 0 64z"  ></path></symbol><symbol id="icon-juhejiedian" viewBox="0 0 1024 1024"><path d="M533.333333 725.333333a64 64 0 1 1-64 64 64 64 0 0 1 64-64m0-85.333333a149.333333 149.333333 0 1 0 149.333334 149.333333 149.333333 149.333333 0 0 0-149.333334-149.333333z" fill="#666666" ></path><path d="M533.333333 277.333333m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="#666666" ></path><path d="M277.333333 320m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="#666666" ></path><path d="M789.333333 320m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="#666666" ></path><path d="M512 341.333333h42.666667v384h-42.666667z" fill="#666666" ></path><path d="M741.290667 357.504l30.165333 30.165333-225.066667 225.066667-30.165333-30.165333z" fill="#666666" ></path><path d="M558.08 582.016l-30.165333 30.165333-228.693334-228.693333 30.165334-30.165333z" fill="#666666" ></path></symbol><symbol id="icon-ziyuan" viewBox="0 0 1024 1024"><path d="M236.615854 752.86913h-0.484162A241.500139 241.500139 0 0 1 0.538332 527.733676a238.78883 238.78883 0 0 1 64.684079-180.011531 242.081134 242.081134 0 0 1 149.025146-74.367324 298.534454 298.534454 0 0 1 596.003751 25.951097V300.95207a221.262156 221.262156 0 0 1 213.031398 233.075715 222.714643 222.714643 0 0 1-221.262156 209.1581h-3.098639a27.500417 27.500417 0 0 1 0-54.904001h2.711309A167.520145 167.520145 0 0 0 968.378705 531.219644a166.261323 166.261323 0 0 0-166.16449-175.363573 151.058627 151.058627 0 0 0-18.204502 1.065157 27.500417 27.500417 0 0 1-30.211725-30.308558 240.822312 240.822312 0 0 0 1.549319-27.306752 243.727285 243.727285 0 0 0-487.357738 0 27.500417 27.500417 0 0 1-27.403584 27.500417 185.627813 185.627813 0 0 0-185.240484 197.538205A186.30564 186.30564 0 0 0 237.100016 697.965129a27.500417 27.500417 0 0 1-0.484162 54.904001z"  ></path><path d="M513.266174 1021.869686a27.500417 27.500417 0 0 1-27.500417-27.403584v-484.162268a27.500417 27.500417 0 1 1 54.904001 0v484.162268a27.403584 27.403584 0 0 1-27.403584 27.403584z"  ></path><path d="M513.266174 1024a27.500417 27.500417 0 0 1-19.366491-8.037094L342.260061 864.129619a27.500417 27.500417 0 1 1 38.732981-38.732981L513.266174 957.766602l130.530147-130.336483a27.500417 27.500417 0 0 1 38.732981 38.732982L532.632664 1015.962906a27.403584 27.403584 0 0 1-19.36649 8.037094z"  ></path></symbol><symbol id="icon-add-select" viewBox="0 0 1024 1024"><path d="M544 213.333333v266.666667H810.666667v64H544V810.666667h-64V544H213.333333v-64h266.666667V213.333333z"  ></path></symbol><symbol id="icon-sami-select" viewBox="0 0 1024 1024"><path d="M810.666667 480v64H213.333333v-64z"  ></path></symbol><symbol id="icon-icon_shuaxin" viewBox="0 0 1024 1024"><path d="M512 938.666667c-55.371852 0-109.226667-10.903704-159.857778-32.237037-48.924444-20.66963-92.823704-50.251852-130.465185-87.988149-37.736296-37.736296-67.318519-81.635556-87.988148-130.465185-21.428148-50.631111-32.237037-104.391111-32.237037-159.857777s10.903704-109.226667 32.237037-159.857778c20.66963-48.924444 50.251852-92.823704 87.988148-130.465185 37.736296-37.736296 81.635556-67.318519 130.465185-87.988149 50.631111-21.428148 104.391111-32.237037 159.857778-32.237037 63.81037 0 125.060741 14.222222 181.854815 42.382223 54.139259 26.832593 102.684444 66.085926 140.325926 113.682963 7.300741 9.197037 5.783704 22.660741-3.508148 29.961481-9.197037 7.300741-22.660741 5.783704-29.961482-3.508148-70.257778-88.936296-175.502222-139.946667-288.711111-139.946667-202.808889 0-367.881481 165.072593-367.881481 367.881482s165.072593 367.881481 367.881481 367.881481 367.881481-165.072593 367.881481-367.881481c0-11.757037 9.576296-21.333333 21.333334-21.333334S922.548148 516.361481 922.548148 528.118519c0 55.371852-10.903704 109.226667-32.237037 159.857777-20.66963 48.924444-50.251852 92.823704-87.988148 130.465185-37.736296 37.736296-81.635556 67.318519-130.465185 87.988149-50.631111 21.428148-104.485926 32.237037-159.857778 32.237037z"  ></path><path d="M817.398519 308.242963c-11.757037 0-21.333333-9.576296-21.333334-21.333333V106.666667c0-11.757037 9.576296-21.333333 21.333334-21.333334s21.333333 9.576296 21.333333 21.333334v180.242963c0 11.757037-9.481481 21.333333-21.333333 21.333333z"  ></path><path d="M817.398519 308.242963H637.155556c-11.757037 0-21.333333-9.576296-21.333334-21.333333s9.576296-21.333333 21.333334-21.333334h180.242963c11.757037 0 21.333333 9.576296 21.333333 21.333334s-9.481481 21.333333-21.333333 21.333333z"  ></path></symbol><symbol id="icon-lianjiezhong" viewBox="0 0 1024 1024"><path d="M883.396923 298.141538a99.721846 99.721846 0 0 1-142.414769 0 103.187692 103.187692 0 0 1 0-144.423384 99.721846 99.721846 0 0 1 142.414769 0 103.187692 103.187692 0 0 1 0 144.423384zM285.144615 760.438154a87.276308 87.276308 0 0 0-124.652307 0 90.269538 90.269538 0 0 0 0 126.385231c34.422154 34.894769 90.230154 34.894769 124.652307 0a90.269538 90.269538 0 0 0 0-126.424616z m482.579693 108.307692a64.472615 64.472615 0 0 1 0-90.269538 62.345846 62.345846 0 0 1 89.00923 0c24.576 24.930462 24.576 65.378462 0 90.269538a62.345846 62.345846 0 0 1-89.00923 0zM294.006154 298.141538a103.187692 103.187692 0 0 0 0-144.423384 99.721846 99.721846 0 0 0-142.454154 0 103.187692 103.187692 0 0 0 0 144.423384 99.721846 99.721846 0 0 0 142.454154 0z m324.214154-196.01723c0 56.438154-45.095385 102.163692-100.745846 102.163692-55.611077 0-100.706462-45.725538-100.706462-102.163692C416.768 45.725538 461.863385 0 517.474462 0c55.650462 0 100.745846 45.725538 100.745846 102.124308zM517.474462 870.793846c-41.747692 0-75.539692 34.264615-75.539693 76.603077 0 42.299077 33.831385 76.603077 75.539693 76.603077 41.747692 0 75.539692-34.264615 75.539692-76.603077 0-42.299077-33.792-76.603077-75.539692-76.603077z m416.768-294.990769c-27.805538 0-50.333538-22.843077-50.333539-51.042462 0-28.199385 22.528-51.042462 50.333539-51.042461 27.844923 0 50.412308 22.843077 50.372923 51.042461 0 28.199385-22.567385 51.081846-50.372923 51.081847zM201.452308 524.8c0-56.398769-45.095385-102.124308-100.745846-102.124308C45.095385 422.596923 0 468.283077 0 524.760615c0 56.398769 45.095385 102.124308 100.706462 102.124308 55.650462 0 100.745846-45.686154 100.745846-102.124308z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M563.2 819.2a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8z m-320.4608-153.6a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m592.7936 25.6a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8zM947.2 477.1328a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 0 1 0-153.6zM128 307.2a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m782.6432-40.6016a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4zM409.6 0a153.6 153.6 0 1 1 0 307.2 153.6 153.6 0 0 1 0-307.2z m384 153.6a25.6 25.6 0 1 1 0 51.2 25.6 25.6 0 0 1 0-51.2z" fill="#555555" ></path></symbol><symbol id="icon-tupushujuyuan" viewBox="0 0 1024 1024"><path d="M851.456 588.288c-13.312 0-25.6 2.048-37.888 5.12l-90.112-155.648 55.296-31.744c18.944 17.92 44.032 29.184 72.192 29.184 57.344 0 103.936-46.592 103.936-103.936s-46.592-103.936-103.936-103.936c-57.344 0-103.936 46.592-103.936 103.936 0 5.12 0.512 10.24 1.536 15.36l-58.368 33.792-82.944-143.872c26.112-25.088 41.984-59.904 41.984-98.816 0-75.776-61.44-137.216-137.216-137.216s-137.216 61.44-137.216 137.216c0 38.912 15.872 73.728 41.984 98.816l-84.992 146.944-56.832-32.768c1.024-6.144 2.048-12.8 2.048-19.456 0-57.344-46.592-103.936-103.936-103.936-57.344 0-103.936 46.592-103.936 103.936s46.592 103.936 103.936 103.936c26.624 0 51.2-10.24 69.12-26.624l56.32 32.768-88.064 152.576c-11.776-3.584-24.576-5.12-37.888-5.12-75.776 0-137.216 61.44-137.216 137.216s61.44 137.216 137.216 137.216c64.512 0 118.272-44.544 133.12-103.936h173.056v61.44c-40.96 13.824-70.656 52.736-70.656 98.816 0 57.344 46.592 103.936 103.936 103.936s103.936-46.592 103.936-103.936c0-46.08-29.696-84.48-70.656-98.816v-61.44h173.056c14.848 59.904 69.12 103.936 133.12 103.936 75.776 0 137.216-61.44 137.216-137.216s-61.44-137.728-137.216-137.728z m-410.112-450.048c0-38.912 31.744-70.656 70.656-70.656s70.656 31.744 70.656 70.656c0 13.824-4.096 26.624-10.752 37.376-12.288 19.456-33.28 32.256-57.856 33.28h-5.12c-24.576-1.024-45.568-13.824-57.856-33.28-6.144-10.752-9.728-24.064-9.728-37.376z m32.768 132.096c11.776 3.584 24.576 5.12 37.888 5.12s25.6-2.048 37.888-5.12l82.944 143.872-124.416 72.192-118.784-68.608 84.48-147.456z m-301.568 526.336c-38.912 0-70.656-31.744-70.656-70.656 0-38.912 31.744-70.656 70.656-70.656h2.56c24.576 1.024 45.568 13.824 57.856 33.28 1.024 1.536 1.536 2.56 2.56 4.096 5.12 9.728 8.192 20.992 8.192 33.28 0 11.776-3.072 23.552-8.192 33.28-12.288 22.016-35.84 37.376-62.976 37.376z m133.12-103.936c-6.144-25.6-19.456-48.128-37.888-65.536l88.064-152.576 122.88 70.656v146.944h-173.056z m239.616-151.552l120.832-69.632 90.112 155.648c-18.432 17.408-31.744 39.936-37.888 65.536h-173.056v-151.552z m306.176 255.488c-27.136 0-50.688-15.36-62.464-37.376-5.12-9.728-8.192-21.504-8.192-33.28 0-12.288 3.072-23.552 8.192-33.28 0.512-1.536 1.536-3.072 2.56-4.096 12.288-19.456 33.28-32.768 57.856-33.28h2.56c38.912 0 70.656 31.744 70.656 70.656-0.512 38.912-32.256 70.656-71.168 70.656z"  ></path></symbol><symbol id="icon-jiedian" viewBox="0 0 1024 1024"><path d="M882.1914 744.849921c-60.501005 0-112.097749 38.645092-131.425292 92.560342H244.912146c-80.468136 0-145.955927-62.61964-145.955926-139.570043 0-77.000371 65.487791-139.570043 145.955926-139.570043h136.312143c19.497433 53.585462 70.934281 91.950735 131.205434 91.950735 60.241173 0 111.688014-38.375266 131.205434-91.950735h136.452052C914.210763 558.280171 1023.340425 453.92743 1023.340425 325.660102S914.210763 93.040033 780.077216 93.040033H273.093982c-19.197627-54.165089-70.944274-93.040033-131.595182-93.040033C64.508422 0 1.928757 62.569672 1.928757 139.560049c0 76.950403 62.579665 139.570043 139.570043 139.570043 60.640915 0 112.377569-38.894931 131.585189-93.040033h506.993227c80.468136 0 145.955927 62.61964 145.955927 139.570043 0 77.000371-65.487791 139.570043-145.955927 139.570043H644.414655c-18.887826-54.734722-70.924287-94.139324-131.974938-94.139325-61.090625 0-113.097105 39.394609-131.974938 94.139325H244.912146c-134.133547 0-243.263209 104.352741-243.263209 232.620069 0 128.267328 109.129663 232.620069 243.263209 232.620069h505.524174c19.057717 54.394941 70.9043 93.529717 131.75508 93.529717 76.950403 0 139.570043-62.61964 139.570043-139.570043 0.009994-77.000371-62.61964-139.580036-139.570043-139.580036zM141.428845 207.036558c-37.166045 0-67.376574-30.230515-67.376574-67.376573 0-37.166045 30.210528-67.376574 67.376574-67.376574 37.146058 0 67.376574 30.210528 67.376573 67.376574 0 37.146058-30.230515 67.376574-67.376573 67.376573z m371.000878 236.257725c37.146058 0 67.376574 30.210528 67.376574 67.376574 0 37.146058-30.230515 67.376574-67.376574 67.376573-37.166045 0-67.376574-30.230515-67.376574-67.376573 0.009994-37.176039 30.210528-67.376574 67.376574-67.376574z m369.761677 508.502254c-37.166045 0-67.376574-30.230515-67.376574-67.376573 0-37.166045 30.210528-67.376574 67.376574-67.376574 37.146058 0 67.376574 30.210528 67.376574 67.376574 0 37.146058-30.230515 67.376574-67.376574 67.376573z"  ></path></symbol><symbol id="icon-shitujiedianxianshi" viewBox="0 0 1367 1024"><path d="M1235.403267 512.03593a130.596433 130.596433 0 0 0-42.68749 7.796802l-193.295715-290.430872A149.113837 149.113837 0 1 0 724.647767 149.48464a151.777744 151.777744 0 0 0 37.229729 97.849864l-194.920048 357.873209a220.519548 220.519548 0 0 0-55.162374-8.511508 207.914718 207.914718 0 0 0-114.807909 34.046035L240.401393 443.683967a126.763005 126.763005 0 0 0-75.564005-182.380192 127.737605 127.737605 0 1 0 12.99467 239.816633l157.625345 188.422713A213.307506 213.307506 0 1 0 643.23616 643.282096l190.956674-350.856087a164.187654 164.187654 0 0 0 39.56877 6.172468 143.591102 143.591102 0 0 0 60.555162-12.99467l192.516034 288.026859a121.760057 121.760057 0 0 0-18.582377 64.973349 128.127445 128.127445 0 1 0 127.152844-126.568085zM129.621832 448.362048a68.157044 68.157044 0 1 1 68.157044-68.092071A68.157044 68.157044 0 0 1 129.621832 448.362048z m528.948039 365.670011a145.86517 145.86517 0 1 1-145.86517-145.86517 145.86517 145.86517 0 0 1 145.86517 145.86517z m215.12676-577.937944a87.389155 87.389155 0 1 1 87.389155-87.389155 87.389155 87.389155 0 0 1-87.389155 87.389155z m365.085251 474.305451a68.157044 68.157044 0 1 1 68.222017-68.416937 68.157044 68.157044 0 0 1-68.222017 68.157044z"  ></path></symbol><symbol id="icon-shituxianshiquanbujiedian" viewBox="0 0 1367 1024"><path d="M1235.403267 512.03593a130.596433 130.596433 0 0 0-42.68749 7.796802l-193.295715-290.430872A149.113837 149.113837 0 1 0 724.647767 149.48464a151.777744 151.777744 0 0 0 37.229729 97.849864l-194.920048 357.873209a220.519548 220.519548 0 0 0-55.162374-8.511508 207.914718 207.914718 0 0 0-114.807909 34.046035L240.401393 443.683967a126.763005 126.763005 0 0 0-75.564005-182.380192 127.737605 127.737605 0 1 0 12.99467 239.816633l157.625345 188.422713A213.307506 213.307506 0 1 0 643.23616 643.282096l190.956674-350.856087a164.187654 164.187654 0 0 0 39.56877 6.172468 143.591102 143.591102 0 0 0 60.555162-12.99467l192.516034 288.026859a121.760057 121.760057 0 0 0-18.582377 64.973349 128.127445 128.127445 0 1 0 127.152844-126.568085zM129.621832 448.362048a68.157044 68.157044 0 1 1 68.157044-68.092071A68.157044 68.157044 0 0 1 129.621832 448.362048z m528.948039 365.670011a145.86517 145.86517 0 1 1-145.86517-145.86517 145.86517 145.86517 0 0 1 145.86517 145.86517z m215.12676-577.937944a87.389155 87.389155 0 1 1 87.389155-87.389155 87.389155 87.389155 0 0 1-87.389155 87.389155z m365.085251 474.305451a68.157044 68.157044 0 1 1 68.222017-68.416937 68.157044 68.157044 0 0 1-68.222017 68.157044z"  ></path></symbol><symbol id="icon-suoxiao" viewBox="0 0 1024 1024"><path d="M768 448a320 320 0 1 0-320 320 320 320 0 0 0 320-320z m64 0A384 384 0 1 1 448 64a384 384 0 0 1 384 384z"  ></path><path d="M681.28 726.72a32 32 0 0 1 45.44-45.44l160 160a32 32 0 0 1-45.44 45.44zM288 480a32 32 0 0 1 0-64h320a32 32 0 0 1 0 64z"  ></path></symbol><symbol id="icon-lianjie" viewBox="0 0 1024 1024"><path d="M922.243 97.755c11.49 11.489 11.673 30.002 0.547 41.713l-0.547 0.562-109.119 109.1c57.22 78.348 42.673 195.388-35.778 273.839l-92.83 92.585c-11.572 11.54-30.264 11.653-41.97 0.253l-45.746-44.55-18.089 18.086a29.891 29.891 0 0 1-7.171 5.3l48.764 47.489c11.947 11.638 12.06 30.804 0.248 42.585l-95.875 95.629c-77.416 77.417-192.412 92.603-270.72 38.004L144.04 928.245c-11.676 11.673-30.606 11.673-42.282 0-11.49-11.489-11.673-30.002-0.547-41.713l0.547-0.562 109.677-109.657c-55.981-78.335-41.131-194.413 36.833-272.377l92.831-92.585c11.571-11.54 30.263-11.653 41.969-0.254l42.587 41.474a29.935 29.935 0 0 1 3.678-4.741l0.548-0.562 19.54-19.538-44.11-42.957c-11.828-11.522-12.057-30.422-0.6-42.23l0.351-0.355 95.875-95.63c76.927-76.926 190.96-92.408 269.23-39.03L879.961 97.755c11.676-11.673 30.606-11.673 42.282 0zM362.451 474.49l-71.916 71.727-1.884 1.911c-61.822 63.545-67.916 156.289-16.185 208.02C324.72 808.4 418.82 801.655 482.43 738.044l74.422-74.234-194.401-189.32z m129.807-5.04l-20.096 20.094a30.035 30.035 0 0 1-4.643 3.8l63.25 61.595a29.82 29.82 0 0 1 5.113-7.308l0.547-0.561 17.532-17.531-61.703-60.089z m260.889-198.691c-52.254-52.254-146.353-45.509-209.964 18.102l-74.422 74.234 194.4 189.322 71.939-71.75 1.862-1.888c61.822-63.545 67.916-156.29 16.185-208.02z" fill="#333333" ></path></symbol><symbol id="icon-xiantiao" viewBox="0 0 1024 1024"><path d="M827.076923 157.538462a39.384615 39.384615 0 1 1-14.375385 76.051692L233.590154 812.701538a39.384615 39.384615 0 1 1-22.291692-22.291692L790.409846 211.298462A39.384615 39.384615 0 0 1 827.076923 157.538462z" fill="#333333" ></path></symbol></svg>',
            r = (r = document.getElementsByTagName("script"))[r.length - 1].getAttribute("data-injectcss");
        if (r && !e.__iconfont__svg__cssinject__) {
            e.__iconfont__svg__cssinject__ = !0;
            try {
                document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
            } catch (c) {
                console && console.log(c)
            }
        }

        function h() {
            i || (i = !0, o())
        }

        s = function () {
            var c, p, d, g;
            (g = document.createElement("div")).innerHTML = l, l = null, (d = g.getElementsByTagName("svg")[0]) && (d.setAttribute("aria-hidden", "true"), d.style.position = "absolute", d.style.width = 0, d.style.height = 0, d.style.overflow = "hidden", c = d, (p = document.body).firstChild ? (g = c, (d = p.firstChild).parentNode.insertBefore(g, d)) : p.appendChild(c))
        }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(s, 0) : (t = function () {
            document.removeEventListener("DOMContentLoaded", t, !1), s()
        }, document.addEventListener("DOMContentLoaded", t, !1)) : document.attachEvent && (o = s, n = e.document, i = !1, (a = function () {
            try {
                n.documentElement.doScroll("left")
            } catch (c) {
                return void setTimeout(a, 50)
            }
            h()
        })(), n.onreadystatechange = function () {
            n.readyState == "complete" && (n.onreadystatechange = null, h())
        })
    })(window);
    const Ve = e => (e = e.replace("#", ""), e = e.replace("(", ""), e = e.replace(")", ""), e = e.replace(/,/, "-"), e),
        tt = e => {
            try {
                if ("touches" in e && e.touches || "targetTouches" in e && e.targetTouches) return !0
            } catch (s) {
            }
            return !1
        }, kt = e => tt(e) ? {clientX: e.touches[0].clientX, clientY: e.touches[0].clientY} : {
            clientX: e.clientX,
            clientY: e.clientY
        }, u = (...e) => {
            typeof window != "undefined" && window.relationGraphDebug && console.log("[relation-graph:debug]", ...e)
        }, K = (...e) => {
            console.warn("[relation-graph]", ...e)
        },
        Mt = (e, s, t) => e ? e.classList.contains(s) ? e : e.classList.contains(t) ? null : Mt(e.parentElement, s, t) : null,
        mt = e => C(this, null, function* () {
            return new Promise((s, t) => {
                setTimeout(() => {
                    s()
                }, e)
            })
        }), Z = e => typeof e == "string" ? Number.parseInt(e) : e, Ne = () => {
            const e = "l", s = "o", t = "g", o = new Date().getFullYear(), n = [];
            return o > 1 && n.push(e), o > 201 && n.push(s), o > 1113 && n.push(t), n.join("")
        }, Ge = () => {
            const e = "c", s = "o", t = "n", o = "s", n = "o", i = "l", a = "e", l = new Date().getFullYear(), r = [];
            return l > 1 && r.push(e), l > 21 && r.push(s), l > 35 && r.push(t), l > 55 && r.push(o), l > 189 && r.push(n), l > 231 && r.push(i), l > 1234 && r.push(a), r.join("")
        }, Nt = e => e.replace(/-/g, "").replace(/\*/g, "-"), Be = e => {
            const s = Ge(), t = Ne(), o = "r-e-l-a-t-i-o-n*g-r-a-p-h",
                n = "h-t-t-p-s-:-/-/-g-i-t-h-u-b-.-c-o-m-/-s-e-e-k-s-d-r-e-a-m-/-r-e-l-a-t-i-o-n-*-g-r-a-p-h";
            window && window[s] && window[s][t](`%c ${Nt(o)} %c Version v${Vt}(${e}) %c More info: ${Nt(n)} %c`, "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff", "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff", "background:#fff ; padding: 1px; border-radius: 0 3px 3px 0;  color: #41b883", "background:transparent"), ut || console.error("[relation-graph]Please introduce component screenfull, for example:https://cdnjs.cloudflare.com/ajax/libs/screenfull.js/5.1.0/screenfull.min.js"), pt || console.error("[relation-graph]Please introduce component html2canvas, for example:https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js")
        }, x = {
            getDescendantNodes(e) {
                const s = [];
                return e.lot && e.lot.childs && e.lot.childs.forEach(t => {
                    s.push(t);
                    const o = x.getDescendantNodes(t);
                    s.push(...o)
                }), s
            }, analysisNodes(e, s, t, o) {
                s.length > o.max_length && (o.max_length = s.length), t > o.max_deep && (o.max_deep = t);
                const n = {level: t, all_size: s.length, all_strength: 0};
                t === 0 && s.forEach(a => {
                    a.lot.parent = void 0
                });
                const i = [];
                s.forEach(a => {
                    e.push(a), a.targetNodes && a.targetNodes.forEach(l => {
                        e.includes(l) || (e.push(l), l.lot.parent = a, i.push(l))
                    })
                }), n.all_strength > o.max_strength && (o.max_strength = n.all_strength), i.length > 0 && x.analysisNodes(e, i, t + 1, o)
            }, analysisNodes4Didirectional(e, s, t, o, n) {
                s.length > o.max_length && (o.max_length = s.length), t > o.max_deep && (o.max_deep = t);
                const i = {level: t, all_size: s.length, all_strength: 0}, a = [];
                s.forEach(r => {
                    r.lot || (r.lot = {childs: []}), r.lot.eached = !0, r.lot.subling = i, r.lot.level = t, e.push(r)
                });
                let l = 0;
                s.forEach(r => {
                    let h = 0;
                    if (n === 0) {
                        let c = 0;
                        r.targetNodes.forEach(p => {
                            p.lot || (p.lot = {
                                eached: !1,
                                childs: []
                            }), p.lot.eached || (x.isAllowShowNode(p) ? (p.lot.eached = !0, p.lot.parent = r, p.lot.index_of_parent = c++, r.lot.childs.push(p), a.push(p), h++) : r.lot.childs.push(p))
                        })
                    } else if (n === -1) {
                        let c = 0;
                        r.targetFrom.forEach(p => {
                            p.lot || (p.lot = {
                                eached: !1,
                                childs: []
                            }), p.lot.eached || (x.isAllowShowNode(p) ? (p.lot.eached = !0, p.lot.parent = r, p.lot.index_of_parent = c++, r.lot.childs.push(p), a.push(p), h++) : r.lot.childs.push(p))
                        })
                    } else {
                        let c = 0;
                        r.targetTo.forEach(p => {
                            p.lot || (p.lot = {
                                eached: !1,
                                childs: []
                            }), p.lot.eached || (x.isAllowShowNode(p) ? (p.lot.eached = !0, p.lot.parent = r, p.lot.index_of_parent = c++, r.lot.childs.push(p), a.push(p), h++) : r.lot.childs.push(p))
                        })
                    }
                    r.lot.strength = h > 0 ? h : 1, i.all_strength += r.lot.strength, r.lot.strength_plus = i.all_strength, r.lot.index_of_level = l, r.lot.childs_size = h, l++
                }), i.all_strength > o.max_strength && (o.max_strength = i.all_strength), a.length > 0 ? x.analysisNodes4Didirectional(e, a, t + (n === -1 ? -1 : 1), o, n) : (e.forEach(r => {
                    r.lot.childs_size > 0 && (r.lot.strengthWithChilds = 0)
                }), e.forEach(r => {
                    r.lot.childs_size === 0 && (r.lot.strengthWithChilds = 1, x.conductStrengthToParents(r))
                }), x.analysisDataTree([e[0]], 0, n))
            }, conductStrengthToParents(e) {
                e.lot.parent && Math.abs(e.lot.level) - 1 === Math.abs(e.lot.parent.lot.level) && (e.lot.parent.lot.strengthWithChilds += 1, x.conductStrengthToParents(e.lot.parent))
            }, analysisDataTree(e, s, t = 1) {
                const o = [];
                let n = 0;
                e.forEach(i => {
                    (i.lot.level === 0 || t === (i.lot.level < 0 ? -1 : 1)) && (i.lot.childs_size > 0 && i.lot.childs.forEach(a => {
                        o.push(a)
                    }), i.lot.parent && n < i.lot.parent.lot.strengthWithChilds_from && (n = i.lot.parent.lot.strengthWithChilds_from), i.lot.strengthWithChilds_from = n, n += i.lot.strengthWithChilds)
                }), o.length > 0 && x.analysisDataTree(o, s + t, t)
            }, conductStrengthToParents4Folder(e) {
                e.lot.parent && (e.lot.parent.lot.strengthWithChilds += 1, x.conductStrengthToParents4Folder(e.lot.parent))
            }, analysisDataFolder(e, s, t) {
                const o = [];
                let n = 0, i;
                e.forEach(a => {
                    (a.lot.level === 0 || t === (a.lot.level < 0 ? -1 : 1)) && (a.lot.childs_size > 0 && a.lot.childs.forEach(l => {
                        o.push(l)
                    }), a.lot.parent && (i ? i !== a.lot.parent && (i = a.lot.parent, n = i.lot.strengthWithChilds_from) : (i = a.lot.parent, n = i.lot.strengthWithChilds_from)), a.lot.strengthWithChilds_from = 1 + n, n += a.lot.strengthWithChilds)
                }), o.length > 0 && x.analysisDataFolder(o, s + t, t)
            }, isAllowShowNode(e, s = 0) {
                return s > 15 ? !0 : (!e.lot || !e.lot.parent || x.isAllowShowNode(e.lot.parent, s + 1) && e.lot.parent.expanded !== !1) && e.isShow && e.isHide !== !0
            }, getNodeWidth(e, s) {
                return e.el.offsetWidth || e.width || s && s.defaultNodeWidth || 50
            }, getNodeHeight(e, s) {
                return e.el.offsetHeight || e.height || s && s.defaultNodeHeight || 50
            }, getNodeXByLotX(e, s) {
                return (s.offset_x || 0) + this.getNodeXByCenterX(e, s, s.lot.x || 0)
            }, getNodeYByLotY(e, s) {
                return (s.offset_y || 0) + this.getNodeYByCenterY(e, s, s.lot.y || 0)
            }, getNodeXByCenterX(e, s, t) {
                return s.alignItems === "right" ? t - x.getNodeWidth(s, e) : s.alignItems === "left" ? t : t - x.getNodeWidth(s, e) / 2
            }, getNodeYByCenterY(e, s, t) {
                return s.alignItems === "top" ? t : s.alignItems === "bottom" ? t - x.getNodeHeight(s, e) : t - x.getNodeHeight(s, e) / 2
            }, getCenterXByNodeX(e, s, t) {
                return t + x.getNodeHeight(s, e) / 2
            }, getCenterYByNodeY(e, s, t) {
                return t + x.getNodeHeight(s, e) / 2
            }, getLotXByNodeX(e, s) {
                const t = s.offset_x || 0;
                return this.getCenterXByNodeX(e, s, s.x || 0) - t
            }, getLotYByNodeY(e, s) {
                const t = s.offset_y || 0;
                return this.getCenterYByNodeY(e, s, s.y || 0) - t
            }, isRectangleOverlap(e, s) {
                const t = e.x + F, o = s.x + F, n = e.el.offsetWidth - F * 2, i = s.el.offsetWidth - F * 2, a = e.y + F,
                    l = s.y + F, r = e.el.offsetHeight - F * 2, h = s.el.offsetHeight - F * 2;
                return !(o >= t + n || o + i <= t || l >= a + r || l + h <= a)
            }, isXOverlap(e, s, t, o) {
                return !(s >= e + t || s + o <= e)
            }, isYOverlap(e, s, t, o) {
                return !(s >= e + t || s + o <= e)
            }, shapesOverlap(e, s, t = 1, o = 1) {
                return this.isRectangleOverlap(e, s)
            }, getNoOverlapLimitedPosition(e, s, t, o) {
                const n = e.x + F, i = e.y + F, a = s + F, l = o.x + F, r = e.el.offsetWidth - F * 2,
                    h = o.el.offsetWidth - F * 2, c = t + F, p = o.y + F, d = e.el.offsetHeight - F * 2,
                    g = o.el.offsetHeight - F * 2;
                let f = e.x, m = e.y;
                const _ = this.isXOverlap(n, l, r, h), y = this.isYOverlap(i, p, d, g);
                return _ ? c < p ? (f = s, m = p - d - F) : c > p && (f = s, m = p + g - F) : y && (a < l ? (f = l - r - F, m = t) : a > l && (f = l + h - F, m = t)), {
                    x: f,
                    y: m
                }
            }, flatNodeData(e, s, t, o) {
                e.forEach(n => {
                    t.push(n), s && o.push({from: s.id, to: n.id});
                    const i = n.childs || n.children;
                    i && i.length > 0 && this.flatNodeData(i, n, t, o)
                })
            }
        }, F = 8, Te = Object.freeze(Object.defineProperty({
            __proto__: null,
            RGNodesAnalytic: x,
            default: x
        }, Symbol.toStringTag, {value: "Module"}));
    var $ = (e => (e.onNodeClick = "onNodeClick", e.onNodeExpand = "onNodeExpand", e.onNodeCollapse = "onNodeCollapse", e.onLineClick = "onLineClick", e.onImageDownload = "onImageDownload", e.onImageSaveAsFile = "onImageSaveAsFile", e.onNodeDragStart = "onNodeDragStart", e.onNodeDragEnd = "onNodeDragEnd", e.onNodeDragging = "onNodeDragging", e.onCanvasDragEnd = "onCanvasDragEnd", e.onContextmenu = "onContextmenu", e.onFullscreen = "onFullscreen", e.onCanvasClick = "onCanvasClick", e.onCanvasSelectionEnd = "onCanvasSelectionEnd", e.onZoomEnd = "onZoomEnd", e.viewResize = "viewResize", e.nodeDragStart = "nodeDragStart", e.nodeDragging = "nodeDragging", e.nodeDragEnd = "nodeDragEnd", e.fullscreen = "fullscreen", e.onResizeStart = "onResizeStart", e.onResizeEnd = "onResizeEnd", e.onLineVertexDropped = "onLineVertexDropped", e.beforeChangeLayout = "beforeChangeLayout", e))($ || {});
    const ft = (e, s) => {
            if (e.id === void 0) throw console.log("node must has id:", e), new Error("node must has option[id]:");
            const t = {
                id: e.id,
                text: e.text !== void 0 ? e.text : "",
                type: e.type !== void 0 ? e.type : "node",
                isShow: !0,
                isHide: e.isHide !== void 0 ? e.isHide : !1,
                expanded: e.expanded !== void 0 ? e.expanded : !0,
                junctionPoint: e.junctionPoint !== void 0 ? e.junctionPoint : void 0,
                alignItems: e.alignItems !== void 0 ? e.alignItems : void 0,
                selected: e.selected !== void 0 ? e.selected : !1,
                flashing: void 0,
                dragging: !1,
                styleClass: e.styleClass !== void 0 ? e.styleClass : "",
                className: e.className !== void 0 ? e.className : "",
                targetNodes: [],
                targetFrom: [],
                targetTo: [],
                nodeShape: e.nodeShape !== void 0 ? e.nodeShape : void 0,
                borderWidth: e.borderWidth !== void 0 ? e.borderWidth : void 0,
                borderColor: e.borderColor !== void 0 ? e.borderColor : void 0,
                fontColor: e.fontColor !== void 0 ? e.fontColor : void 0,
                color: e.color !== void 0 ? e.color : void 0,
                opacity: e.opacity !== void 0 ? e.opacity : 1,
                fixed: e.fixed !== void 0 ? e.fixed : !1,
                width: e.width !== void 0 ? e.width : void 0,
                height: e.height !== void 0 ? e.height : void 0,
                force_weight: e.force_weight,
                x: e.x !== void 0 ? e.x : 0,
                y: e.y !== void 0 ? e.y : 0,
                Fx: 0,
                Fy: 0,
                offset_x: e.offset_x !== void 0 ? e.offset_x : 0,
                offset_y: e.offset_y !== void 0 ? e.offset_y : 0,
                expandHolderPosition: e.expandHolderPosition !== void 0 ? e.expandHolderPosition : void 0,
                innerHTML: e.innerHTML !== void 0 ? e.innerHTML : void 0,
                html: e.html !== void 0 ? e.html : void 0,
                disableDefaultClickEffect: e.disableDefaultClickEffect !== void 0 ? e.disableDefaultClickEffect : void 0,
                disableDrag: e.disableDrag !== void 0 ? e.disableDrag : !1,
                singleNode: !1,
                invisiable: !1,
                zIndex: 0,
                data: e.data !== void 0 ? e.data : {}
            };
            return t.lot = {
                childs: [],
                parent: void 0,
                eached: !1,
                strength: 0
            }, t.el === void 0 && (t.el = {
                offsetWidth: 50,
                offsetHeight: 50
            }, s && (s.defaultNodeWidth && (t.el.offsetWidth = s.defaultNodeWidth + 16), s.defaultNodeHeight && (t.el.offsetHeight = s.defaultNodeHeight + 16))), t.width && (t.el.offsetWidth = t.width), t.height && (t.el.offsetHeight = t.height), t
        },
        Ae = ["Fx", "Fy", "appended", "dragging", "el", "targetFrom", "targetNodes", "targetTo", "type", "lot", "seeks_id"],
        yt = e => {
            if (!e) return;
            const s = {};
            return Object.keys(e).forEach(t => {
                Ae.includes(t) || e[t] !== void 0 && (s[t] = e[t])
            }), s
        }, Ie = Object.freeze(Object.defineProperty({
            __proto__: null,
            json2Node: ft,
            transNodeToJson: yt,
            default: {json2Node: ft, transNodeToJson: yt}
        }, Symbol.toStringTag, {value: "Module"})), ht = e => {
            if (e.from === void 0) throw console.log("error,line must has option[from]:", e), new Error("error,line must has option[from]:");
            if (e.to === void 0) throw console.log("error,line must has option[to]:", e), new Error("error,line must has option[to]:");
            if (typeof e.from != "string") throw console.log("error line from, must be string:", e), new TypeError("error line from, must be string:");
            if (typeof e.to != "string") throw console.log("error line to, must be string:", e), new TypeError("error line to, must be string:");
            const s = {
                from: e.from,
                to: e.to,
                text: e.text !== void 0 ? e.text : "",
                textOffset_x: e.textOffset_x !== void 0 ? e.textOffset_x : void 0,
                textOffset_y: e.textOffset_y !== void 0 ? e.textOffset_y : void 0,
                color: e.color !== void 0 ? e.color : void 0,
                opacity: e.opacity !== void 0 ? e.opacity : 1,
                fontColor: e.fontColor !== void 0 ? e.fontColor : void 0,
                lineWidth: e.lineWidth !== void 0 ? e.lineWidth : void 0,
                lineShape: e.lineShape !== void 0 ? e.lineShape : void 0,
                styleClass: e.styleClass !== void 0 ? e.styleClass : void 0,
                className: e.className !== void 0 ? e.className : void 0,
                isHide: e.isHide !== void 0 ? e.isHide : !1,
                arrow: e.arrow !== void 0 ? e.arrow : void 0,
                animation: e.animation !== void 0 ? e.animation : 0,
                dashType: e.dashType !== void 0 ? e.dashType : 0,
                disableDefaultClickEffect: e.disableDefaultClickEffect !== void 0 ? e.disableDefaultClickEffect : !1,
                showStartArrow: e.showStartArrow !== void 0 ? e.showStartArrow : !1,
                showEndArrow: e.showEndArrow !== void 0 ? e.showEndArrow : !0,
                useTextPath: e.useTextPath !== void 0 ? e.useTextPath : void 0,
                placeText: e.placeText !== void 0 ? e.placeText : void 0,
                textAnchor: e.textAnchor !== void 0 ? e.textAnchor : void 0,
                forDisplayOnly: e.forDisplayOnly || e.from === e.to,
                fromJunctionPoint: e.fromJunctionPoint,
                toJunctionPoint: e.toJunctionPoint,
                force_elastic: e.force_elastic,
                polyLineStartDistance: e.polyLineStartDistance,
                isHideArrow: e.isHideArrow !== void 0 ? e.isHideArrow : void 0,
                hidden: !1,
                lineDirection: e.lineDirection !== void 0 ? e.lineDirection : void 0,
                reverseText: e.reverseText !== void 0 ? e.reverseText : void 0,
                data: e.data !== void 0 ? e.data : {}
            };
            return s.isHideArrow && (s.showEndArrow = !1, s.isHideArrow = !1), s
        }, He = ["arrow", "id", "reverseText", "isReverse"], St = e => {
            if (!e) return;
            const s = {};
            return Object.keys(e).forEach(t => {
                He.includes(t) || e[t] !== void 0 && (s[t] = e[t])
            }), s
        }, vt = (e, s) => {
            !e || e.relations.forEach(t => {
                const o = St(t);
                o && s.push(o)
            })
        }, et = {
            border: "border",
            ltrb: "ltrb",
            tb: "tb",
            lr: "lr",
            left: "left",
            right: "right",
            top: "top",
            bottom: "bottom"
        }, We = Object.freeze(Object.defineProperty({
            __proto__: null,
            json2Line: ht,
            transLineToJson: St,
            transLinkToJson: vt,
            JUNCTION_POINT_STYLE: et,
            default: {json2Line: ht, transLinkToJson: vt}
        }, Symbol.toStringTag, {value: "Module"}));

    class ct {
        constructor(s, t, o) {
            v(this, "graphOptions");
            v(this, "layoutOptions");
            v(this, "graphInstance");
            v(this, "allNodes", []);
            v(this, "isMainLayouer", !0);
            v(this, "requireLinks", !1);
            v(this, "allLinks", []);
            v(this, "rootNode");
            v(this, "currentAnimationStep", 1);
            v(this, "allAnimationStep", 30);
            this.layoutOptions = s, this.graphOptions = t, this.graphInstance = o
        }

        setLinks(s) {
            u("setLinks:", s.length), this.allLinks = s
        }

        refresh() {
            this.placeNodes(this.allNodes, this.rootNode)
        }

        placeNodes(s, t) {
            this.allNodes = s, this.rootNode = t
        }

        snapshotBeforeAnimation() {
            this.allNodes.forEach(s => {
                !x.isAllowShowNode(s) || (s.lot.to_x = x.getNodeXByLotX(this.graphOptions, s), s.lot.to_y = x.getNodeYByLotY(this.graphOptions, s), s.lot.from_x = s.x || 0, s.lot.from_y = s.y || 0, s.lot.placed = !0)
            })
        }

        animationLayout(s = !0) {
            return C(this, null, function* () {
                s && this.snapshotBeforeAnimation();
                const t = this.rootNode;
                t && u("debug0910:create rootNode coordinates:2.1", t.x, t.y), this.currentAnimationStep = 1, this.allAnimationStep = 10, u("[LayoutAnimationEffect]start play...");
                let o = !1;
                return new Promise((n, i) => {
                    this.playAnimation(() => {
                        o || (o = !0, u("[LayoutAnimationEffect]played!"), this.allNodes.forEach(a => {
                            !x.isAllowShowNode(a) || (a.lot.from_x = a.x, a.lot.from_y = a.y, a.x = a.lot.to_x, a.y = a.lot.to_y)
                        }), n())
                    })
                })
            })
        }

        playAnimation(s) {
            if (u("[LayoutAnimationEffect]", this.currentAnimationStep, this.allAnimationStep), this.currentAnimationStep > this.allAnimationStep) {
                s();
                return
            }
            this.allNodes.forEach(t => {
                if (!t.lot.placed) return;
                const {from_x: o, from_y: n, to_x: i, to_y: a} = t.lot;
                if (o !== void 0 && n !== void 0 && i !== void 0 && a !== void 0) {
                    const l = (i - o) / this.allAnimationStep, r = (a - n) / this.allAnimationStep,
                        h = Math.floor(o + this.currentAnimationStep * l),
                        c = Math.floor(n + this.currentAnimationStep * r);
                    (t.x !== h || t.y !== c) && (t.x = h, t.y = c)
                }
            }), this.currentAnimationStep++, this.graphInstance && this.graphInstance.dataUpdated(), requestAnimationFrame(this.playAnimation.bind(this, s))
        }
    }

    class Gt extends ct {
        constructor(t, o, n) {
            super(t, o, n);
            v(this, "enableGatherNodes", !1);
            v(this, "layoutOptions");
            v(this, "levelDistanceArr", []);
            this.layoutOptions = t, u("new SeeksBidirectionalTreeLayouter:", this.layoutOptions), this.layoutOptions.from || (this.layoutOptions.from = "left"), this.layoutOptions.levelDistance && (typeof this.layoutOptions.levelDistance == "string" ? this.levelDistanceArr = this.layoutOptions.levelDistance.split(",").map(i => Number.parseInt(i)) : Array.isArray(this.layoutOptions.levelDistance) && (this.levelDistanceArr = this.layoutOptions.levelDistance)), this.enableGatherNodes = this.layoutOptions.enableGatherNodes
        }

        refresh() {
            return C(this, null, function* () {
                u("SeeksBidirectionalTreeLayouter:refresh:nodes:", this.allNodes.length), yield this.placeNodes(this.allNodes, this.rootNode)
            })
        }

        analysisNodes4Didirectional(t, o, n, i, a) {
            u(`${a} level ${n} size: ${o.length}`), o.length > i.max_length && (i.max_length = o.length), n > i.max_deep && (i.max_deep = n);
            const l = {level: n, all_size: o.length, all_strength: 0}, r = [];
            o.forEach(c => {
                c.lot || (c.lot = {childs: []}), c.lot.eached = !0, c.lot.subling = l, c.lot.level = n, t.push(c)
            });
            let h = 0;
            o.forEach(c => {
                let p = 0, d = a === -1 ? c.targetFrom : c.targetTo;
                n !== 0 && (d = c.targetNodes);
                let g = 0;
                d.forEach(f => {
                    f.lot || (f.lot = {
                        eached: !1,
                        childs: []
                    }), f.lot.eached || (f.lot.parent = c, x.isAllowShowNode(f) ? (f.lot.eached = !0, f.lot.index_of_parent = g++, c.lot.childs.push(f), r.push(f), p++) : c.lot.childs.push(f))
                }), c.lot.strength = p > 0 ? p : 1, l.all_strength += c.lot.strength, c.lot.strength_plus = l.all_strength, c.lot.index_of_level = h, c.lot.childs_size = p, h++
            }), l.all_strength > i.max_strength && (i.max_strength = l.all_strength), r.length > 0 ? this.analysisNodes4Didirectional(t, r, n + a, i, a) : (t.forEach(c => {
                c.lot.childs_size > 0 && (c.lot.strengthWithChilds = 0)
            }), t.forEach(c => {
                c.lot.childs_size === 0 && (c.lot.strengthWithChilds = 1, x.conductStrengthToParents(c))
            }), x.analysisDataTree([t[0]], 0, a))
        }

        placeNodes(t, o) {
            return C(this, null, function* () {
                if (u("SeeksBidirectionalTreeLayouter:placeNodes"), o) u("layout by root:", o); else {
                    console.error("root is null");
                    return
                }
                u("allNodes:", t.length), this.rootNode = o;
                let n = [];
                this.allNodes && this.allNodes.length > 0 ? (n.push(this.rootNode), n = x.getDescendantNodes(this.rootNode), u("groupNodes:", n.length)) : n = t, n.forEach(a => {
                    a.lot.eached = !1, a.lot.notLeafNode = !1, a.lot.childs = [], a.lot.parent = void 0, a.lot.index_of_parent = 0, a.lot.strength = 0, a.lot.strengthWithChilds_from = 0, a.lot.strengthWithChilds = 0, a.lot.placed = !1
                }), this.allNodes = t;
                let i = {max_deep: 1, max_length: 1, max_strength: 1};
                n = [], x.analysisNodes(n, [this.rootNode], 0, i), n.forEach(a => {
                    a.lot.eached = !1, a.lot.notLeafNode = !1, a.lot.childs = [], a.lot.parent = void 0, a.lot.index_of_parent = 0, a.lot.strength = 0, a.lot.strengthWithChilds_from = 0, a.lot.strengthWithChilds = 0, a.lot.placed = !1
                }), u("groupNodes:", n.length), n = [], i = {
                    max_deep: 1,
                    max_length: 1,
                    max_strength: 1
                }, this.analysisNodes4Didirectional(n, [this.rootNode], 0, i, -1), u("groupNodes:L:", n.length), this.placeNodesPosition(this.rootNode, n, i), n = [], i = {
                    max_deep: 1,
                    max_length: 1,
                    max_strength: 1
                }, this.analysisNodes4Didirectional(n, [this.rootNode], 0, i, 1), u("groupNodes:R:", n.length), this.placeNodesPosition(this.rootNode, n, i), this.graphOptions.useAnimationWhenExpanded ? (u("Play layout animation....."), yield this.animationLayout(), u("create rootNode coordinates:3", o.x, o.y)) : (this.allNodes.forEach(a => {
                    if (a.fixed === !0) {
                        a.lot.placed = !0;
                        return
                    }
                    !x.isAllowShowNode(a) || (Number.isNaN(a.lot.x) && (u("bad lot x:", a.text, a.lot.x), a.lot.x = 0), Number.isNaN(a.lot.y) && (u("bad lot y:", a.text, a.lot.y), a.lot.y = 0), a.x = x.getNodeXByLotX(this.graphOptions, a), a.y = x.getNodeYByLotY(this.graphOptions, a), a.lot.placed = !0)
                }), u("create rootNode coordinates:1", o.x, o.y))
            })
        }

        placeNodesPosition(t, o, n) {
            if (t.fixed !== !0) {
                const i = this.layoutOptions.centerOffset_x || 0, a = this.layoutOptions.centerOffset_y || 0;
                t.lot.x = i, t.lot.y = a, this.layoutOptions.fixedRootNode ? (t.lot.x = x.getLotXByNodeX(this.graphOptions, t), t.lot.y = x.getLotYByNodeY(this.graphOptions, t)) : this.layoutOptions.from === "top" ? t.lot.y -= this.graphOptions.viewSize.height / 2 - 100 : this.layoutOptions.from === "bottom" ? t.lot.y += this.graphOptions.viewSize.height / 2 - 200 : this.layoutOptions.from === "right" ? t.lot.x += this.graphOptions.viewSize.width / 2 - 100 : t.lot.x -= this.graphOptions.viewSize.width / 2 - 100, u("debug0910:Graph center:", t.lot.x, t.lot.y, {
                    _center_offset_x: i,
                    _center_offset_y: a
                })
            } else t.origin_x === void 0 && (t.origin_x = t.x, t.origin_y = t.y), t.lot.x = t.origin_x, t.lot.y = t.origin_y, u("\u56FA\u5B9A\u4F4D\u7F6E\u7684rootNode:", t.text, t.x, t.y);
            t.lot.placed = !0, this.placeRelativePosition(t, o, n)
        }

        placeRelativePosition(t, o, n) {
            const i = this.graphOptions.viewSize;
            if (this.layoutOptions.from === "left" || this.layoutOptions.from === "right") {
                const a = Z(this.layoutOptions.min_per_height) || 80, l = Z(this.layoutOptions.max_per_height) || 400,
                    r = Z(this.layoutOptions.min_per_width) || 430, h = Z(this.layoutOptions.max_per_width) || 650,
                    c = a || Math.min(80, l || 80), p = l || Math.min(400, a || 400), d = r || Math.min(430, h || 430),
                    g = h || Math.min(650, r || 650);
                let f = Math.round((i.width - 10) / (n.max_deep + 2));
                f < d && (f = d), f > g && (f = g);
                let m = Math.round(i.height / (n.max_strength + 1));
                m < c && (m = c), m > p && (m = p), o.forEach(_ => {
                    _.fixed !== !0 && _.lot.placed !== !0 && _ !== t && (this.layoutOptions.from === "right" ? _.lot.x = t.lot.x - this.getLevelDistance(_, _.lot.subling.level, f) : _.lot.x = t.lot.x + this.getLevelDistance(_, _.lot.subling.level, f))
                }), o.forEach(_ => {
                    _.fixed !== !0 && _.lot.level !== 0 && (this.layoutOptions.layoutExpansionDirection === "left" || this.layoutOptions.layoutExpansionDirection === "top" ? _.lot.y = t.lot.y - m * _.lot.strengthWithChilds_from : this.layoutOptions.layoutExpansionDirection === "right" || this.layoutOptions.layoutExpansionDirection === "bottom" ? _.lot.y = t.lot.y + m * _.lot.strengthWithChilds_from : _.lot.y = t.lot.y + m * (n.max_strength / -2 + _.lot.strengthWithChilds_from + _.lot.strengthWithChilds / 2))
                }), this.gatherNodes(o, "h", m)
            } else {
                const a = Z(this.layoutOptions.min_per_height) || 350, l = Z(this.layoutOptions.max_per_height) || 400,
                    r = Z(this.layoutOptions.min_per_width) || 250, h = Z(this.layoutOptions.max_per_width) || 500,
                    c = a || Math.min(350, l || 350), p = l || Math.min(400, a || 400),
                    d = r || Math.min(250, h || 250), g = h || Math.min(500, r || 500);
                let f = Math.round((i.width - 10) / (n.max_strength + 2));
                f < d && (f = d), f > g && (f = g);
                let m = Math.round((i.height - 10) / (n.max_deep + 2));
                m < c && (m = c), m > p && (m = p), o.forEach(_ => {
                    _.fixed !== !0 && _.lot.placed !== !0 && _ !== t && (this.layoutOptions.from === "bottom" ? _.lot.y = t.lot.y - this.getLevelDistance(_, _.lot.subling.level, m) : _.lot.y = t.lot.y + this.getLevelDistance(_, _.lot.subling.level, m))
                }), o.forEach(_ => {
                    _.fixed !== !0 && _.lot.level !== 0 && (this.layoutOptions.layoutExpansionDirection === "left" || this.layoutOptions.layoutExpansionDirection === "top" ? _.lot.x = t.lot.x - f * _.lot.strengthWithChilds_from : this.layoutOptions.layoutExpansionDirection === "right" || this.layoutOptions.layoutExpansionDirection === "bottom" ? _.lot.x = t.lot.x + f * _.lot.strengthWithChilds_from : _.lot.x = t.lot.x + f * (n.max_strength / -2 + _.lot.strengthWithChilds_from + _.lot.strengthWithChilds / 2))
                }), this.gatherNodes(o, "v", f)
            }
        }

        gatherNodes(t, o, n) {
            if (!this.enableGatherNodes) return;
            const i = {};
            t.forEach(a => {
                const l = a.lot.level + "";
                i[l] || (i[l] = []), i[l].push(a), a.lot.movedNodeSizeBefore = 1, a.lot.movedNodeSizeAfter = 1
            }), t.forEach(a => {
                if (a.fixed !== !0 && a.lot.level !== 0) {
                    const l = a.lot.level + "", r = i[l];
                    if (a.lot.strengthWithChilds === 1 && a.lot.childs_size <= 1) {
                        const h = this.getBloomingNearByParent(a, a.lot.parent, r, o);
                        h && (o === "h" ? a.lot.y - h.lot.y > 0 ? (a.lot.y = h.lot.y + n * h.lot.movedNodeSizeAfter, h.lot.movedNodeSizeAfter++) : (a.lot.y = h.lot.y - n * h.lot.movedNodeSizeBefore, h.lot.movedNodeSizeBefore++) : a.lot.x - h.lot.x > 0 ? (a.lot.x = h.lot.x + n * h.lot.movedNodeSizeAfter, h.lot.movedNodeSizeAfter++) : (a.lot.x = h.lot.x - n * h.lot.movedNodeSizeBefore, h.lot.movedNodeSizeBefore++))
                    }
                }
            })
        }

        getBloomingNearByParent(t, o, n, i) {
            let a = 9999, l;
            for (const r of n) if (r.lot.childs_size > 1 && r.lot.parent === o) {
                const h = i === "h" ? r.lot.y - o.lot.y : r.lot.x - o.lot.x;
                Math.abs(h) < a && (a = Math.abs(h), l = r)
            }
            if (l && l !== t) return l
        }

        getLevelDistance(t, o, n) {
            const i = Math.abs(o);
            if (this.levelDistanceArr && this.levelDistanceArr.length > 0) {
                let a = 0;
                for (let l = 0; l < i; l++) {
                    const r = l >= this.levelDistanceArr.length ? this.levelDistanceArr[this.levelDistanceArr.length - 1] : this.levelDistanceArr[l];
                    a += r
                }
                return o > 0 ? a : a * -1
            } else return o * n
        }
    }

    function Fe(e, s, t, o, n, i, a, l, r) {
        const h = n - e, c = i - s, p = Math.sqrt(h * h + c * c), d = r * c / p, g = -(r * h) / p, f = e + d, m = s + g,
            _ = e - t / 2, y = e + t / 2, M = s - o / 2, S = s + o / 2;
        let z = [];
        if (h !== 0) {
            let D = (_ - f) / h, V = m + D * c;
            V >= M && V <= S && z.push({x: _, y: V});
            let w = (y - f) / h, b = m + w * c;
            b >= M && b <= S && z.push({x: y, y: b})
        }
        if (c !== 0) {
            let D = (M - m) / c, V = f + D * h;
            V >= _ && V <= y && z.push({x: V, y: M});
            let w = (S - m) / c, b = f + w * h;
            b >= _ && b <= y && z.push({x: b, y: S})
        }
        let X = null, U = 1 / 0;
        return z.forEach(D => {
            const V = Math.sqrt((D.x - n) ** 2 + (D.y - i) ** 2);
            V < U && (U = V, X = D)
        }), X
    }

    const q = {
        getRectPoint(e, s, t, o, n, i, a, l, r = !1, h = 1, c = 1, p = 14) {
            const d = c - (h - 1) / 2, g = e + n / 2, f = s + i / 2, m = t + a / 2, _ = o + l / 2;
            if (h > 1) {
                const w = p * d, b = Fe(g, f, n, i, m, _, a, l, w);
                if (b) return b
            }
            const y = g < m ? 1 : -1, M = f < _ ? 1 : -1;
            if (_ === f) return {x: g + y * n / 2, y: f};
            const S = Math.abs((m - g) / (_ - f)), z = n / i;
            let X = 0, U = 0;
            S < z ? (X = y * i / 2 * S + M * z, U = M * i / 2) : (X = y * n / 2, U = M * n / 2 / S + y * z);
            const D = g + X, V = f + U;
            return {x: D, y: V}
        }, getRectPointBasic(e, s, t, o, n, i, a, l) {
            const r = e + n / 2, h = s + i / 2, c = t + a / 2, p = o + l / 2;
            let d = p === h ? 0 : (c - r) / (p - h);
            d === 0 && (d = (c - r) / (p - h + 1));
            const g = n / l;
            let f = 0, m = 0, _ = "1";
            return -1 * g < d && d < g ? (_ = "2", h < p ? (f = i / 2 * d, m = i / 2) : (f = -1 * i / 2 * d, m = -1 * i / 2)) : (r < c ? (f = 1 * n / 2, m = 1 * n / 2 / d) : (f = -1 * n / 2, m = -1 * n / 2 / d), _ = "3"), {
                x: r + f,
                y: h + m,
                _case: _
            }
        }, getRectJoinPoint(e, s, t, o, n, i, a, l) {
            const r = e + n / 2, h = s + i / 2, c = t + a / 2, p = o + l / 2,
                d = Math.round(Math.atan2(p - h, c - r) * 180 / 3.14) + 135;
            return d >= 0 && d < 90 ? {x: e + n / 2, y: s - 5} : d >= 90 && d < 180 ? {
                x: e + n + 5,
                y: s + i / 2
            } : d >= 180 && d < 270 ? {x: e + n / 2, y: s + i + 5} : {x: e - 5, y: s + i / 2}
        }, getRectHJoinPoint(e, s, t, o, n, i, a) {
            const l = i / 2;
            return e + n < t ? {x: e + n + 5, y: s + l} : e + n < t + a ? {x: e - 5, y: s + l} : {x: e - 5, y: s + l}
        }, getRectLeftJoinPoint(e, s, t, o, n, i, a) {
            const l = i / 2;
            return {x: e, y: s + l}
        }, getRectRightJoinPoint(e, s, t, o, n, i, a) {
            const l = i / 2;
            return {x: e + n, y: s + l}
        }, getRectTopJoinPoint(e, s, t, o, n, i, a) {
            return {x: e + n / 2, y: s}
        }, getRectBottomJoinPoint(e, s, t, o, n, i, a, l, r, h, c, p, d = 14, g) {
            return g !== void 0 ? {x: e + g, y: s + i} : {x: e + n / 2, y: s + i}
        }, getRectVJoinPoint(e, s, t, o, n, i, a, l) {
            const r = n / 2;
            return s + i < o ? {y: s + i + 5, x: e + r} : s + i < o + l ? {y: s - 5, x: e + r} : {y: s - 5, x: e + r}
        }, getBorderPoint(e, s, t, o, n, i, a, l, r) {
            return r === 0 ? this.getCirclePoint(e, s, t, o, n, i, a, l) : this.getRectPoint(e, s, t, o, n, i, a, l)
        }, getBorderPoint4MultiLine(e, s, t, o, n, i, a, l, r, h, c, p, d = 14) {
            return r === 0 ? this.getCirclePoint4MultiLine(e, s, t, o, n, i, a, l, h, c, p, d) : this.getRectPoint(e, s, t, o, n, i, a, l, h, c, p, d)
        }, getCirclePoint(e, s, t, o, n, i, a, l) {
            const r = t + a / 2, h = o + l / 2, c = e + n / 2, p = s + i / 2, d = r - c;
            if (d === 0) return {x: c, y: p - i / 2 * (h < p ? 1 : -1)};
            const f = (h - p) / d, m = Math.sqrt(1 / (1 / (n / 2) ** 2 + f ** 2 / (i / 2) ** 2)) * (r < c ? 1 : -1),
                _ = f * m;
            return {x: c - m, y: p - _}
        }, getCirclePoint4MultiLine(e, s, t, o, n, i, a, l, r, h, c, p, d = 0) {
            let g = t + a / 2;
            const f = o + l / 2;
            let m = e + n / 2;
            const _ = s + i / 2;
            let y = g - m;
            y > -1 && y < 1 && (g = g - 2, m = m + 2, y = -4);
            const z = (c - (h - 1) / 2) * p, X = f - _, U = Math.sqrt(y ** 2 + X ** 2) * z / y, D = X / y, V = n / 2,
                w = i / 2, b = m < g ? -1 : 1,
                N = (-1 * V ** 2 * D * U + V * w * Math.sqrt(Math.abs(w ** 2 + D ** 2 * V ** 2 - U ** 2)) / b) / (w ** 2 + V ** 2 * D ** 2),
                R = D * N + U;
            return {x: m - N, y: _ - R}
        }, getCirclePointBasic(e, s, t, o, n, i, a, l, r) {
            const h = e + n / 2, c = s + i / 2, p = t + a / 2, d = o + l / 2, g = p - h, f = d - c,
                m = Math.sqrt(g * g + f * f), _ = m - r, y = _ * g / m * -1, M = _ * f / m * -1;
            return {x: p + y, y: d + M}
        }, getCirclePointPlus(e, s, t, o, n, i, a, l) {
            const r = e + n / 2, h = s + i / 2, c = t + a / 2, p = o + l / 2, d = c - r, g = p - h,
                f = Math.sqrt(d * d + g * g), m = (f - n / 2) * d / f * -1, _ = (f - i / 2) * g / f * -1;
            return {x: c + m, y: p + _}
        }, getOvalPoint(e, s, t, o, n, i = 180) {
            const a = o * (360 / n), l = (180 - i + a) * Math.PI / 180;
            return {x: e + t * Math.sin(l), y: s + t * Math.cos(l) * -1}
        }, getAngleType(e, s) {
            if (e >= 0 && s >= 0) return 1;
            if (e < 0 && s >= 0) return 2;
            if (e < 0 && s < 0) return 3;
            if (e >= 0 && s < 0) return 4
        }, getTextAngle(e, s, t, o) {
            let n = Math.atan2(o - s, t - e) * 180 / Math.PI;
            return n < 0 && (n += 360), n > 90 && n <= 270 && (n += 180), n >= 360 && (n -= 360), Math.round(n)
        }, getTreePointFromTop(e, s, t, o, n, i) {
            return e ? {
                x: e - 300 + Math.max(600 / ((n === 1 ? 2 : n) - 1), 80) * o,
                y: s + t
            } : {x: (i.canvas_width - i.node_width) / 2, y: (i.canvas_height - i.node_height) / 2 - 200}
        }, getTreePointFromRight(e, s, t, o, n, i) {
            return e ? {
                x: e - t,
                y: s - 200 + Math.max(400 / ((n === 1 ? 2 : n) - 1), 80) * o
            } : {x: (i.canvas_width - i.node_width) / 2 + 300, y: (i.canvas_height - i.node_height) / 2}
        }, getTreePointFromBottom(e, s, t, o, n, i) {
            return e ? {
                x: e - 300 + Math.max(600 / ((n === 1 ? 2 : n) - 1), 80) * o,
                y: s - t
            } : {x: (i.canvas_width - i.node_width) / 2, y: (i.canvas_height - i.node_height) / 2 + 200}
        }, getTreePointFromLeft(e, s, t, o, n, i) {
            return e ? {
                x: e + t,
                y: s - 200 + Math.max(400 / ((n === 1 ? 2 : n) - 1), 80) * o
            } : {x: (i.canvas_width - i.node_width) / 2 - 300, y: (i.canvas_height - i.node_height) / 2}
        }
    };

    class dt extends ct {
        constructor(t, o, n) {
            super(t, o, n);
            v(this, "layoutOptions");
            v(this, "fastStart", !1);
            v(this, "maxLayoutTimes", 300);
            v(this, "byNode", !0);
            v(this, "byLine", !0);
            v(this, "lockX", !1);
            v(this, "lockY", !1);
            v(this, "force_node_repulsion", 1);
            v(this, "force_line_elastic", 1);
            v(this, "justLayoutSingleNode", !1);
            v(this, "layoutTimes", 0);
            v(this, "prev10", []);
            v(this, "visibleNodes", []);
            v(this, "viewUpdate");
            v(this, "calcNodeMap", new WeakMap);
            v(this, "forCalcNodes", []);
            v(this, "_graphEventHandler");
            v(this, "maxVaildLineLength", 300);
            v(this, "minVaildLineLength", 30);
            v(this, "zeroEffectNodeDistance", 400);
            v(this, "minNodeDistance", 30);
            v(this, "maxMoveSpeed", 100);
            this.layoutOptions = t, this.layoutOptions.fastStart !== void 0 && (this.fastStart = this.layoutOptions.fastStart), this.layoutOptions.maxLayoutTimes !== void 0 && (this.maxLayoutTimes = this.layoutOptions.maxLayoutTimes), this.layoutOptions.byNode !== void 0 && (this.byNode = this.layoutOptions.byNode), this.layoutOptions.byLine !== void 0 && (this.byLine = this.layoutOptions.byLine), this.layoutOptions.force_node_repulsion !== void 0 && (this.force_node_repulsion = this.layoutOptions.force_node_repulsion), this.layoutOptions.force_line_elastic !== void 0 && (this.force_line_elastic = this.layoutOptions.force_line_elastic), this.layoutOptions.force_x_coefficient === void 0 && (this.layoutOptions.force_x_coefficient = 1), this.layoutOptions.force_y_coefficient === void 0 && (this.layoutOptions.force_y_coefficient = 1), this.layoutOptions.disableLiveChanges === void 0 && (this.layoutOptions.disableLiveChanges = !1), this.requireLinks = !0
        }

        refresh() {
            this.placeNodes(this.allNodes, this.rootNode)
        }

        placeNodes(t, o) {
            if (u("!!!SeeksForceLayouter.placeNodes"), o) u("layout by root:", o); else {
                u("root is null:", o);
                return
            }
            if (this.allNodes = t, this.rootNode = o, this.layoutOptions.fixedRootNode) {
                if (!Number.isNaN(o.x) && o.x !== void 0) o.lot.x = x.getLotXByNodeX(this.graphOptions, o), o.lot.y = x.getLotYByNodeY(this.graphOptions, o); else {
                    const i = this.layoutOptions.centerOffset_x || 0, a = this.layoutOptions.centerOffset_y || 0;
                    o.lot.x = 0 + i, o.lot.y = 0 + a
                }
                const n = this.easyAnalysisNodes(o);
                this.easyPlaceRelativePosition(o, n), n.forEach(i => {
                    if (i.fixed === !0 || !x.isAllowShowNode(i)) return;
                    const a = i.offset_x || 0, l = i.offset_y || 0;
                    i.x = i.lot.x + a - x.getNodeWidth(i, this.graphOptions) / 2, i.y = i.lot.y + l - x.getNodeHeight(i, this.graphOptions) / 2, i.lot.placed = !0
                })
            } else this.fastStart ? (u("!!!initNodesPosition fastStart"), this.allNodes.forEach(n => {
                n.fixed !== !0 && (n.lot.placed || (n.x || (n.x = Math.floor(Math.random() * 200) - 100), n.x || (n.y = Math.floor(Math.random() * 200) - 100), n.lot.placed = !0))
            })) : (u("!!!initNodesPosition....."), this.easyPlaceGroupNodes(this.rootNode).forEach(i => {
                if (i.fixed === !0 || !x.isAllowShowNode(i)) return;
                const a = i.offset_x || 0, l = i.offset_y || 0;
                i.x = i.lot.x + a - x.getNodeWidth(i, this.graphOptions) / 2, i.y = i.lot.y + l - x.getNodeHeight(i, this.graphOptions) / 2, i.lot.placed = !0
            }));
            if (u("Start Auto Layout....."), this.updateVisibleNodes(), this.isMainLayouer && this.graphOptions.autoLayouting) {
                u("!!!autoLayouting.....");
                return
            }
            this.autoLayout(!0)
        }

        easyPlaceGroupNodes(t) {
            if (u("[layout canvasOffset]", this.graphOptions.viewSize, this.graphOptions.canvasSize), t) {
                t.fixed ? (t.origin_x === void 0 && (t.origin_x = t.x, t.origin_y = t.y), t.lot.x = t.origin_x, t.lot.y = t.origin_y, u("root fixed position:", t.lot.x, t.lot.y)) : this.layoutOptions.fixedRootNode ? (t.lot.x = x.getLotXByNodeX(this.graphOptions, t), t.lot.y = x.getLotYByNodeY(this.graphOptions, t)) : (t.lot.x = 0, t.lot.y = 0, u("root position:", t.lot.x, t.lot.y));
                const o = this.easyAnalysisNodes(t);
                return this.easyPlaceRelativePosition(t, o), o
            }
            return []
        }

        easyAnalysisNodes(t) {
            this.allNodes.forEach(i => {
                i.lot.eached = !1, i.lot.notLeafNode = !1, i.lot.childs = [], i.lot.parent = void 0, i.lot.index_of_parent = 0, i.lot.strength = 0, i.lot.placed = !1
            });
            const o = [], n = {max_deep: 1, max_length: 1, max_strength: 1};
            return x.analysisNodes4Didirectional(o, [t], 0, n, 0), o
        }

        easyPlaceRelativePosition(t, o) {
            o.forEach(i => {
                if (i.lot.subling.level === 1) {
                    const a = i.lot.subling;
                    if (a) {
                        const l = q.getOvalPoint(t.lot.x, t.lot.y, a.level * 50, i.lot.strength_plus - i.lot.strength / 2, a.all_strength, this.layoutOptions.startAngle);
                        i.lot.x = l.x, i.lot.y = l.y
                    }
                }
            }), o.forEach(i => {
                const a = i.lot.subling;
                if (a && a.level > 1) {
                    const l = i.lot.parent.lot.strength_plus - i.lot.parent.lot.strength,
                        h = (i.lot.parent.lot.strength_plus - l) / (i.lot.parent.lot.childs.length + 1) * (i.lot.index_of_parent + 1),
                        c = q.getOvalPoint(t.lot.x, t.lot.y, (a.level - 1) * (100 + (a.level - 1) * 60) + 50, l + h, i.lot.parent.lot.subling.all_strength, this.layoutOptions.startAngle);
                    i.lot.x = c.x, i.lot.y = c.y
                }
            })
        }

        updateVisibleNodes(t) {
            this.visibleNodes = [], t && (this.allNodes = t), this.allNodes.forEach(o => {
                x.isAllowShowNode(o) && (o.lot ? o.lot.placed = !0 : (u("node miss lot:", o.text), o.lot = {
                    placed: !0,
                    childs: []
                }), this.visibleNodes.push(o))
            }), this.resetCalcNodes(), this.connectToGraphInstance(), u("visibleNodes:", this.visibleNodes.length)
        }

        autoLayout(t = !1) {
            this.layoutTimes = 0, this.updateVisibleNodes(), u("Layout set viewUpdate:", this.viewUpdate), this.doForceLayout(0)
        }

        layoutFinished() {
            this.isMainLayouer && (this.graphOptions.autoLayouting = !1), u("Layout finished"), this.layoutOptions.disableLiveChanges && (this.visibleNodes.forEach(t => {
                if (t.fixed) return;
                const o = this.calcNodeMap.get(t);
                o && (t.x = o.x, t.y = o.y)
            }), this.viewUpdate && this.viewUpdate(), u("Layout apply finished")), this.disConnectToGraphInstance()
        }

        resetCalcNodes() {
            u("resetCalcNodes:", this.visibleNodes.length), this.forCalcNodes = [], this.calcNodeMap = new WeakMap, this.visibleNodes.forEach(t => {
                const o = {
                    rgNode: t,
                    Fx: 0,
                    Fy: 0,
                    x: t.x,
                    y: t.y,
                    ignoreForce: t.dragging || this.justLayoutSingleNode && !t.singleNode,
                    force_weight: t.force_weight || 1,
                    forceCenterOffset_X: (t.width || t.el.offsetWidth || 60) / 2,
                    forceCenterOffset_Y: (t.height || t.el.offsetHeight || 60) / 2,
                    fixed: t.fixed || !1
                };
                this.forCalcNodes.push(o), this.calcNodeMap.set(t, o)
            })
        }

        doForceLayout(t) {
            if (this.graphOptions.instanceDestroyed) {
                u("stop layout:instanceDestroyed"), this.layoutFinished();
                return
            }
            let o = "0";
            if (t > 0 ? (this.prev10.length >= 10 && (this.prev10.splice(0, 1), o = (1e3 / ((this.prev10[this.prev10.length - 1] - this.prev10[0]) / 10)).toFixed(1)), this.prev10.push(t)) : this.visibleNodes.length === 0 && this.updateVisibleNodes(), u("this.layoutTimes:", this.layoutTimes, "of", this.maxLayoutTimes, "Current refresh rate:", o, "Hz", this.visibleNodes.length), this.layoutTimes > this.maxLayoutTimes) {
                this.layoutFinished();
                return
            }
            this.isMainLayouer && (this.graphOptions.autoLayouting = !0), this.layoutTimes++, this.calcNodesPosition();
            for (const n of this.forCalcNodes) this.applyToNodePosition(n);
            this.layoutOptions.disableLiveChanges ? requestAnimationFrame(this.doForceLayout.bind(this)) : (this.viewUpdate && this.viewUpdate(), requestAnimationFrame(this.doForceLayout.bind(this)))
        }

        graphEventHandle(t, ...o) {
            if (t === $.nodeDragStart) {
                const n = o[0], i = this.calcNodeMap.get(n);
                i && (i.ignoreForce = !0)
            } else if (t === $.nodeDragging) {
                const n = o[0], i = o[1], a = o[2], l = this.calcNodeMap.get(n);
                l && (l.x = i, l.y = a)
            } else if (t === $.nodeDragEnd) {
                const n = o[0], i = this.calcNodeMap.get(n);
                i && (i.ignoreForce = !1)
            }
        }

        connectToGraphInstance() {
            this.viewUpdate = () => {
                this.graphInstance._dataUpdated()
            }, this._graphEventHandler = this.graphEventHandle.bind(this), this.graphInstance.addEventListener(this._graphEventHandler)
        }

        disConnectToGraphInstance() {
            this.graphInstance.removeEventListener(this._graphEventHandler)
        }

        calcNodesPosition() {
            if (this.byNode) for (let t = 0; t < this.forCalcNodes.length; t++) {
                const o = this.forCalcNodes[t];
                if (!o.ignoreForce && !o.fixed) {
                    for (let n = 0; n < this.forCalcNodes.length; n++) if (t !== n) {
                        const i = this.forCalcNodes[n];
                        if (i.ignoreForce) continue;
                        this.addGravityByNode(o, i)
                    }
                }
            }
            if (this.byLine) {
                if (this.allLinks && this.allLinks.length > 0) {
                    for (const t of this.allLinks) if (!t.forDisplayOnly) {
                        let o = 1;
                        for (const n of t.relations) n.force_elastic && n.force_elastic !== 1 && (o = n.force_elastic);
                        if (this.visibleNodes.includes(t.fromNode) && this.visibleNodes.includes(t.toNode)) {
                            const n = this.calcNodeMap.get(t.fromNode), i = this.calcNodeMap.get(t.toNode);
                            this.addElasticByLine(n, i, o)
                        }
                    }
                } else for (const t of this.visibleNodes) if (t.lot && t.lot.parent) {
                    const o = this.calcNodeMap.get(t.lot.parent), n = this.calcNodeMap.get(t);
                    this.addElasticByLine(o, n, 1)
                }
            }
        }

        stop() {
            u("[SeeksForceLayouter]stop:", this.graphOptions.autoLayouting), this.layoutTimes = 1e6
        }

        addElasticByLine(t, o, n = 1) {
            const i = t.x, a = t.y, l = o.x, r = o.y;
            let h = Math.sqrt((a - r) ** 2 + (i - l) ** 2);
            if (h < this.minVaildLineLength) return;
            h > this.maxVaildLineLength && (h = this.maxVaildLineLength);
            const c = (h - this.minVaildLineLength) * .05 * this.force_line_elastic * n, p = c, d = c, g = (i - l) / h,
                f = (a - r) / h;
            this.addFtoNode(t, g * p * -1, f * p * -1), this.addFtoNode(o, g * d, f * d)
        }

        addGravityByNode(t, o) {
            const n = t.x, i = t.y, a = o.x, l = o.y;
            if (Math.abs(n - a) > this.zeroEffectNodeDistance || Math.abs(i - l) > this.zeroEffectNodeDistance) return;
            const r = Math.sqrt((i - l) ** 2 + (n - a) ** 2);
            if (r > this.zeroEffectNodeDistance) return;
            let h = (this.zeroEffectNodeDistance - r) * .05 * this.force_node_repulsion;
            r < this.minNodeDistance && (h = h * 2);
            const c = (n - a) / r, p = (i - l) / r;
            this.addFtoNode(t, c * h, p * h)
        }

        addFtoNode(t, o, n) {
            if (t.ignoreForce || Number.isNaN(o) || Number.isNaN(n)) return;
            o > 50 && (o = 50), n > 50 && (n = 50), o < -50 && (o = -50), n < -50 && (n = -50);
            const i = t.force_weight || 1;
            this.lockX || (t.Fx += o * (1 / i)), this.lockY || (t.Fy += n * (1 / i))
        }

        applyToNodePosition(t) {
            if (t.fixed) return;
            let o = t.Fx, n = t.Fy;
            if (o > this.maxMoveSpeed && (o = this.maxMoveSpeed), n > this.maxMoveSpeed && (n = this.maxMoveSpeed), o < -this.maxMoveSpeed && (o = -this.maxMoveSpeed), n < -this.maxMoveSpeed && (n = -this.maxMoveSpeed), t.x = t.x + o * this.layoutOptions.force_x_coefficient, t.y = t.y + n * this.layoutOptions.force_y_coefficient, !this.layoutOptions.disableLiveChanges) {
                const i = t.rgNode;
                t.ignoreForce || (i.x = t.x, i.y = t.y)
            }
            t.Fx = t.Fx * .7, t.Fy = t.Fy * .7
        }
    }

    class Bt extends dt {
        constructor(t, o, n) {
            super(t, o, n);
            v(this, "layoutOptions");
            this.layoutOptions = t
        }

        refresh() {
            return C(this, null, function* () {
                u("SeeksCenterLayouter:refresh"), yield this.placeNodes(this.allNodes, this.rootNode)
            })
        }

        placeNodes(t, o) {
            return C(this, null, function* () {
                if (u("SeeksCenterLayouter:placeNodes"), !o) {
                    u("root is null:", o);
                    return
                }
                u("layout by root:", o), this.allNodes = t, this.rootNode = o, t.forEach(a => {
                    a.lot.eached = !1, a.lot.notLeafNode = !1, a.lot.childs = [], a.lot.parent = void 0, a.lot.index_of_parent = 0, a.lot.strength = 0, a.lot.placed = !1
                });
                let n = [], i = {max_deep: 1, max_length: 1, max_strength: 1};
                if (x.analysisNodes(n, [this.rootNode], 0, i), n = [], i = {
                    max_deep: 1,
                    max_length: 1,
                    max_strength: 1
                }, x.analysisNodes4Didirectional(n, [this.rootNode], 0, i, 0), o.fixed) o.origin_x === void 0 && (o.origin_x = o.x, o.origin_y = o.y), o.lot.x = o.origin_x, o.lot.y = o.origin_y, u("\u56FA\u5B9A\u4F4D\u7F6E\u7684rootNode:", o.text, o.x, o.y); else if (this.layoutOptions.fixedRootNode) o.lot.x = x.getLotXByNodeX(this.graphOptions, o), o.lot.y = x.getLotYByNodeY(this.graphOptions, o); else {
                    const a = this.layoutOptions.centerOffset_x || 0, l = this.layoutOptions.centerOffset_y || 0;
                    o.lot.x = 0 + a, o.lot.y = 0 + l
                }
                u("root position:", o.lot.x, o.lot.y), this.placeRelativePosition(this.rootNode, n, i), this.graphOptions.useAnimationWhenExpanded ? (u("Play layout animation....."), yield this.animationLayout()) : n.forEach(a => {
                    if (a.fixed === !0 || !x.isAllowShowNode(a)) return;
                    const l = a.offset_x || 0, r = a.offset_y || 0, h = -x.getNodeWidth(a, this.graphOptions) / 2,
                        c = -x.getNodeHeight(a, this.graphOptions) / 2;
                    a.x = a.lot.x + l + h, a.y = a.lot.y + r + c, a.lot.placed = !0
                })
            })
        }

        getLevelDistanceArr() {
            let t = [];
            if (this.layoutOptions.levelDistance && (typeof this.layoutOptions.levelDistance == "string" ? t = this.layoutOptions.levelDistance.split(",").map(o => Number.parseInt(o)) : Array.isArray(this.layoutOptions.levelDistance) && (t = this.layoutOptions.levelDistance), t.length > 0 && t.length < 10)) for (let o = t.length; o < 10; o++) t.push(t[t.length - 1]);
            return t
        }

        getLevelR(t, o) {
            if (t.length === 0) return;
            let n = 0;
            for (let i = 0; i < o && i < t.length; i++) n += t[i];
            return n
        }

        placeRelativePosition(t, o, n) {
            const i = this.layoutOptions.distance_coefficient === void 0 ? 1 : this.layoutOptions.distance_coefficient,
                a = this.getLevelDistanceArr(),
                l = Math.min(this.graphOptions.viewSize.height, this.graphOptions.viewSize.width) * .4;
            let r = Math.min(Math.max(l, 150), 400) * i;
            u("analyticResult:", this.layoutOptions, n, l, r, i, a);
            let h = 0;
            o.forEach(p => {
                const d = p.lot.subling;
                if (d && d.level === 1) {
                    h = Math.round(d.all_size * 60 / Math.PI / 2), h < r && (h = r);
                    const g = this.getLevelR(a, d.level) || d.level * h,
                        f = q.getOvalPoint(t.lot.x, t.lot.y, g, p.lot.strength_plus - p.lot.strength / 2, d.all_strength, this.layoutOptions.startAngle);
                    p.lot.x = f.x, p.lot.y = f.y
                }
            });
            const c = Math.round(300 * i);
            o.forEach(p => {
                const d = p.lot.subling;
                if (d && d.level > 1) {
                    const g = p.lot.parent.lot.strength_plus - p.lot.parent.lot.strength,
                        m = (p.lot.parent.lot.strength_plus - g) / (p.lot.parent.lot.childs_size + 1) * (p.lot.index_of_parent + 1),
                        _ = this.getLevelR(a, d.level) || (d.level - 1) * c + h,
                        y = q.getOvalPoint(t.lot.x, t.lot.y, _, g + m, p.lot.parent.lot.subling.all_strength, this.layoutOptions.startAngle);
                    p.lot.x = y.x, p.lot.y = y.y
                }
            })
        }
    }

    class Tt extends dt {
        constructor(s, t, o) {
            super(s, t, o)
        }

        refresh() {
            return C(this, null, function* () {
                yield this.placeNodes(this.allNodes, this.rootNode)
            })
        }

        placeNodes(s, t) {
            return C(this, null, function* () {
                if (t) u("layout by root:", t); else {
                    u("root is null:", t);
                    return
                }
                this.allNodes = s, this.rootNode = t, s.forEach(r => {
                    r.lot.eached = !1, r.lot.notLeafNode = !1, r.lot.childs = [], r.lot.parent = void 0, r.lot.index_of_p_childs = 0, r.lot.strength = 0
                });
                const o = this.layoutOptions.centerOffset_x || 0, n = this.layoutOptions.centerOffset_y || 0,
                    i = {x: o, y: n}, a = this.allNodes.length;
                let l = a * 90 / Math.PI / 2;
                l < 200 && (l = 200), l > 800 && (l = 800), this.allNodes.forEach((r, h) => {
                    const c = q.getOvalPoint(i.x, i.y, l, h, a);
                    r.lot.x = c.x, r.lot.y = c.y
                }), this.graphOptions.useAnimationWhenExpanded ? (u("Play layout animation....."), yield this.animationLayout()) : this.allNodes.forEach(r => {
                    if (r.fixed === !0 || !x.isAllowShowNode(r)) return;
                    const h = r.offset_x || 0, c = r.offset_y || 0, p = -x.getNodeWidth(r, this.graphOptions) / 2,
                        d = -x.getNodeHeight(r, this.graphOptions) / 2;
                    r.x = r.lot.x + h + p, r.y = r.lot.y + c + d, r.lot.placed = !0
                })
            })
        }
    }

    class At extends ct {
        constructor(t, o, n) {
            super(t, o, n);
            v(this, "graphOptions");
            v(this, "layoutOptions");
            v(this, "allNodes", []);
            v(this, "__origin_nodes", []);
            this.layoutOptions = t, this.graphOptions = o
        }

        refresh() {
            this.placeNodes(this.__origin_nodes, this.rootNode)
        }

        placeNodes(t, o) {
            if (o) u("layout by root:", o); else {
                u("root is null:", o);
                return
            }
            u("allNodes:", t.length), this.__origin_nodes = t, this.rootNode = o, t.forEach(i => {
                i.lot.eached = !1, i.lot.notLeafNode = !1, i.lot.childs = [], i.lot.parent = void 0, i.lot.index_of_parent = 0, i.lot.strength = 0, i.lot.placed = !1, i.x || (i.x = 0), i.y || (i.y = 0), Number.isNaN(i.x) && (i.x = 0), Number.isNaN(i.y) && (i.y = 0)
            }), this.allNodes = [];
            const n = {max_strength: 1, max_deep: 1, max_length: 1};
            x.analysisNodes4Didirectional(this.allNodes, [this.rootNode], 0, n, 0), u("[layout canvasOffset]", this.graphOptions.viewSize, this.graphOptions.canvasSize)
        }
    }

    class Ue extends ct {
        constructor(t, o, n) {
            super(t, o, n);
            v(this, "graphInstance");
            v(this, "layoutOptions");
            v(this, "levelDistanceArr", []);
            this.layoutOptions = t, u("new SeeksBidirectionalTreeLayouter:", this.layoutOptions), this.layoutOptions.from || (this.layoutOptions.from = "left"), this.layoutOptions.levelDistance && (typeof this.layoutOptions.levelDistance == "string" ? this.levelDistanceArr = this.layoutOptions.levelDistance.split(",").map(i => Number.parseInt(i)) : Array.isArray(this.layoutOptions.levelDistance) && (this.levelDistanceArr = this.layoutOptions.levelDistance)), this.requireLinks = !0, this.graphInstance = n
        }

        refresh() {
            return C(this, null, function* () {
                u("SeeksBidirectionalTreeLayouter:refresh:nodes:", this.allNodes.length), yield this.placeNodes(this.allNodes, this.rootNode)
            })
        }

        analysisNodes4Didirectional(t, o, n, i) {
            this.analysisBothWay(t, o, n, i);
            const a = {};
            t.forEach(h => {
                const c = h.lot.level + "";
                a[c] || (a[c] = []), a[c].push(h), h.lot.subling = {level: h.lot.level, all_size: 0, all_strength: 0}
            }), t.forEach(h => {
                const c = h.lot.level + "", p = a[c], d = p.length;
                h.lot.index_of_level = p.indexOf(h), h.lot.subling.all_size = d, h.lot.subling.all_strength += h.lot.strength || 1, h.lot.strength_plus = h.lot.subling.all_strength
            }), t.forEach(h => {
                h.lot.childs_size > 0 && (h.lot.strengthWithChilds = 0)
            }), t.forEach(h => {
                h.lot.childs_size === 0 && (h.lot.strengthWithChilds = 1, x.conductStrengthToParents(h))
            });
            const l = Object.keys(a).map(h => Number.parseInt(h)).sort(), r = h => {
                const c = h + "", p = a[c];
                let d = 0;
                p.forEach(g => {
                    g.lot.parent && d < g.lot.parent.lot.strengthWithChilds_from && (d = g.lot.parent.lot.strengthWithChilds_from), h === 0 ? d += 1 : g.lot.strengthWithChilds_from = d, u("levels:", h, d, g.text, g.lot.strengthWithChilds), d += g.lot.strengthWithChilds
                })
            };
            [0].forEach(r), l.filter(h => h > 0).forEach(r), l.filter(h => h < 0).forEach(r)
        }

        analysisBothWay(t, o, n, i) {
            u(`level ${n} size: ${o.length}`), o.length > i.max_length && (i.max_length = o.length), n > i.max_deep && (i.max_deep = n);
            const a = {level: n, all_size: o.length, all_strength: 0};
            o.forEach(r => {
                r.lot || (r.lot = {childs: []}), r.lot.eached = !0, r.lot.subling = a, r.lot.level = n, t.push(r)
            });
            let l = 0;
            o.forEach(r => {
                let h = 0, c = 0, p = [];
                r.targetFrom.forEach(d => {
                    d.lot || (d.lot = {
                        eached: !1,
                        childs: []
                    }), d.lot.eached || (d.lot.parent = r, x.isAllowShowNode(d) ? (d.lot.eached = !0, d.lot.index_of_parent = c++, r.lot.childs.push(d), p.push(d), h++) : r.lot.childs.push(d))
                }), this.analysisBothWay(t, p, n - 1, i), p = [], r.targetTo.forEach(d => {
                    d.lot || (d.lot = {
                        eached: !1,
                        childs: []
                    }), d.lot.eached || (d.lot.parent = r, x.isAllowShowNode(d) ? (d.lot.eached = !0, d.lot.index_of_parent = c++, r.lot.childs.push(d), p.push(d), h++) : r.lot.childs.push(d))
                }), this.analysisBothWay(t, p, n + 1, i), r.lot.strength = h > 0 ? h : 1, a.all_strength += r.lot.strength, r.lot.strength_plus = a.all_strength, r.lot.index_of_level = l, r.lot.childs_size = h, l++
            }), a.all_strength > i.max_strength && (i.max_strength = a.all_strength)
        }

        placeNodes(t, o) {
            return C(this, null, function* () {
                if (u("SeeksBidirectionalTreeLayouter:placeNodes"), o) u("layout by root:", o); else {
                    console.error("root is null");
                    return
                }
                this.rootNode = o, this.allNodes = t, u("allNodes:", t.length), t.forEach(h => {
                    h.lot.eached = !1, h.lot.notLeafNode = !1, h.lot.childs = [], h.lot.parent = void 0, h.lot.index_of_parent = 0, h.lot.strength = 0, h.lot.strengthWithChilds_from = 0, h.lot.strengthWithChilds = 0, h.lot.placed = !1
                });
                let n = [], i = {max_deep: 1, max_length: 1, max_strength: 1};
                x.analysisNodes(n, [this.rootNode], 0, i), n = [], i = {
                    max_deep: 1,
                    max_length: 1,
                    max_strength: 1
                }, this.analysisNodes4Didirectional(n, [this.rootNode], 0, i), this.placeNodesPosition(this.rootNode, n, i), u("allNodes:", n.length), this.graphOptions.useAnimationWhenExpanded ? (u("Play layout animation....."), yield this.animationLayout(), u("create rootNode coordinates:3", o.x, o.y)) : (this.allNodes.forEach(h => {
                    if (h.fixed === !0) {
                        h.lot.placed = !0;
                        return
                    }
                    !x.isAllowShowNode(h) || (Number.isNaN(h.lot.x) && (u("bad lot x:", h.text, h.lot.x), h.lot.x = 0), Number.isNaN(h.lot.y) && (u("bad lot y:", h.text, h.lot.y), h.lot.y = 0), h.x = x.getNodeXByLotX(this.graphOptions, h), h.y = x.getNodeYByLotY(this.graphOptions, h), h.lot.placed = !0)
                }), u("create rootNode coordinates:1", o.x, o.y));
                const a = n.filter(h => h.lot.level === 0), l = [];
                this.allLinks.forEach(h => {
                    a.includes(h.fromNode) && !a.includes(h.toNode) && l.push(h.toNode), a.includes(h.toNode) && !a.includes(h.fromNode) && l.push(h.fromNode)
                }), l.forEach(h => {
                    h.fixed = !0
                }), a.push(...l);
                const r = new dt({
                    layoutName: "force",
                    maxLayoutTimes: 100,
                    force_node_repulsion: .1,
                    force_line_elastic: 1,
                    fixedRootNode: !0
                }, this.graphOptions, this.graphInstance);
                r.isMainLayouer = !1, r.requireLinks = !0, this.layoutOptions.from === "left" || this.layoutOptions.from === "right" ? r.lockX = !0 : r.lockY = !0, r.visibleNodes = a, r.setLinks(this.allLinks), r.viewUpdate = this.viewUpdate, r.resetCalcNodes(), r.doForceLayout(0)
            })
        }

        placeNodesPosition(t, o, n) {
            if (t.fixed !== !0) {
                const i = this.layoutOptions.centerOffset_x || 0, a = this.layoutOptions.centerOffset_y || 0;
                t.lot.x = i, t.lot.y = a, this.layoutOptions.fixedRootNode ? (t.lot.x = x.getLotXByNodeX(this.graphOptions, t), t.lot.y = x.getLotYByNodeY(this.graphOptions, t)) : this.layoutOptions.from === "top" ? t.lot.y -= this.graphOptions.viewSize.height / 2 - 100 : this.layoutOptions.from === "bottom" ? t.lot.y += this.graphOptions.viewSize.height / 2 - 200 : this.layoutOptions.from === "right" ? t.lot.x += this.graphOptions.viewSize.width / 2 - 100 : t.lot.x -= this.graphOptions.viewSize.width / 2 - 100, u("debug0910:Graph center:", t.lot.x, t.lot.y, {
                    _center_offset_x: i,
                    _center_offset_y: a
                })
            } else t.origin_x === void 0 && (t.origin_x = t.x, t.origin_y = t.y), t.lot.x = t.origin_x, t.lot.y = t.origin_y, u("\u56FA\u5B9A\u4F4D\u7F6E\u7684rootNode:", t.text, t.x, t.y);
            t.lot.placed = !0, this.placeRelativePosition(t, o, n)
        }

        placeRelativePosition(t, o, n) {
            const i = this.graphOptions.viewSize;
            if (this.layoutOptions.from === "left" || this.layoutOptions.from === "right") {
                const a = Z(this.layoutOptions.min_per_height) || 80, l = Z(this.layoutOptions.max_per_height) || 400,
                    r = Z(this.layoutOptions.min_per_width) || 430, h = Z(this.layoutOptions.max_per_width) || 650;
                let c = Math.round((i.width - 10) / (n.max_deep + 2));
                c < r && (c = r), c > h && (c = h);
                let p = Math.round(i.height / (n.max_strength + 1));
                p < a && (p = a), p > l && (p = l), o.forEach(d => {
                    d.fixed !== !0 && d.lot.placed !== !0 && d !== t && (this.layoutOptions.from === "right" ? d.lot.x = t.lot.x - this.getLevelDistance(d, d.lot.subling.level, c) : d.lot.x = t.lot.x + this.getLevelDistance(d, d.lot.subling.level, c))
                }), o.forEach(d => {
                    d.fixed !== !0 && (d.lot.level === 0 ? d !== t && (d.lot.y = t.lot.y + p * d.lot.index_of_level) : d.lot.y = t.lot.y + p * (n.max_strength / -2 + d.lot.strengthWithChilds_from + d.lot.strengthWithChilds / 2))
                })
            } else {
                const a = Z(this.layoutOptions.min_per_height) || 350, l = Z(this.layoutOptions.max_per_height) || 400,
                    r = Z(this.layoutOptions.min_per_width) || 250, h = Z(this.layoutOptions.max_per_width) || 500;
                let c = Math.round((i.width - 10) / (n.max_strength + 2));
                c < r && (c = r), c > h && (c = h);
                let p = Math.round((i.height - 10) / (n.max_deep + 2));
                p < a && (p = a), p > l && (p = l), o.forEach(d => {
                    d.fixed !== !0 && d.lot.placed !== !0 && d !== t && (this.layoutOptions.from === "bottom" ? d.lot.y = t.lot.y - this.getLevelDistance(d, d.lot.subling.level, p) : d.lot.y = t.lot.y + this.getLevelDistance(d, d.lot.subling.level, p))
                }), o.forEach(d => {
                    d.fixed !== !0 && d.lot.level !== 0 && (d.lot.x = t.lot.x + c * (n.max_strength / -2 + d.lot.strengthWithChilds_from + d.lot.strengthWithChilds / 2))
                })
            }
        }

        getLevelDistance(t, o, n) {
            const i = Math.abs(o);
            if (this.levelDistanceArr && this.levelDistanceArr.length > 0) {
                let a = 0;
                for (let l = 0; l < i; l++) {
                    const r = this.levelDistanceArr[l] || 100;
                    a += r
                }
                return o > 0 ? a : a * -1
            } else return o * n
        }
    }

    class je extends ct {
        constructor(t, o, n) {
            super(t, o, n);
            v(this, "enableGatherNodes", !1);
            v(this, "layoutOptions");
            v(this, "levelDistanceArr", []);
            this.layoutOptions = t, u("new SeeksBidirectionalTreeLayouter:", this.layoutOptions), this.layoutOptions.from || (this.layoutOptions.from = "left"), this.layoutOptions.levelDistance && (typeof this.layoutOptions.levelDistance == "string" ? this.levelDistanceArr = this.layoutOptions.levelDistance.split(",").map(i => Number.parseInt(i)) : Array.isArray(this.layoutOptions.levelDistance) && (this.levelDistanceArr = this.layoutOptions.levelDistance)), this.enableGatherNodes = this.layoutOptions.enableGatherNodes
        }

        refresh() {
            return C(this, null, function* () {
                u("SeeksBidirectionalTreeLayouter:refresh:nodes:", this.allNodes.length), yield this.placeNodes(this.allNodes, this.rootNode)
            })
        }

        analysisNodes4Didirectional(t, o, n, i, a) {
            u(`${a} level ${n} size: ${o.length}`), o.length > i.max_length && (i.max_length = o.length), n > i.max_deep && (i.max_deep = n);
            const l = {level: n, all_size: o.length, all_strength: 0}, r = [];
            o.forEach(c => {
                c.lot || (c.lot = {childs: []}), c.lot.eached = !0, c.lot.subling = l, c.lot.level = n, t.push(c)
            });
            let h = 0;
            o.forEach(c => {
                let p = 0, d = a === -1 ? c.targetFrom : c.targetTo;
                n !== 0 && (d = c.targetNodes);
                let g = 0;
                d.forEach(f => {
                    f.lot || (f.lot = {
                        eached: !1,
                        childs: []
                    }), f.lot.eached || (f.lot.parent = c, x.isAllowShowNode(f) ? (f.lot.eached = !0, f.lot.index_of_parent = g++, c.lot.childs.push(f), r.push(f), p++) : c.lot.childs.push(f))
                }), c.lot.strength = p > 0 ? p : 1, l.all_strength += c.lot.strength, c.lot.strength_plus = l.all_strength, c.lot.index_of_level = h, c.lot.childs_size = p, h++
            }), l.all_strength > i.max_strength && (i.max_strength = l.all_strength), r.length > 0 ? this.analysisNodes4Didirectional(t, r, n + a, i, a) : (t.forEach(c => {
                c.lot.strengthWithChilds = 1, x.conductStrengthToParents4Folder(c)
            }), x.analysisDataFolder([t[0]], 0, a))
        }

        placeNodes(t, o) {
            return C(this, null, function* () {
                if (u("SeeksBidirectionalTreeLayouter:placeNodes"), o) u("layout by root:", o); else {
                    console.error("root is null");
                    return
                }
                this.rootNode = o, this.allNodes = t, u("allNodes:", t.length), t.forEach(a => {
                    a.lot.eached = !1, a.lot.notLeafNode = !1, a.lot.childs = [], a.lot.parent = void 0, a.lot.index_of_parent = 0, a.lot.strength = 0, a.lot.strengthWithChilds_from = 0, a.lot.strengthWithChilds = 0, a.lot.placed = !1
                });
                let n = [], i = {max_deep: 1, max_length: 1, max_strength: 1};
                x.analysisNodes(n, [this.rootNode], 0, i), n = [], i = {
                    max_deep: 1,
                    max_length: 1,
                    max_strength: 1
                }, this.analysisNodes4Didirectional(n, [this.rootNode], 0, i, 1), this.placeNodesPosition(this.rootNode, n, i), u("allNodes:", n.length), this.graphOptions.useAnimationWhenExpanded ? (u("Play layout animation....."), yield this.animationLayout(), u("create rootNode coordinates:3", o.x, o.y)) : (this.allNodes.forEach(a => {
                    if (a.fixed === !0) {
                        a.lot.placed = !0;
                        return
                    }
                    !x.isAllowShowNode(a) || (Number.isNaN(a.lot.x) && (u("bad lot x:", a.text, a.lot.x), a.lot.x = 0), Number.isNaN(a.lot.y) && (u("bad lot y:", a.text, a.lot.y), a.lot.y = 0), a.x = x.getNodeXByLotX(this.graphOptions, a), a.y = x.getNodeYByLotY(this.graphOptions, a), a.lot.placed = !0)
                }), u("create rootNode coordinates:1", o.x, o.y))
            })
        }

        placeNodesPosition(t, o, n) {
            if (t.fixed !== !0) {
                const i = this.layoutOptions.centerOffset_x || 0, a = this.layoutOptions.centerOffset_y || 0;
                t.lot.x = i, t.lot.y = a, this.layoutOptions.fixedRootNode ? (t.lot.x = x.getLotXByNodeX(this.graphOptions, t), t.lot.y = x.getLotYByNodeY(this.graphOptions, t)) : this.layoutOptions.from === "right" ? t.lot.x += this.graphOptions.viewSize.width / 2 - 100 : t.lot.x -= this.graphOptions.viewSize.width / 2 - 100, u("debug0910:Graph center:", t.lot.x, t.lot.y, {
                    _center_offset_x: i,
                    _center_offset_y: a
                })
            } else t.origin_x === void 0 && (t.origin_x = t.x, t.origin_y = t.y), t.lot.x = t.origin_x, t.lot.y = t.origin_y, u("\u56FA\u5B9A\u4F4D\u7F6E\u7684rootNode:", t.text, t.x, t.y);
            t.lot.placed = !0, this.placeRelativePosition(t, o, n)
        }

        placeRelativePosition(t, o, n) {
            const i = Z(this.layoutOptions.min_per_width) || 50, a = Z(this.layoutOptions.min_per_height) || 40;
            o.forEach(l => {
                l.fixed !== !0 && l.lot.placed !== !0 && l !== t && (this.layoutOptions.from === "right" ? l.lot.x = t.lot.x - this.getLevelDistance(l, l.lot.subling.level, i) : l.lot.x = t.lot.x + this.getLevelDistance(l, l.lot.subling.level, i))
            }), o.forEach(l => {
                l.fixed !== !0 && l.lot.level !== 0 && (l.lot.y = t.lot.y + a * (l.lot.strengthWithChilds_from - 1))
            }), this.gatherNodes(o, "h", a)
        }

        gatherNodes(t, o, n) {
            if (!this.enableGatherNodes) return;
            const i = {};
            t.forEach(a => {
                const l = a.lot.level + "";
                i[l] || (i[l] = []), i[l].push(a), a.lot.movedNodeSizeBefore = 1, a.lot.movedNodeSizeAfter = 1
            }), t.forEach(a => {
                if (a.fixed !== !0 && a.lot.level !== 0) {
                    const l = a.lot.level + "", r = i[l];
                    if (a.lot.strengthWithChilds === 1 && a.lot.childs_size <= 1) {
                        const h = this.getBloomingNearByParent(a, a.lot.parent, r, o);
                        h && (o === "h" ? a.lot.y - h.lot.y > 0 ? (a.lot.y = h.lot.y + n * h.lot.movedNodeSizeAfter, h.lot.movedNodeSizeAfter++) : (a.lot.y = h.lot.y - n * h.lot.movedNodeSizeBefore, h.lot.movedNodeSizeBefore++) : a.lot.x - h.lot.x > 0 ? (a.lot.x = h.lot.x + n * h.lot.movedNodeSizeAfter, h.lot.movedNodeSizeAfter++) : (a.lot.x = h.lot.x - n * h.lot.movedNodeSizeBefore, h.lot.movedNodeSizeBefore++))
                    }
                }
            })
        }

        getBloomingNearByParent(t, o, n, i) {
            let a = 9999, l;
            for (const r of n) if (r.lot.childs_size > 1 && r.lot.parent === o) {
                const h = i === "h" ? r.lot.y - o.lot.y : r.lot.x - o.lot.x;
                Math.abs(h) < a && (a = Math.abs(h), l = r)
            }
            if (l && l !== t) return l
        }

        getLevelDistance(t, o, n) {
            const i = Math.abs(o);
            if (this.levelDistanceArr && this.levelDistanceArr.length > 0) {
                let a = 0;
                for (let l = 0; l < i; l++) {
                    const r = l >= this.levelDistanceArr.length ? this.levelDistanceArr[this.levelDistanceArr.length - 1] : this.levelDistanceArr[l];
                    a += r
                }
                return o > 0 ? a : a * -1
            } else return o * n
        }
    }

    const xt = (e, s, t) => {
        t || (console.warn("\u6CE8\u610F\uFF0C\u5728relation-graph@2.1.32\u4EE5\u53CA\u66F4\u6539\u7248\u672C\u4E2D\u4F7F\u7528createLayout\u65B9\u6CD5\u65F6\uFF0C\u9700\u8981\u63D0\u4F9B\u7B2C\u4E09\u4E2A\u53C2\u6570: graphInstance"), console.warn("Note that when using the createLayout method in relation-graph@2.1.32 and changed versions, you need to provide a third parameter: graphInstance")), wt(e);
        let o = null;
        if (e.layoutName === "tree" ? o = new Gt(e, s, t) : e.layoutName === "center" ? o = new Bt(e, s, t) : e.layoutName === "circle" ? o = new Tt(e, s, t) : e.layoutName === "force" ? o = new dt(e, s, t) : e.layoutName === "fixed" ? o = new At(e, s, t) : e.layoutName === "smart-tree" ? o = new Ue(e, s, t) : e.layoutName === "folder" && (o = new je(e, s, t)), !o) throw new Error("unknown layout: " + e.layoutName);
        return s.isNeedShowAutoLayoutButton = e.allowAutoLayoutIfSupport !== !1 && o.autoLayout !== void 0, o
    }, wt = e => {
        if (typeof e.centerOffset_x == "string" && (e.centerOffset_x = parseInt(e.centerOffset_x)), typeof e.centerOffset_y == "string" && (e.centerOffset_y = parseInt(e.centerOffset_y)), e.layoutName === "center") {
            const s = e;
            s.layoutDirection === void 0 && (s.layoutDirection = "h"), s.centerOffset_x === void 0 && (s.centerOffset_x = 0), s.centerOffset_y === void 0 && (s.centerOffset_y = 0), s.layoutDirection = void 0
        } else if (e.layoutName.includes("tree")) {
            const s = e;
            s.layoutDirection === void 0 && (s.layoutDirection = "h"), s.centerOffset_x === void 0 && (s.centerOffset_x = 0), s.centerOffset_y === void 0 && (s.centerOffset_y = 0), s.from === void 0 && (s.from = "top"), s.levelDistance === void 0 && (s.levelDistance = ""), (s.from === "top" || s.from === "bottom") && (s.layoutDirection = "v", u("set layoutDirection=v"), u("set defaultJunctionPoint=tb"), s.min_per_width === void 0 && (s.min_per_width = 100), s.max_per_width === void 0 && (s.max_per_width = 500), s.min_per_height === void 0 && (s.min_per_height = 300), s.max_per_height === void 0 && (s.max_per_height = 500)), (s.from === "left" || s.from === "right") && (s.layoutDirection = "h", u("set defaultJunctionPoint=lr"), s.min_per_width === void 0 && (s.min_per_width = 300), s.max_per_width === void 0 && (s.max_per_width = 500), s.min_per_height === void 0 && (s.min_per_height = 100), s.max_per_height === void 0 && (s.max_per_height = 500))
        } else (e.layoutName === "fixed" || e.layoutName === "force") && (e.layoutDirection = void 0)
    }, Xe = Object.freeze(Object.defineProperty({
        __proto__: null,
        createLayout: xt,
        appendDefaultOptions4Layout: wt,
        default: {createLayout: xt, appendDefaultOptions4Layout: wt}
    }, Symbol.toStringTag, {value: "Module"})), Et = {id: "rg-newNodeTemplate", x: 0, y: 0, text: "", styleClass: ""};
    let Ye = 0;
    const Ct = e => {
        !e.backgroundImage && (e.backgroundImage = e.backgrounImage), !e.backgroundImageNoRepeat && (e.backgroundImageNoRepeat = e.backgrounImageNoRepeat), typeof e.graphOffset_x == "string" && (e.graphOffset_x = parseInt(e.graphOffset_x)), typeof e.graphOffset_y == "string" && (e.graphOffset_y = parseInt(e.graphOffset_y)), e.defaultPloyLineRadius && (e.defaultPolyLineRadius = e.defaultPloyLineRadius);
        const s = {
            instanceId: "",
            debug: !0,
            graphLoading: !1,
            graphLoadingText: "",
            showMaskWhenLayouting: !1,
            instanceDestroyed: !1,
            useHorizontalView: !1,
            oldVueVersion: !1,
            ovUseNodeSlot: !1,
            ovUseLineSlot: !1,
            ovUseToolbarSlot: !1,
            ovUseNodeExpandHolderSlot: !1,
            showDebugPanel: !1,
            backgroundColor: void 0,
            backgroundImage: void 0,
            backgroundImageNoRepeat: void 0,
            downloadImageFileName: "",
            disableZoom: !1,
            disableDragNode: !1,
            disableDragLine: !0,
            selectionMode: !1,
            moveToCenterWhenRefresh: !0,
            zoomToFitWhenRefresh: !0,
            useAnimationWhenRefresh: !1,
            defaultFocusRootNode: !0,
            disableNodeClickEffect: !1,
            disableLineClickEffect: !1,
            allowShowFullscreenMenu: !0,
            allowShowZoomMenu: !0,
            allowAutoLayoutIfSupport: !0,
            allowShowRefreshButton: !0,
            allowShowDownloadButton: !0,
            backgrounImageNoRepeat: !1,
            allowShowMiniToolBar: !0,
            toolBarVersion: "v2",
            toolBarDirection: "v",
            toolBarPositionH: "right",
            toolBarPositionV: "center",
            allowSwitchLineShape: !1,
            allowSwitchJunctionPoint: !1,
            isMoveByParentNode: !1,
            defaultExpandHolderPosition: "hide",
            defaultExpandHolderColor: void 0,
            defaultNodeBorderWidth: void 0,
            defaultNodeColor: "#409EFF",
            defaultNodeBorderColor: "#0c7ff6",
            defaultNodeFontColor: "#ffffff",
            defaultLineColor: "#cccccc",
            checkedLineColor: "#FD8B37",
            defaultLineFontColor: void 0,
            defaultLineWidth: 1,
            defaultLineShape: void 0,
            defaultLineTextOffset_x: void 0,
            defaultLineTextOffset_y: void 0,
            defaultNodeShape: void 0,
            defaultNodeWidth: void 0,
            defaultNodeHeight: void 0,
            defaultShowLineLabel: !0,
            hideNodeContentByZoom: !1,
            defaultJunctionPoint: void 0,
            defaultBottomJuctionPoint_X: void 0,
            defaultPolyLineRadius: void 0,
            disableDragCanvas: !1,
            placeSingleNode: !0,
            placeOtherGroup: !0,
            lineUseTextPath: !1,
            lineTextMaxLength: 66,
            multiLineDistance: 14,
            graphOffset_x: 0,
            graphOffset_y: 0,
            viewSize: {width: 300, height: 300},
            viewELSize: {width: 1300, height: 800, left: 0, top: 100},
            viewNVInfo: {width: 1300, height: 800, x: 0, y: 100},
            canvasNVInfo: {width: 1300, height: 800, x: 0, y: 100},
            defaultLineMarker: {
                markerWidth: 12,
                markerHeight: 12,
                refX: 6,
                refY: 6,
                color: void 0,
                data: "M2,2 L10,6 L2,10 L6,6 L2,2"
            },
            allowShowSettingPanel: !1,
            allowShowMiniNameFilter: !0,
            fullscreen: !1,
            checkedNodeId: "",
            checkedLineId: "",
            checkedLinkId: "",
            layouts: [],
            layoutLabel: "",
            layoutName: "tree",
            layoutClassName: "",
            layoutDirection: "h",
            useAnimationWhenExpanded: !1,
            reLayoutWhenExpandedOrCollapsed: !1,
            autoLayouting: !1,
            layouter: void 0,
            isNeedShowAutoLayoutButton: !1,
            canvasZoom: 100,
            showEasyView: !1,
            performanceMode: !1,
            canvasOpacity: 1,
            showSingleNode: !0,
            showNodeLabel: !0,
            showNodeShortLabel: !0,
            canvasSize: {width: 10, height: 10},
            canvasOffset: {x: 25, y: 27, zoom_buff_x: 0, zoom_buff_y: 0},
            creatingSelection: !1,
            selectionView: {x: 25, y: 27, width: 0, height: 0},
            creatingNodePlot: !1,
            showTemplateNode: !0,
            newNodeTemplate: ft(JSON.parse(JSON.stringify(Et))),
            creatingLinePlot: !1,
            newLineTemplate: {
                from: "newRelationTemplate-from",
                to: "newRelationTemplate-to",
                color: "",
                text: "new line"
            },
            newLinkTemplate: {
                fromNode: null,
                toNodeObject: null,
                toNode: {nothing: !0, x: 400, y: 400, el: {offsetWidth: 30, offsetHeight: 30}},
                relations: [{}]
            },
            data: {},
            editingLineController: {
                show: !1,
                link: null,
                line: null,
                startPoint: {x: 0, y: 0},
                endPoint: {x: 0, y: 0},
                text: {show: !0, x: 0, y: 0, width: 10, height: 10},
                ctrlPoints: []
            },
            editingController: {show: !1, nodes: [], x: 0, y: 0, width: 100, height: 100},
            nodeConnectController: {show: !1, node: null, x: 0, y: 0, width: 100, height: 100},
            showReferenceLine: !0,
            editingReferenceLine: {
                show: !1,
                directionV: !1,
                directionH: !1,
                v_x: 0,
                v_y: 0,
                v_height: 0,
                h_x: 0,
                h_y: 0,
                h_width: 0
            },
            showMiniView: !1,
            miniViewVisibleHandle: {x: 0, y: 0, width: 100, height: 100, emptyContent: !1},
            snapshotting: !1
        };
        if (s.newLineTemplate = ht(s.newLineTemplate), e.layout && e.layouts) throw new Error("Graph options cannot have both layout and layouts properties !");
        const t = e.debug === !0;
        t && u("RGOptions:user instance options:", e), window && (window.relationGraphDebug = t);
        const o = Object.keys(s);
        e && Object.keys(e).forEach(i => {
            if (i === "layouts" || i === "layout") return;
            const a = e[i];
            if (!o.includes(i)) {
                u("RGOptions: unknow option key:", i);
                return
            }
            if (typeof a == "object") {
                u("RGOptions:user setting object:", i, a);
                const l = s[i];
                if (l && !Array.isArray(l) && a) Object.keys(l).forEach(r => {
                    l[r] = a[r]
                }); else if (Array.isArray(l)) {
                    const r = [];
                    a.forEach(h => {
                        h && typeof h == "object" ? r.push(JSON.parse(JSON.stringify(h))) : r.push(h)
                    }), s[i] = r
                } else s[i] = a
            } else s[i] = a
        });
        let n = [];
        return !e.layouts || !Array.isArray(e.layouts) || e.layouts.length === 0 ? e.layout ? n = [e.layout] : n = [{
            label: "\u4E2D\u5FC3",
            layoutName: "center",
            layoutDirection: "v"
        }] : n = e.layouts, u("final layouts:", n), s.layouts = n.map(i => JSON.parse(JSON.stringify(i))), s.disableNodeClickEffect && (s.defaultFocusRootNode = !1), wt(s.layouts[0]), bt(s.layouts[0], s), s
    }, bt = (e, s) => {
        u("applyDefaultOptionsByLayout", e.layoutName, s), e.layoutName === "SeeksCenterLayouter" || e.layoutName === "center" ? (s.defaultNodeShape === void 0 && (s.defaultNodeShape = 0), s.defaultLineShape === void 0 && (s.defaultLineShape = 1), s.defaultJunctionPoint === void 0 && (s.defaultJunctionPoint = "border")) : e.layoutName === "SeeksBidirectionalTreeLayouter" || e.layoutName.includes("tree") ? (s.defaultNodeBorderWidth === void 0 && (s.defaultNodeBorderWidth = 0), s.defaultNodeShape === void 0 && (s.defaultNodeShape = 1), s.defaultLineShape === void 0 && (s.defaultLineShape = 4), (e.from === "top" || e.from === "bottom") && (s.layoutDirection = "v", u("set layoutDirection=v"), s.defaultLineShape === 4 && (s.defaultJunctionPoint === void 0 && (s.defaultJunctionPoint = "tb"), u("set defaultJunctionPoint=tb"))), (e.from === "left" || e.from === "right") && (s.layoutDirection = "h", u("set layoutDirection=h"), s.defaultLineShape === 4 && (s.defaultJunctionPoint === void 0 && (s.defaultJunctionPoint = "lr"), u("set defaultJunctionPoint=lr")))) : e.layoutName === "fixed" ? s.zoomToFitWhenRefresh = !1 : e.layoutName === "force" && (s.moveToCenterWhenRefresh = !1, s.zoomToFitWhenRefresh = !1), s.defaultNodeShape === void 0 && (s.defaultNodeShape = 0), s.defaultLineShape === void 0 && (s.defaultLineShape = 1), s.defaultJunctionPoint === void 0 && (s.defaultJunctionPoint = "border")
    }, Lt = e => {
        const s = Ct(e);
        return u("RGOptions:new RGOptions:by:", e), u("RGOptions:new RGOptions:", s), s.instanceId || (s.instanceId = `RGIns-${Ye++}`), s
    }, Ze = Object.freeze(Object.defineProperty({
        __proto__: null,
        newNodeTemplate: Et,
        createDefaultConfig: Ct,
        applyDefaultOptionsByLayout: bt,
        newInstanceOptions: Lt,
        default: {newInstanceOptions: Lt, createDefaultConfig: Ct, applyDefaultOptionsByLayout: bt}
    }, Symbol.toStringTag, {value: "Module"}));

    class Je {
        constructor(s, t) {
            v(this, "options");
            v(this, "listeners");
            v(this, "isReact", !1);
            v(this, "updateViewHook", () => {
            });
            v(this, "_dataUpdating", !1);
            v(this, "_dataUpdatingNext", !1);
            v(this, "eventHandlers", []);
            v(this, "_hook");
            this.listeners = t, this.options = Lt(s), u("new RelationGraph:", this)
        }

        enableDebugLog(s) {
            this.options.debug = s, window && (window.relationGraphDebug = s)
        }

        setUpdateViewHook(s) {
            this.isReact = !0, this.updateViewHook = s
        }

        _dataUpdated() {
            if (this._dataUpdating) {
                this._dataUpdatingNext = !0;
                return
            }
            this._dataUpdating = !0, requestAnimationFrame(this._doSomethingAfterDataUpdated.bind(this))
        }

        _doSomethingAfterDataUpdated() {
            u("_dataUpdated:", this._dataUpdatingNext), this._dataUpdating = !0, this.updateVisbleViewNodes(), this.updateEasyView(), this.updateViewHook(), this._dataUpdating = !1, this._dataUpdatingNext && (this._dataUpdatingNext = !1, requestAnimationFrame(this._doSomethingAfterDataUpdated.bind(this)))
        }

        addEventListener(s) {
            this.eventHandlers.includes(s) || this.eventHandlers.push(s)
        }

        removeEventListener(s) {
            const t = this.eventHandlers.indexOf(s);
            t !== -1 && this.eventHandlers.splice(t, 1)
        }

        setEventEmitHook(s) {
            this._hook = s
        }

        emitEvent(s, ...t) {
            let o = this.defaultEventHandler(s, ...t);
            for (const n of this.eventHandlers) {
                const i = n(s, ...t);
                o != null && (o = i)
            }
            if (this._hook && this._hook(s, ...t), o != null) return o
        }

        defaultEventHandler(s, ...t) {
            if (s === $.nodeDragStart) this.listeners.onNodeDragStart && this.listeners.onNodeDragStart(t[0], t[1]); else if (s === $.nodeDragging) {
                if (this.listeners.onNodeDragging) {
                    const o = t[0], n = t[1], i = t[2], a = t[5];
                    return this.listeners.onNodeDragging(o, n, i, a)
                }
            } else if (s === $.nodeDragEnd) {
                const o = t[0], n = t[1];
                this.listeners.onNodeDragEnd && this.listeners.onNodeDragEnd(o, n)
            } else if (s === $.onZoomEnd) this.listeners.onZoomEnd && this.listeners.onZoomEnd(); else if (s === $.beforeChangeLayout) {
                if (this.listeners.beforeChangeLayout) {
                    const o = t[0];
                    return this.listeners.beforeChangeLayout(o)
                }
            } else if (s === $.onNodeClick) {
                if (this.listeners.onNodeClick) {
                    const o = t[0], n = t[1];
                    this.listeners.onNodeClick(o, n)
                }
            } else if (s === $.onImageDownload) {
                if (this.listeners.onImageDownload) {
                    const o = t[0], n = t[1];
                    return this.listeners.onImageDownload(o, n)
                }
            } else if (s === $.onImageSaveAsFile) {
                if (this.listeners.onImageSaveAsFile) {
                    const o = t[0], n = t[1], i = t[2];
                    return this.listeners.onImageSaveAsFile(o, n, i)
                }
            } else if (s === $.onLineClick) {
                if (this.listeners.onLineClick) {
                    const o = t[0], n = t[1], i = t[2];
                    this.listeners.onLineClick(o, n, i)
                }
            } else if (s === $.onNodeExpand) {
                if (this.listeners.onNodeExpand) {
                    const o = t[0], n = t[1];
                    this.listeners.onNodeExpand(o, n)
                }
            } else if (s === $.onNodeCollapse) {
                if (this.listeners.onNodeCollapse) {
                    const o = t[0], n = t[1];
                    this.listeners.onNodeCollapse(o, n)
                }
            } else if (s === $.onCanvasDragEnd) {
                if (this.listeners.onCanvasDragEnd) {
                    const o = t[0];
                    this.listeners.onCanvasDragEnd(o)
                }
            } else if (s === $.onCanvasClick) {
                if (this.listeners.onCanvasClick) {
                    const o = t[0];
                    this.listeners.onCanvasClick(o)
                }
            } else if (s === $.onCanvasSelectionEnd) {
                if (this.listeners.onCanvasSelectionEnd) {
                    const o = t[0], n = t[1];
                    this.listeners.onCanvasSelectionEnd(o, n)
                }
            } else if (s === $.onContextmenu) {
                if (this.listeners.onContextmenu) {
                    const o = t[0], n = t[1], i = t[2];
                    this.listeners.onContextmenu(o, n, i)
                }
            } else if (s === $.onFullscreen && this.listeners.onFullscreen) return this.listeners.onFullscreen(this.options.fullscreen)
        }
    }

    class qe extends Je {
        constructor(t, o) {
            super(t, o);
            v(this, "$dom");
            v(this, "$canvasDom");
            v(this, "resizeObserver");
            v(this, "resizeListenerMap", new WeakMap);
            v(this, "nodeMap", new WeakMap);
            this.resizeObserver = new ResizeObserver((n, i) => {
                for (const a of n) {
                    const l = this.resizeListenerMap.get(a.target);
                    l ? a.borderBoxSize ? l(a.borderBoxSize[0].inlineSize, a.borderBoxSize[0].blockSize) : l(a.target.clientWidth, a.target.clientHeight) : a.borderBoxSize ? this._onNodeResize(a.target, a.borderBoxSize[0].inlineSize, a.borderBoxSize[0].blockSize) : this._onNodeResize(a.target, a.target.clientWidth, a.target.clientHeight)
                }
            })
        }

        setDom(t) {
            this.$dom = t, this.addResizeListener(this.$dom, (o, n) => {
                u("resizeListener:this.$dom"), this.refreshNVAnalysisInfo(), this.updateEasyView(), setTimeout(() => {
                    u("resizeListener:updateVisbleViewNodes"), this.zoom(-1), this.zoom(1), this.emitEvent($.viewResize, {
                        width: o,
                        height: n
                    })
                }, 500)
            })
        }

        setCanvasDom(t) {
            this.$canvasDom = t
        }

        getBoundingClientRect() {
            return this.$dom.getBoundingClientRect()
        }

        addResizeListener(t, o) {
            this.resizeListenerMap.set(t, o), this.resizeObserver.observe(t)
        }

        _onNodeResize(t, o, n) {
            if (o === 0 || n === 0) return;
            const i = this.nodeMap.get(t), a = i.el.offsetWidth, l = i.el.offsetHeight;
            i && (a !== o || l !== n) && (u("Node resized:", i.id, a, ",", l, " > ", o, ",", n), this.updateNodeOffsetSize(i, o, n))
        }

        addNodeResizeListener(t, o) {
            this.nodeMap.set(t, o), this.resizeObserver.observe(t)
        }

        removeNodeResizeListener(t) {
            this.nodeMap.delete(t), this.resizeObserver.unobserve(t)
        }

        removeResizeListener(t) {
            this.resizeListenerMap.delete(t), this.resizeObserver.unobserve(t)
        }
    }

    class Ke extends qe {
        constructor(t, o) {
            super(t, o);
            v(this, "graphData", {rootNode: void 0, nodes: [], links: [], elementLines: []});
            v(this, "seeksNodeIdIndex", 0);
            v(this, "allLineColors", []);
            v(this, "userLayouerClass");
            v(this, "layouter");
            v(this, "reactiveData");
            v(this, "disableNextLayoutAnimation", !1);
            v(this, "nextLineId", 0);
            v(this, "elLineUpdating", !1)
        }

        setReactiveData(t, o) {
            this.reactiveData = o, this.graphData = t, this.allLineColors = o.allLineColors, Object.assign(o.options, this.options), this.options = o.options
        }

        setReactiveDataVue3(t, o) {
            this.reactiveData = o, this.graphData = t, this.allLineColors = o.allLineColors, Object.assign(o.options, this.options), this.options = o.options
        }

        _setOptions(t) {
            const o = Lt(t);
            this.reactiveData ? Object.assign(this.reactiveData.options, o) : Object.assign(this.options, o)
        }

        _initLayoutByLayoutOptions(t) {
            this.options.layoutClassName = t.layoutClassName, this.options.layoutLabel = t.label, this.options.layoutName = t.layoutName, this.options.layoutDirection = t.layoutDirection, this.layouter = xt(t, this.options, this)
        }

        initLayouter() {
            if (this.userLayouerClass) u("Use user layouter:", this.userLayouerClass), this.layouter = this.userLayouerClass; else if (this.options.layouts && this.options.layouts.length > 0) {
                const t = this.options.layouts[0];
                u("[change layout]Create default layouter\uFF1A", this.options.layoutName), this._initLayoutByLayoutOptions(t)
            } else u("Not set option: layout/layouts\uFF01");
            u("Layouter instance:", this.layouter)
        }

        _setJsonData(t, o = !1) {
            return C(this, null, function* () {
                yield this.clearGraph(), u("set jsonData:", t), this.loadGraphJsonData(t)
            })
        }

        clearGraph() {
            return C(this, null, function* () {
                this.graphData.nodes = [], this.graphData.links = [], this.graphData.elementLines = [], this.graphData.rootNode = void 0
            })
        }

        clearElementLines() {
            return C(this, null, function* () {
                this.graphData.elementLines = []
            })
        }

        generateNewNodeId(t = 5) {
            const o = this.generateNewUUID(t);
            return this.getNodeById(o) ? this.generateNewNodeId(t + 1) : o
        }

        generateNewUUID(t = 5) {
            const o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let n = "";
            const i = t > 30 ? 30 : t;
            for (let a = 0; a < i; a++) n += o[Math.floor(Math.random() * o.length)];
            return n
        }

        loadNodes(t) {
            const o = {};
            this.graphData.nodes.forEach(i => {
                o[i.id] = i
            });
            const n = [];
            t.forEach(i => {
                let a = o[i.id];
                a || (a = ft(i, this.options), a && (a.seeks_id = this.seeksNodeIdIndex++, o[a.id] = a, n.push(a)))
            }), this.graphData.nodes.push(...n)
        }

        loadLines(t) {
            const o = {};
            this.graphData.nodes.forEach(a => {
                o[a.id] = a
            });
            const n = {};
            this.graphData.links.forEach(a => {
                n[a.seeks_id] = a
            });
            const i = [];
            t.forEach(a => {
                let l = !1, r, h;
                if (typeof a.from == "object" ? r = a.from : r = o[a.from], typeof a.to == "object" ? h = a.to : h = o[a.to], !r) {
                    console.error("Can not found from node:", a);
                    return
                }
                if (!h) {
                    console.error("Can not found to node:", a);
                    return
                }
                const c = `${r.seeks_id}-${h.seeks_id}`, p = `${h.seeks_id}-${r.seeks_id}`, d = ht(a);
                let g = n[c], f = !1;
                g || (g = n[p], g ? f = !0 : (l = !0, g = {
                    seeks_id: c,
                    fromNode: r,
                    toNode: h,
                    appended: !1,
                    forDisplayOnly: !0,
                    relations: []
                }));
                let m = d.arrow;
                d.isHideArrow || (m = this.getLineArrow(d.color)), r.targetNodes || (r.targetNodes = []), h.targetNodes || (h.targetNodes = []), d.forDisplayOnly || (r.targetNodes.includes(h) || r.targetNodes.push(h), h.targetNodes.includes(r) || h.targetNodes.push(r), r.targetTo.includes(h) || r.targetTo.push(h), h.targetFrom.includes(r) || h.targetFrom.push(r), g.forDisplayOnly = !1);
                let _ = !1;
                for (let y = 0; y < g.relations.length; y++) if (d.id && g.relations[y].id === d.id) {
                    _ = !0;
                    break
                }
                _ === !1 && (d.id || (d.id = this.getNextLineId(g)), d.isReverse = f, d.arrow = m, g.relations.push(d)), l && (i.push(g), n[g.seeks_id] = g, g.appended = !1)
            }), this.graphData.links.push(...i)
        }

        getNextLineId(t) {
            const o = this.nextLineId++, n = `${t.seeks_id}-${o}`;
            for (let i = 0; i < t.relations.length; i++) if (t.relations[i].id === n) return this.getNextLineId(t);
            return n
        }

        flatNodeData(t, o, n, i) {
            x.flatNodeData(t, o, n, i)
        }

        loadGraphJsonData(t) {
            t.lines || (t.lines = t.relations, console.warn("[relation-graph] For compatibility with older versionsm, Use jsonData.relations as jsonData.lines, It is recommended that you define your data using")), t.lines || (t.lines = t.links, console.warn("[relation-graph] For compatibility with older versionsm, Use jsonData.links as jsonData.lines, It is recommended that you define your data using"));
            const o = t.nodes, n = [], i = [];
            this.flatNodeData(o, null, n, i), t.lines.forEach(a => {
                i.push(a)
            }), this.loadNodes(n), u("Nodes is initialized"), this.loadLines(i), this._dataUpdated(), setTimeout(() => {
                t.elementLines && this.addElementLines(t.elementLines)
            }, 500)
        }

        getLineArrow(t, o = !1, n = !1) {
            const i = o ? "start-" : "";
            if (n) return `${this.options.instanceId}-${i}arrow-checked`;
            if (t) {
                const a = Ve(t);
                return this.allLineColors.map(l => l.id).includes(a) || this.allLineColors.push({
                    id: a,
                    color: t
                }), `${this.options.instanceId}-${i}arrow-${a}`
            } else return `${this.options.instanceId}-${i}arrow-default`
        }

        getNodes() {
            return this.graphData.nodes
        }

        getLinks() {
            return this.graphData.links
        }

        transRGNodeToJsonObject(t) {
            const o = yt(t);
            return o.selected = !1, o
        }

        transRGLinkToJsonObject(t) {
            const o = [];
            return vt(t, o), o
        }

        transRGLineToJsonObject(t) {
            return St(t)
        }

        getGraphJsonData() {
            const t = [], o = [];
            return this.graphData.nodes.forEach(n => {
                const i = yt(n);
                i && t.push(i)
            }), this.graphData.links.forEach(n => {
                vt(n, o)
            }), {rootId: this.graphData.rootNode ? this.graphData.rootNode.id : "", nodes: t, lines: o}
        }

        getGraphJsonOptions() {
            const t = {},
                o = ["layouter", "autoLayouting", "canvasNVInfo", "canvasOffset", "canvasZoom", "fullscreen", "instanceId", "layoutClassName", "layoutDirection", "layoutLabel", "layoutName", "resetViewSize", "viewELSize", "viewNVInfo", "viewSize", "canvasSize", "newLinkTemplate", "newLineTemplate", "newNodeTemplate"];
            return Object.keys(this.options).forEach(n => {
                o.includes(n) || (t[n] = this.options[n])
            }), t
        }

        printGraphJsonData() {
            console.log("graph options:", JSON.stringify(this.getGraphJsonOptions())), console.log("graph json data:", JSON.stringify(this.getGraphJsonData()))
        }

        getNodeById(t) {
            for (let o = 0; o < this.graphData.nodes.length; o++) if (this.graphData.nodes[o].id === t) return this.graphData.nodes[o]
        }

        getLinkById(t) {
            for (let o = 0; o < this.graphData.links.length; o++) if (this.graphData.links[o].seeks_id === t) return this.graphData.links[o]
        }

        getLinkByLineId(t) {
            for (let o = 0; o < this.graphData.links.length; o++) if (this.graphData.links[o].relations.findIndex(n => n.id === t) !== -1) return this.graphData.links[o]
        }

        addNodes(t) {
            u("addNodes:", t), this.loadNodes(t), this._dataUpdated()
        }

        addLines(t) {
            u("addLines:", t), this.loadLines(t), this._dataUpdated()
        }

        addElementLines(t) {
            u("addElementLines:", t), t.forEach(o => {
                const n = document.getElementById(o.from), i = document.getElementById(o.to);
                n || console.error("Can not found from HTMLElement: #" + o.from), i || console.error("Can not found toHTMLElement: #" + o.to);
                const a = ht(o);
                let l = a.arrow;
                a.isHideArrow || (l = this.getLineArrow(a.color)), a.arrow = l, a.forDisplayOnly = !0;
                let r;
                for (const h of this.graphData.elementLines) if (h.fromNode.id === a.from && h.toNode.id === a.to || h.fromNode.id === a.to && h.toNode.id === a.from) {
                    r = h;
                    break
                }
                if (r) r.relations.push(a); else {
                    a.id || (a.id = `rg-ell-${a.from}-${a.to}`);
                    const h = {
                        id: a.from,
                        type: "el",
                        nodeShape: 1,
                        junctionPoint: "lr",
                        x: 0,
                        y: 0,
                        el: {offsetWidth: 10, offsetHeight: 10}
                    }, c = {
                        id: a.to,
                        type: "el",
                        nodeShape: 1,
                        junctionPoint: "lr",
                        x: 0,
                        y: 0,
                        el: {offsetWidth: 10, offsetHeight: 10}
                    };
                    r = {
                        seeks_id: "ell-" + this.generateNewUUID(8),
                        fromNode: h,
                        toNode: c,
                        relations: [a],
                        appended: !0,
                        forDisplayOnly: !0
                    }, this._updateElementLinePosition(n, r.fromNode), this._updateElementLinePosition(i, r.toNode), this.graphData.elementLines.push(r)
                }
            }), this.updateElementLines(), this._dataUpdated()
        }

        getElementLineById(t) {
            for (const o of this.graphData.elementLines) for (const n of o.relations) if (n.id === t) return n
        }

        getElementLines() {
            const t = [];
            return this.graphData.elementLines.forEach(o => {
                t.push(...o.relations)
            }), t
        }

        removeElementLine(t) {
            u("removeElementLine:", t);
            for (const o of this.graphData.elementLines) if (o === t) {
                this.graphData.elementLines.splice(this.graphData.elementLines.indexOf(o), 1);
                return
            } else for (const n of o.relations) if (n === t) {
                this.graphData.elementLines.splice(o.relations.indexOf(n), 1);
                return
            }
        }

        removeELementLineById(t) {
            u("removeELementLineById:", t);
            for (const o of this.graphData.elementLines) if (o.seeks_id === t) {
                this.removeElementLine(o);
                return
            } else for (const n of o.relations) if (n.id === t) {
                this.removeElementLine(n);
                return
            }
        }

        updateElementLines() {
            u("updateElementLines:", this.graphData.elementLines.length), this.graphData.elementLines.length !== 0 && (this.elLineUpdating || (this.elLineUpdating = !0, setTimeout(() => {
                this.elLineUpdating = !1, this._updateElementLines()
            }, 50)))
        }

        _updateElementLines() {
            this.graphData.elementLines.forEach(t => {
                const o = document.getElementById(t.relations[0].from), n = document.getElementById(t.relations[0].to);
                if (!o) {
                    t.relations.forEach(i => {
                        i.isHide = !0
                    });
                    return
                }
                if (!n) {
                    t.relations.forEach(i => {
                        i.isHide = !0
                    });
                    return
                }
                if (this._updateElementLinePosition(o, t.fromNode), this._updateElementLinePosition(n, t.toNode), t.fromNode.el.offsetWidth === 0 && t.fromNode.el.offsetHeight === 0) {
                    t.relations.forEach(i => {
                        i.isHide = !0
                    });
                    return
                }
                if (t.toNode.el.offsetWidth === 0 && t.toNode.el.offsetHeight === 0) {
                    t.relations.forEach(i => {
                        i.isHide = !0
                    });
                    return
                }
                t.relations.forEach(i => {
                    i.isHide = !1
                })
            }), this._dataUpdated()
        }

        _updateElementLinePosition(t, o) {
            if (!t) return;
            const n = t.getBoundingClientRect(), i = this.$canvasDom.getBoundingClientRect();
            o.x = (n.x - i.x) / (this.options.canvasZoom / 100), o.y = (n.y - i.y) / (this.options.canvasZoom / 100), o.el.offsetWidth = n.width / (this.options.canvasZoom / 100), o.el.offsetHeight = n.height / (this.options.canvasZoom / 100)
        }

        getElementPosition(t) {
            const n = document.getElementById(t).getBoundingClientRect(), i = this.$canvasDom.getBoundingClientRect(),
                a = (n.x - i.x) / (this.options.canvasZoom / 100), l = (n.y - i.y) / (this.options.canvasZoom / 100);
            return {x: a, y: l}
        }

        removeNodeById(t) {
            let o = 0;
            for (let i = 0; i < this.graphData.links.length; i++) {
                const a = this.graphData.links[i];
                (a.fromNode.id === t || a.toNode.id === t) && (this.removeLink(a), i--, o++)
            }
            u("Removed link\uFF1A", t, o);
            let n = 0;
            for (let i = 0; i < this.graphData.nodes.length; i++) if (this.graphData.nodes[i].id === t) {
                this.graphData.nodes.splice(i, 1), n++;
                break
            }
            u("Removed node\uFF1A", t, n), this._dataUpdated()
        }

        removeNode(t) {
            this.removeNodeById(t.id), this._dataUpdated()
        }

        removeLinkByTwoNode(t, o) {
            for (const n of this.getLinks()) if (n.fromNode.id === t && n.toNode.id === o || n.fromNode.id === t && n.toNode.id === o) {
                this.removeLink(n);
                break
            }
            this._dataUpdated()
        }

        getGroupByNode(t, o = []) {
            o.includes(t) || o.push(t);
            for (const n of t.targetNodes) o.includes(n) || this.getGroupByNode(n, o);
            return o
        }

        _clearItem(t, o) {
            for (let n = 0; n < t.length; n++) t[n] === o && (t.splice(n, 1), n--)
        }

        removeNodeRef(t, o) {
            t && (t.targetNodes && this._clearItem(t.targetNodes, o), t.targetFrom && this._clearItem(t.targetFrom, o), t.targetTo && this._clearItem(t.targetTo, o))
        }

        removeLinkById(t) {
            u("removeLinkById:", t);
            for (let o = 0; o < this.graphData.links.length; o++) {
                const n = this.graphData.links[o];
                n.seeks_id === t && (this.removeNodeRef(n.fromNode, n.toNode), this.removeNodeRef(n.toNode, n.fromNode), this.graphData.links.splice(o, 1), o--)
            }
            this._dataUpdated()
        }

        removeLink(t) {
            u("removeLink:", t), this.removeLinkById(t.seeks_id), this._dataUpdated()
        }

        removeLine(t, o) {
            u("removeLine:", t, o);
            for (let n = 0; n < t.relations.length; n++) t.relations[n] === o && t.relations.splice(n, 1);
            t.relations.length === 0 && this.removeLink(t), this._dataUpdated()
        }

        removeLineById(t) {
            u("removeLineById:", t);
            for (const o of this.graphData.links) {
                for (let n = 0; n < o.relations.length; n++) o.relations[n].id === t && (o.relations.splice(n, 1), n--);
                o.relations.length === 0 && this.removeLink(o)
            }
            this._dataUpdated()
        }

        setNodePosition(t, o, n) {
            t.x = o, t.y = n
        }

        getGraphOffet() {
            const t = this.options.graphOffset_x || 0, o = this.options.graphOffset_y || 0;
            return {offset_x: t, offset_y: o}
        }

        setCanvasCenter(t, o) {
            const n = this.options.viewSize.width / 2, i = this.options.viewSize.height / 2, a = this.getGraphOffet();
            this.setCanvasOffset(n - t + a.offset_x, i - o + a.offset_y), this._dataUpdated()
        }

        setCanvasOffset(t, o) {
            this.options.canvasOffset.x = t, this.options.canvasOffset.y = o, this._dataUpdated()
        }

        findGroupNodes(t, o) {
            o.push(t), t.targetNodes.forEach(n => {
                o.includes(n) || this.findGroupNodes(n, o)
            })
        }

        resetViewSize(t = !1) {
            !this.options || (this.options.viewSize.width = this.$dom.getBoundingClientRect().width, this.options.viewSize.height = this.$dom.getBoundingClientRect().height, t && (this.options.canvasZoom = 100, this.setCanvasCenter(0, 0)), u("resetViewSize:1:", this.options.viewSize.width, this.options.viewSize.height, this.options.canvasOffset.x, this.options.canvasOffset.y), this.refreshNVAnalysisInfo(), this._dataUpdated())
        }

        refreshNVAnalysisInfo() {
            if (!this.$dom) {
                console.error("cannot get view size !");
                return
            }
            const t = {NMCanvasCenter: {x: 0, y: 0}}, o = this.$dom.getBoundingClientRect();
            this.options.viewNVInfo.x = o.left, this.options.viewNVInfo.y = o.top, this.options.viewNVInfo.width = o.width, this.options.viewNVInfo.height = o.height, u("resetViewSize:", o.width, o.height, o.left, o.top);
            const n = this.options.canvasSize.width * (this.options.canvasZoom / 100),
                i = this.options.canvasSize.height * (this.options.canvasZoom / 100);
            t.NMCanvasCenter.x = this.options.canvasOffset.x + this.options.canvasSize.width / 2, t.NMCanvasCenter.y = this.options.canvasOffset.y + this.options.canvasSize.height / 2, this.options.canvasNVInfo.x = t.NMCanvasCenter.x - n / 2, this.options.canvasNVInfo.y = t.NMCanvasCenter.y - i / 2, this.options.canvasNVInfo.width = n, this.options.canvasNVInfo.height = i, this.options.viewELSize.width = o.width, this.options.viewELSize.height = o.height, this.options.viewELSize.left = o.left, this.options.viewELSize.top = o.top
        }

        getStuffSize(t) {
            const o = t || this.graphData.nodes;
            let n = 9999999, i = 9999999, a = -9999999, l = -9999999;
            o.forEach(p => {
                x.isAllowShowNode(p) && (p.x < n && (n = p.x), p.x > a && (a = p.x + p.el.offsetWidth), p.y < i && (i = p.y), p.y > l && (l = p.y + p.el.offsetHeight))
            });
            const r = 100, h = a - n + r, c = l - i + r;
            return {
                width: h,
                height: c,
                minX: n === 9999999 ? 0 : n,
                minY: i === 9999999 ? 0 : i,
                maxX: a === -9999999 ? 0 : a,
                maxY: l === -9999999 ? 0 : l
            }
        }

        getNodesCenter() {
            const t = this.getStuffSize();
            u("getStuffSize:", t);
            const o = t.minX + (t.maxX - t.minX) / 2, n = t.minY + (t.maxY - t.minY) / 2;
            return {x: o, y: n}
        }

        querySearchAsync(t) {
            if (u("fetch-suggestions", t), t = t.trim(), t === "") return;
            const o = [];
            return this.graphData.nodes.forEach(n => {
                u("fetch:", n.text), n.text.includes(t) && o.push(n)
            }), u("fetched:", o.length), o
        }

        printOptions() {
            const t = this.getGraphJsonOptions();
            console.log("options:", t), console.log("options-json-string:"), console.log(JSON.stringify(t))
        }

        printData() {
            const t = this.getGraphJsonData();
            console.log("data:", t), console.log("data-json-string:"), console.log(JSON.stringify(t))
        }

        loading(t = "") {
            this.options.graphLoading = !0, this.options.graphLoadingText = t
        }

        clearLoading() {
            this.options.graphLoading = !1, this.options.graphLoadingText = ""
        }

        updateVisbleViewNodes(t = !1) {
            !t && (!this.options.performanceMode || this.options.showEasyView) || this._updateVisbleViewNodes()
        }

        _updateVisbleViewNodes() {
            const t = this.getBoundingClientRect(), o = this.getCanvasCoordinateByClientCoordinate({x: t.x, y: t.y}),
                n = this.getCanvasCoordinateByClientCoordinate({
                    x: t.x + this.options.viewELSize.width,
                    y: t.y + this.options.viewELSize.height
                }), i = this.options.snapshotting;
            let a = 0;
            for (const l of this.graphData.nodes) {
                let r = !0;
                i || l.alwaysRender ? r = !0 : ((l.x > n.x || l.y > n.y) && (r = !1), (l.x + l.el.offsetWidth < o.x || l.y + l.el.offsetHeight < o.y) && (r = !1)), l.invisiable = !r, !r && a++
            }
            for (const l of this.graphData.links) {
                if (i) {
                    l.invisiable = !1;
                    continue
                }
                let r = !1;
                l.fromNode.invisiable && l.toNode.invisiable && (r = !0), l.invisiable = r
            }
            u("updateVisbleViewNodes:", this.options.showEasyView, n.x, a)
        }
    }

    class Qe extends Ke {
        constructor(t, o) {
            super(t, o);
            v(this, "$watermarkDom", null);
            v(this, "$watermarkPosition", "br");
            v(this, "$backgroundDom", null)
        }

        setWatermarkDom(t, o = !0, n = !1, i = "br") {
            o && (this.$watermarkDom = t), this.$watermarkPosition = i
        }

        setBackgroundDom(t, o = !0, n = !0) {
            o && (this.$backgroundDom = t)
        }

        dataURLToBlob(t) {
            try {
                const o = t.split(","), n = o[0], i = n && n.match(/:(.*?);/)[1], a = atob(o[1]);
                let l = a.length;
                const r = new Uint8Array(l);
                for (; l--;) r[l] = a.charCodeAt(l);
                return new Blob([r], {type: i})
            } catch (o) {
                console.error("[relation-graph]Create and download image error:dataURLToBlob:dataurl", t), console.error("[relation-graph]error object", o)
            }
        }

        createGraphCanvas(t = "png") {
            return C(this, null, function* () {
                const o = this.options.canvasZoom, n = this.$canvasDom.clientWidth, i = this.$canvasDom.clientHeight,
                    a = this.options.autoLayouting;
                a && this.stopAutoLayout(), this.loading("Generating..."), this.options.snapshotting = !0;
                const l = yield this.createGraphMainCanvas(t),
                    r = this.$backgroundDom ? yield this.createGraphBackgroundCanvas(t) : null,
                    h = this.$watermarkDom ? yield this.createGraphWatermarkCanvas(t) : null,
                    c = this.mergeCanvas(r, l, h);
                return this.options.canvasSize.width = n, this.options.canvasSize.height = i, this.options.snapshotting = !1, this._zoomEnd(100, o), this.updateVisbleViewNodes(), this.updateElementLines(), a && this.startAutoLayout(), this.clearLoading(), this.dataUpdated(), c
            })
        }

        mergeCanvas(t, o, n) {
            const i = window.devicePixelRatio, a = document.createElement("canvas"), l = this.options.canvasSize.width,
                r = this.options.canvasSize.height;
            a.width = l * i, a.height = r * i, a.style.width = `${l}px`, a.style.height = `${r}px`;
            const h = a.getContext("2d");
            if (a.getContext("2d").scale(1, 1), t ? h.drawImage(t, 0, 0) : (h.fillStyle = !this.options.backgroundColor || this.options.backgroundColor === "transparent" ? "#ffffff" : this.options.backgroundColor, h.fillRect(0, 0, a.width, a.height)), h.drawImage(o, 0, 0), n) {
                const c = this.$watermarkDom.getBoundingClientRect(), p = c.width, d = c.height;
                let g = l - p - 20, f = r - d - 20;
                this.$watermarkPosition === "bl" ? (g = 20, f = r - d - 20) : this.$watermarkPosition === "tl" ? (g = 20, f = 20) : this.$watermarkPosition === "tr" && (g = l - p - 20, f = 20), h.drawImage(n, g * i, f * i)
            }
            return a
        }

        createGraphBackgroundCanvas(t = "png") {
            return C(this, null, function* () {
                const o = window.devicePixelRatio, n = document.createElement("canvas"),
                    i = this.options.canvasSize.width, a = this.options.canvasSize.height;
                n.width = i * o, n.height = a * o, n.style.width = `${i}px`, n.style.height = `${a}px`, n.getContext("2d").scale(o, o);
                const l = this.$backgroundDom;
                l.style.width = this.options.canvasSize.width + "px", l.style.height = this.options.canvasSize.height + "px";
                const r = {
                    backgroundColor: "#ffffff",
                    scale: 1,
                    canvas: n,
                    logging: !0,
                    width: this.options.canvasSize.width,
                    height: this.options.canvasSize.height,
                    useCORS: !0
                }, h = yield this.createImage(l, r, t, "");
                return l.style.width = "", l.style.height = "", h
            })
        }

        createGraphWatermarkCanvas(t = "png") {
            return C(this, null, function* () {
                const o = this.$canvasDom.clientWidth, n = this.$canvasDom.clientHeight, i = window.devicePixelRatio,
                    a = document.createElement("canvas");
                a.width = o * i, a.height = n * i, a.style.width = `${o}px`, a.style.height = `${n}px`, a.getContext("2d").scale(i, i);
                const l = this.$watermarkDom, r = {
                    backgroundColor: "transparent",
                    scale: 1,
                    canvas: a,
                    logging: !0,
                    width: o,
                    height: n,
                    useCORS: !0
                };
                return yield this.createImage(l, r, t, "")
            })
        }

        createGraphMainCanvas(t = "png") {
            return C(this, null, function* () {
                const o = this.options.canvasZoom, n = this.options.canvasOffset.x, i = this.options.canvasOffset.y;
                this.options.checkedNodeId = "", this.options.canvasZoom = 100, this._zoomEnd(o, this.options.canvasZoom), this.updateVisbleViewNodes(!0), yield mt(500);
                const a = this.$canvasDom;
                let l = 999999, r = 999999, h = -999999, c = -999999;
                this.graphData.nodes.forEach(w => {
                    w.x < l && (l = w.x), w.x > h && (h = w.x + w.el.offsetWidth), w.y < r && (r = w.y), w.y > c && (c = w.y + w.el.offsetHeight)
                });
                const p = new WeakMap, d = this.$canvasDom.querySelectorAll(".rel-canvas-slot");
                for (const w of d) {
                    let b = 999999, N = 999999, R = -999999, H = -999999;
                    for (const E of w.children) {
                        const L = E, O = L.offsetLeft, B = L.offsetTop;
                        O < b && (b = O), O > R && (R = O + L.offsetWidth), B < N && (N = B), B > H && (H = B + L.offsetHeight)
                    }
                    b < l && (l = b), N < r && (r = N), R > h && (h = R), H > c && (c = H), b !== 999999 && p.set(w, {
                        offsetX: b,
                        offsetY: N
                    })
                }
                const g = 200;
                l = l - g, r = r - g, h = h + g, c = c + g;
                const f = l, m = r;
                this.graphData.nodes.forEach(w => {
                    w.x = w.x - f, w.y = w.y - m
                });
                for (const w of d) {
                    const b = w;
                    b.style.marginLeft = -f + "px", b.style.marginTop = -m + "px"
                }
                this.updateElementLines();
                const _ = this.$canvasDom.querySelectorAll(".rel-lines-svg-el-lines");
                _.forEach(w => {
                    const b = w;
                    b.style.width = "4000px", b.style.height = "4000px"
                }), this.options.canvasOffset.x = 0, this.options.canvasOffset.y = 0;
                const y = h - l, M = c - r, S = window.devicePixelRatio;
                this.options.canvasSize.width = y, this.options.canvasSize.height = M, u("export image:", {
                    _image_width: y,
                    _image_height: M,
                    _min_x: l,
                    _min_y: r,
                    _max_x: h,
                    _max_y: c,
                    devicePixelRatio: window.devicePixelRatio
                }), window.scrollTo(0, 0);
                const z = document.createElement("canvas"), X = y, U = M;
                z.width = X * S, z.height = U * S, z.style.width = `${X}px`, z.style.height = `${U}px`, z.getContext("2d").scale(S, S);
                const D = {
                    backgroundColor: "transparent",
                    scale: 1,
                    canvas: z,
                    logging: !0,
                    width: this.options.canvasSize.width,
                    height: this.options.canvasSize.height,
                    useCORS: !0
                };
                this.dataUpdated(), yield mt(1e3);
                const V = yield this.createImage(a, D, t, "");
                return d.forEach(w => {
                    const b = w;
                    b.style.marginLeft = "0px", b.style.marginTop = "0px"
                }), this.graphData.nodes.forEach(w => {
                    w.x = w.x + f, w.y = w.y + m
                }), _.forEach(w => {
                    const b = w;
                    b.style.width = "1px", b.style.height = "1px"
                }), this.options.canvasOffset.x = n, this.options.canvasOffset.y = i, this.options.canvasZoom = o, V
            })
        }

        createImage(t, o, n, i) {
            return C(this, null, function* () {
                return u("createImage:", o), yield Dt.default(t, o)
            })
        }

        getImageBase64(t = "png") {
            return C(this, null, function* () {
                const o = yield this.createGraphCanvas(t), n = document.body.appendChild(o);
                n.style.display = "none";
                const i = n.toDataURL(`image/${t}`);
                return document.body.removeChild(n), i
            })
        }

        downloadAsImage(t = "png", o) {
            return C(this, null, function* () {
                if (this.emitEvent($.onImageDownload, this.$canvasDom, t) === !1) return;
                if (this.graphData.nodes.length === 0) throw new Error("No nodes, no content to export!");
                o || (o = this.options.downloadImageFileName), o || (o = `relation-graph-${(Math.random() * 1e5).toFixed(0)}`);
                const i = yield this.createGraphCanvas(t);
                u("downloadImageAsFile:", t, o), this.emitEvent($.onImageDownload, this.$canvasDom, t) !== !1 && (yield this.downloadImageAsFile(i, t, o))
            })
        }

        downloadImageAsFile(t, o, n) {
            return C(this, null, function* () {
                const i = document.body.appendChild(t);
                i.style.display = "none";
                const a = this.dataURLToBlob(i.toDataURL(`image/${o}`));
                document.body.removeChild(i);
                const l = document.createElement("a");
                l.style.display = "none";
                try {
                    window.navigator.msSaveOrOpenBlob ? window.navigator.msSaveOrOpenBlob(a, `${n}.${o}`) : (l.setAttribute("href", URL.createObjectURL(a)), l.setAttribute("download", `${n}.${o}`), document.body.appendChild(l), l.click(), u("click ok!"), URL.revokeObjectURL(yield a.text()), u("revokeObjectURL ok!"), document.body.removeChild(l), u("removeChild ok!"))
                } catch (r) {
                    u("[relation-graph]Create and download image error:", r)
                }
            })
        }
    }

    class to extends Qe {
        constructor(s, t) {
            super(s, t)
        }

        createReturnValue(s, t) {
            return {path: s, textPosition: t}
        }

        createLinePath(s, t, o) {
            let n = s.fromNode;
            n || (n = {x: 0, y: 0, el: {offsetWidth: 10, offsetHeight: 10}});
            const i = s.toNode, a = s.relations.length;
            return o || (o = 0), this.createLinePathByTwoNode(n, i, t, o, a)
        }

        _getJunctionPoint(s, t) {
            return s === et.border ? q.getBorderPoint4MultiLine(...t) : s === et.ltrb ? q.getRectJoinPoint(...t) : s === et.tb ? q.getRectVJoinPoint(...t) : s === et.lr ? q.getRectHJoinPoint(...t) : s === et.left ? q.getRectLeftJoinPoint(...t) : s === et.right ? q.getRectRightJoinPoint(...t) : s === et.top ? q.getRectTopJoinPoint(...t) : s === et.bottom ? q.getRectBottomJoinPoint(...t, this.options.defaultBottomJuctionPoint_X) : q.getBorderPoint4MultiLine(...t)
        }

        createLinePathByTwoNode(s, t, o, n = 0, i = 1) {
            const a = o.lineShape || this.options.defaultLineShape || 1,
                l = o.lineDirection || this.options.layoutDirection || "h", r = s, h = t, c = r.x, p = r.y, d = h.x,
                g = h.y, f = {x: 0, y: 0, rotate: 0};
            if (Number.isNaN(c) || Number.isNaN(p)) return u("error start node:", r.text, r.x, r.y), f.x = 50, f.y = 50, f.rotate = 0, this.createReturnValue("M 0 0 L -10 -10", f);
            if (Number.isNaN(d) || Number.isNaN(g)) return u("error end point:", h.text, h.x, h.y), f.x = 50, f.y = 50, f.rotate = 0, this.createReturnValue("M 0 0 L 10 -10", f);
            const m = r.el.offsetWidth || r.width || 60, _ = r.el.offsetHeight || r.height || 60;
            if (Number.isNaN(m) || Number.isNaN(_)) return f.x = 50, f.y = 50, f.rotate = 0, this.createReturnValue("M 0 0 L -10 10", f);
            const y = h.el.offsetWidth || h.width || 60, M = h.el.offsetHeight || h.height || 60;
            if (Number.isNaN(y) || Number.isNaN(M)) return f.x = 50, f.y = 50, f.rotate = 0, this.createReturnValue("M 0 0 L 10 10", f);
            const S = o.isReverse ? h : r, z = o.isReverse ? r : h,
                X = S.nodeShape !== void 0 && S.nodeShape !== null ? S.nodeShape : this.options.defaultNodeShape,
                U = [c, p, d, g, m, _, y, M, X, !1, i, n, this.options.multiLineDistance || 14],
                D = z.nodeShape !== void 0 && z.nodeShape !== null ? z.nodeShape : this.options.defaultNodeShape,
                V = [d, g, c, p, y, M, m, _, D, !1, i, i - n - 1, this.options.multiLineDistance || 14],
                w = this.options.defaultJunctionPoint || et.border,
                b = (o.isReverse ? o.toJunctionPoint : o.fromJunctionPoint) || S.junctionPoint || w,
                N = (o.isReverse ? o.fromJunctionPoint : o.toJunctionPoint) || z.junctionPoint || w,
                R = this._getJunctionPoint(b, U), H = this._getJunctionPoint(N, V);
            if (!R || !H) return this.createReturnValue("Unable to calculate the starting point and ending point of the line.", f);
            const E = R.x, L = R.y, O = H.x, B = H.y;
            if (r === h) {
                const Gs = c + m / 2, Bs = p + _ / 2, Pe = Math.atan2(L - Bs, E - Gs), at = Math.sin(Pe + Math.PI) * 5,
                    rt = Math.cos(Pe + Math.PI) * 5, ze = {x: E - at, y: L - rt}, $e = {x: at, y: rt}, Ts = -rt * 5,
                    As = -at * 5, Is = -rt * 5, Hs = -at * 5,
                    Ws = `M ${ze.x},${ze.y} c ${Ts},${As} ${Is},${Hs} ${$e.x},${$e.y}`;
                return f.x = E - rt / (rt + at) * 20, f.y = L + at / (rt + at) * 20, f.rotate = 0, this.createReturnValue(Ws, f)
            }
            if (Number.isNaN(E) || Number.isNaN(L)) return u("error start point:", r.text), f.x = 50, f.y = 50, f.rotate = 0, this.createReturnValue("M 0 0 L -10 0", f);
            if (Number.isNaN(O) || Number.isNaN(B)) return u("error end point:", h.text), f.x = 50, f.y = 50, f.rotate = 0, this.createReturnValue("M 0 0 L 10 0", f);
            const k = c + m / 2, A = p + _ / 2, W = d + y / 2, J = g + M / 2,
                T = this.createLinePathData(o, f, i, n, l, a, E, L, k, A, m, _, O, B, W, J, y, M);
            return this.createReturnValue(T, f)
        }

        createLinePathData(s, t, o, n, i, a, l, r, h, c, p, d, g, f, m, _, y, M) {
            const S = g - l, z = f - r, X = g > l ? 1 : -1, U = f > r ? 1 : -1, D = i === "v" ? U : X;
            let V = "";
            if (a === 4) {
                const w = l - h, b = r - c, N = g - m, R = f - _, H = this.options.defaultPolyLineRadius || 0,
                    E = Math.min(H, Math.abs(S)) * (l < g ? 1 : -1), L = Math.min(H, Math.abs(z)) * (r < f ? 1 : -1),
                    O = Math.abs(w) >= p / 2 ? "h" : "v", B = Math.abs(N) >= y / 2 ? "h" : "v", k = [];
                if (O === "v") {
                    const A = s.polyLineStartDistance || Math.max(Math.min(30, Math.abs(f - r) / 2), 15),
                        W = b > 0 ? A : -A;
                    if (s.placeText === "start" ? (t.x = l, t.y = r + W - (b > 0 ? 20 : -5)) : s.placeText === "middle" ? (t.x = l + (g - l) / 2, t.y = r + W) : (t.x = g, t.y = r + W + (b > 0 ? 20 : -5)), k.push(`M ${Math.round(l)} ${Math.round(r)}`), k.push(`v ${Math.round(W - L)}`), B === "v") k.push(`c ${0},${Math.round(L)},`), k.push(`${Math.round(E)},${Math.round(L)},`), k.push(`${Math.round(E)},${Math.round(L)}`), k.push(`h ${Math.round(g - l - E * 2)}`), k.push(`c ${Math.round(E)},${0},`), k.push(`${Math.round(E)},${Math.round(L)},`), k.push(`${Math.round(E)},${Math.round(L)}`), k.push(`v ${Math.round(f - r - W - L)}`); else {
                        k.push(`c ${0},${Math.round(L)},`), k.push(`${Math.round(E)},${Math.round(L)},`), k.push(`${Math.round(E)},${Math.round(L)}`);
                        const J = Math.min(30, Math.abs(g - l) / 2), T = N > 0 ? -J : J;
                        k.push(`h ${Math.round(g - l + T - E)}`), k.push(`c ${Math.round(E)},${0},`), k.push(`${Math.round(E)},${Math.round(L)},`), k.push(`${Math.round(E)},${Math.round(L)}`), k.push(`v ${Math.round(f - r - W - L)}`), k.push(`h ${Math.round(T - E)}`)
                    }
                } else {
                    const A = s.polyLineStartDistance || Math.max(Math.min(30, Math.abs(g - l) / 2), 15),
                        W = w > 0 ? A : -A;
                    if (s.placeText === "start" ? (t.x = l + (w > 0 ? 10 : -50), t.y = r - 5) : s.placeText === "middle" ? (t.x = l + W, t.y = r + (f - r) / 2) : (t.x = l + W + (w > 0 ? 20 : -50), t.y = f - 5), k.push(`M ${Math.round(l)} ${Math.round(r)}`), k.push(`h ${W - E}`), B === "v") {
                        const J = Math.min(30, Math.abs(f - r) / 2), T = R > 0 ? -J : J;
                        k.push(`c ${Math.round(E)},${0},`), k.push(`${Math.round(E)},${Math.round(L)},`), k.push(`${Math.round(E)},${Math.round(L)}`), k.push(`v ${Math.round(f - r + T - L)}`), k.push(`h ${Math.round(g - l - W - E)}`), k.push(`c ${0},${Math.round(L)},`), k.push(`${Math.round(E)},${Math.round(L)},`), k.push(`${Math.round(E)},${Math.round(L)}`), k.push(`v ${Math.round(T - L)}`)
                    } else k.push(`c ${Math.round(E)},${0},`), k.push(`${Math.round(E)},${Math.round(L)},`), k.push(`${Math.round(E)},${Math.round(L)}`), k.push(`v ${Math.round(f - r - L * 2)}`), k.push(`c ${0},${Math.round(L)},`), k.push(`${Math.round(E)},${Math.round(L)},`), k.push(`${Math.round(E)},${Math.round(L)}`), k.push(`h ${Math.round(g - l - W - E)}`)
                }
                V = k.join(" ")
            } else if (a === 41) {
                const w = this.options.defaultPolyLineRadius || 0, b = Math.min(w, Math.abs(S)) * (l < g ? 1 : -1),
                    N = Math.min(w, Math.abs(z)) * (r < f ? 1 : -1), R = [];
                s.polyLineStartDistance || Math.max(Math.min(30, Math.abs(f - r) / 2), 15), t.x = l + 5, t.y = f - 13, R.push(`M ${Math.round(l)} ${Math.round(r)}`), R.push(`v ${Math.round(f - r - N)}`), R.push(`c ${0},${Math.round(N)},`), R.push(`${Math.round(b)},${Math.round(N)},`), R.push(`${Math.round(b)},${Math.round(N)}`), R.push(`h ${Math.round(g - l - b)}`), V = R.join(" ")
            } else if (a === 44) {
                const w = l - h, b = r - c, N = w > 3 ? 1 : w < -3 ? -1 : 0, R = b > 3 ? 1 : b < -3 ? -1 : 0, H = g - m,
                    E = f - _, L = H > 3 ? 1 : H < -3 ? -1 : 0, O = E > 3 ? 1 : E < -3 ? -1 : 0, B = {x: 0, y: 0},
                    k = {x: 0, y: 0};
                B.x = l + N * 10, B.y = r + R * 10, k.x = g + L * 10, k.y = f + O * 10, this.options.defaultPolyLineRadius;
                const A = [];
                s.polyLineStartDistance || Math.max(Math.min(30, Math.abs(f - r) / 2), 15), A.push(`M ${Math.round(l)} ${Math.round(r)}`), A.push(`L ${Math.round(B.x)}, ${Math.round(B.y)}`);
                let W = k.y - B.y, J = k.x - B.x;
                if (t.x = B.x, t.y = B.y - 14, R === 0) {
                    const T = (k.y - B.y) / 2;
                    A.push(`v ${Math.round(T)}`), W -= T, t.y += T
                } else {
                    const T = (k.x - B.x) / 2;
                    A.push(`h ${Math.round(T)}`), J -= T, t.x += T
                }
                if (O === 0) {
                    const T = J;
                    A.push(`h ${Math.round(T)}`), J -= T
                } else {
                    const T = (k.y - B.y) / 2;
                    A.push(`v ${Math.round(T)}`), W -= T
                }
                A.push(`v ${Math.round(W)}`), A.push(`h ${Math.round(J)}`), A.push(`L ${Math.round(k.x)}, ${Math.round(k.y)}`), A.push(`L ${Math.round(g)}, ${Math.round(f)}`), V = A.join(" ")
            } else if (a === 2 || a === 3 || a === 5 || a === 6 || a === 7 || a === 8) {
                const w = l - h, b = r - c, N = g - m, R = f - _, H = 1 / (o + 1) * (n + 1);
                let E, L;
                if (a === 2) E = i === "v" ? {x: 0, y: D * 30} : {x: D * 30, y: 0}, L = i === "v" ? {
                    x: S * H,
                    y: D * -10
                } : {x: D * -10, y: z * H}; else if (a === 3) E = i === "v" ? {x: 0, y: z * H} : {
                    x: D * 30,
                    y: 0
                }, L = i === "v" ? {x: 0, y: 0} : {x: D * -10, y: z * H}; else if (a === 5) E = i === "v" ? {
                    x: 0,
                    y: 0
                } : {x: 0, y: 0}, L = i === "v" ? {x: 0, y: z * H} : {x: S * H, y: 0}; else if (a === 6) {
                    const B = Math.min(200, Math.max(100, Math.abs(S / 2))),
                        k = Math.min(200, Math.max(100, Math.abs(z / 2))), A = w / (Math.abs(w) + Math.abs(b)) * B,
                        W = b / (Math.abs(w) + Math.abs(b)) * k;
                    E = {x: A, y: W};
                    const J = N / (Math.abs(N) + Math.abs(R)) * B + S, T = R / (Math.abs(N) + Math.abs(R)) * k + z;
                    L = {x: J, y: T}
                } else if (a === 7) {
                    const A = w / (Math.abs(w) + Math.abs(b)) * 30, W = b / (Math.abs(w) + Math.abs(b)) * 30;
                    E = {x: A, y: W};
                    const J = N / (Math.abs(N) + Math.abs(R)) * 30 + S, T = R / (Math.abs(N) + Math.abs(R)) * 30 + z;
                    L = {x: J, y: T}
                } else if (a === 8) {
                    const A = w / (Math.abs(w) + Math.abs(b)) * 30, W = b / (Math.abs(w) + Math.abs(b)) * 30;
                    E = {x: A, y: W};
                    const J = N / (Math.abs(N) + Math.abs(R)) * 30 + S, T = R / (Math.abs(N) + Math.abs(R)) * 30 + z;
                    L = {x: J, y: T}
                }
                const O = this.calcCurveCenter({x: l, y: r}, {x: l + E.x, y: r + E.y}, {
                    x: l + L.x,
                    y: r + L.y
                }, {x: l + S, y: r + z}, a < 6 ? .8 : .5);
                t.x = O.x, t.y = O.y, V = `M ${Math.round(l)},${Math.round(r)} c ${Math.round(E.x)},${Math.round(E.y)} ${Math.round(L.x)},${Math.round(L.y)} ${Math.round(S)},${Math.round(z)}`, a === 8 && (V = V + " Z")
            } else t.rotate = q.getTextAngle(l, r, g, f), t.x = Math.round(l + (g - l) / 2), t.y = Math.round(r + (f - r) / 2), Number.isNaN(t.rotate) && (t.rotate = 0), V = `M ${Math.round(l)} ${Math.round(r)} L ${Math.round(g)} ${Math.round(f)}`;
            return V
        }

        calcCurveCenter(s, t, o, n, i = .5) {
            const a = {x: (1 - i) * s.x + i * t.x, y: (1 - i) * s.y + i * t.y},
                l = {x: (1 - i) * t.x + i * o.x, y: (1 - i) * t.y + i * o.y},
                r = {x: (1 - i) * o.x + i * n.x, y: (1 - i) * o.y + i * n.y},
                h = {x: (1 - i) * a.x + i * l.x, y: (1 - i) * a.y + i * l.y},
                c = {x: (1 - i) * l.x + i * r.x, y: (1 - i) * l.y + i * r.y};
            return {x: (1 - i) * h.x + i * c.x, y: (1 - i) * h.y + i * c.y}
        }

        createCheckedLinePath() {
            const s = this.options.checkedLineId;
            if (!!s) try {
                const t = this.getElementLineById(this.options.checkedLinkId);
                if (t) {
                    const {path: l} = this.createLinePath(t, t.relations[0], 0);
                    return l
                }
                const o = this.getLinkByLineId(s);
                if (!o) {
                    u("Can not find link by checkedLineId:", s);
                    return
                }
                if (!x.isAllowShowNode(o.fromNode)) {
                    u("from hide:", s);
                    return
                }
                if (!x.isAllowShowNode(o.toNode)) {
                    u("to hide:", s);
                    return
                }
                const n = o.relations.findIndex(l => l.id === s);
                if (n === -1) {
                    u("Can not find checkedLineId:", s);
                    return
                }
                const i = o.relations[n], {path: a} = this.createLinePath(o, i, n);
                return a
            } catch (t) {
                u(t)
            }
        }

        createCheckedLineStrokeWidth() {
            const s = this.options.checkedLineId;
            if (!s) return this.options.defaultLineWidth + 8;
            try {
                const t = this.getLinkByLineId(s);
                if (!t) return this.options.defaultLineWidth + 8;
                const o = t.relations.findIndex(i => i.id === s);
                if (o === -1) return this.options.defaultLineWidth + 8;
                const n = t.relations[o];
                return n.lineWidth ? n.lineWidth + 8 : this.options.defaultLineWidth + 8
            } catch (t) {
                u(t)
            }
        }

        getTextTransform(s, t, o, n) {
            if (Number.isNaN(t) || Number.isNaN(o)) return "translate(0,0)";
            const i = s.lineShape === void 0 ? this.options.defaultLineShape : s.lineShape;
            return i === 1 || i === 4 ? `translate(${t},${o})rotate(${n || 0})` : `translate(${t},${o})`
        }

        getArrow(s, t, o = !1) {
            if (o) {
                if (s.isReverse) {
                    if (s.showEndArrow === !1) return
                } else if (s.showStartArrow !== !0) return
            } else if (s.isReverse) {
                if (s.showStartArrow !== !0) return
            } else if (s.showEndArrow === !1) return;
            const n = !1;
            return s.isHideArrow ? "none" : `url('#${this.getLineArrow(s.color, o, n)}')`
        }

        getLineTextStyle(s, t, o) {
            let n = t.text;
            if (!n) return null;
            let i = 0;
            const a = s.fromNode.x, l = s.toNode.x;
            n.length > this.options.lineTextMaxLength && (n = n.substring(0, this.options.lineTextMaxLength || 15) + "..."), (t.useTextPath !== void 0 ? t.useTextPath : this.options.lineUseTextPath) && a > l && (i = 180, n = n.split("").reverse().join(""));
            const h = t.textOffset_x || this.options.defaultLineTextOffset_x || 0,
                c = t.textOffset_y || this.options.defaultLineTextOffset_y || -8, p = `translate(${h},${c})`;
            let d = "middle";
            const g = t.lineShape || this.options.defaultLineShape || 1;
            let f = "50%";
            if (g === 4) if (t.placeText === "start") f = "10%", d = "start"; else if (t.placeText === "end") f = "90%", d = "end"; else if (t.placeText) f = t.placeText, d = "start"; else if (this.options.layoutDirection === "v") {
                const m = s.fromNode.x, _ = s.toNode.x;
                f = String(Math.abs(_ - m) + 43)
            } else {
                const m = s.fromNode.y, _ = s.toNode.y;
                f = String(Math.abs(_ - m) + 43)
            } else g === 41 ? d = "start" : t.placeText === "start" ? (f = "10%", d = "start") : t.placeText === "end" ? (f = "90%", d = "end") : t.placeText ? (f = t.placeText, d = "start") : (f = "50%", d = "middle");
            return t.textAnchor && (d = t.textAnchor), {
                text: n,
                textOffset: p,
                textAnchor: d,
                textHPosition: f,
                textRotate: i
            }
        }
    }

    class eo extends to {
        constructor(t, o) {
            super(t, o);
            v(this, "zoomCenter_of_newSize", {x: 0, y: 0})
        }

        zoom(t, o) {
            this.options.canvasZoom + t < 5 && (u("zoom:reset zoom=10"), t = 5 - this.options.canvasZoom);
            const n = this.options.canvasZoom, i = this.options.canvasZoom + t, a = this.showZoomCenter(o, t);
            this.options.canvasOffset.x += a.buff_x, this.options.canvasOffset.y += a.buff_y, this.options.canvasZoom = i, this._zoomEnd(n, i)
        }

        _zoomEnd(t, o) {
            this.refreshNVAnalysisInfo(), t <= 40 && o > 40 && (this.options.performanceMode && this.updateVisbleViewNodes(!0), this.options.showEasyView = !1, u("zoom:hide:showEasyView", t, o), setTimeout(() => {
                this.updateElementLines()
            }, 150)), t > 40 && o <= 40 && (u("zoom:show:showEasyView", t, o), this.options.performanceMode && (this.options.showEasyView = !0)), this.updateEditingControllerView(), this.emitEvent($.onZoomEnd, this.options.canvasZoom), this._dataUpdated()
        }

        setZoom(t, o) {
            const n = Math.floor(t - this.options.canvasZoom);
            this.zoom(n, o)
        }

        getCanvasCoordinateByClientCoordinate(t) {
            const o = this.options.canvasZoom / 100, {NMCanvasStart: n, NMZoomCenter: i} = this.analysisByZoom(o, t),
                a = {x: i.x - n.x, y: i.y - n.y};
            return {x: a.x / o, y: a.y / o}
        }

        getClientCoordinateByCanvasCoordinate(t) {
            const o = this.options.canvasZoom / 100, {NMCanvasStart: n} = this.analysisByZoom(o),
                i = {x: t.x * o + n.x, y: t.y * o + n.y};
            return {x: i.x + this.options.canvasOffset.x, y: i.y + this.options.canvasOffset.y}
        }

        getViewPointByCanvasPoint(t) {
            const o = this.options.canvasZoom / 100, {NMCanvasStart: n} = this.analysisByZoom(o),
                i = {x: t.x * o + n.x, y: t.y * o + n.y};
            return {x: i.x, y: i.y}
        }

        getCanvasPointByViewPoint(t) {
            const o = this.$dom.getBoundingClientRect();
            return this.getCanvasCoordinateByClientCoordinate({x: o.left + t.x, y: o.top + t.y})
        }

        analysisByZoom(t, o) {
            const n = {
                NMViewPosition: {x: 0, y: 0},
                NMViewCenter: {x: 0, y: 0},
                NMCanvasCenter: {x: 0, y: 0},
                NMCanvasStart: {x: 0, y: 0},
                NMCanvasEnd: {x: 0, y: 0},
                NMZoomCenter: {x: 0, y: 0},
                NMViewBuff: {x: 0, y: 0},
                NMCanvasOffsetBuff: {x: 0, y: 0},
                NMCanvasSize: {width: 0, height: 0}
            }, i = this.$dom.getBoundingClientRect();
            n.NMViewPosition.x = i.left, n.NMViewPosition.y = i.top, n.NMViewCenter.x = i.width / 2, n.NMViewCenter.y = i.height / 2;
            const a = this.options.canvasSize.width * t, l = this.options.canvasSize.height * t;
            n.NMCanvasCenter.x = this.options.canvasOffset.x + this.options.canvasSize.width / 2, n.NMCanvasCenter.y = this.options.canvasOffset.y + this.options.canvasSize.height / 2, n.NMCanvasStart.x = n.NMCanvasCenter.x - a / 2, n.NMCanvasStart.y = n.NMCanvasCenter.y - l / 2, n.NMCanvasEnd.x = n.NMCanvasCenter.x + a / 2, n.NMCanvasEnd.y = n.NMCanvasCenter.y + l / 2, n.NMZoomCenter.x = n.NMViewCenter.x, n.NMZoomCenter.y = n.NMViewCenter.y, o && (n.NMZoomCenter.x = o.x - n.NMViewPosition.x, n.NMZoomCenter.y = o.y - n.NMViewPosition.y);
            let r = n.NMViewCenter.x - n.NMCanvasCenter.x, h = n.NMViewCenter.y - n.NMCanvasCenter.y;
            return o && (r = n.NMZoomCenter.x - n.NMCanvasCenter.x, h = n.NMZoomCenter.y - n.NMCanvasCenter.y), n.NMViewBuff.x = r, n.NMViewBuff.y = h, n.NMCanvasSize.width = a, n.NMCanvasSize.height = l, n
        }

        showZoomCenter(t, o) {
            if (!this.$dom) return {buff_x: 0, buff_y: 0};
            const n = this.options.canvasZoom / 100, i = this.analysisByZoom(n, t),
                a = (this.options.canvasZoom + o) / 100, l = this.analysisByZoom(a, t), r = a / n, h = 0, c = 0,
                p = a / n, d = 0, g = 0;
            this.zoomCenter_of_newSize.x = r * i.NMViewBuff.x + c * i.NMViewBuff.y + d, this.zoomCenter_of_newSize.y = h * i.NMViewBuff.x + p * i.NMViewBuff.y + g;
            const f = i.NMViewBuff.x - this.zoomCenter_of_newSize.x, m = i.NMViewBuff.y - this.zoomCenter_of_newSize.y;
            this.zoomCenter_of_newSize.x += i.NMCanvasCenter.x, this.zoomCenter_of_newSize.y += i.NMCanvasCenter.y;
            let _ = i.NMCanvasStart.x - i.NMCanvasCenter.x, y = i.NMCanvasStart.y - i.NMCanvasCenter.y,
                M = r * _ + c * y + d, S = h * _ + p * y + g;
            return l.NMCanvasStart.x = f + i.NMCanvasCenter.x + M, l.NMCanvasStart.y = f + i.NMCanvasCenter.y + S, _ = i.NMCanvasEnd.x - i.NMCanvasCenter.x, y = i.NMCanvasEnd.y - i.NMCanvasCenter.y, M = r * _ + c * y + d, S = h * _ + p * y + g, l.NMCanvasEnd.x = f + i.NMCanvasCenter.x + M, l.NMCanvasEnd.y = f + i.NMCanvasCenter.y + S, i.NMCanvasOffsetBuff.x = f, i.NMCanvasOffsetBuff.y = m, {
                buff_x: f,
                buff_y: m
            }
        }
    }

    class oo extends eo {
        constructor(s, t) {
            super(s, t)
        }

        doLayout() {
            return C(this, null, function* () {
                if (!this.layouter) {
                    u("no layouter");
                    return
                }
                if (!this.graphData.rootNode) {
                    u("Cant find rootNode!");
                    return
                }
                this.options.showMaskWhenLayouting && this.loading(), yield mt(300), this.options.canvasOpacity = 1, this._dataUpdated(), this.options.showMaskWhenLayouting && this.clearLoading(), u("node size\uFF1A", this.graphData.nodes.length);
                const s = this.options.useAnimationWhenExpanded;
                this.disableNextLayoutAnimation && (this.options.useAnimationWhenExpanded = !1), this.layouter.requireLinks && this.layouter.setLinks(this.getLinks()), this.layouter.viewUpdate = () => {
                    this._dataUpdated()
                }, yield this.layouter.placeNodes(this.graphData.nodes, this.graphData.rootNode), this.options.useAnimationWhenExpanded = s, this.disableNextLayoutAnimation = !1, this.updateElementLines(), this._dataUpdated()
            })
        }

        refresh(s = !0) {
            return C(this, null, function* () {
                this.resetViewSize(!0), this.disableNextLayoutAnimation = !0, this._dataUpdated(), s && (yield this.doLayout()), yield this.playShowEffect(), this.updateElementLines(), this._dataUpdated()
            })
        }

        playShowEffect() {
            return C(this, null, function* () {
                if (this.graphData.nodes.length === 0) {
                    u("relation-graph:move to center: data not ready!");
                    return
                }
                if (u("playShowEffect:", this.options.moveToCenterWhenRefresh, this.options.zoomToFitWhenRefresh), this.graphData.rootNode && Number.isNaN(this.graphData.rootNode.x)) {
                    u("rootNode.x is NaN, graph is currently hidden?");
                    return
                }
                this.options.moveToCenterWhenRefresh ? yield this.moveToCenter() : (u("center:0,0"), this.setCanvasCenter(0, 0), this._dataUpdated()), yield this.zoomToFitWhenRefresh()
            })
        }

        moveToCenter() {
            return C(this, null, function* () {
                if (this.options.useAnimationWhenRefresh) {
                    const s = this.getNodesCenter();
                    u("center:", s.x, s.y);
                    const t = this.getGraphOffet();
                    u("centerOffset:", t.offset_x, t.offset_y);
                    const o = this.options.viewSize.width / 2 - s.x + t.offset_x,
                        n = this.options.viewSize.height / 2 - s.y + t.offset_y;
                    yield this.animateGoto(o, n, 500), this._dataUpdated()
                } else {
                    const s = this.getNodesCenter();
                    u("center:", s.x, s.y), this.setCanvasCenter(s.x, s.y), this._dataUpdated()
                }
            })
        }

        zoomToFitWhenRefresh() {
            return C(this, null, function* () {
                this.options.zoomToFitWhenRefresh && (yield this.zoomToFit())
            })
        }

        placeOtherNodes() {
            return C(this, null, function* () {
                const s = this.options.placeSingleNode && this.layouter.layoutOptions.layoutName !== "fixed", t = [];
                this.graphData.rootNode && this.findGroupNodes(this.graphData.rootNode, t);
                const o = [], n = [];
                this.graphData.nodes.forEach(i => {
                    t.includes(i) || (this.options.placeSingleNode && (!i.targetNodes || i.targetNodes.length === 0) && i.fixed !== !0 ? (s && (i.x = Math.floor(Math.random() * 200) - 100, i.y = Math.floor(Math.random() * 200) - 100, i.lot || (i.lot = {childs: []})), i.lot.placed = !0, i.singleNode = !0, n.push(i)) : o.push(i))
                }), s && this.placeSingleNodes(n), s && (this.options.placeOtherGroup && (yield this.placeOtherGroup(o, t)), this._dataUpdated(), this.layouter.layoutOptions.layoutName === "force" && (this.stopAutoLayout(), setTimeout(() => {
                    this.startAutoLayout()
                }, 500)))
            })
        }

        placeSingleNodes(s) {
            if (s.length > 0) {
                u("sigle nodes:", s.length);
                const t = new dt({layoutName: "force"}, this.options, this);
                t.allNodes = this.graphData.nodes, t.fastStart = !0, t.justLayoutSingleNode = !0, t.maxLayoutTimes = 100, t.byLine = !1, t.autoLayout(!0)
            }
        }

        placeOtherGroup(s, t) {
            return C(this, null, function* () {
                if (s.length > 0) {
                    u("[placeOtherGroup]notPlacedNodes nodes:", s.length);
                    const o = JSON.parse(JSON.stringify(this.layouter.layoutOptions)), n = s[0],
                        i = xt(o, this.options, this);
                    i.isMainLayouer = !1;
                    const a = this.getStuffSize(t);
                    u("[placeOtherGroup]placeOtherGroup:", i.layoutOptions.layoutName, "root:", n.text);
                    let l = this.layouter.layoutOptions.layoutName.includes("tree") ? 300 : 600;
                    if (i.layoutOptions.layoutName === "force") {
                        const c = i;
                        c.maxLayoutTimes = 0, l = 100
                    }
                    n.fixed || (n.x = a.maxX + l, n.y = 0), i.layoutOptions.fixedRootNode = !0;
                    const r = [];
                    this.findGroupNodes(n, r), u("[placeOtherGroup]thisGroupNodes:", s.length), this.layouter.requireLinks && this.layouter.setLinks(this.getLinks()), yield i.placeNodes(r, n), t.push(...r);
                    const h = [];
                    s.forEach(c => {
                        t.includes(c) || h.push(c)
                    }), this.options.placeOtherGroup && (yield this.placeOtherGroup(h, t)), this._dataUpdated()
                } else u("[placeOtherGroup]thisGroupNodes:all is OK!")
            })
        }

        zoomToFit(s) {
            return C(this, null, function* () {
                const t = this.getStuffSize(), o = this.options.viewSize.width / t.width,
                    n = this.options.viewSize.height / t.height, i = Math.min(o, n, 1);
                u("zoomToFit:", {
                    stuffSize: t,
                    zoomPercent: i,
                    zoomPercentX: o,
                    zoomPercentY: n,
                    viewSize: this.options.viewSize
                }), this.options.useAnimationWhenRefresh ? (yield this.animateToZoom(i * 100, 300), this._dataUpdated(), s && s()) : (this.setZoom(i * 100), this._dataUpdated(), s && s())
            })
        }

        animateGoto(s, t, o) {
            return C(this, null, function* () {
                return new Promise((n, i) => {
                    u("animateGoto:", s, t);
                    const a = s - this.options.canvasOffset.x, l = t - this.options.canvasOffset.y, r = o, h = 5,
                        c = Math.round(a / h), p = Math.round(l / h), d = r / h;
                    this.animateStepAction(0, d, h, () => {
                        this.options.canvasOffset.x += c, this.options.canvasOffset.y += p, this._dataUpdated()
                    }, () => {
                        n()
                    })
                })
            })
        }

        animateToZoom(s, t) {
            return C(this, null, function* () {
                return new Promise((o, n) => {
                    const i = s - this.options.canvasZoom, a = t, l = 5, r = Math.round(i / l), h = a / l;
                    u("animateToZoom:", i, r), this.animateStepAction(0, h, l, () => {
                        this.zoom(r), this._dataUpdated()
                    }, () => {
                        this.setZoom(s), this._dataUpdated(), o()
                    })
                })
            })
        }

        animateStepAction(s, t, o, n, i) {
            s < o ? (n(s, o), setTimeout(() => {
                this.animateStepAction(s + 1, t, o, n, i)
            }, t)) : i()
        }

        toggleAutoLayout() {
            this.options.autoLayouting = !this.options.autoLayouting, u("toggleAutoLayout:to:", this.options.autoLayouting), this.options.autoLayouting ? this.startAutoLayout() : this.stopAutoLayout()
        }

        startAutoLayout() {
            this.options.autoLayouting = !0, this.layouter.autoLayout ? (u("startAutoLayout:"), this.layouter.autoLayout(!0)) : u("Current layout not support autoLayout()")
        }

        stopAutoLayout() {
            this.options.autoLayouting = !1, this.layouter.stop ? this.layouter.stop() : u("Current layout not support stop()")
        }

        sleep(s) {
            return C(this, null, function* () {
                yield mt(s)
            })
        }
    }

    let nt = {x: 0, y: 0};
    const it = {x: 0, y: 0}, st = {x: 0, y: 0};
    let Pt, zt;
    const It = e => {
        const s = {clientX: 0, clientY: 0};
        if (tt(e)) {
            const t = e.touches || e.targetTouches;
            if (!t) throw new Error("error targetTouches");
            s.clientX = t[0].clientX, s.clientY = t[0].clientY
        } else s.clientX = e.clientX, s.clientY = e.clientY;
        return s
    }, Q = {
        startDrag(e, s, t, o) {
            o ? Pt = (n, i, a) => {
                const l = n - st.x, r = i - st.y;
                o(l, r, it, st, a)
            } : Pt = (n, i) => {
                nt.x = it.x + (n - st.x), nt.y = it.y + (i - st.y)
            }, zt = t, nt = s, it.x = nt.x, it.y = nt.y, u("[canvas]onDragStart...", tt(e), e);
            try {
                const n = It(e);
                st.x = n.clientX, st.y = n.clientY, tt(e) ? (document.body.addEventListener("touchmove", Q.onNodeMove), document.body.addEventListener("touchend", Q.onNodeDragend), e.preventDefault()) : (document.body.addEventListener("mousemove", Q.onNodeMove), document.body.addEventListener("mouseup", Q.onNodeDragend))
            } catch (n) {
                console.error(n.message)
            }
        }, onNodeMove(e) {
            const s = It(e);
            Pt(s.clientX, s.clientY, e)
        }, onNodeDragend(e) {
            tt(e) ? (document.body.removeEventListener("touchmove", Q.onNodeMove), document.body.removeEventListener("touchend", Q.onNodeDragend)) : (document.body.removeEventListener("mousemove", Q.onNodeMove), document.body.removeEventListener("mouseup", Q.onNodeDragend)), u("[canvas]onDragend...", tt(e), e), zt && zt(nt.x - it.x, nt.y - it.y, e)
        }
    }, no = Object.freeze(Object.defineProperty({__proto__: null, default: Q}, Symbol.toStringTag, {value: "Module"}));

    class io extends oo {
        constructor(t, o) {
            super(t, o);
            v(this, "prevClickTime", 0);
            v(this, "movingListener");
            v(this, "step1EventTime", 0);
            v(this, "onCreateLineCallback");
            v(this, "_wheelAction", 0);
            v(this, "_wheelBuff", 0)
        }

        setDefaultLineShape(t) {
            this.options.defaultLineShape = t
        }

        setDefaultJunctionPoint(t) {
            this.options.defaultJunctionPoint = t
        }

        setCheckedNode(t) {
            this.options.checkedNodeId = t
        }

        setCheckedLinkAndLine(t, o) {
            this.options.checkedLinkId = t.seeks_id, this.options.checkedLineId = o ? o.id : ""
        }

        clearChecked() {
            this.options.checkedNodeId = "", this.options.checkedLineId = "", this.options.checkedLinkId = ""
        }

        selectNode(t, o) {
            t.selected = o
        }

        flashNode(t, o) {
            t.flashing = o
        }

        updateNodeOffsetSize(t, o, n) {
            t.el.offsetWidth = o, t.el.offsetHeight = n
        }

        onNodeClick(t, o) {
            return C(this, null, function* () {
                if (Date.now() - this.prevClickTime < 200) {
                    u("[node]click abort : time < 200");
                    return
                }
                if (this.prevClickTime = Date.now(), this.options.creatingLinePlot) {
                    this.onNodeClickWhenCreatingLinePlot(t);
                    return
                }
                u("[node]node click", t.text, this.options.creatingLinePlot), !o.shiftKey && this.options.disableNodeClickEffect !== !0 && t.disableDefaultClickEffect !== !0 && (this.options.checkedLinkId = "", this.options.checkedLineId = "", this.setCheckedNode(t.id)), this.emitEvent($.onNodeClick, t, o), this.prevClickTime = Date.now()
            })
        }

        onNodeDragStart(t, o) {
            if (this.options.disableDragNode || t.disableDrag) return;
            isNaN(t.x) && (t.x = 0), isNaN(t.y) && (t.y = 0), t.dragging = !0, this.emitEvent($.nodeDragStart, t, o);
            const n = (i, a, l) => {
                t.dragging = !1, this.options.editingReferenceLine.show = !1, this.onNodeDraged(t, i, a, l), this._dataUpdated()
            };
            Q.startDrag(o, t, n, (i, a, l) => {
                let r = i / (this.options.canvasZoom / 100) + l.x, h = a / (this.options.canvasZoom / 100) + l.y;
                const c = r - t.x, p = h - t.y, d = this.emitEvent($.nodeDragging, t, r, h, c, p, o);
                d && (typeof d.x == "number" && (r = d.x), typeof d.y == "number" && (h = d.y)), this.options.useHorizontalView && (r = a / (this.options.canvasZoom / 100) + l.x, h = -i / (this.options.canvasZoom / 100) + l.y), this.setNodePosition(t, r, h), this.draggingSelectedNodes(t, c, p), this.updateElementLines(), this._dataUpdated()
            })
        }

        onNodeDraged(t, o, n, i) {
            if (o === 0 && n === 0) {
                u("[node]node click by drag"), this.onNodeClick(t, i), this.onNodeDragEnd(t, i);
                return
            }
            this.options.isMoveByParentNode && t.lot.childs.forEach(a => {
                a.x += o, a.y += n
            }), Math.abs(o) + Math.abs(n) > 6 ? (this.prevClickTime = Date.now(), setTimeout(() => {
                u("[node]onDragEnd2"), this.onNodeDragEnd(t, i)
            }, 100)) : (u("[node]onDragEnd1"), this.onNodeDragEnd(t, i))
        }

        onNodeDragEnd(t, o) {
            this.updateElementLines(), this.emitEvent($.nodeDragEnd, t)
        }

        onLineClick(t, o, n) {
            return C(this, null, function* () {
                u("onLineClick:", "line:", t, "link:", o), this.options.disableLineClickEffect !== !0 && t.disableDefaultClickEffect !== !0 && (this.setCheckedNode(""), this.setCheckedLinkAndLine(o, t)), this.emitEvent($.onLineClick, t, o, n)
            })
        }

        expandOrCollapseNode(t, o) {
            return C(this, null, function* () {
                t.expanded === !1 ? yield this.expandNode(t, o) : yield this.collapseNode(t, o)
            })
        }

        setChildsFromPosition(t, o) {
            t.lot.childs.forEach(n => {
                n.x = o.x, n.y = o.y, this.setChildsFromPosition(n, o)
            })
        }

        expandNode(t, o) {
            return C(this, null, function* () {
                u("onNodeExpand:", t), t.expanded = !0, this.options.useAnimationWhenExpanded && (yield this.layouter.snapshotBeforeAnimation(), this.setChildsFromPosition(t, t), yield this.layouter.animationLayout(!1)), u("relayout check:", this.options.reLayoutWhenExpandedOrCollapsed), this.options.reLayoutWhenExpandedOrCollapsed && (u("relayout..."), yield this.layouter.snapshotBeforeAnimation(), yield this.doLayout()), this.updateElementLines(), this._dataUpdated(), this.emitEvent($.onNodeExpand, t, o)
            })
        }

        getDescendantNodes(t) {
            return x.getDescendantNodes(t)
        }

        setChildsToPosition(t, o) {
            t.lot.childs.forEach(n => {
                n.lot.from_x = n.x, n.lot.from_y = n.y, n.lot.to_x = o.x, n.lot.to_y = o.y, this.setChildsToPosition(n, o)
            })
        }

        collapseNode(t, o) {
            return C(this, null, function* () {
                u("onNodeCollapse:", t), this.options.useAnimationWhenExpanded && (yield this.layouter.snapshotBeforeAnimation(), this.setChildsToPosition(t, t), yield this.layouter.animationLayout(!1)), t.expanded = !1, u("relayout check:", this.options.reLayoutWhenExpandedOrCollapsed), this.options.reLayoutWhenExpandedOrCollapsed && (u("relayout..."), yield this.layouter.snapshotBeforeAnimation(), yield this.doLayout()), this.updateElementLines(), this._dataUpdated(), this.emitEvent($.onNodeCollapse, t, o)
            })
        }

        onCanvasDragEnd(t) {
            this.updateEditingControllerView(), this.emitEvent($.onCanvasDragEnd, t)
        }

        onCanvasClick(t) {
            this.options.creatingLinePlot && this.onCanvasClickWhenCreatingLinePlot(t), this.emitEvent($.onCanvasClick, t)
        }

        clickGraphMask(t) {
            this.clearLoading()
        }

        onCanvasSelectionEnd(t, o) {
            this.emitEvent($.onCanvasSelectionEnd, t, o)
        }

        startCreatingNodePlot(t, o) {
            this.options.newNodeTemplate = ft(JSON.parse(JSON.stringify(Et)), this.options), this.options.creatingNodePlot = !0;
            const n = tt(t);
            this.options.showTemplateNode = !n;
            let i = (f, m) => {
                const _ = this.options.newNodeTemplate, y = {
                    width: _.el && _.el.offsetWidth ? _.el.offsetWidth : _.width || 96,
                    height: _.el && _.el.offsetHeight ? _.el.offsetHeight : _.height || 96
                };
                this.options.newNodeTemplate.x = f - y.width / 2, this.options.newNodeTemplate.y = m - y.height / 2, this._dataUpdated()
            }, a = (f, m, _) => {
                const y = "s-" + Date.now();
                this.addNodes([{id: y, text: this.options.newNodeTemplate.text, x: f, y: m}])
            };
            o && o.templateText && (this.options.newNodeTemplate.text = o.templateText), o && o.templateStyleClass && (this.options.newNodeTemplate.styleClass = o.templateStyleClass), o && o.templateNode && Object.keys(o.templateNode).forEach(f => {
                this.options.newNodeTemplate[f] = o.templateNode[f]
            }), o && o.templateMove && (i = o.templateMove), o && o.onCreateNode && (a = o.onCreateNode);
            const l = this.$dom.getBoundingClientRect();
            u("[CreatingNodePlot]startCreatingNodePlot:");
            const r = kt(t), h = r.clientX - l.x + 10, c = r.clientY - l.y + 10;
            n || i(h, c);
            const p = f => {
                const m = this.$dom.getBoundingClientRect();
                u("[CreatingNodePlot]objectTemplateMove");
                const _ = f.clientX - m.x, y = f.clientY - m.y;
                i(_, y)
            }, d = f => {
                u("[CreatingNodePlot]user abort!"), this.$dom.removeEventListener("mousemove", p), this.$dom.removeEventListener("click", g), this.$dom.removeEventListener("contextmenu", d), this.options.creatingNodePlot = !1
            }, g = f => {
                let m = !1;
                if (this.options.creatingNodePlot || (m = !0), this.$dom.removeEventListener("mousemove", p), this.$dom.removeEventListener("click", g), this.$dom.removeEventListener("contextmenu", d), this.options.creatingNodePlot = !1, m) {
                    u("[CreatingNodePlot]action be abort!");
                    return
                }
                const _ = kt(f), y = _.clientX - l.x + 10, M = _.clientY - l.y + 10;
                if (o && o.disableClickCreate && Math.abs(h - y) < 5 && Math.abs(c - M) < 5) {
                    u("[CreatingNodePlot]create node be abort!");
                    return
                }
                const S = this.getCanvasCoordinateByClientCoordinate({x: _.clientX, y: _.clientY});
                u("[CreatingNodePlot]objectBePlaced:", S), a(S.x, S.y, this.options.newNodeTemplate), this._dataUpdated()
            };
            setTimeout(() => {
                this.$dom.addEventListener("click", g), this.$dom.addEventListener("contextmenu", d)
            }, 300), n || this.$dom.addEventListener("mousemove", p)
        }

        startCreatingLinePlot(t, o) {
            const n = tt(t);
            o && o.onCreateLine && (this.onCreateLineCallback = o.onCreateLine);
            const i = ht({from: "newRelationTemplate-from", to: "newRelationTemplate-to", color: "", text: "new line"});
            o && o.template && Object.assign(i, o.template), this.options.newLineTemplate = i, this.options.newLinkTemplate.fromNode = null, o && o.fromNode && (this.options.newLinkTemplate.toNode.x = o.fromNode.x + 50, this.options.newLinkTemplate.toNode.y = o.fromNode.y + 50, this.options.newLinkTemplate.fromNode = o.fromNode, this.step1EventTime = Date.now()), this.options.creatingLinePlot = !0, this.options.newLinkTemplate.toNodeObject = null, this.options.newLineTemplate.disableDefaultClickEffect = !0, this.options.newLinkTemplate.toNode.el.offsetWidth = 2, this.options.newLinkTemplate.toNode.el.offsetHeight = 2, u("[CreatingLinePlot]startCreatingLinePlot:", n), n || (u("[CreatingLinePlot]Listener move"), this.movingListener && this.$dom.removeEventListener("mousemove", this.movingListener), this.movingListener = this.onMovingWhenCreatingLinePlot.bind(this), this.$dom.addEventListener("mousemove", this.movingListener)), this.dataUpdated()
        }

        stopCreatingLinePlot() {
            u("[CreatingLinePlot]stop CreatingLinePlot!"), this.options.creatingLinePlot = !1, this.options.newLinkTemplate.fromNode = null, this.options.newLinkTemplate.toNodeObject = null, this.onCreateLineCallback = void 0, this.$dom.removeEventListener("mousemove", this.movingListener), this.movingListener = void 0, this.options.nodeConnectController.show = !1, this._dataUpdated()
        }

        onMovingWhenCreatingLinePlot(t) {
            if (u("[CreatingLinePlot]mousemove"), this.options.newLinkTemplate.fromNode) {
                const n = this.getCanvasCoordinateByClientCoordinate({x: t.clientX, y: t.clientY});
                this.options.newLinkTemplate.toNode.x = n.x, this.options.newLinkTemplate.toNode.y = n.y, this._dataUpdated()
            }
            const o = this.isNode(t.target);
            o && (o === this.options.newLinkTemplate.fromNode ? this.options.nodeConnectController.show = !1 : (this.options.nodeConnectController.node = o, this.updateEditingConnectControllerView(), this.options.nodeConnectController.show = !0))
        }

        onCanvasClickWhenCreatingLinePlot(t) {
            if (Date.now() - this.step1EventTime < 500) {
                u("[CreatingLinePlot]step1EventTime:", this.step1EventTime);
                return
            }
            if (!this.options.newLinkTemplate.fromNode) {
                u("[CreatingLinePlot]CreatingLinePlot:fromNode not set!");
                return
            }
            if (!this.options.newLinkTemplate.toNodeObject) {
                u("[CreatingLinePlot]CreatingLinePlot:toNodeObject not set!");
                const o = kt(t), n = this.getCanvasCoordinateByClientCoordinate({x: o.clientX, y: o.clientY});
                this.onCreateLine(this.options.newLinkTemplate.fromNode, n)
            }
            this.stopCreatingLinePlot()
        }

        onNodeClickWhenCreatingLinePlot(t) {
            this.options.newLinkTemplate.fromNode ? (u("[CreatingLinePlot]step 2: set toNodeObjecct:", this.options.newLinkTemplate.fromNode, t), this.options.newLinkTemplate.toNodeObject = t, this.onCreateLine(this.options.newLinkTemplate.fromNode, t), this.stopCreatingLinePlot()) : (u("[CreatingLinePlot]step 1: set fromNode:", t), this.options.newLinkTemplate.fromNode = t, this.options.newLinkTemplate.toNode.x = t.x + 50, this.options.newLinkTemplate.toNode.y = t.y + 50, this.step1EventTime = Date.now())
        }

        onCreateLine(t, o) {
            u("[CreatingLinePlot][fire-event]onCreateLine:", t, o), this.onCreateLineCallback && (this.options.newLineTemplate.disableDefaultClickEffect = !1, this.onCreateLineCallback(t, o, this.options.newLineTemplate))
        }

        isNode(t) {
            const o = Mt(t, "rel-node-peel", "rel-map");
            return o ? this.getNodeById(o.dataset.id) : void 0
        }

        isLink(t) {
            const o = Mt(t, "rel-link-peel", "rel-map");
            return o ? this.getLinkById(o.dataset.id) : void 0
        }

        onContextmenu(t) {
            this.stopCreatingLinePlot();
            let o = "canvas", n = this.isNode(t.target);
            n ? o = "node" : (n = this.isLink(t.target), n && (o = "link")), u("contextmenu:objectType", o, n), this.emitEvent($.onContextmenu, t, o, n)
        }

        fullscreen(t) {
            return C(this, null, function* () {
                if (Y.default.element && Y.default.element !== this.$dom) return;
                let o = !1;
                t === void 0 && (t = !this.options.fullscreen, o = !0), this.options.fullscreen = t, this.emitEvent($.fullscreen, this.options.fullscreen) !== !1 && o && (yield Y.default.toggle(this.$dom))
            })
        }

        focusNodeById(t) {
            return C(this, null, function* () {
                let o;
                this.graphData.nodes.forEach(n => {
                    n.id === t && (o = n)
                }), o && (yield this.handleSelect(o))
            })
        }

        focusRootNode() {
            return C(this, null, function* () {
                u("relation-graph:focusRootNode"), this.graphData.rootNode && (yield this.handleSelect(this.graphData.rootNode))
            })
        }

        handleSelect(t) {
            return C(this, null, function* () {
                u("checked:", t), scrollTo({top: this.$dom.offsetTop}), yield this.animateToZoom(100, 300);
                const o = t.width || 50, n = t.height || 50, i = t.x * -1 + this.options.viewSize.width / 2 - o / 2,
                    a = t.y * -1 + this.options.viewSize.height / 2 - n / 2;
                yield this.animateGoto(i, a, 500), this.options.checkedNodeId = t.id, this.refreshNVAnalysisInfo()
            })
        }

        onMouseWheel(t) {
            if (this.options.disableZoom) return t.cancelBubble = !1, !0;
            try {
                t.cancelBubble = !0, t.preventDefault(), t.stopPropagation()
            } catch (a) {
            }
            let o = t.deltaY;
            o === void 0 && (o = t.wheelDelta);
            const i = 5 * (o > 0 ? -1 : 1);
            this._onMouseWheel(t, i)
        }

        _onMouseWheel(t, o) {
            const n = {x: t.clientX, y: t.clientY};
            this.zoom(o, n)
        }

        onLineDragStart(t, o) {
            u("onLineDragStart...");
            const n = {x: t.fromNode.x, y: t.fromNode.y}, i = {x: t.toNode.x, y: t.toNode.y}, a = (l, r, h, c, p) => {
                t.fromNode.x = n.x + l / (this.options.canvasZoom / 100), t.fromNode.y = n.y + r / (this.options.canvasZoom / 100), t.toNode.x = i.x + l / (this.options.canvasZoom / 100), t.toNode.y = i.y + r / (this.options.canvasZoom / 100), this.updateEditingControllerView(), this._dataUpdated()
            };
            Q.startDrag(o, {x: 0, y: 0}, (...l) => {
                this.onLineDragEnd(...l)
            }, a)
        }

        onLineDragEnd(t, o, n) {
            u("onLineDragEnd"), this.updateElementLines()
        }

        onCanvasDragStart(t) {
            if (u("[canvas]onCanvasDragStart..."), this.options.disableDragCanvas) return;
            if (this.options.selectionMode || t.shiftKey) {
                this.startCreateSelection(t);
                return
            }
            if (!this.options.disableDragLine) {
                const n = this.isLink(t.target);
                if (n) {
                    this.onLineDragStart(n, t);
                    return
                }
            }
            let o;
            if (tt(t)) {
                let n, i = 1;
                o = (a, l, r, h, c) => {
                    const p = c.touches || c.targetTouches, d = p[0];
                    if (p && p.length > 1) {
                        c.preventDefault();
                        const g = p[1];
                        n || (n = {x: g.clientX, y: g.clientY}, i = this.options.canvasZoom);
                        const f = {x: d.clientX, y: d.clientY}, m = {x: g.clientX, y: g.clientY},
                            _ = Math.hypot(n.x - h.x, n.y - h.y), M = Math.hypot(m.x - f.x, m.y - f.y) / _, S = i * M;
                        this.setZoom(S), this._dataUpdated()
                    } else {
                        const g = d.clientX, f = d.clientY;
                        let m = r.x + (g - h.x), _ = r.y + (f - h.y);
                        this.options.useHorizontalView ? (m = r.x + (f - h.y), _ = r.y - (g - h.x), this.setCanvasOffset(m, _)) : this.setCanvasOffset(m, _), this.updateEditingControllerView(), this._dataUpdated()
                    }
                }
            } else o = (n, i, a, l, r) => {
                const h = a.x + n, c = a.y + i;
                this.setCanvasOffset(h, c), this.updateEditingControllerView()
            };
            Q.startDrag(t, this.options.canvasOffset, (...n) => {
                this.onCanvasDragStop(...n)
            }, o)
        }

        onCanvasDragStop(t, o, n) {
            if (u("[canvas]onCanvasDragStop..."), this.options.creatingSelection) {
                this.options.creatingSelection = !1, this._dataUpdated(), this.onCanvasSelectionEnd(this.options.selectionView, n);
                return
            }
            if (t === 0 && o === 0) {
                u("[canvas]click2"), this._dataUpdated(), this.onCanvasClick(n);
                return
            }
            Math.abs(t) + Math.abs(o) > 6 ? setTimeout(() => {
                u("[canvas]onDragEnd1"), this.onCanvasDragEnd(n)
            }, 100) : (u("[canvas]onDragEnd2"), this.onCanvasDragEnd(n))
        }

        startCreateSelection(t) {
            let o = !1;
            const n = (i, a, l, r, h) => {
                if (!o && Math.abs(i) + Math.abs(a) > 6 && (o = !0, this.options.creatingSelection = !0, this.options.selectionView.x = r.x, this.options.selectionView.y = r.y), o) {
                    const c = this.getBoundingClientRect();
                    i < 0 ? (this.options.selectionView.x = r.x + i - c.x, this.options.selectionView.width = Math.abs(i)) : (this.options.selectionView.x = r.x - c.x, this.options.selectionView.width = i), a < 0 ? (this.options.selectionView.y = r.y + a - c.y, this.options.selectionView.height = Math.abs(a)) : (this.options.selectionView.y = r.y - c.y, this.options.selectionView.height = a)
                }
                this._dataUpdated()
            };
            Q.startDrag(t, {x: 0, y: 0}, (...i) => {
                this.onCanvasDragStop(...i)
            }, n)
        }
    }

    class so extends io {
        constructor(s, t) {
            super(s, t)
        }

        dataUpdated() {
            (this.isReact || this.options.canvasZoom <= 40) && this._dataUpdated()
        }

        setOptions(s, t = !1) {
            return C(this, null, function* () {
                if (this.disableNextLayoutAnimation = !0, this._setOptions(s), t === !0) {
                    u("setOptions:justUpdateOptionsValue");
                    return
                }
                this.initLayouter(), this.resetViewSize(), yield this.doLayout()
            })
        }

        setLayouter(s) {
            u("setLayouterClass::", s), this.userLayouerClass = s, this.layouter = this.userLayouerClass
        }

        switchLayout(s, t = !0, o = !1) {
            return C(this, null, function* () {
                this.emitEvent($.beforeChangeLayout, s) === !1 && (t = !1);
                const i = this.layouter ? this.layouter.allNodes : [], a = this.layouter && this.layouter.rootNode;
                u("[change layout]switchLayout"), this.stopAutoLayout(), bt(s, this.options), this._initLayoutByLayoutOptions(s), this.layouter.allNodes = i, this.layouter.rootNode = a, t ? yield this.refresh() : (o || (this.disableNextLayoutAnimation = !0), yield this.doLayout())
            })
        }

        setJsonData(s, t = !1) {
            return C(this, null, function* () {
                this.options.canvasOpacity = .01, this._dataUpdated(), yield this._setJsonData(s);
                const o = s.rootId;
                if (o && (this.graphData.rootNode = this.graphData.nodes.find(n => n.id === o)), !this.graphData.rootNode && this.graphData.nodes.length > 0 && (this.graphData.rootNode = this.graphData.nodes[0]), this.graphData.rootNode) this.options.defaultFocusRootNode && this.setCheckedNode(this.graphData.rootNode.id); else throw new Error("The root node [rootId] is not set! Or cannot get the root node:" + s.rootId + ", If you don't have any nodes to display, you can simply set an invisible node: {id:'root', opacity:0}");
                t && (u("resetViewSize:", t), this.resetViewSize()), this.disableNextLayoutAnimation = !0, yield this.doLayout(), u("doLayout:placeOtherNodes"), yield this.placeOtherNodes(), u("doLayout:placeOtherNodes ok!")
            })
        }

        appendJsonData(s, t = !0) {
            return C(this, null, function* () {
                u("appendData:", s), this.options.canvasOpacity = .01, this._dataUpdated(), this.loadGraphJsonData(s), t && (this.disableNextLayoutAnimation = !0, yield this.doLayout())
            })
        }
    }

    class ao extends so {
        constructor(t, o) {
            super(t, o);
            v(this, "$easyViewCanvas");
            v(this, "$evCanvasCtx");
            v(this, "easyViewUpdating", !1);
            v(this, "easyViewUpdateHasNext", !1);
            v(this, "easyViewUpdateTimer");
            v(this, "easyViewOffset", {x: 0, y: 0})
        }

        setEasyViewCanvas(t) {
            this.$easyViewCanvas = t, this.$evCanvasCtx = this.$easyViewCanvas.getContext("2d")
        }

        startUpdateTask() {
            this.updateEasyView(), requestAnimationFrame(this.startUpdateTask.bind(this))
        }

        updateEasyView() {
            this.updateMiniView(), this.options.performanceMode && (!this.options.showEasyView || requestAnimationFrame(this._updateEasyView.bind(this)))
        }

        _updateEasyView() {
            try {
                this.easyViewUpdating = !0, this.evDosomethingBeforeDraw(), this.evDrawAllNodes(), this.evDrawAllLines()
            } catch (t) {
                console.error(t)
            }
            this.easyViewUpdating = !1, this.easyViewUpdateHasNext && (this.easyViewUpdateHasNext = !1, this._updateEasyView())
        }

        evDosomethingBeforeDraw() {
            const t = this.$easyViewCanvas.getBoundingClientRect().width,
                o = this.$easyViewCanvas.getBoundingClientRect().height;
            this.$easyViewCanvas.width = t, this.$easyViewCanvas.height = o, this.$evCanvasCtx.canvas.width = t, this.$evCanvasCtx.canvas.height = o, u("updateEasyView", t, o), this.$evCanvasCtx.scale(this.options.canvasZoom / 100, this.options.canvasZoom / 100), this.easyViewOffset.x = this.options.canvasOffset.x / (this.options.canvasZoom / 100), this.easyViewOffset.y = this.options.canvasOffset.y / (this.options.canvasZoom / 100)
        }

        evDrawAllNodes() {
            for (const t of this.getNodes()) x.isAllowShowNode(t) && t.opacity && t.opacity > 0 && this.evDrawNode(t)
        }

        evDrawNode(t) {
            (t.nodeShape !== void 0 && t.nodeShape !== null ? t.nodeShape : this.options.defaultNodeShape) === 1 ? this.evDrawNode4Rect(t) : this.evDrawNode4Circle(t)
        }

        getNodeColor(t) {
            const o = t.color || this.options.defaultNodeColor || "red";
            return o === "transparent" ? "rgba(204,204,204,0.55)" : o
        }

        evDrawNode4Rect(t) {
            const o = this.$evCanvasCtx, n = t.el.offsetWidth - 16, i = t.el.offsetHeight - 16,
                a = this.easyViewOffset.x + t.x + 8, l = this.easyViewOffset.y + t.y + 8;
            o.beginPath(), o.globalAlpha = t.opacity || 1, o.rect(a, l, n, i), o.fillStyle = this.getNodeColor(t), o.fill(), o.globalAlpha = 1
        }

        evDrawNode4Circle(t) {
            const o = this.$evCanvasCtx, n = t.el.offsetWidth - 16, i = t.el.offsetHeight - 16,
                a = this.easyViewOffset.x + t.x + n / 2 + 8, l = this.easyViewOffset.y + t.y + i / 2 + 8;
            o.beginPath(), o.globalAlpha = t.opacity || 1, o.ellipse(a, l, n / 2, i / 2, 0, 0, 2 * Math.PI), o.fillStyle = this.getNodeColor(t), o.fill(), o.globalAlpha = 1
        }

        evDrawAllLines() {
            for (const t of this.getLinks()) if (x.isAllowShowNode(t.fromNode) && x.isAllowShowNode(t.toNode)) for (let o = 0; o < t.relations.length; o++) this.evDrawLine(t, t.relations[o], o)
        }

        evDrawLine(t, o, n) {
            const i = this.$evCanvasCtx;
            this.easyViewOffset.x + t.fromNode.x, this.easyViewOffset.y + t.fromNode.y, this.easyViewOffset.x + t.toNode.x, this.easyViewOffset.y + t.toNode.y;
            const a = this.createLinePath(t, o, n);
            i.beginPath(), i.globalAlpha = o.opacity || 1, this.evDrawSvgPathOnCanvas(i, a.path), i.strokeStyle = o.color || this.options.defaultLineColor || "red", i.lineWidth = o.lineWidth || this.options.defaultLineWidth || 1, i.stroke(), i.globalAlpha = 1
        }

        getPointValue(t, o, n) {
            return n ? t + parseFloat(o) : parseFloat(o)
        }

        evDrawSvgPathOnCanvas(t, o) {
            const n = o.match(/[a-zA-Z][^a-zA-Z]*/g);
            let i = 0, a = 0, l = 0, r = 0, h = 0, c = 0, p = 0, d = 0, g = !1;
            n.forEach(f => {
                const m = f.trim().split(/[ ,]+/), _ = m[0].toUpperCase(), y = m[0] === m[0].toLowerCase();
                switch (_) {
                    case"M":
                        i = this.getPointValue(l, m[1], y) + this.easyViewOffset.x, a = this.getPointValue(r, m[2], y) + this.easyViewOffset.y, l = i, r = a, g && (t.closePath(), g = !1), t.moveTo(i, a);
                        break;
                    case"L":
                        i = this.getPointValue(l, m[1], y) + this.easyViewOffset.x, a = this.getPointValue(r, m[2], y) + this.easyViewOffset.y, t.lineTo(i, a);
                        break;
                    case"C":
                        h = this.getPointValue(l, m[1], y), c = this.getPointValue(r, m[2], y), p = this.getPointValue(l, m[3], y), d = this.getPointValue(r, m[4], y), i = this.getPointValue(l, m[5], y), a = this.getPointValue(r, m[6], y), l = i, r = a, t.bezierCurveTo(h, c, p, d, i, a);
                        break;
                    case"V":
                        a = this.getPointValue(r, m[1], y), r = a, t.lineTo(i, a);
                        break;
                    case"H":
                        i = this.getPointValue(l, m[1], y), l = i, t.lineTo(i, a);
                        break;
                    case"Z":
                        t.closePath(), g = !1;
                        break;
                    default:
                        u(`Unsupported command: ${_}`)
                }
            })
        }
    }

    class ro extends ao {
        constructor() {
            super(...arguments);
            v(this, "_onResizing");
            v(this, "_onResizeEnd");
            v(this, "_startPoint", {x: 0, y: 0});
            v(this, "_startSize", {x: 0, y: 0, width: 0, height: 0});
            v(this, "_resizeType", "l");
            v(this, "nodeStartSizeMap", new WeakMap);
            v(this, "resizeMiniLimit", {width: 20, height: 20})
        }

        setEditingNodes(t) {
            this.options.editingController.nodes.forEach(o => {
                o.selected = !1
            }), this.options.editingController.nodes.splice(0, this.options.editingController.nodes.length), this.options.editingController.nodes.push(...t), this.options.editingController.show = this.options.editingController.nodes.length > 0, this.updateEditingControllerView()
        }

        addEditingNode(t) {
            this.options.editingController.nodes.forEach(o => {
                o.selected = !1
            }), this.options.editingController.show = !0, this.options.editingController.nodes.push(t), this.updateEditingControllerView()
        }

        removeEditingNode(t) {
            this.options.editingController.nodes.forEach(o => {
                o.selected = !1
            }), this.options.editingController.nodes.splice(this.options.editingController.nodes.indexOf(t), 1), this.options.editingController.show = this.options.editingController.nodes.length > 0, this.updateEditingControllerView()
        }

        toggleEditingNode(t) {
            this.options.editingController.nodes.forEach(o => {
                o.selected = !1
            }), this.options.editingController.nodes.includes(t) ? this.removeEditingNode(t) : this.addEditingNode(t)
        }

        updateEditingControllerView() {
            if (this.updateEditingLineView(), !this.options.editingController.show) return;
            this.options.editingController.nodes.length > 1 && this.options.editingController.nodes.forEach(g => {
                g.selected = !0
            });
            let t = 9999999, o = 9999999, n = -9999999, i = -9999999;
            for (const g of this.options.editingController.nodes) g.x < t && (t = g.x), g.y < o && (o = g.y), g.x + g.el.offsetWidth > n && (n = g.x + g.el.offsetWidth), g.y + g.el.offsetHeight > i && (i = g.y + g.el.offsetHeight);
            const a = this.options.editingController.nodes.length > 1 ? 5 : 0, l = this.options.canvasZoom / 100, r = t,
                h = o, c = n - t, p = i - o, d = this.getViewPointByCanvasPoint({x: r, y: h});
            this.options.editingController.x = d.x - a * l, this.options.editingController.y = d.y - a * l, this.options.editingController.width = c * l + a * 2 * l, this.options.editingController.height = p * l + a * 2 * l, this.dataUpdated()
        }

        _getEventPoint(t) {
            const o = {x: t.clientX, y: t.clientY};
            if (tt(t)) {
                const i = t.touches || t.targetTouches;
                if (!i) throw new Error("error targetTouches");
                o.x = i[0].clientX, o.x = i[0].clientY
            }
            const n = this.getBoundingClientRect();
            return {x: o.x - n.x, y: o.y - n.y}
        }

        onResizeStart(t, o) {
            this._resizeType = t, this._startPoint = this._getEventPoint(o), this._startSize.x = this.options.editingController.x, this._startSize.y = this.options.editingController.y, this._startSize.width = this.options.editingController.width, this._startSize.height = this.options.editingController.height;
            for (const n of this.options.editingController.nodes) this.nodeStartSizeMap.set(n, {
                x: n.x,
                y: n.y,
                width: n.el.offsetWidth,
                height: n.el.offsetHeight
            });
            this._onResizing && this.$dom.removeEventListener("mousemove", this._onResizing), this._onResizeEnd && this.$dom.removeEventListener("mouseup", this._onResizeEnd), this._onResizing = this.onResizing.bind(this), this._onResizeEnd = this.onResizeEnd.bind(this), this.$dom.addEventListener("mousemove", this._onResizing), this.$dom.addEventListener("mouseup", this._onResizeEnd), this.emitEvent($.onResizeStart, this.options.editingController.nodes)
        }

        onResizing(t) {
            const o = this._getEventPoint(t), n = o.x - this._startPoint.x, i = o.y - this._startPoint.y;
            let a = this.options.editingController.width, l = this.options.editingController.height;
            const r = 1;
            this._resizeType === "tl" ? (this.options.editingController.x = this._startSize.x + n / r, this.options.editingController.y = this._startSize.y + i / r, a = this._startSize.width - n / r, l = this._startSize.height - i / r) : this._resizeType === "tr" ? (this.options.editingController.y = this._startSize.y + i / r, a = this._startSize.width + n / r, l = this._startSize.height - i / r) : this._resizeType === "bl" ? (this.options.editingController.x = this._startSize.x + n / r, a = this._startSize.width - n / r, l = this._startSize.height + i / r) : this._resizeType === "br" ? (a = this._startSize.width + n / r, l = this._startSize.height + i / r) : this._resizeType === "t" ? (this.options.editingController.y = this._startSize.y + i / r, l = this._startSize.height - i / r) : this._resizeType === "r" ? a = this._startSize.width + n / r : this._resizeType === "b" ? l = this._startSize.height + i / r : this._resizeType === "l" && (this.options.editingController.x = this._startSize.x + n / r, a = this._startSize.width - n / r), a < this.resizeMiniLimit.width && (a = this.resizeMiniLimit.width), l < this.resizeMiniLimit.width && (l = this.resizeMiniLimit.width), this.options.editingController.width = a, this.options.editingController.height = l, this._applyResizeScale(t), this.dataUpdated()
        }

        _applyResizeScale(t) {
            const o = this.options.editingController.width / this._startSize.width,
                n = this.options.editingController.height / this._startSize.height,
                i = this.getCanvasPointByViewPoint({x: this._startSize.x, y: this._startSize.y}),
                a = this.getCanvasPointByViewPoint({
                    x: this.options.editingController.x,
                    y: this.options.editingController.y
                });
            for (const l of this.options.editingController.nodes) {
                const r = this.nodeStartSizeMap.get(l), h = r.width * o, c = r.height * n;
                l.x = a.x + o * (r.x - i.x), l.y = a.y + n * (r.y - i.y), l.width = h - 16, l.height = c - 16
            }
        }

        onResizeEnd(t) {
            const o = this._getEventPoint(t);
            o.x - this._startPoint.x, o.y - this._startPoint.y, this._applyResizeScale(t), this.$dom.removeEventListener("mousemove", this._onResizing), this.$dom.removeEventListener("mouseup", this._onResizeEnd), this._onResizing = null, this._onResizeEnd = null, this.emitEvent($.onResizeEnd, this.options.editingController.nodes)
        }

        draggingSelectedNodes(t, o, n) {
            if (!this.options.editingController.nodes.includes(t)) {
                this.updateReferenceLineView(t, o, n), this.updateEditingLineView();
                return
            }
            for (const i of this.options.editingController.nodes) i !== t && (i.x += o, i.y += n);
            this.updateReferenceLineView(t, o, n), this.updateEditingControllerView()
        }

        getNodesInSelectionView(t) {
            const o = this.getBoundingClientRect(),
                n = this.getCanvasCoordinateByClientCoordinate({x: t.x + o.x, y: t.y + o.y}),
                i = this.getCanvasCoordinateByClientCoordinate({x: t.x + t.width + o.x, y: t.y + t.height + o.y}),
                a = [];
            return this.getNodes().forEach(l => {
                const r = l.x + l.el.offsetWidth / 2, h = l.y + l.el.offsetHeight / 2;
                r > n.x && h > n.y && r < i.x && h < i.y && a.push(l)
            }), a
        }

        updateEditingConnectControllerView() {
            const t = this.options.nodeConnectController.node, o = t.x, n = t.y, i = t.x + t.el.offsetWidth,
                a = t.y + t.el.offsetHeight, l = 0, r = this.options.canvasZoom / 100, h = o, c = n, p = i - o,
                d = a - n, g = this.getViewPointByCanvasPoint({x: h, y: c});
            this.options.nodeConnectController.x = g.x - l * r, this.options.nodeConnectController.y = g.y - l * r, this.options.nodeConnectController.width = p * r + l * 2 * r, this.options.nodeConnectController.height = d * r + l * 2 * r, this.dataUpdated()
        }

        setEditingLine(t, o) {
            this.options.editingLineController.link = o, this.options.editingLineController.line = t, this.options.editingLineController.show = !!(o && t), this.updateEditingLineView()
        }

        updateReferenceLineView(t, o, n) {
            if (!this.options.showReferenceLine) return;
            const i = Math.abs(o), a = Math.abs(n);
            if (!this.options.editingReferenceLine.show && i + a > 0 && (this.options.editingReferenceLine.show = !0), !this.options.editingReferenceLine.show) return;
            const l = t.x, r = t.x + t.el.offsetWidth / 2, h = t.x + t.el.offsetWidth, c = t.y,
                p = t.y + t.el.offsetHeight / 2, d = t.y + t.el.offsetHeight,
                g = this.getViewPointByCanvasPoint({x: l, y: c}), f = this.getViewPointByCanvasPoint({x: r, y: p}),
                m = this.getViewPointByCanvasPoint({x: h, y: d});
            let _ = !1, y = !1;
            for (const M of this.graphData.nodes) {
                if (M === t) continue;
                const S = M.x, z = M.x + M.el.offsetWidth / 2, X = M.x + M.el.offsetWidth, U = M.y,
                    D = M.y + M.el.offsetHeight / 2, V = M.y + M.el.offsetHeight, w = Math.abs(l - S),
                    b = Math.abs(r - z), N = Math.abs(h - X), R = Math.abs(c - U), H = Math.abs(p - D),
                    E = Math.abs(d - V), L = 3;
                if (b < 800 && H < 800) {
                    if (!y && b < L) {
                        const O = this.getViewPointByCanvasPoint({x: z, y: D});
                        this.options.editingReferenceLine.v_x = f.x, this.options.editingReferenceLine.v_y = f.y > O.y ? O.y : f.y, this.options.editingReferenceLine.v_height = Math.round(Math.abs(f.y - O.y)), y = !0
                    }
                    if (!y && w < L) {
                        const O = this.getViewPointByCanvasPoint({x: S, y: D});
                        this.options.editingReferenceLine.v_x = g.x, this.options.editingReferenceLine.v_y = f.y > O.y ? O.y : f.y, this.options.editingReferenceLine.v_height = Math.round(Math.abs(f.y - O.y)), y = !0
                    }
                    if (!y && N < L) {
                        const O = this.getViewPointByCanvasPoint({x: X, y: D});
                        this.options.editingReferenceLine.v_x = m.x, this.options.editingReferenceLine.v_y = f.y > O.y ? O.y : f.y, this.options.editingReferenceLine.v_height = Math.round(Math.abs(f.y - O.y)), y = !0
                    }
                    if (!_ && H < L) {
                        const O = this.getViewPointByCanvasPoint({x: z, y: D});
                        this.options.editingReferenceLine.h_y = f.y, this.options.editingReferenceLine.h_x = f.x > O.x ? O.x : f.x, this.options.editingReferenceLine.h_width = Math.round(Math.abs(f.x - O.x)), _ = !0
                    }
                    if (!_ && R < L) {
                        const O = this.getViewPointByCanvasPoint({x: z, y: U});
                        this.options.editingReferenceLine.h_y = g.y, this.options.editingReferenceLine.h_x = f.x > O.x ? O.x : f.x, this.options.editingReferenceLine.h_width = Math.round(Math.abs(f.x - O.x)), _ = !0
                    }
                    if (!_ && E < L) {
                        const O = this.getViewPointByCanvasPoint({x: z, y: V});
                        this.options.editingReferenceLine.h_y = m.y, this.options.editingReferenceLine.h_x = f.x > O.x ? O.x : f.x, this.options.editingReferenceLine.h_width = Math.abs(f.x - O.x), _ = !0
                    }
                    if (_ && y) break
                }
            }
            this.options.editingReferenceLine.directionH = _, this.options.editingReferenceLine.directionV = y
        }

        updateEditingLineView() {
            if (this.updateElementLines(), !this.options.editingLineController.show) return;
            const t = this.options.editingLineController.link, o = this.options.editingLineController.line, {
                    path: n,
                    textPosition: i
                } = this.createLinePath(t, o, t.relations.indexOf(o)), {
                    startPoint: a,
                    endPoint: l
                } = this.getStartAndEndPoint(n), r = this.getViewPointByCanvasPoint(o.isReverse ? l : a),
                h = this.getViewPointByCanvasPoint(o.isReverse ? a : l);
            this.options.editingLineController.startPoint.x = r.x - 5, this.options.editingLineController.startPoint.y = r.y - 5, this.options.editingLineController.endPoint.x = h.x - 5, this.options.editingLineController.endPoint.y = h.y - 5;
            const c = this.getViewPointByCanvasPoint(i), p = this.$canvasDom.querySelector(`g[data-id='${o.id}']`);
            let d = 0, g = 0, f = o.textOffset_x || 0, m = o.textOffset_y || 0;
            const _ = this.options.canvasZoom / 100;
            if (p) {
                const y = p.querySelector("text.c-rg-line-text");
                if (y) {
                    f = Math.floor(parseFloat(y.getAttribute("x") || "0")), m = Math.floor(parseFloat(y.getAttribute("y") || "0"));
                    const M = y.getBoundingClientRect(), S = getComputedStyle(y).textAnchor;
                    this.options.editingLineController.text.width = M.width, this.options.editingLineController.text.height = M.height, g = -M.height / 2, S === "start" ? d = 0 : S === "end" ? d = -this.options.editingLineController.text.width : d = -this.options.editingLineController.text.width / 2
                } else this.options.editingLineController.text.width = 20, this.options.editingLineController.text.height = 10, d = -this.options.editingLineController.text.width / 2
            }
            this.options.editingLineController.text.width += 40, this.options.editingLineController.text.height += 10, this.options.editingLineController.text.x = c.x + d + f * _ - 20, this.options.editingLineController.text.y = c.y + g + m * _ - 10
        }

        getStartAndEndPoint(t) {
            const o = t.match(/[a-zA-Z][^a-zA-Z]*/g);
            let n = 0, i = 0, a = 0, l = 0;
            const r = {x: 0, y: 0}, h = {x: 0, y: 0};
            for (const c of o) {
                const p = c.trim().split(/[ ,]+/), d = p[0].toUpperCase(), g = p[0] === p[0].toLowerCase();
                switch (d) {
                    case"M":
                        n = this.getPointValue(a, p[1], g) + this.easyViewOffset.x, i = this.getPointValue(l, p[2], g) + this.easyViewOffset.y, a = n, l = i;
                        break;
                    case"L":
                        n = this.getPointValue(a, p[1], g) + this.easyViewOffset.x, i = this.getPointValue(l, p[2], g) + this.easyViewOffset.y;
                        break;
                    case"C":
                        this.getPointValue(a, p[1], g), this.getPointValue(l, p[2], g), this.getPointValue(a, p[3], g), this.getPointValue(l, p[4], g), n = this.getPointValue(a, p[5], g), i = this.getPointValue(l, p[6], g), a = n, l = i;
                        break;
                    case"V":
                        i = this.getPointValue(l, p[1], g), l = i;
                        break;
                    case"H":
                        n = this.getPointValue(a, p[1], g), a = n;
                        break;
                    case"Z":
                        break;
                    default:
                        u(`Unsupported command: ${d}`)
                }
                c === o[0] && (r.x = n, r.y = i), c === o[o.length - 1] && (h.x = n, h.y = i)
            }
            return {startPoint: r, endPoint: h}
        }

        startMoveLineVertex(t, o) {
            o.stopPropagation();
            const n = this.options.editingLineController.link, i = this.options.editingLineController.line;
            let a = n.fromNode;
            this.setEditingLine(null, null), this.removeLine(n, i), t === "start" ? (a = n.toNode, i.isReverse ? a = n.fromNode : i.isReverse = !0) : i.isReverse && (a = n.toNode, i.isReverse = void 0), this.startCreatingLinePlot(o, {
                template: i,
                fromNode: a,
                onCreateLine: (l, r, h) => {
                    if (r.id) {
                        let c = l.id, p = r.id;
                        h && h.isReverse && (c = r.id, p = l.id, h.isReverse = void 0);
                        const d = Object.assign(h || {}, {from: c, to: p});
                        this.addLines([d])
                    }
                }
            })
        }

        startCreateLineByTemplate(t, o, n) {
            n.stopPropagation();
            const i = this.options.editingController.nodes[0], a = o || {lineShape: 6, text: "New Line"};
            this.startCreatingLinePlot(n, {
                template: a, fromNode: i, onCreateLine: (l, r, h) => {
                    if (r.id) {
                        const c = Object.assign({}, h, {from: l.id, to: r.id});
                        this.addLines([c])
                    }
                }
            })
        }

        onLineVertexBeDropped(t, o) {
            o.stopPropagation();
            const n = this.options.nodeConnectController.node;
            this.options.newLinkTemplate.fromNode ? (this.options.newLinkTemplate.toNodeObject = n, this.options.newLineTemplate.isReverse ? this.options.newLineTemplate.fromJunctionPoint = t : this.options.newLineTemplate.toJunctionPoint = t, this.onCreateLine(this.options.newLinkTemplate.fromNode, this.options.nodeConnectController.node), this.stopCreatingLinePlot(), this.emitEvent($.onLineVertexDropped, {
                fromNode: n,
                toNode: n
            })) : (this.options.newLineTemplate.isReverse ? this.options.newLineTemplate.toJunctionPoint = t : this.options.newLineTemplate.fromJunctionPoint = t, this.options.newLinkTemplate.fromNode = n)
        }

        startMoveLineText(t) {
            const o = this._getEventPoint(t), n = this.options.editingLineController.line, i = n.textOffset_x || 0,
                a = n.textOffset_y || 0, l = h => {
                    const c = this.options.canvasZoom / 100, p = this._getEventPoint(h), d = p.x - o.x, g = p.y - o.y;
                    n.textOffset_x = Math.round(i + d / c), n.textOffset_y = Math.round(a + g / c), this.updateEditingLineView(), this._dataUpdated()
                }, r = h => {
                    this.$dom.removeEventListener("mousemove", l), this.$dom.removeEventListener("mouseup", r), this._dataUpdated()
                };
            this.$dom.addEventListener("mousemove", l), this.$dom.addEventListener("mouseup", r)
        }
    }

    class lo extends ro {
        constructor(t, o) {
            super(t, o);
            v(this, "$miniViewCanvas");
            v(this, "$mvCanvasCtx");
            v(this, "miniViewUpdating", !1);
            v(this, "miniViewUpdateHasNext", !1);
            v(this, "miniViewBox", {
                visibleAreaStart: {x: 0, y: 0},
                visibleAreaEnd: {x: 0, y: 0},
                canvas_start_x: 0,
                canvas_start_y: 0,
                canvas_end_x: 0,
                canvas_end_y: 0,
                canvas_width: 0,
                canvas_height: 0,
                miniview_width: 0,
                miniview_height: 0
            });
            v(this, "visibleArea", {x: 0, y: 0});
            v(this, "miniviewVisiableHandleMoveing", !1)
        }

        setMiniViewCanvas(t) {
            this.$miniViewCanvas = t, this.$mvCanvasCtx = this.$miniViewCanvas.getContext("2d")
        }

        updateMiniView() {
            !this.options.showMiniView || requestAnimationFrame(this._updateMiniView.bind(this))
        }

        _updateMiniView() {
            try {
                this.miniViewUpdating = !0, this.mvDosomethingBeforeDraw(), this.mvDrawAllNodes(), this.mvDrawAllLines(), this.mvDrawMask()
            } catch (t) {
                console.error(t)
            }
            this.miniViewUpdating = !1, this.miniViewUpdateHasNext && (this.miniViewUpdateHasNext = !1, this._updateMiniView())
        }

        mvDosomethingBeforeDraw() {
            let t = 9999999, o = 9999999, n = -9999999, i = -9999999;
            for (const y of this.getNodes()) x.isAllowShowNode(y) && y.opacity && y.opacity > 0 && (y.x < t && (t = y.x), y.y < o && (o = y.y), y.x + y.el.offsetWidth > n && (n = y.x + y.el.offsetWidth), y.y + y.el.offsetHeight > i && (i = y.y + y.el.offsetHeight));
            const a = 1, l = 50, r = 50;
            this.miniViewBox.canvas_start_x = t - l, this.miniViewBox.canvas_start_y = o - r, this.miniViewBox.canvas_end_x = n + l, this.miniViewBox.canvas_end_y = i + r, this.miniViewBox.canvas_width = this.miniViewBox.canvas_end_x - this.miniViewBox.canvas_start_x, this.miniViewBox.canvas_height = this.miniViewBox.canvas_end_y - this.miniViewBox.canvas_start_y;
            const h = this.$miniViewCanvas.parentElement.getBoundingClientRect(), c = h.width, p = h.height;
            let d = 0, g = 0, f = a;
            c / this.miniViewBox.canvas_width < p / this.miniViewBox.canvas_height ? (f = c / this.miniViewBox.canvas_width * a, d = c, g = c / this.miniViewBox.canvas_width * this.miniViewBox.canvas_height) : (f = p / this.miniViewBox.canvas_height * a, d = p / this.miniViewBox.canvas_height * this.miniViewBox.canvas_width, g = p), this.miniViewBox.miniview_width = c, this.miniViewBox.miniview_height = p, this.$miniViewCanvas.width = c, this.$miniViewCanvas.height = p, this.$mvCanvasCtx.canvas.width = c, this.$mvCanvasCtx.canvas.height = p;
            const m = (p - g) / 2, _ = (c - d) / 2;
            if (this.miniViewBox.canvas_start_x -= _ / f, this.miniViewBox.canvas_start_y -= m / f, u("updateMiniView", _, m), this.$mvCanvasCtx.scale(f, f), !this.miniviewVisiableHandleMoveing) {
                const y = this.getBoundingClientRect(), M = this.getCanvasCoordinateByClientCoordinate({x: 0, y: 0}),
                    S = this.getCanvasCoordinateByClientCoordinate({x: y.width, y: y.height}), z = S.x - M.x,
                    X = S.y - M.y;
                this.miniViewBox.visibleAreaStart = M, this.miniViewBox.visibleAreaEnd = S, this.options.miniViewVisibleHandle.width = f * z, this.options.miniViewVisibleHandle.height = f * X;
                const U = M.x - this.miniViewBox.canvas_start_x, D = M.y - this.miniViewBox.canvas_start_y;
                this.options.miniViewVisibleHandle.x = f * U, this.options.miniViewVisibleHandle.y = f * D, this.options.miniViewVisibleHandle.x + this.options.miniViewVisibleHandle.width < 0 || this.options.miniViewVisibleHandle.y + this.options.miniViewVisibleHandle.height < 0 || this.options.miniViewVisibleHandle.y > this.miniViewBox.miniview_height || this.options.miniViewVisibleHandle.x > this.miniViewBox.miniview_width ? this.options.miniViewVisibleHandle.emptyContent = !0 : this.options.miniViewVisibleHandle.emptyContent = !1
            }
        }

        mvDrawMask() {
        }

        mvDrawAllNodes() {
            for (const t of this.getNodes()) x.isAllowShowNode(t) && t.opacity && t.opacity > 0 && this.mvDrawNode(t)
        }

        mvDrawNode(t) {
            (t.nodeShape !== void 0 && t.nodeShape !== null ? t.nodeShape : this.options.defaultNodeShape) === 1 ? this.mvDrawNode4Rect(t) : this.mvDrawNode4Circle(t)
        }

        mvDrawNode4Rect(t) {
            const o = this.$mvCanvasCtx, n = t.el.offsetWidth - 16, i = t.el.offsetHeight - 16,
                a = t.x + 8 - this.miniViewBox.canvas_start_x, l = t.y + 8 - this.miniViewBox.canvas_start_y;
            o.beginPath(), o.globalAlpha = t.opacity || 1, o.rect(a, l, n, i), o.fillStyle = this.getNodeColor(t), o.fill(), o.globalAlpha = 1
        }

        mvDrawNode4Circle(t) {
            const o = this.$mvCanvasCtx, n = t.el.offsetWidth - 16, i = t.el.offsetHeight - 16,
                a = t.x + n / 2 + 8 - this.miniViewBox.canvas_start_x,
                l = t.y + i / 2 + 8 - this.miniViewBox.canvas_start_y;
            o.beginPath(), o.globalAlpha = t.opacity || 1, o.ellipse(a, l, n / 2, i / 2, 0, 0, 2 * Math.PI), o.fillStyle = this.getNodeColor(t), o.fill(), o.globalAlpha = 1
        }

        mvDrawAllLines() {
            for (const t of this.getLinks()) if (x.isAllowShowNode(t.fromNode) && x.isAllowShowNode(t.toNode)) for (let o = 0; o < t.relations.length; o++) this.mvDrawLine(t, t.relations[o], o)
        }

        mvDrawLine(t, o, n) {
            const i = this.$mvCanvasCtx, a = this.createLinePath(t, o, n);
            i.beginPath(), i.globalAlpha = o.opacity || 1, this.mvDrawSvgPathOnCanvas(i, a.path), i.strokeStyle = o.color || this.options.defaultLineColor || "red", i.lineWidth = o.lineWidth || this.options.defaultLineWidth || 1, i.stroke(), i.globalAlpha = 1
        }

        mvDrawSvgPathOnCanvas(t, o) {
            const n = o.match(/[a-zA-Z][^a-zA-Z]*/g);
            let i = 0, a = 0, l = 0, r = 0, h = 0, c = 0, p = 0, d = 0, g = !1;
            n.forEach(f => {
                const m = f.trim().split(/[ ,]+/), _ = m[0].toUpperCase(), y = m[0] === m[0].toLowerCase();
                switch (_) {
                    case"M":
                        i = this.getPointValue(l, m[1], y) - this.miniViewBox.canvas_start_x, a = this.getPointValue(r, m[2], y) - this.miniViewBox.canvas_start_y, l = i, r = a, g && (t.closePath(), g = !1), t.moveTo(i, a);
                        break;
                    case"L":
                        i = this.getPointValue(l, m[1], y) - this.miniViewBox.canvas_start_x, a = this.getPointValue(r, m[2], y) - this.miniViewBox.canvas_start_y, t.lineTo(i, a);
                        break;
                    case"C":
                        h = this.getPointValue(l, m[1], y), c = this.getPointValue(r, m[2], y), p = this.getPointValue(l, m[3], y), d = this.getPointValue(r, m[4], y), i = this.getPointValue(l, m[5], y), a = this.getPointValue(r, m[6], y), l = i, r = a, t.bezierCurveTo(h, c, p, d, i, a);
                        break;
                    case"V":
                        a = this.getPointValue(r, m[1], y), r = a, t.lineTo(i, a);
                        break;
                    case"H":
                        i = this.getPointValue(l, m[1], y), l = i, t.lineTo(i, a);
                        break;
                    case"Z":
                        t.closePath(), g = !1;
                        break;
                    default:
                        u(`Unsupported command: ${_}`)
                }
            })
        }

        onVisiableViewHandleDragStart(t) {
            t.preventDefault(), t.stopPropagation();
            const o = this.options.miniViewVisibleHandle.x, n = this.options.miniViewVisibleHandle.y,
                i = this.options.canvasOffset.x, a = this.options.canvasOffset.y, l = this.miniViewBox.canvas_width,
                r = this.miniViewBox.canvas_height, h = (p, d, g, f, m) => {
                    const _ = p / this.miniViewBox.miniview_width, y = d / this.miniViewBox.miniview_height,
                        M = this.options.canvasZoom / 100, S = l * _ * M, z = r * y * M;
                    this.setCanvasOffset(i - S, a - z), this.options.miniViewVisibleHandle.x = o + p, this.options.miniViewVisibleHandle.y = n + d, this.updateEditingControllerView(), this.dataUpdated()
                }, c = (p, d, g) => {
                    this.miniviewVisiableHandleMoveing = !1, this.onCanvasDragEnd(g)
                };
            Q.startDrag(t, this.options.miniViewVisibleHandle, c, h)
        }

        resetByVisiableView(t) {
            return C(this, null, function* () {
                !this.options.miniViewVisibleHandle.emptyContent || (yield this.setZoom(100), yield this.moveToCenter(), yield this.zoomToFit())
            })
        }
    }

    class Ht extends lo {
        constructor(s, t) {
            super(s, t)
        }

        ready() {
            this.initLayouter(), this.resetViewSize(!0), this.refreshNVAnalysisInfo()
        }
    }

    const ho = {
        props: {
            nodeProps: {type: Object, required: !0},
            expandButtonClass: {type: String, required: !0},
            expandOrCollapseNode: {type: Function, required: !0},
            expandHolderPosition: {type: String, required: !0},
            color: {type: String, required: !0}
        }
    };
    var co = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            staticClass: "c-btn-open-close",
            class: ["c-expand-positon-" + e.expandHolderPosition]
        }, [t("span", {
            class: e.expandButtonClass, style: {"background-color": e.color}, on: {
                click: function (o) {
                    return o.stopPropagation(), e.expandOrCollapseNode.apply(null, arguments)
                }, touchend: function (o) {
                    return o.stopPropagation(), e.expandOrCollapseNode.apply(null, arguments)
                }
            }
        })])
    }, uo = [];

    function G(e, s, t, o, n, i, a, l) {
        var r = typeof e == "function" ? e.options : e;
        s && (r.render = s, r.staticRenderFns = t, r._compiled = !0), o && (r.functional = !0), i && (r._scopeId = "data-v-" + i);
        var h;
        if (a ? (h = function (d) {
            d = d || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !d && typeof __VUE_SSR_CONTEXT__ != "undefined" && (d = __VUE_SSR_CONTEXT__), n && n.call(this, d), d && d._registeredComponents && d._registeredComponents.add(a)
        }, r._ssrRegister = h) : n && (h = l ? function () {
            n.call(this, (r.functional ? this.parent : this).$root.$options.shadowRoot)
        } : n), h) if (r.functional) {
            r._injectStyles = h;
            var c = r.render;
            r.render = function (g, f) {
                return h.call(f), c(g, f)
            }
        } else {
            var p = r.beforeCreate;
            r.beforeCreate = p ? [].concat(p, h) : [h]
        }
        return {exports: e, options: r}
    }

    const Wt = {};
    var po = G(ho, co, uo, !1, fo, null, null, null);

    function fo(e) {
        for (let s in Wt) this[s] = Wt[s]
    }

    const go = {
        name: "SeeksRGNode", components: {
            RGNodeExpandHolder: function () {
                return po.exports
            }()
        }, props: {nodeProps: {mustUseProp: !0, default: () => ({}), type: Object}}, data() {
            return {expanding: !1}
        }, inject: ["graph", "graphInstance"], computed: {
            oldVersionSlot() {
                const e = this.$scopedSlots.node({node: this.nodeProps});
                return e.length === 0 ? null : e
            }, expandButtonClass() {
                return this.nodeProps.expanded === !1 ? "c-expanded" : "c-collapsed"
            }, showExpandHolder() {
                if (this.nodeProps.expandHolderPosition && this.nodeProps.expandHolderPosition !== "hide") return !0;
                if (this.nodeProps.lot.childs && this.nodeProps.lot.childs.length > 0) {
                    if (this.options.defaultExpandHolderPosition && this.options.defaultExpandHolderPosition !== "hide") return !0
                } else return !1
            }, options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }, borderColor() {
                return this.nodeProps.borderColor || this.options.defaultNodeBorderColor
            }, borderWidth() {
                const e = this.nodeProps.borderWidth === void 0 ? this.options.defaultNodeBorderWidth : this.nodeProps.borderWidth;
                return e ? e + "px" : void 0
            }, nodeWidth() {
                if (this.nodeProps.width === 0) return;
                const e = this.nodeProps.width || this.options.defaultNodeWidth;
                if (!!e) return e + "px"
            }, nodeHeight() {
                if (this.nodeProps.height === 0) return;
                const e = this.nodeProps.height || this.options.defaultNodeHeight;
                if (!!e) return e + "px"
            }
        }, created() {
        }, mounted() {
            this.refreshNodeProperties(), this.relationGraph.addNodeResizeListener(this.$refs.seeksRGNode, this.nodeProps), u("RGNode:mounted")
        }, beforeDestroy() {
            this.relationGraph.removeNodeResizeListener(this.$refs.seeksRGNode)
        }, methods: {
            refreshNodeProperties() {
                this.$refs.seeksRGNode.offsetWidth === 0 && this.$refs.seeksRGNode.offsetHeight === 0 || (this.nodeProps.el.offsetWidth !== this.$refs.seeksRGNode.offsetWidth || this.nodeProps.el.offsetHeight !== this.$refs.seeksRGNode.offsetHeight) && this.relationGraph.updateNodeOffsetSize(this.nodeProps, this.$refs.seeksRGNode.offsetWidth, this.$refs.seeksRGNode.offsetHeight)
            }, expandOrCollapseNode(e) {
                return C(this, null, function* () {
                    u("expandOrCollapseNode", this.expanding), !this.expanding && (this.expanding = !0, setTimeout(() => {
                        this.expanding = !1
                    }, 300), yield this.relationGraph.expandOrCollapseNode(this.nodeProps, e))
                })
            }, onDragStart(e) {
                this.relationGraph.onNodeDragStart(this.nodeProps, e)
            }, onclick(e) {
                this.relationGraph.onNodeClick(this.nodeProps, e)
            }, isAllowShowNode(e) {
                return x.isAllowShowNode(e)
            }
        }
    };
    var _o = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.isAllowShowNode(e.nodeProps),
                expression: "isAllowShowNode(nodeProps)"
            }],
            ref: "seeksRGNode",
            staticClass: "rel-node-peel",
            class: [e.nodeProps.selected && "rel-node-selected", e.nodeProps.dragging && "rel-node-dragging", e.nodeProps.id === e.options.checkedNodeId && "rel-node-peel-checked", e.nodeProps.className],
            style: {
                left: e.nodeProps.x + "px",
                top: e.nodeProps.y + "px",
                "z-index": e.nodeProps.zIndex ? e.nodeProps.zIndex : void 0,
                opacity: e.nodeProps.opacity > 1 ? e.nodeProps.opacity / 100 : e.nodeProps.opacity
            },
            attrs: {"data-id": e.nodeProps.id}
        }, [e.showExpandHolder ? [e.options.oldVueVersion && !e.options.ovUseNodeExpandHolderSlot ? [t("RGNodeExpandHolder", {
            attrs: {
                nodeProps: e.nodeProps,
                expandButtonClass: e.expandButtonClass,
                expandOrCollapseNode: e.expandOrCollapseNode,
                expandHolderPosition: e.nodeProps.expandHolderPosition || e.options.defaultExpandHolderPosition,
                color: e.options.defaultExpandHolderColor || e.nodeProps.color || e.options.defaultNodeColor
            }
        })] : e._t("node-expand-holder", function () {
            return [t("RGNodeExpandHolder", {
                attrs: {
                    nodeProps: e.nodeProps,
                    expandButtonClass: e.expandButtonClass,
                    expandOrCollapseNode: e.expandOrCollapseNode,
                    expandHolderPosition: e.nodeProps.expandHolderPosition || e.options.defaultExpandHolderPosition,
                    color: e.options.defaultExpandHolderColor || e.nodeProps.color || e.options.defaultNodeColor
                }
            })]
        }, {
            nodeProps: e.nodeProps,
            expandButtonClass: e.expandButtonClass,
            expandOrCollapseNode: e.expandOrCollapseNode,
            expandHolderPosition: e.nodeProps.expandHolderPosition || e.options.defaultExpandHolderPosition,
            color: e.options.defaultExpandHolderColor || e.nodeProps.color || e.options.defaultNodeColor
        })] : e._e(), e.nodeProps.html ? t("div", {
            domProps: {innerHTML: e._s(e.nodeProps.html)},
            on: {
                click: function (o) {
                    return e.onclick(o)
                }, mousedown: function (o) {
                    return !o.type.indexOf("key") && e._k(o.keyCode, "left", 37, o.key, ["Left", "ArrowLeft"]) || "button" in o && o.button !== 0 ? null : (o.stopPropagation(), e.onDragStart(o))
                }, touchstart: function (o) {
                    return o.stopPropagation(), e.onDragStart(o)
                }
            }
        }) : t("div", {
            staticClass: "rel-node",
            class: ["rel-node-shape-" + (e.nodeProps.nodeShape === void 0 ? e.options.defaultNodeShape : e.nodeProps.nodeShape), "rel-node-type-" + e.nodeProps.type, e.nodeProps.id === e.options.checkedNodeId ? "rel-node-checked" : "", e.nodeProps.flashing ? "rel-node-flashing" : "", e.nodeProps.styleClass, e.nodeProps.innerHTML ? "rel-diy-node" : ""],
            style: {
                "background-color": e.nodeProps.color === void 0 ? e.options.defaultNodeColor : e.nodeProps.color,
                color: e.nodeProps.fontColor === void 0 ? e.options.defaultNodeFontColor : e.nodeProps.fontColor,
                "border-color": e.borderColor,
                "border-width": e.borderWidth,
                width: e.nodeWidth,
                height: e.nodeHeight
            },
            on: {
                click: function (o) {
                    return e.onclick(o)
                }, mousedown: function (o) {
                    return !o.type.indexOf("key") && e._k(o.keyCode, "left", 37, o.key, ["Left", "ArrowLeft"]) || "button" in o && o.button !== 0 ? null : (o.stopPropagation(), e.onDragStart(o))
                }, touchstart: function (o) {
                    return o.stopPropagation(), e.onDragStart(o)
                }
            }
        }, [e.options.hideNodeContentByZoom === !0 && e.options.canvasZoom < 40 ? e._e() : [e.options.oldVueVersion && !e.options.ovUseNodeSlot ? [e.nodeProps.innerHTML ? t("div", {domProps: {innerHTML: e._s(e.nodeProps.innerHTML)}}) : t("div", {
            staticClass: "c-node-text",
            style: {color: e.nodeProps.fontColor || e.options.defaultNodeFontColor}
        }, [t("span", {domProps: {innerHTML: e._s(e.nodeProps.text)}})])] : e._t("node", function () {
            return [e.nodeProps.innerHTML ? t("div", {domProps: {innerHTML: e._s(e.nodeProps.innerHTML)}}) : t("div", {
                staticClass: "c-node-text",
                style: {color: e.nodeProps.fontColor || e.options.defaultNodeFontColor}
            }, [t("span", {domProps: {innerHTML: e._s(e.nodeProps.text)}})])]
        }, {node: e.nodeProps})]], 2)], 2)
    }, mo = [];
    const ta = "", Ft = {};
    var yo = G(go, _o, mo, !1, vo, "dbe880ec", null, null);

    function vo(e) {
        for (let s in Ft) this[s] = Ft[s]
    }

    const $t = function () {
        return yo.exports
    }(), xo = {
        name: "SeeksRGLine",
        props: {
            link: {mustUseProp: !0, default: () => ({}), type: Object},
            relation: {mustUseProp: !0, default: () => ({}), type: Object},
            relationIndex: {mustUseProp: !0, default: () => 0, type: Number}
        },
        data() {
            return {is_flashing: !1}
        },
        inject: ["graph", "graphInstance"],
        computed: {
            checked() {
                return this.relation.id === this.options.checkedLineId
            }, options() {
                return this.graph.options
            }, lineWidth() {
                return this.relation.lineWidth ? this.relation.lineWidth : this.options.defaultLineWidth
            }, relationGraph() {
                return this.graphInstance()
            }, showStartArrow() {
                return this.relationGraph.getArrow(this.relation, this.link, !0)
            }, showEndArrow() {
                return this.relationGraph.getArrow(this.relation, this.link, !1)
            }, pathData() {
                try {
                    const {
                        path: e,
                        textPosition: s
                    } = this.relationGraph.createLinePath(this.link, this.relation, this.relationIndex);
                    let t = {};
                    try {
                        t = this.relationGraph.getTextTransform(this.relation, s.x, s.y, s.rotate)
                    } catch (o) {
                        u(o)
                    }
                    return {path: e, textTransform: t}
                } catch (e) {
                    u(e)
                }
                return {path: null, textTransform: null}
            }, textStyle() {
                return this.relationGraph.getLineTextStyle(this.link, this.relation, this.relationIndex)
            }
        },
        watch: {},
        methods: {
            onClick(e, s) {
                this.relationGraph.onLineClick(e, this.link, s)
            }
        }
    };
    var wo = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("g", {
            class: [e.relation.className],
            attrs: {"data-id": e.relation.id}
        }, [t("path", {
            staticClass: "c-rg-line-bg",
            style: {
                pointerEvents: e.relation.disableDefaultClickEffect ? "none" : void 0,
                strokeWidth: (e.lineWidth < 8 ? 8 : e.lineWidth) + "px"
            },
            attrs: {d: e.pathData.path},
            on: {
                touchstart: function (o) {
                    return e.onClick(e.relation, o)
                }, click: function (o) {
                    return e.onClick(e.relation, o)
                }
            }
        }), t("path", {
            staticClass: "c-rg-line",
            class: [e.relation.styleClass, e.relation.dashType ? "rg-line-dashtype-" + e.relation.dashType : void 0, e.relation.animation ? "rg-line-anm-" + e.relation.animation : void 0, e.checked ? "c-rg-line-checked" : void 0],
            style: {
                stroke: e.relation.color ? e.relation.color : e.options.defaultLineColor,
                opacity: e.relation.opacity,
                "pointer-events": e.relation.disableDefaultClickEffect && "none",
                "stroke-width": e.lineWidth + "px",
                fill: e.relation.lineShape === 8 ? e.relation.color || e.options.defaultLineColor : "none"
            },
            attrs: {
                d: e.pathData.path,
                stroke: e.relation.color ? e.relation.color : e.options.defaultLineColor,
                "marker-start": e.showStartArrow,
                "marker-end": e.showEndArrow
            },
            on: {
                touchstart: function (o) {
                    return e.onClick(e.relation, o)
                }, click: function (o) {
                    return e.onClick(e.relation, o)
                }
            }
        }), e.textStyle && e.options.defaultShowLineLabel && e.options.canvasZoom > 40 ? t("g", {attrs: {transform: e.pathData.textTransform}}, [t("text", {
            key: "t-" + e.relation.seeks_id,
            staticClass: "c-rg-line-text",
            class: {"c-rg-line-text-checked": e.checked},
            style: {
                opacity: e.relation.opacity,
                fill: e.relation.fontColor ? e.relation.fontColor : e.options.defaultLineFontColor ? e.options.defaultLineFontColor : e.relation.color ? e.relation.color : e.options.defaultLineColor,
                "pointer-events": e.relation.disableDefaultClickEffect && "none"
            },
            attrs: {
                x: e.relation.textOffset_x || e.options.defaultLineTextOffset_x || 0,
                y: e.relation.textOffset_y || e.options.defaultLineTextOffset_y || 10,
                "text-anchor": e.textStyle.textAnchor
            },
            on: {
                touchstart: function (o) {
                    return e.onClick(e.relation, o)
                }, click: function (o) {
                    return e.onClick(e.relation, o)
                }
            }
        }, [e._v(" " + e._s(e.textStyle.text) + " ")])]) : e._e()])
    }, Co = [];
    const ea = "", Ut = {};
    var bo = G(xo, wo, Co, !1, Lo, "28e1b060", null, null);

    function Lo(e) {
        for (let s in Ut) this[s] = Ut[s]
    }

    const jt = function () {
        return bo.exports
    }(), ko = {
        name: "SeeksRGLine",
        props: {
            link: {mustUseProp: !0, default: () => ({}), type: Object},
            relation: {mustUseProp: !0, default: () => ({}), type: Object},
            relationIndex: {mustUseProp: !0, default: () => 0, type: Number}
        },
        inject: ["graph", "graphInstance"],
        computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }, lineWidth() {
                return this.relation.lineWidth ? this.relation.lineWidth : this.options.defaultLineWidth
            }, lineColor() {
                return this.relation.color ? this.relation.color : this.options.defaultLineColor
            }, checked() {
                return this.relation.id === this.options.checkedLineId
            }, textStyle() {
                return this.relationGraph.getLineTextStyle(this.link, this.relation, this.relationIndex)
            }, pathRef() {
                return "#" + this.options.instanceId + "-" + this.relation.id
            }
        },
        data() {
            return {is_flashing: !1}
        },
        watch: {},
        mounted() {
        },
        methods: {
            onClick(e, s) {
                this.relationGraph.onLineClick(e, this.link, s)
            }
        }
    };
    var Mo = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("g", {
            class: [e.relation.className],
            attrs: {"data-id": e.relation.id}
        }, [t("use", {
            staticClass: "c-rg-line-bg",
            style: {
                pointerEvents: e.relation.disableDefaultClickEffect ? "none" : void 0,
                strokeWidth: (e.lineWidth < 8 ? 8 : e.lineWidth) + "px"
            },
            attrs: {"xlink:href": e.pathRef},
            on: {
                touchstart: function (o) {
                    return e.onClick(e.relation, o)
                }, click: function (o) {
                    return e.onClick(e.relation, o)
                }
            }
        }), t("use", {
            staticClass: "c-rg-line",
            class: [e.relation.styleClass, e.relation.dashType ? "rg-line-dashtype-" + e.relation.dashType : void 0, e.relation.animation ? "rg-line-anm-" + e.relation.animation : void 0, e.checked ? "c-rg-line-checked" : void 0],
            style: {
                stroke: e.lineColor,
                opacity: e.relation.opacity,
                strokeWidth: e.lineWidth + "px",
                pointerEvents: e.relation.disableDefaultClickEffect ? "none" : void 0,
                fill: e.relation.lineShape === 8 ? e.relation.color || e.options.defaultLineColor : "none"
            },
            attrs: {"xlink:href": e.pathRef},
            on: {
                touchstart: function (o) {
                    return e.onClick(e.relation, o)
                }, click: function (o) {
                    return e.onClick(e.relation, o)
                }
            }
        }), e.textStyle && e.options.defaultShowLineLabel && e.options.canvasZoom > 40 ? t("g", {attrs: {transform: e.textStyle.textOffset}}, [t("text", {
            staticClass: "c-rg-line-text",
            class: {"c-rg-line-text-checked": e.checked},
            style: {
                opacity: e.relation.opacity,
                fill: e.relation.fontColor ? e.relation.fontColor : e.options.defaultLineFontColor ? e.options.defaultLineFontColor : e.relation.color ? e.relation.color : e.options.defaultLineColor,
                pointerEvents: e.relation.disableDefaultClickEffect ? "none" : void 0
            },
            attrs: {rotate: e.textStyle.textRotate},
            on: {
                touchstart: function (o) {
                    return e.onClick(e.relation, o)
                }, click: function (o) {
                    return e.onClick(e.relation, o)
                }
            }
        }, [t("textPath", {
            attrs: {
                "xlink:href": e.pathRef,
                startOffset: e.textStyle.textHPosition,
                "text-anchor": e.textStyle.textAnchor,
                method: "align",
                spacing: "auto"
            }
        }, [e._v(" " + e._s(e.textStyle.text) + " ")])])]) : e._e()])
    }, So = [];
    const oa = "", Xt = {};
    var Eo = G(ko, Mo, So, !1, Po, "6d84498c", null, null);

    function Po(e) {
        for (let s in Xt) this[s] = Xt[s]
    }

    const zo = {
        name: "SeeksRGLink", components: {
            RGLineSmart: jt, RGLineTextByPath: function () {
                return Eo.exports
            }()
        }, props: {linkProps: {mustUseProp: !0, default: () => ({}), type: Object}}, data() {
            return {is_flashing: !1}
        }, inject: ["graph", "graphInstance"], computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }
        }, show() {
            this.isShow = !0
        }, watch: {}, mounted() {
        }, methods: {
            isAllowShowNode(e) {
                return x.isAllowShowNode(e)
            }
        }
    };
    var $o = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return e.isAllowShowNode(e.linkProps.fromNode) && e.isAllowShowNode(e.linkProps.toNode) ? t("g", {
            ref: "seeksRGLink",
            staticClass: "rel-link-peel",
            class: [e.options.checkedLinkId == e.linkProps.seeks_id ? "c-rg-link-checked" : ""],
            attrs: {transform: "translate(0,0)", "data-id": e.linkProps.seeks_id}
        }, [e._l(e.linkProps.relations, function (o, n) {
            return [e.options.oldVueVersion && !e.options.ovUseLineSlot ? [(o.useTextPath !== void 0 ? o.useTextPath : e.options.lineUseTextPath) && o.isHide !== !0 ? t("RGLineTextByPath", {
                key: "l-" + o.id,
                attrs: {link: e.linkProps, relation: o, "relation-index": n}
            }) : o.isHide === !1 ? t("RGLineSmart", {
                key: "l-" + o.id,
                attrs: {link: e.linkProps, relation: o, "relation-index": n}
            }) : e._e()] : e._t("line", function () {
                return [(o.useTextPath !== void 0 ? o.useTextPath : e.options.lineUseTextPath) && o.isHide !== !0 ? t("RGLineTextByPath", {
                    key: "l-" + o.id,
                    attrs: {link: e.linkProps, relation: o, "relation-index": n}
                }) : o.isHide === !1 ? t("RGLineSmart", {
                    key: "l-" + o.id,
                    attrs: {link: e.linkProps, relation: o, "relation-index": n}
                }) : e._e()]
            }, {line: o, relationIndex: n})]
        })], 2) : e._e()
    }, Oo = [];
    const ia = "", Yt = {};
    var Ro = G(zo, $o, Oo, !1, Do, "1a9e8306", null, null);

    function Do(e) {
        for (let s in Yt) this[s] = Yt[s]
    }

    const Zt = function () {
        return Ro.exports
    }(), Vo = {
        name: "SeeksRGLink",
        props: {
            link: {mustUseProp: !0, default: () => ({}), type: Object},
            relation: {mustUseProp: !0, default: () => ({}), type: Object},
            relationIndex: {mustUseProp: !0, default: () => 0, type: Number}
        },
        inject: ["graph", "graphInstance"],
        computed: {
            checked() {
                return this.relation.id === this.options.checkedLineId
            }, pathData() {
                const {
                    path: e,
                    textPosition: s
                } = this.relationGraph.createLinePath(this.link, this.relation, this.relationIndex);
                return e
            }, options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }, style() {
                const e = this.relation.lineWidth !== void 0 ? this.relation.lineWidth : this.options.defaultLineWidth || 1,
                    s = this.relation.color ? this.relation.color : this.options.defaultLineColor;
                return this.options.snapshotting ? {
                    stroke: s,
                    opacity: this.relation.opacity,
                    strokeWidth: e + "px",
                    pointerEvents: this.relation.disableDefaultClickEffect ? "none" : void 0,
                    fill: this.relation.lineShape === 8 ? s : "none"
                } : {}
            }
        },
        data() {
            return {is_flashing: !1}
        },
        show() {
            this.isShow = !0
        },
        methods: {}
    };
    var No = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("path", {
            class: ["c-rg-line-path", e.relation.styleClass, e.checked ? "c-rg-line-checked" : ""],
            style: e.style,
            attrs: {
                id: e.options.instanceId + "-" + e.relation.id,
                d: e.pathData,
                "marker-start": e.relationGraph.getArrow(e.relation, e.link, !0),
                "marker-end": e.relationGraph.getArrow(e.relation, e.link, !1)
            }
        })
    }, Go = [];
    const Jt = {};
    var Bo = G(Vo, No, Go, !1, To, null, null, null);

    function To(e) {
        for (let s in Jt) this[s] = Jt[s]
    }

    const Ot = function () {
        return Bo.exports
    }(), Ao = {
        name: "RGCheckedLine", inject: ["graph", "graphInstance"], computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }, pathData() {
                return this.relationGraph.createCheckedLinePath()
            }, strokeWidth() {
                return this.relationGraph.createCheckedLineStrokeWidth()
            }
        }, data() {
            return {is_flashing: !1}
        }, show() {
            this.isShow = !0
        }, watch: {}
    };
    var Io = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("g", [e.pathData ? t("path", {
            staticClass: "c-rg-line-checked-bg",
            attrs: {d: e.pathData, fill: "none", stroke: "red", "stroke-width": e.strokeWidth}
        }) : e._e()])
    }, Ho = [];
    const sa = "", qt = {};
    var Wo = G(Ao, Io, Ho, !1, Fo, "3b2b9464", null, null);

    function Fo(e) {
        for (let s in qt) this[s] = qt[s]
    }

    const Uo = function () {
        return Wo.exports
    }(), jo = {
        name: "RGGraphDefs", components: {SeeksRGLinePath: Ot}, data() {
            return {}
        }, inject: ["graphData", "graph", "graphInstance"], computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }, allLineColors() {
                return this.graph.allLineColors
            }
        }
    };
    var Xo = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("defs", [t("linearGradient", {
            attrs: {
                id: "my-lineStyle",
                gradientUnits: "objectBoundingBox",
                cx: "0.5",
                cy: "0.5"
            }
        }, [t("stop", {
            attrs: {
                offset: "0%",
                "stop-color": "#e52c5c",
                "stop-opacity": "1"
            }
        }), t("stop", {
            attrs: {
                offset: "100%",
                "stop-color": "#FD8B37",
                "stop-opacity": "0"
            }
        })], 1), t("marker", {
            attrs: {
                id: e.options.instanceId + "-arrow-default",
                markerWidth: e.options.defaultLineMarker.markerWidth,
                markerHeight: e.options.defaultLineMarker.markerHeight,
                refX: e.options.defaultLineMarker.refX,
                refY: e.options.defaultLineMarker.refY,
                markerUnits: "userSpaceOnUse",
                orient: "auto",
                viewBox: "0 0 12 12"
            }
        }, [t("path", {
            style: {fill: e.options.defaultLineColor},
            attrs: {d: e.options.defaultLineMarker.data}
        })]), t("marker", {
            attrs: {
                id: e.options.instanceId + "-start-arrow-default",
                markerWidth: e.options.defaultLineMarker.markerWidth,
                markerHeight: e.options.defaultLineMarker.markerHeight,
                refX: e.options.defaultLineMarker.refX,
                refY: e.options.defaultLineMarker.refY,
                markerUnits: "userSpaceOnUse",
                orient: "auto",
                viewBox: "0 0 12 12"
            }
        }, [t("path", {
            style: {fill: e.options.defaultLineColor},
            attrs: {d: e.options.defaultLineMarker.data, transform: "translate(12,12)rotate(180)"}
        })]), t("marker", {
            attrs: {
                id: e.options.instanceId + "-arrow-checked",
                markerWidth: e.options.defaultLineMarker.markerWidth,
                markerHeight: e.options.defaultLineMarker.markerHeight,
                refX: e.options.defaultLineMarker.refX,
                refY: e.options.defaultLineMarker.refY,
                markerUnits: "userSpaceOnUse",
                orient: "auto",
                viewBox: "0 0 12 12"
            }
        }, [t("path", {
            style: {fill: e.options.checkedLineColor},
            attrs: {d: e.options.defaultLineMarker.data}
        })]), t("marker", {
            attrs: {
                id: e.options.instanceId + "-start-arrow-checked",
                markerWidth: e.options.defaultLineMarker.markerWidth,
                markerHeight: e.options.defaultLineMarker.markerHeight,
                refX: e.options.defaultLineMarker.refX,
                refY: e.options.defaultLineMarker.refY,
                markerUnits: "userSpaceOnUse",
                orient: "auto",
                viewBox: "0 0 12 12"
            }
        }, [t("path", {
            style: {fill: e.options.checkedLineColor},
            attrs: {d: e.options.defaultLineMarker.data, transform: "translate(12,12)rotate(180)"}
        })]), e._l(e.allLineColors, function (o) {
            return t("marker", {
                key: o.id,
                attrs: {
                    id: e.options.instanceId + "-arrow-" + o.id,
                    markerWidth: e.options.defaultLineMarker.markerWidth,
                    markerHeight: e.options.defaultLineMarker.markerHeight,
                    refX: e.options.defaultLineMarker.refX,
                    refY: e.options.defaultLineMarker.refY,
                    markerUnits: "userSpaceOnUse",
                    orient: "auto",
                    viewBox: "0 0 12 12"
                }
            }, [t("path", {
                attrs: {
                    fill: e.options.defaultLineMarker.color || o.color,
                    d: e.options.defaultLineMarker.data
                }
            })])
        }), e._l(e.allLineColors, function (o) {
            return t("marker", {
                key: "start-" + o.id,
                attrs: {
                    id: e.options.instanceId + "-start-arrow-" + o.id,
                    markerWidth: e.options.defaultLineMarker.markerWidth,
                    markerHeight: e.options.defaultLineMarker.markerHeight,
                    refX: e.options.defaultLineMarker.refX,
                    refY: e.options.defaultLineMarker.refY,
                    markerUnits: "userSpaceOnUse",
                    orient: "auto",
                    viewBox: "0 0 12 12"
                }
            }, [t("path", {
                attrs: {
                    fill: e.options.defaultLineMarker.color || o.color,
                    d: e.options.defaultLineMarker.data,
                    transform: "translate(12,12)rotate(180)"
                }
            })])
        }), e._l(e.graphData.links, function (o) {
            return !e.options.showEasyView && !o.invisiable ? [e._l(o.relations, function (n, i) {
                return [e.options.lineUseTextPath || n.useTextPath ? t("SeeksRGLinePath", {
                    key: n.id,
                    attrs: {link: o, relation: n, "relation-index": i}
                }) : e._e()]
            })] : e._e()
        })], 2)
    }, Yo = [];
    const Kt = {};
    var Zo = G(jo, Xo, Yo, !1, Jo, null, null, null);

    function Jo(e) {
        for (let s in Kt) this[s] = Kt[s]
    }

    const qo = {
        name: "RelationGraphSingleGraph", components: {
            RGGraphDefs: function () {
                return Zo.exports
            }(), RGLineChecked: Uo, SeeksRGNode: $t, SeeksRGLink: Zt, SeeksRGLinePath: Ot, RGLineSmart: jt
        }, data() {
            return {}
        }, inject: ["graphData", "graph", "graphInstance"], computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }, allLineColors() {
                return this.graph.allLineColors
            }
        }, created() {
            u("[RGGraph created]")
        }, mounted() {
            u("[RGGraph mounted]"), this.init()
        }, beforeDestroy() {
        }, methods: {
            init() {
                this.$refs.rgCanvas.style.setProperty("--stroke", `url('#${this.options.instanceId}-lineStyle')`), this.$refs.rgCanvas.style.setProperty("--markerEnd", `url('#${this.options.instanceId}-start-arrow-default')`), this.$refs.rgCanvas.style.setProperty("--markerStart", `url('#${this.options.instanceId}-arrow-default')`), this.$refs.rgCanvas.style.setProperty("--markerEndChecked", `url('#${this.options.instanceId}-arrow-checked')`), this.$refs.rgCanvas.style.setProperty("--markerStartChecked", `url('#${this.options.instanceId}-start-arrow-checked')`)
            }
        }
    };
    var Ko = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            staticClass: "rel-single-graph",
            staticStyle: {overflow: "visible"}
        }, [t("div", {ref: "rgCanvas", staticClass: "rel-linediv"}, [t("svg", {
            staticClass: "rel-lines-svg",
            style: {width: e.options.canvasSize.width + "px", height: e.options.canvasSize.height + "px"},
            attrs: {xmlns: "http://www.w3.org/2000/svg"}
        }, [t("RGGraphDefs"), e.options.showEasyView ? e._e() : t("RGLineChecked"), e._l(e.graphData.links, function (o) {
            return !e.options.showEasyView && !o.invisiable ? t("SeeksRGLink", {
                key: o.seeks_id,
                attrs: {"link-props": o},
                scopedSlots: e._u([{
                    key: "line", fn: function (n) {
                        var i = n.line, a = n.lineIndex;
                        return [e._t("line", null, {line: i, link: o, lineIndex: a})]
                    }
                }], null, !0)
            }) : e._e()
        })], 2)]), t("div", {staticClass: "rel-nodediv rel-nodediv-for-webkit"}, e._l(e.graphData.nodes, function (o) {
            return !e.options.showEasyView && !o.invisiable ? t("SeeksRGNode", {
                key: o.seeks_id,
                attrs: {"node-props": o},
                scopedSlots: e._u([{
                    key: "node", fn: function (n) {
                        var i = n.node;
                        return [e._t("node", null, {node: i})]
                    }
                }, {
                    key: "node-expand-holder", fn: function (n) {
                        var i = n.nodeProps, a = n.expandHolderPosition, l = n.expandButtonClass, r = n.color,
                            h = n.expandOrCollapseNode;
                        return [e._t("node-expand-holder", null, {
                            nodeProps: i,
                            expandHolderPosition: a,
                            expandButtonClass: l,
                            color: r,
                            expandOrCollapseNode: h
                        })]
                    }
                }], null, !0)
            }) : e._e()
        }), 1), t("div", {staticClass: "rel-linediv rel-linediv-el-lines"}, [t("svg", {
            staticClass: "rel-lines-svg rel-lines-svg-el-lines",
            attrs: {xmlns: "http://www.w3.org/2000/svg"}
        }, [e.options.snapshotting ? t("RGGraphDefs") : e._e(), e._l(e.graphData.elementLines, function (o) {
            return [e._l(o.relations, function (n, i) {
                return [e._t("line", function () {
                    return [(n.useTextPath !== void 0 ? n.useTextPath : e.options.lineUseTextPath) && n.isHide !== !0 ? t("RGLineTextByPath", {
                        key: "l-" + n.id,
                        attrs: {link: o, relation: n, "relation-index": i}
                    }) : n.isHide !== !0 ? t("RGLineSmart", {
                        key: "l-" + n.id,
                        attrs: {link: o, relation: n, "relation-index": i}
                    }) : e._e()]
                }, {line: n, relationIndex: i})]
            })]
        }), e.options.creatingLinePlot && e.options.newLinkTemplate.fromNode ? t("RGLineSmart", {
            key: "s-line-template",
            attrs: {link: e.options.newLinkTemplate, relation: e.options.newLineTemplate, "relation-index": 0}
        }) : e._e()], 2)])])
    }, Qo = [];
    const Qt = {};
    var tn = G(qo, Ko, Qo, !1, en, null, null, null);

    function en(e) {
        for (let s in Qt) this[s] = Qt[s]
    }

    const on = function () {
        return tn.exports
    }(), nn = {
        name: "RGEasyView", components: {}, data() {
            return {}
        }, inject: ["graphData", "graph", "graphInstance"], computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }, allLineColors() {
                return this.graph.allLineColors
            }
        }, created() {
            u("[RGEasyView created]")
        }, mounted() {
            u("[RGEasyView mounted]"), this.relationGraph.setEasyViewCanvas && this.relationGraph.setEasyViewCanvas(this.$refs.rgEasyCanvas), this.init()
        }, beforeDestroy() {
        }, methods: {
            init() {
            }
        }
    };
    var sn = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            staticClass: "rel-easy-view",
            class: {"rel-easy-view-active": e.options.showEasyView}
        }, [t("canvas", {ref: "rgEasyCanvas", staticStyle: {width: "100%", height: "100%"}})])
    }, an = [];
    const te = {};
    var rn = G(nn, sn, an, !1, ln, null, null, null);

    function ln(e) {
        for (let s in te) this[s] = te[s]
    }

    const hn = {
        name: "RelationGraphCanvas", components: {
            RGEasyView: function () {
                return rn.exports
            }(), RelationGraphSingleGraph: on, SeeksRGNode: $t, SeeksRGLink: Zt, SeeksRGLinePath: Ot
        }, data() {
            return {}
        }, inject: ["graph", "graphInstance"], computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }, canvasSizeAndPosition() {
                return {
                    width: `${this.options.canvasSize.width}px`,
                    height: `${this.options.canvasSize.height}px`,
                    "margin-left": `${this.options.canvasOffset.x}px`,
                    "margin-top": `${this.options.canvasOffset.y}px`,
                    "background-color": "transparent",
                    transform: `scale(${this.options.canvasZoom / 100},${this.options.canvasZoom / 100})`
                }
            }
        }, watch: {}, created() {
            u("[RGCanvas created]")
        }, mounted() {
            u("[RGCanvas mounted]"), this.relationGraph.setCanvasDom(this.$refs.seeksRGCanvas)
        }, beforeDestroy() {
        }, methods: {
            mouseListener(e) {
                this.relationGraph.onMouseWheel(e)
            }, onDragStart(e) {
                this.relationGraph.onCanvasDragStart(e)
            }, contextmenu(e) {
                this.relationGraph.onContextmenu(e)
            }
        }
    };
    var cn = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            staticClass: "rel-map",
            class: [e.options.canvasOpacity === 1 && "rel-map-ready", e.options.layoutClassName, e.options.backgroundImageNoRepeat ? "rel-map-background-norepeat" : void 0],
            style: {
                width: "100%",
                height: "100%",
                "background-color": e.options.backgroundColor || void 0,
                "background-image": e.options.backgroundImage ? "url(" + e.options.backgroundImage + ")" : void 0
            },
            on: {
                contextmenu: function (o) {
                    return o.preventDefault(), e.contextmenu(o)
                }, mousedown: function (o) {
                    return !o.type.indexOf("key") && e._k(o.keyCode, "left", 37, o.key, ["Left", "ArrowLeft"]) || "button" in o && o.button !== 0 ? null : e.onDragStart(o)
                }, touchstart: function (o) {
                    return e.onDragStart(o)
                }, wheel: e.mouseListener
            }
        }, [t("RGEasyView"), t("div", {
            ref: "seeksRGCanvas",
            staticClass: "rel-map-canvas",
            style: e.canvasSizeAndPosition
        }, [t("div", {staticClass: "rel-canvas-slot rel-canvas-slot-behind"}, [e._t("canvas-plug")], 2), t("RelationGraphSingleGraph", {
            scopedSlots: e._u([{
                key: "node",
                fn: function (o) {
                    var n = o.node;
                    return [e._t("node", null, {node: n})]
                }
            }, {
                key: "line", fn: function (o) {
                    var n = o.line, i = o.link;
                    return [e._t("line", null, {line: n, link: i})]
                }
            }, {
                key: "node-expand-holder", fn: function (o) {
                    var n = o.nodeProps, i = o.expandHolderPosition, a = o.expandButtonClass, l = o.color,
                        r = o.expandOrCollapseNode;
                    return [e._t("node-expand-holder", null, {
                        nodeProps: n,
                        expandHolderPosition: i,
                        expandButtonClass: a,
                        color: l,
                        expandOrCollapseNode: r
                    })]
                }
            }], null, !0)
        }), t("div", {staticClass: "rel-canvas-slot rel-canvas-slot-above"}, [e._t("canvas-plug-above")], 2)], 1)], 1)
    }, dn = [];
    const ee = {};
    var un = G(hn, cn, dn, !1, pn, null, null, null);

    function pn(e) {
        for (let s in ee) this[s] = ee[s]
    }

    const fn = function () {
        return un.exports
    }(), gn = {
        name: "GraphSettingPanel", data() {
            return {search_text: "", showSettingPanel: !1, currentLayoutName: ""}
        }, inject: ["graph", "graphInstance"], computed: {
            relationGraph() {
                return this.graphInstance()
            }, options() {
                return this.graph.options
            }
        }, methods: {
            toggleSettingPanel() {
                this.showSettingPanel = !this.showSettingPanel
            }, printOptions() {
                this.relationGraph.printOptions()
            }, printData() {
                this.relationGraph.printData()
            }, enableDevlog() {
                this.relationGraph.enableDebugLog(!this.options.debug), u("debugLog:", this.options.debug)
            }
        }
    };
    var _n = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", [t("div", {
            staticClass: "c-setting-panel-button",
            class: [],
            on: {click: e.toggleSettingPanel}
        }, [e._v(" Debug ")]), e.showSettingPanel ? t("div", {
            staticClass: "c-setting-panel",
            class: []
        }, [t("div", {staticClass: "c-debug-tools-row"}, [t("button", {on: {click: e.printOptions}}, [e._v("print options in console")])]), t("div", {staticClass: "c-debug-tools-row"}, [t("button", {on: {click: e.printData}}, [e._v("print json data in console")])]), t("div", {staticClass: "c-debug-tools-row"}, [e._v("debug log status: " + e._s(e.options.debug)), t("button", {on: {click: e.enableDevlog}}, [e._v(e._s(e.options.debug ? "disable" : "enable") + " debug log")])])]) : e._e()])
    }, mn = [];
    const oe = {};
    var yn = G(gn, _n, mn, !1, vn, null, null, null);

    function vn(e) {
        for (let s in oe) this[s] = oe[s]
    }

    const xn = function () {
        return yn.exports
    }(), wn = {
        name: "GraphMiniView", data() {
            return {viewWidth: 100, viewHeight: 0, minX: 0, maxX: 0, minY: 0, maxY: 0, zoom: 1}
        }, inject: ["graph", "graphData", "graphInstance"], computed: {
            relationGraph() {
                return this.graphInstance()
            }, options() {
                return this.graph.options
            }
        }, mounted() {
        }, methods: {
            miniViewHeight() {
                let e = 9999, s = -9999, t = 9999, o = -9999;
                for (let n = 0; n < this.graphData.nodes.length; n++) {
                    const i = this.graphData.nodes[n];
                    i.x < e && (e = i.x), i.x > s && (s = i.x), i.y < t && (t = i.y), i.y > o && (o = i.y)
                }
                return this.viewHeight = (o - t) * this.viewWidth / (s - e), this.minX = e, this.minY = t, this.maxX = s, this.maxY = o, this.viewHeight
            }, getPositionData() {
                const e = this.viewWidth / this.options.canvasNVInfo.width, s = this.options.viewNVInfo.width * e,
                    t = this.options.viewNVInfo.height * e;
                let o = (this.options.viewNVInfo.x - this.options.canvasNVInfo.x) * e * (this.options.canvasZoom / 100),
                    n = (this.options.viewNVInfo.y - this.options.canvasNVInfo.y) * e * (this.options.canvasZoom / 100);
                return o = o * 100 / s, n = n * 100 / s, {
                    width: s + "px",
                    height: t + "px",
                    left: o + "px",
                    top: n + "px"
                }
            }, isAllowShowNode(e) {
                return x.isAllowShowNode(e)
            }
        }
    };
    var Cn = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {ref: "miniView", staticClass: "c-mini-graph"}, [t("div", {
            staticClass: "c-mini-canvas",
            style: {width: e.viewWidth + "px", height: e.miniViewHeight() + "px"}
        }, [e._l(e.graphData.nodes, function (o) {
            return [e.isAllowShowNode(o) ? t("div", {
                key: o.id,
                staticClass: "c-mini-node",
                style: {
                    left: (o.x - e.minX) * e.viewWidth / (e.maxX - e.minX) + "px",
                    top: (o.y - e.minY) * e.viewHeight / (e.maxY - e.minY) + "px"
                }
            }) : e._e()]
        })], 2)])
    }, bn = [];
    const la = "", ne = {};
    var Ln = G(wn, Cn, bn, !1, kn, "46ea246f", null, null);

    function kn(e) {
        for (let s in ne) this[s] = ne[s]
    }

    const Mn = function () {
        return Ln.exports
    }(), Sn = {
        name: "GraphMiniToolBar", data() {
            return {height: 275, hits: 0, downloadPanelWidth: 106}
        }, inject: ["graph", "graphInstance"], computed: {
            relationGraph() {
                return this.graphInstance()
            }, options() {
                return this.graph.options
            }
        }, mounted() {
            this.relationGraph.listeners.onDownloadExcel !== null && (this.downloadPanelWidth += 50), this.options.layouts.length > 1 && (this.height -= 40)
        }, methods: {
            refresh() {
                this.relationGraph.refresh()
            }, switchLayout(e) {
                u("change layout:", e), this.relationGraph.switchLayout(e)
            }, toggleAutoLayout() {
                this.relationGraph.toggleAutoLayout()
            }, onDownloadExcel() {
                this.relationGraph.listeners.onDownloadExcel()
            }, zoomToFit() {
                return C(this, null, function* () {
                    yield this.relationGraph.setZoom(100), yield this.relationGraph.moveToCenter(), yield this.relationGraph.zoomToFit()
                })
            }
        }
    };
    var En = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            staticClass: "c-mini-toolbar",
            style: {
                "margin-left": e.options.viewELSize.width - 50 + "px",
                "margin-top": (e.options.viewELSize.height - 260) / 2 + "px"
            }
        }, [t("div", {
            staticClass: "c-mb-button", staticStyle: {"margin-top": "0px"}, on: {
                click: function (o) {
                    return e.relationGraph.fullscreen()
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-resize-"}})]), t("span", {staticClass: "c-mb-text"}, [e._v(e._s(e.options.fullscreen ? "\u9000\u51FA" : "\u5168\u5C4F"))])]), e.options.allowShowZoomMenu ? t("div", {
            staticClass: "c-mb-button",
            on: {
                click: function (o) {
                    return e.relationGraph.zoom(20)
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-fangda"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u653E\u5927")])]) : e._e(), e.options.allowShowZoomMenu ? t("div", {
            staticStyle: {
                float: "left",
                "margin-top": "0px",
                height: "20px",
                width: "40px",
                "border-top": "0px",
                "border-bottom": "0px",
                "background-color": "#efefef",
                color: "#262626",
                "font-size": "10px",
                "text-align": "center",
                "line-height": "20px"
            }, on: {click: e.zoomToFit}
        }, [e._v(e._s(e.options.canvasZoom) + "%")]) : e._e(), e.options.allowShowZoomMenu ? t("div", {
            staticClass: "c-mb-button",
            staticStyle: {"margin-top": "0px"},
            on: {
                click: function (o) {
                    return e.relationGraph.zoom(-20)
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-suoxiao"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u7F29\u5C0F")])]) : e._e(), e.options.layouts.length > 1 ? t("div", {staticClass: "c-mb-button"}, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-yuanquanfenxiang"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u5E03\u5C40")]), t("div", {
            staticClass: "c-mb-child-panel",
            style: {
                width: e.options.layouts.length * 70 + 6 + "px",
                "margin-left": e.options.layouts.length * -70 - 5 + "px"
            }
        }, e._l(e.options.layouts, function (o) {
            return t("div", {
                key: o.label,
                staticClass: "c-mb-button c-mb-button-c",
                class: {"c-mb-button-on": e.options.layoutLabel === o.label},
                staticStyle: {width: "70px"},
                on: {
                    click: function (n) {
                        return e.switchLayout(o)
                    }
                }
            }, [t("svg", {
                staticClass: "rg-icon",
                attrs: {"aria-hidden": "true"}
            }, [t("use", {attrs: {"xlink:href": "#icon-yuanquanfenxiang"}})]), t("span", {staticClass: "c-mb-text"}, [e._v(e._s(o.label))])])
        }), 0)]) : e._e(), e.options.allowSwitchLineShape ? t("div", {staticClass: "c-mb-button"}, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-hj2"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u7EBF\u6761")]), t("div", {
            staticClass: "c-mb-child-panel",
            staticStyle: {width: "256px", "margin-left": "-255px"}
        }, [t("div", {
            staticClass: "c-mb-button c-mb-button-c",
            class: {"c-mb-button-on": e.options.defaultLineShape === 1},
            staticStyle: {width: "50px"},
            on: {
                click: function (o) {
                    return e.relationGraph.setDefaultLineShape(1)
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-hj2"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u76F4\u7EBF")])]), t("div", {
            staticClass: "c-mb-button c-mb-button-c",
            class: {"c-mb-button-on": e.options.defaultLineShape === 2},
            staticStyle: {width: "50px"},
            on: {
                click: function (o) {
                    return e.relationGraph.setDefaultLineShape(2)
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-lianjieliu"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u7B80\u6D01")])]), t("div", {
            staticClass: "c-mb-button c-mb-button-c",
            class: {"c-mb-button-on": e.options.defaultLineShape === 6},
            staticStyle: {width: "50px"},
            on: {
                click: function (o) {
                    return e.relationGraph.setDefaultLineShape(6)
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-lianjieliu"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u751F\u52A8")])]), t("div", {
            staticClass: "c-mb-button c-mb-button-c",
            class: {"c-mb-button-on": e.options.defaultLineShape === 5},
            staticStyle: {width: "50px"},
            on: {
                click: function (o) {
                    return e.relationGraph.setDefaultLineShape(5)
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-lianjieliu"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u9C7C\u5C3E")])]), t("div", {
            staticClass: "c-mb-button c-mb-button-c",
            class: {"c-mb-button-on": e.options.defaultLineShape === 4},
            staticStyle: {width: "50px"},
            on: {
                click: function (o) {
                    return e.relationGraph.setDefaultLineShape(4)
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-hj2"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u6298\u7EBF")])])])]) : e._e(), e.options.allowSwitchJunctionPoint ? t("div", {staticClass: "c-mb-button"}, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-lianjie_connecting5"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u8FDE\u63A5\u70B9")]), t("div", {
            staticClass: "c-mb-child-panel",
            staticStyle: {width: "206px", "margin-left": "-205px"}
        }, [t("div", {
            staticClass: "c-mb-button c-mb-button-c",
            class: {"c-mb-button-on": e.options.defaultJunctionPoint === "border"},
            staticStyle: {width: "50px"},
            on: {
                click: function (o) {
                    return e.relationGraph.setDefaultJunctionPoint("border")
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-lianjie_connecting5"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u8FB9\u7F18")])]), t("div", {
            staticClass: "c-mb-button c-mb-button-c",
            class: {"c-mb-button-on": e.options.defaultJunctionPoint === "ltrb"},
            staticStyle: {width: "50px"},
            on: {
                click: function (o) {
                    return e.relationGraph.setDefaultJunctionPoint("ltrb")
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-lianjie_connecting5"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u56DB\u70B9")])]), t("div", {
            staticClass: "c-mb-button c-mb-button-c",
            class: {"c-mb-button-on": e.options.defaultJunctionPoint === "tb"},
            staticStyle: {width: "50px"},
            on: {
                click: function (o) {
                    return e.relationGraph.setDefaultJunctionPoint("tb")
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-lianjie_connecting5"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u4E0A\u4E0B")])]), t("div", {
            staticClass: "c-mb-button c-mb-button-c",
            class: {"c-mb-button-on": e.options.defaultJunctionPoint === "lr"},
            staticStyle: {width: "50px"},
            on: {
                click: function (o) {
                    return e.relationGraph.setDefaultJunctionPoint("lr")
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-lianjie_connecting5"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u5DE6\u53F3")])])])]) : e._e(), e.options.allowAutoLayoutIfSupport && e.options.isNeedShowAutoLayoutButton ? t("div", {
            staticClass: "c-mb-button",
            class: {"c-mb-button-on": e.options.autoLayouting},
            attrs: {title: e.options.autoLayouting ? "\u70B9\u51FB\u505C\u6B62\u81EA\u52A8\u5E03\u5C40" : "\u70B9\u51FB\u5F00\u59CB\u81EA\u52A8\u8C03\u6574\u5E03\u5C40"},
            on: {click: e.toggleAutoLayout}
        }, [e.options.autoLayouting ? t("svg", {
            staticClass: "c-loading-icon rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-lianjiezhong"}})]) : t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-zidong"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u81EA\u52A8")])]) : e._e(), e.options.allowShowRefreshButton ? t("div", {
            staticClass: "c-mb-button",
            on: {click: e.refresh}
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-ico_reset"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u5237\u65B0")])]) : e._e(), e.options.allowShowDownloadButton ? t("div", {staticClass: "c-mb-button"}, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-ziyuan"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("\u4E0B\u8F7D")]), t("div", {
            staticClass: "c-mb-child-panel",
            style: {width: e.downloadPanelWidth + "px", "margin-left": e.downloadPanelWidth * -1 + "px"}
        }, [t("div", {
            staticClass: "c-mb-button c-mb-button-c", staticStyle: {width: "50px"}, on: {
                click: function (o) {
                    return e.relationGraph.downloadAsImage("png")
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-tupian"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("PNG")])]), t("div", {
            staticClass: "c-mb-button c-mb-button-c",
            staticStyle: {width: "50px"},
            on: {
                click: function (o) {
                    return e.relationGraph.downloadAsImage("jpg")
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-tupian"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("JPG")])]), e.relationGraph.listeners.onDownloadExcel ? t("div", {
            staticClass: "c-mb-button c-mb-button-c",
            staticStyle: {width: "50px"},
            on: {
                click: function (o) {
                    return e.onDownloadExcel()
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-ziyuan"}})]), t("span", {staticClass: "c-mb-text"}, [e._v("Excel")])]) : e._e()])]) : e._e()])
    }, Pn = [];
    const ha = "", ie = {};
    var zn = G(Sn, En, Pn, !1, $n, "412be0f2", null, null);

    function $n(e) {
        for (let s in ie) this[s] = ie[s]
    }

    const On = function () {
        return zn.exports
    }(), Rn = {
        name: "GraphMiniToolBar", data() {
            return {}
        }, inject: ["graph", "graphInstance"], computed: {
            relationGraph() {
                return this.graphInstance()
            }, options() {
                return this.graph.options
            }
        }, mounted() {
        }, methods: {
            refresh() {
                this.relationGraph.refresh()
            }, switchLayout(e) {
                u("change layout:", e), this.relationGraph.switchLayout(e)
            }, toggleAutoLayout() {
                this.relationGraph.toggleAutoLayout()
            }, downloadAsImage() {
                this.relationGraph.downloadAsImage("png")
            }, zoomToFit() {
                return C(this, null, function* () {
                    yield this.relationGraph.setZoom(100), yield this.relationGraph.moveToCenter(), yield this.relationGraph.zoomToFit()
                })
            }
        }
    };
    var Dn = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            staticClass: "rel-toolbar",
            class: ["rel-toolbar-h-" + e.options.toolBarPositionH, "rel-toolbar-v-" + e.options.toolBarPositionV, "rel-toolbar-" + e.options.toolBarDirection]
        }, [e.options.allowShowFullscreenMenu ? t("div", {
            staticClass: "c-mb-button",
            staticStyle: {"margin-top": "0px"},
            attrs: {title: "\u5168\u5C4F/\u9000\u51FA\u5168\u5C4F"},
            on: {
                click: function (o) {
                    return e.relationGraph.fullscreen()
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-resize-"}})])]) : e._e(), e.options.allowShowZoomMenu ? t("div", {
            staticClass: "c-mb-button",
            attrs: {title: "\u653E\u5927"},
            on: {
                click: function (o) {
                    return e.relationGraph.zoom(20)
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-fangda"}})])]) : e._e(), e.options.allowShowZoomMenu ? t("div", {
            staticClass: "c-current-zoom",
            on: {dblclick: e.zoomToFit}
        }, [e._v(e._s(e.options.canvasZoom) + "%")]) : e._e(), e.options.allowShowZoomMenu ? t("div", {
            staticClass: "c-mb-button",
            staticStyle: {"margin-top": "0px"},
            attrs: {title: "\u7F29\u5C0F"},
            on: {
                click: function (o) {
                    return e.relationGraph.zoom(-20)
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-suoxiao"}})])]) : e._e(), e.options.allowAutoLayoutIfSupport && e.options.isNeedShowAutoLayoutButton ? t("div", {
            staticClass: "c-mb-button",
            class: {"c-mb-button-on": e.options.autoLayouting},
            attrs: {title: e.options.autoLayouting ? "\u70B9\u51FB\u505C\u6B62\u81EA\u52A8\u5E03\u5C40" : "\u70B9\u51FB\u5F00\u59CB\u81EA\u52A8\u8C03\u6574\u5E03\u5C40"},
            on: {click: e.toggleAutoLayout}
        }, [e.options.autoLayouting ? t("svg", {
            staticClass: "c-loading-icon rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-lianjiezhong"}})]) : t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-zidong"}})])]) : e._e(), e.options.allowShowRefreshButton ? t("div", {
            staticClass: "c-mb-button",
            attrs: {title: "\u5237\u65B0"},
            on: {click: e.refresh}
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-ico_reset"}})])]) : e._e(), e.options.allowShowDownloadButton ? t("div", {
            staticClass: "c-mb-button",
            attrs: {title: "\u4E0B\u8F7D\u56FE\u7247"},
            on: {click: e.downloadAsImage}
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-tupian"}})])]) : e._e(), e._t("default"), t("div", {staticStyle: {clear: "both"}})], 2)
    }, Vn = [];
    const ca = "", se = {};
    var Nn = G(Rn, Dn, Vn, !1, Gn, null, null, null);

    function Gn(e) {
        for (let s in se) this[s] = se[s]
    }

    const ae = function () {
        return Nn.exports
    }(), Bn = {
        name: "GraphOperateStuff",
        components: {SeeksRGNode: $t},
        inject: ["graph", "graphInstance"],
        computed: {
            relationGraph() {
                return this.graphInstance()
            }, options() {
                return this.graph.options
            }
        },
        mounted() {
        },
        methods: {}
    };
    var Tn = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return e.options && (e.options.creatingNodePlot || e.options.creatingSelection) ? t("div", {staticClass: "rel-operate"}, [t("div", {staticStyle: {position: "relative"}}, [e.options.creatingNodePlot && e.options.showTemplateNode ? t("SeeksRGNode", {
            attrs: {"node-props": e.options.newNodeTemplate},
            scopedSlots: e._u([{
                key: "node", fn: function () {
                    return [e._t("node-template", null, {node: e.options.newNodeTemplate})]
                }, proxy: !0
            }], null, !0)
        }) : e._e(), e.options.creatingSelection ? t("div", {
            staticClass: "rel-selection",
            style: {
                left: e.options.selectionView.x + "px",
                top: e.options.selectionView.y + "px",
                width: e.options.selectionView.width + "px",
                height: e.options.selectionView.height + "px"
            }
        }) : e._e()], 1)]) : e._e()
    }, An = [];
    const da = "", re = {};
    var In = G(Bn, Tn, An, !1, Hn, "42bdf56a", null, null);

    function Hn(e) {
        for (let s in re) this[s] = re[s]
    }

    const Wn = function () {
        return In.exports
    }(), le = e => ({
        onNodeClick: e.onNodeClick,
        onNodeExpand: e.onNodeExpand,
        onNodeDragging: e.onNodeDragging,
        onNodeDragStart: e.onNodeDragStart,
        onNodeDragEnd: e.onNodeDragEnd,
        onNodeCollapse: e.onNodeCollapse,
        onLineClick: e.onLineClick,
        onImageDownload: e.onImageDownload,
        onCanvasDragEnd: e.onCanvasDragEnd,
        beforeChangeLayout: e.beforeChangeLayout,
        onContextmenu: e.onContextmenu,
        onFullscreen: e.onFullscreen,
        onCanvasClick: e.onCanvasClick,
        onCanvasSelectionEnd: e.onCanvasSelectionEnd,
        onImageSaveAsFile: e.onImageSaveAsFile,
        onZoomEnd: e.onZoomEnd
    }), Fn = {
        name: "GraphLoading", data() {
            return {}
        }, inject: ["graph", "graphInstance"], computed: {
            relationGraph() {
                return this.graphInstance()
            }, options() {
                return this.graph.options
            }
        }, methods: {
            clickGraphMask(e) {
                this.relationGraph.clickGraphMask(e)
            }
        }
    };
    var Un = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            staticClass: "rel-graph-loading",
            class: {"rel-graph-loading-hide": !e.options.graphLoading},
            on: {click: e.clickGraphMask}
        }, [e.options.graphLoadingText ? t("div", {staticClass: "rel-graph-loading-message"}, [t("svg", {
            staticClass: "c-graph-loading-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-lianjiezhong"}})]), e._v(" " + e._s(e.options.graphLoadingText || "Loading...") + " ")]) : e._e()])
    }, jn = [];
    const he = {};
    var Xn = G(Fn, Un, jn, !1, Yn, null, null, null);

    function Yn(e) {
        for (let s in he) this[s] = he[s]
    }

    const Zn = {
        name: "SeeksRelationGraph", components: {
            GraphLoading: function () {
                return Xn.exports
            }(),
            GraphOperateStuff: Wn,
            GraphMiniToolBar: On,
            GraphToolBar: ae,
            GraphMiniView: Mn,
            RGCanvas: fn,
            GraphDebugPanel: xn
        }, props: {
            options: {mustUseProp: !1, default: () => ({}), type: Object},
            relationGraphCore: {mustUseProp: !1, default: null, type: Function},
            onNodeClick: {
                mustUseProp: !1, default: () => () => {
                }, type: Function
            },
            onNodeExpand: {
                mustUseProp: !1, default: () => () => {
                }, type: Function
            },
            onNodeCollapse: {
                mustUseProp: !1, default: () => () => {
                }, type: Function
            },
            onLineClick: {
                mustUseProp: !1, default: () => () => {
                }, type: Function
            },
            onNodeDragStart: {
                mustUseProp: !1, default: () => () => {
                }, type: Function
            },
            onNodeDragEnd: {
                mustUseProp: !1, default: () => () => {
                }, type: Function
            },
            onNodeDragging: {
                mustUseProp: !1, default: () => () => {
                }, type: Function
            },
            onCanvasDragEnd: {
                mustUseProp: !1, default: () => () => {
                }, type: Function
            },
            beforeChangeLayout: {
                mustUseProp: !1, default: () => () => {
                }, type: Function
            },
            onContextmenu: {
                mustUseProp: !1, default: () => () => {
                }, type: Function
            },
            onFullscreen: {mustUseProp: !1, default: null, type: Function},
            onCanvasClick: {
                mustUseProp: !1, default: () => () => {
                }, type: Function
            },
            onDownloadExcel: {mustUseProp: !1, default: null, type: Function},
            onImageDownload: {mustUseProp: !1, default: null, type: Function},
            onImageSaveAsFile: {mustUseProp: !1, default: null, type: Function},
            onCanvasSelectionEnd: {mustUseProp: !1, default: null, type: Function},
            onZoomEnd: {mustUseProp: !1, default: null, type: Function}
        }, data() {
            return {
                graphInstanceOK: !1,
                graphData: {rootNode: null, nodes: [], links: [], elementLines: []},
                graph: {options: Ct({}), allLineColors: []},
                oldVueVersion: !1
            }
        }, provide() {
            return {graphData: this.graphData, graph: this.graph, graphInstance: this.getInstance}
        }, created() {
            window && (window.relationGraphDebug = this.options.debug), u("---------------------------graph created---------------------------", this), Be("Vue2");
            let e = !1;
            if (!ot.default || !ot.default.version || ot.default.version.startsWith("3")) {
                console.error("\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662Fvue3\u6216react\uFF0C\u4F60\u9700\u8981\u6CE8\u610Fimport\u65F6\u4F7F\u7528\u7684\u540D\u79F0\uFF1A"), console.error("vue2:import RelationGraph from 'relation-graph'"), console.error("vue3:import RelationGraph from 'relation-graph/vue3'"), console.error("react:import RelationGraph from 'relation-graph/react'");
                return
            }
            ot.default.version.slice(0, 4) === "2.5." && (e = !0), ot.default.version.slice(0, 4) === "2.6." && Number.parseInt(ot.default.version.split(".")[2]) <= 12 && (e = !0), e && (this.oldVueVersion = !0, console.error(`\u60A8\u7684Vue\u7248\u672C\uFF1A${ot.default.version}\u6CE8\u610F\uFF1A\u5F53\u4F60\u4F7F\u7528\u7684vue\u7248\u672C\u7B49\u4E8E\u4F4E\u4E8E2.6.12\u65F6\uFF0C\u56FE\u8C31\u4F1A\u663E\u793A\u4E0D\u6B63\u5E38\uFF0C\u53C2\u8003\u8FD9\u4E2A\u8FDE\u63A5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1Ahttps://github.com/seeksdream/relation-graph/issues/113`)), Y.default || console.error("[relation-graph]Please introduce component screenfull, for example:https://cdnjs.cloudflare.com/ajax/libs/screenfull.js/5.1.0/screenfull.min.js"), Dt.default || console.error("[relation-graph]Please introduce component html2canvas, for example:https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js")
        }, mounted() {
            u("---------------------------graph mounted---------------------------");
            const e = JSON.parse(JSON.stringify(this.options)),
                s = this.relationGraphCore ? new this.relationGraphCore(e, le(this)) : new Ht(e, le(this));
            s.options.oldVueVersion = this.oldVueVersion, this.relationGraph = s, s.setReactiveData(this.graphData, this.graph), s.setDom(this.$refs.seeksRelationGraph), s.setEventEmitHook((t, ...o) => {
                this.$emit(t, ...o)
            }), s.ready(), s.id = Math.random(), this.graphInstanceOK = !0, Y.default && Y.default.on && Y.default.on("change", this.doFullscreen)
        }, beforeDestroy() {
            u("beforeDestroy:relation-graph"), this.getRelationGraph().options.instanceDestroyed = !0, Y.default && Y.default.off && Y.default.off("change", this.doFullscreen)
        }, updated() {
            u("---------------------------graph updated---------------------------")
        }, methods: {
            getRelationGraph() {
                return this.relationGraph
            }, doFullscreen() {
                K("Method [$graphRef.doFullscreen()] has been deprecated. Please use: $graphRef.getInstance().doFullscreen()"), this.getRelationGraph().fullscreen(Y.default.isFullscreen)
            }, getInstance() {
                return this.getRelationGraph()
            }, setOptions(e, s) {
                return C(this, null, function* () {
                    K("Method [$graphRef.removeNodeById()] has been deprecated. Please use: $graphRef.getInstance().removeNodeById()"), yield this.getRelationGraph().setOptions(e), s && s(this.getRelationGraph())
                })
            }, setJsonData(o, n, i) {
                return C(this, arguments, function* (e, s, t) {
                    return arguments.length === 2 && typeof s == "function" && (t = s, s = !0), yield this.getRelationGraph().setJsonData(e, s), new Promise((a, l) => {
                        this.$nextTick(() => C(this, null, function* () {
                            yield this.getRelationGraph().refresh(!1), t && t(this.getRelationGraph()), a()
                        }))
                    })
                })
            }, appendJsonData(o, n, i) {
                return C(this, arguments, function* (e, s, t) {
                    arguments.length === 2 && typeof s == "function" && (t = s, s = !0), yield this.getRelationGraph().appendJsonData(e, s), t && t(this.getRelationGraph())
                })
            }, setLayouter(e) {
                K("Method [$graphRef.setLayouter()] has been deprecated. Please use: $graphRef.getInstance().setLayouter()"), this.getRelationGraph().setLayouter(e)
            }, onGraphResize() {
                K("Method [$graphRef.onGraphResize()] has been deprecated. Please use: $graphRef.getInstance().resetViewSize()"), this.getRelationGraph().refreshNVAnalysisInfo()
            }, refresh() {
                return C(this, null, function* () {
                    K("Method [$graphRef.refresh()] has been deprecated. Please use: $graphRef.getInstance().refresh()"), yield this.getRelationGraph().refresh()
                })
            }, doLayout() {
                return C(this, null, function* () {
                    K("Method [$graphRef.doLayout()] has been deprecated. Please use: $graphRef.getInstance().doLayout()"), yield this.getRelationGraph().doLayout()
                })
            }, focusRootNode() {
                return C(this, null, function* () {
                    K("Method [$graphRef.focusRootNode()] has been deprecated. Please use: $graphRef.getInstance().focusRootNode()"), yield this.getRelationGraph().focusRootNode()
                })
            }, focusNodeById(e) {
                return C(this, null, function* () {
                    return K("Method [$graphRef.focusNodeById()] has been deprecated. Please use: $graphRef.getInstance().focusNodeById()"), yield this.getRelationGraph().focusNodeById(e)
                })
            }, getNodeById(e) {
                return K("Method [$graphRef.getNodeById()] has been deprecated. Please use: $graphRef.getInstance().getNodeById()"), this.getRelationGraph().getNodeById(e)
            }, removeNodeById(e) {
                return K("Method [$graphRef.removeNodeById()] has been deprecated. Please use: $graphRef.getInstance().removeNodeById()"), this.getRelationGraph().removeNodeById(e)
            }, getNodes() {
                return K("Method [$graphRef.getNodes()] has been deprecated. Please use: $graphRef.getInstance().getNodes()"), this.getRelationGraph().getNodes()
            }, getLinks() {
                return K("Method [$graphRef.getLinks()] has been deprecated. Please use: $graphRef.getInstance().getLinks()"), this.getRelationGraph().getLinks()
            }, getGraphJsonData() {
                return K("Method [$graphRef.getGraphJsonData()] has been deprecated. Please use: $graphRef.getInstance().getGraphJsonData()"), this.getRelationGraph().getGraphJsonData()
            }, getGraphJsonOptions() {
                return K("Method [$graphRef.getGraphJsonOptions()] has been deprecated. Please use: $graphRef.getInstance().getGraphJsonOptions()"), this.getRelationGraph().getGraphJsonOptions()
            }
        }
    };
    var Jn = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            ref: "seeksRelationGraph",
            staticClass: "relation-graph",
            style: {width: "100%", height: "100%"}
        }, [e.graphInstanceOK && e.graph.options ? [e.graph.options.showDebugPanel ? t("GraphDebugPanel") : e._e(), e.graph.options.allowShowMiniToolBar === !0 ? [e.graph.options.oldVueVersion && !e.graph.options.ovUseToolbarSlot ? t("GraphToolBar") : e._t("tool-bar", function () {
            return [e.graph.options.toolBarVersion === "v2" ? t("GraphToolBar") : t("GraphMiniToolBar")]
        })] : e._e(), e._t("graph-plug"), t("RGCanvas", {
            scopedSlots: e._u([{
                key: "node", fn: function (o) {
                    var n = o.node;
                    return [e._t("node", null, {node: n})]
                }
            }, {
                key: "line", fn: function (o) {
                    var n = o.line, i = o.link;
                    return [e._t("line", null, {line: n, link: i})]
                }
            }, {
                key: "canvas-plug", fn: function () {
                    return [e._t("canvas-plug")]
                }, proxy: !0
            }, {
                key: "canvas-plug-above", fn: function () {
                    return [e._t("default")]
                }, proxy: !0
            }, {
                key: "node-expand-holder", fn: function (o) {
                    var n = o.nodeProps, i = o.expandHolderPosition, a = o.expandButtonClass, l = o.color,
                        r = o.expandOrCollapseNode;
                    return [e._t("node-expand-holder", null, {
                        nodeProps: n,
                        expandHolderPosition: i,
                        expandButtonClass: a,
                        color: l,
                        expandOrCollapseNode: r
                    })]
                }
            }], null, !0)
        }), t("GraphOperateStuff", {
            scopedSlots: e._u([{
                key: "node-template", fn: function (o) {
                    var n = o.node;
                    return [e._t("node-template", null, {node: n})]
                }
            }], null, !0)
        }), t("GraphLoading")] : e._e()], 2)
    }, qn = [];
    const pa = "", ce = {};
    var Kn = G(Zn, Jn, qn, !1, Qn, null, null, null);

    function Qn(e) {
        for (let s in ce) this[s] = ce[s]
    }

    const de = function () {
        return Kn.exports
    }(), ti = {
        name: "GraphXsToolBar",
        data() {
            return {}
        },
        props: {
            direction: {mustUseProp: !1, default: "h", type: String},
            positionH: {mustUseProp: !1, default: "left", type: String},
            positionV: {mustUseProp: !1, default: "bottom", type: String}
        },
        inject: ["graph", "graphInstance"],
        computed: {
            relationGraph() {
                return this.graphInstance()
            }, options() {
                return this.graph.options
            }
        },
        mounted() {
        },
        methods: {
            refresh() {
                this.relationGraph.refresh()
            }, switchLayout(e) {
                u("change layout:", e), this.relationGraph.switchLayout(e)
            }, toggleAutoLayout() {
                this.relationGraph.toggleAutoLayout()
            }, downloadAsImage() {
                this.relationGraph.downloadAsImage("png")
            }, zoomToFit() {
                return C(this, null, function* () {
                    yield this.relationGraph.setZoom(100), yield this.relationGraph.moveToCenter(), yield this.relationGraph.zoomToFit()
                })
            }
        }
    };
    var ei = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            staticClass: "rel-toolbar rel-xs-toolbar",
            class: ["rel-toolbar-h-" + e.positionH, "rel-toolbar-v-" + e.positionV, "rel-toolbar-" + e.direction]
        }, [e.options.allowShowFullscreenMenu ? t("div", {
            staticClass: "c-mb-button",
            staticStyle: {"margin-top": "0px"},
            attrs: {title: "Full Screen"},
            on: {
                click: function (o) {
                    return e.relationGraph.fullscreen()
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {
                t: "1712757785584",
                viewBox: "0 0 1024 1024",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18"
            }
        }, [t("path", {
            attrs: {
                d: "M298.666667 597.333333H213.333333v213.333334h213.333334v-85.333334H298.666667v-128z m-85.333334-170.666666h85.333334V298.666667h128V213.333333H213.333333v213.333334z m512 298.666666h-128v85.333334h213.333334v-213.333334h-85.333334v128zM597.333333 213.333333v85.333334h128v128h85.333334V213.333333h-213.333334z",
                "p-id": "7390"
            }
        })])]) : e._e(), e.options.allowShowZoomMenu ? t("div", {
            staticClass: "c-mb-button", on: {
                click: function (o) {
                    return e.relationGraph.zoom(20)
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-fangda"}})])]) : e._e(), e.options.allowShowZoomMenu ? t("div", {
            staticClass: "c-current-zoom",
            on: {click: e.zoomToFit}
        }, [e._v(e._s(e.options.canvasZoom) + "%")]) : e._e(), e.options.allowShowZoomMenu ? t("div", {
            staticClass: "c-mb-button",
            staticStyle: {"margin-top": "0px"},
            on: {
                click: function (o) {
                    return e.relationGraph.zoom(-20)
                }
            }
        }, [t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-suoxiao"}})])]) : e._e(), e.options.allowAutoLayoutIfSupport && e.options.isNeedShowAutoLayoutButton ? t("div", {
            staticClass: "c-mb-button",
            class: {"c-mb-button-on": e.options.autoLayouting},
            attrs: {title: e.options.autoLayouting ? "Stop Force Layout" : "Start Force Layout"},
            on: {click: e.toggleAutoLayout}
        }, [e.options.autoLayouting ? t("svg", {
            staticClass: "c-loading-icon rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-lianjiezhong"}})]) : t("svg", {
            staticClass: "rg-icon",
            attrs: {"aria-hidden": "true"}
        }, [t("use", {attrs: {"xlink:href": "#icon-zidong"}})])]) : e._e(), e._t("default"), t("div", {staticStyle: {clear: "both"}})], 2)
    }, oi = [];
    const fa = "", ue = {};
    var ni = G(ti, ei, oi, !1, ii, null, null, null);

    function ii(e) {
        for (let s in ue) this[s] = ue[s]
    }

    const si = function () {
        return ni.exports
    }(), ai = {
        name: "GraphBackground",
        components: {},
        props: {
            forImage: {mustUseProp: !1, default: !0, type: Boolean},
            forDisplay: {mustUseProp: !1, default: !0, type: Boolean}
        },
        inject: ["graph", "graphInstance"],
        data() {
            return {originBackgroundColor: "", originBackgroundImage: ""}
        },
        computed: {
            relationGraph() {
                return this.graphInstance()
            }, options() {
                return this.graph.options
            }, show() {
                let e = !1;
                return this.options.snapshotting ? this.forImage === !1 ? e = !1 : e = !0 : this.forDisplay === !1 ? e = !1 : e = !0, e
            }
        },
        mounted() {
            this.originBackgroundColor = this.options.backgroundColor, this.originBackgroundImage = this.options.backgroundImage, this.options.backgroundColor = "transparent", this.options.backgroundImage = "", this.relationGraph.setBackgroundDom(this.$refs.backgroundRef, this.forImage, this.forDisplay)
        },
        methods: {},
        beforeDestroy() {
            this.options.backgroundColor = this.originBackgroundColor, this.options.backgroundImage = this.originBackgroundImage, this.relationGraph.setBackgroundDom(null, this.forImage, this.forDisplay)
        }
    };
    var ri = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            directives: [{name: "show", rawName: "v-show", value: e.show, expression: "show"}],
            ref: "backgroundRef",
            staticClass: "rel-background"
        }, [e._t("default")], 2)
    }, li = [];
    const ga = "", pe = {};
    var hi = G(ai, ri, li, !1, ci, "46048452", null, null);

    function ci(e) {
        for (let s in pe) this[s] = pe[s]
    }

    const di = function () {
        return hi.exports
    }(), ui = {
        name: "GraphWatermark",
        components: {},
        props: {
            forImage: {mustUseProp: !1, default: !0, type: Boolean},
            forDisplay: {mustUseProp: !1, default: !0, type: Boolean},
            position: {mustUseProp: !1, default: "br", type: String},
            width: {mustUseProp: !1, default: "200px", type: String},
            height: {mustUseProp: !1, default: "200px", type: String}
        },
        inject: ["graph", "graphInstance"],
        computed: {
            relationGraph() {
                return this.graphInstance()
            }, options() {
                return this.graph.options
            }, show() {
                let e = !1;
                return this.options.snapshotting ? this.forImage === !1 ? e = !1 : e = !0 : this.forDisplay === !0 ? e = !0 : e = !1, e
            }
        },
        mounted() {
            this.$refs.watermarkRef.style.setProperty("--mv-width", this.width), this.$refs.watermarkRef.style.setProperty("--mv-height", this.height), this.relationGraph.setWatermarkDom(this.$refs.watermarkRef, this.forImage, this.forDisplay, this.position)
        },
        methods: {},
        beforeDestroy() {
            this.relationGraph.setWatermarkDom(null, this.forImage, this.forDisplay)
        }
    };
    var pi = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            directives: [{name: "show", rawName: "v-show", value: e.show, expression: "show"}],
            ref: "watermarkRef",
            staticClass: "rel-watermark",
            class: ["rel-watermark-" + e.position]
        }, [e._t("default")], 2)
    }, fi = [];
    const _a = "", fe = {};
    var gi = G(ui, pi, fi, !1, _i, "0bbcf676", null, null);

    function _i(e) {
        for (let s in fe) this[s] = fe[s]
    }

    const mi = function () {
        return gi.exports
    }(), yi = {
        name: "RGEditingNearNodeWidget",
        props: {position: {mustUseProp: !1, default: "top", type: String}},
        inject: ["graph", "graphInstance"],
        computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }
        },
        data() {
            return {}
        },
        methods: {
            onMouseDown(e, s) {
                s.stopPropagation(), this.relationGraph.onResizeStart(e, s)
            }
        }
    };
    var vi = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            staticClass: "rel-editing-bar",
            class: ["rel-editing-bar-" + e.position]
        }, [e._t("default")], 2)
    }, xi = [];
    const ma = "", ge = {};
    var wi = G(yi, vi, xi, !1, Ci, "3d0b34ee", null, null);

    function Ci(e) {
        for (let s in ge) this[s] = ge[s]
    }

    const _e = function () {
        return wi.exports
    }(), bi = {
        name: "RGEditingResize", components: {}, inject: ["graph", "graphInstance"], computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }
        }, data() {
            return {}
        }, methods: {
            onMouseDown(e, s) {
                s.stopPropagation(), this.relationGraph.onResizeStart(e, s)
            }
        }
    };
    var Li = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {staticClass: "rel-resize-ctl"}, [e.options.editingController.width > 30 ? t("div", {
            staticClass: "rel-resize-ctl-handler rel-resize-ctl-tl",
            on: {
                mousedown: function (o) {
                    return e.onMouseDown("tl", o)
                }
            }
        }) : e._e(), e.options.editingController.width > 30 ? t("div", {
            staticClass: "rel-resize-ctl-handler rel-resize-ctl-tr",
            on: {
                mousedown: function (o) {
                    return e.onMouseDown("tr", o)
                }
            }
        }) : e._e(), e.options.editingController.width > 30 ? t("div", {
            staticClass: "rel-resize-ctl-handler rel-resize-ctl-bl",
            on: {
                mousedown: function (o) {
                    return e.onMouseDown("bl", o)
                }
            }
        }) : e._e(), t("div", {
            staticClass: "rel-resize-ctl-handler rel-resize-ctl-br", on: {
                mousedown: function (o) {
                    return e.onMouseDown("br", o)
                }
            }
        }), e.options.editingController.width > 60 ? t("div", {
            staticClass: "rel-resize-ctl-handler rel-resize-ctl-t",
            on: {
                mousedown: function (o) {
                    return e.onMouseDown("t", o)
                }
            }
        }) : e._e(), e.options.editingController.width > 60 ? t("div", {
            staticClass: "rel-resize-ctl-handler rel-resize-ctl-b",
            on: {
                mousedown: function (o) {
                    return e.onMouseDown("b", o)
                }
            }
        }) : e._e(), e.options.editingController.height > 60 ? t("div", {
            staticClass: "rel-resize-ctl-handler rel-resize-ctl-l",
            on: {
                mousedown: function (o) {
                    return e.onMouseDown("l", o)
                }
            }
        }) : e._e(), e.options.editingController.height > 60 ? t("div", {
            staticClass: "rel-resize-ctl-handler rel-resize-ctl-r",
            on: {
                mousedown: function (o) {
                    return e.onMouseDown("r", o)
                }
            }
        }) : e._e()])
    }, ki = [];
    const ya = "", me = {};
    var Mi = G(bi, Li, ki, !1, Si, "eb08d3d8", null, null);

    function Si(e) {
        for (let s in me) this[s] = me[s]
    }

    const ye = function () {
        return Mi.exports
    }(), Ei = {
        name: "RGEditingCreateLineHandle",
        components: {},
        inject: ["graph", "graphInstance"],
        props: {lineTemplate: {mustUseProp: !1, default: () => ({}), type: Object}},
        computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }
        },
        data() {
            return {}
        },
        methods: {
            onMouseDown(e, s) {
                this.relationGraph.startCreateLineByTemplate(e, this.lineTemplate, s)
            }
        }
    };
    var Pi = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return e.options.editingController.nodes.length === 1 ? t("div", {
            staticClass: "rel-editing-line-handle",
            on: {
                mousedown: function (o) {
                    return e.onMouseDown("br", o)
                }
            }
        }, [e._t("default")], 2) : e._e()
    }, zi = [];
    const va = "", ve = {};
    var $i = G(Ei, Pi, zi, !1, Oi, "050f1ac0", null, null);

    function Oi(e) {
        for (let s in ve) this[s] = ve[s]
    }

    const xe = function () {
        return $i.exports
    }(), Ri = {
        name: "RGEditingController",
        components: {RGEditingCreateLineHandle: xe, RGEditingResize: ye, RGEditingToolbar: _e},
        inject: ["graph", "graphInstance"],
        computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }
        },
        data() {
            return {}
        },
        methods: {}
    };
    var Di = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return e.options.editingController.show || e.options.snapshotting ? t("div", {
            staticClass: "rel-editing-ctrl",
            style: {
                left: e.options.editingController.x + "px",
                top: e.options.editingController.y + "px",
                width: e.options.editingController.width + "px",
                height: e.options.editingController.height + "px"
            }
        }, [e._t("default")], 2) : e._e()
    }, Vi = [];
    const xa = "", we = {};
    var Ni = G(Ri, Di, Vi, !1, Gi, "5d6122ed", null, null);

    function Gi(e) {
        for (let s in we) this[s] = we[s]
    }

    const Bi = function () {
        return Ni.exports
    }(), Ti = {
        name: "RGMiniView",
        components: {},
        props: {
            position: {mustUseProp: !1, default: "br", type: String},
            width: {mustUseProp: !1, default: "200px", type: String},
            height: {mustUseProp: !1, default: "200px", type: String}
        },
        inject: ["graph", "graphInstance"],
        computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }
        },
        data() {
            return {}
        },
        mounted() {
            this.options.showMiniView = !0, this.$refs.rgMiniView.style.setProperty("--mv-width", this.width), this.$refs.rgMiniView.style.setProperty("--mv-height", this.height), this.relationGraph.setMiniViewCanvas(this.$refs.rgMiniViewCanvas)
        },
        methods: {
            onMouseDown(e) {
                this.relationGraph.onVisiableViewHandleDragStart(e)
            }, onClickCanvas(e) {
                this.relationGraph.resetByVisiableView(e)
            }
        },
        beforeDestroy() {
            this.options.showMiniView = !1
        }
    };
    var Ai = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            ref: "rgMiniView",
            staticClass: "rel-miniview",
            class: ["rel-miniview-" + e.position]
        }, [t("canvas", {
            ref: "rgMiniViewCanvas",
            class: {"rel-mv-canvas-reset": e.options.miniViewVisibleHandle.emptyContent},
            on: {click: e.onClickCanvas}
        }), t("div", {
            staticClass: "rel-mv-visible-area",
            style: {
                left: e.options.miniViewVisibleHandle.x + "px",
                top: e.options.miniViewVisibleHandle.y + "px",
                width: e.options.miniViewVisibleHandle.width + "px",
                height: e.options.miniViewVisibleHandle.height + "px"
            },
            on: {mousedown: e.onMouseDown}
        })])
    }, Ii = [];
    const wa = "", Ce = {};
    var Hi = G(Ti, Ai, Ii, !1, Wi, "95ed7564", null, null);

    function Wi(e) {
        for (let s in Ce) this[s] = Ce[s]
    }

    const Fi = function () {
        return Hi.exports
    }(), Ui = {
        name: "RGEditingLineController",
        components: {},
        inject: ["graph", "graphInstance"],
        props: {textEditable: {mustUseProp: !1, default: !1}},
        computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }, show() {
                return this.options.editingLineController.show
            }, text() {
                return this.options.editingLineController.line && this.options.editingLineController.line.text
            }
        },
        data() {
            return {lineText: "", editing: !1}
        },
        watch: {
            show(e) {
                e || (this.editing = !1, this.lineText = "")
            }, text(e) {
                e && (this.lineText = e, this.$nextTick(() => {
                    this.relationGraph.updateEditingLineView()
                }))
            }
        },
        methods: {
            onMouseDown(e, s) {
                this.relationGraph.startMoveLineVertex(e, s)
            }, startMoveText(e) {
                this.relationGraph.startMoveLineText(e)
            }, startEditingLineText(e) {
                this.editing = !this.editing
            }, onLineTextChange(e) {
                const s = this.options.editingLineController.line;
                s && (s.text = e.target.value)
            }
        }
    };
    var ji = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return e.show ? t("div", {staticClass: "rel-editing-line-ctrl"}, [e._t("default"), t("div", {
            staticClass: "rel-line-ctrl-dot start-dot",
            style: {
                left: e.options.editingLineController.startPoint.x + "px",
                top: e.options.editingLineController.startPoint.y + "px"
            },
            on: {
                mousedown: function (o) {
                    return e.onMouseDown("start", o)
                }
            }
        }), t("div", {
            staticClass: "rel-line-ctrl-dot end-dot",
            style: {
                left: e.options.editingLineController.endPoint.x + "px",
                top: e.options.editingLineController.endPoint.y + "px"
            },
            on: {
                mousedown: function (o) {
                    return e.onMouseDown("end", o)
                }
            }
        }), e.textEditable && e.options.editingLineController.line ? t("div", {
            class: ["rel-line-ctrl-text", e.editing && "rel-line-ctrl-text-editing"],
            style: {
                width: e.options.editingLineController.text.width + "px",
                height: e.options.editingLineController.text.height + "px",
                left: e.options.editingLineController.text.x + "px",
                top: e.options.editingLineController.text.y + "px"
            },
            on: {
                dblclick: e.startEditingLineText, mousedown: function (o) {
                    return e.startMoveText(o)
                }
            }
        }, [e.editing ? t("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.lineText,
                expression: "lineText"
            }],
            staticClass: "rel-line-text-input",
            domProps: {value: e.lineText},
            on: {
                blur: e.onLineTextChange, input: function (o) {
                    o.target.composing || (e.lineText = o.target.value)
                }
            }
        }) : t("span", [e._v(e._s(e.text))])]) : e._e()], 2) : e._e()
    }, Xi = [];
    const Ca = "", be = {};
    var Yi = G(Ui, ji, Xi, !1, Zi, "5d52d38c", null, null);

    function Zi(e) {
        for (let s in be) this[s] = be[s]
    }

    const Ji = function () {
        return Yi.exports
    }(), qi = {
        name: "RGEditingConnectPoints", components: {}, inject: ["graph", "graphInstance"], computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }
        }, data() {
            return {}
        }, methods: {
            onMouseUp(e, s) {
                this.relationGraph.onLineVertexBeDropped(e, s)
            }
        }
    };
    var Ki = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {staticClass: "rel-connect-ctl"}, [t("div", {
            staticClass: "rel-connect-ctl-handler rel-connect-ctl-t",
            on: {
                mouseup: function (o) {
                    return e.onMouseUp("top", o)
                }
            }
        }), t("div", {
            staticClass: "rel-connect-ctl-handler rel-connect-ctl-b", on: {
                mouseup: function (o) {
                    return e.onMouseUp("bottom", o)
                }
            }
        }), t("div", {
            staticClass: "rel-connect-ctl-handler rel-connect-ctl-center", on: {
                mouseup: function (o) {
                    return e.onMouseUp("border", o)
                }
            }
        }), t("div", {
            staticClass: "rel-connect-ctl-handler rel-connect-ctl-l", on: {
                mouseup: function (o) {
                    return e.onMouseUp("left", o)
                }
            }
        }), t("div", {
            staticClass: "rel-connect-ctl-handler rel-connect-ctl-r", on: {
                mouseup: function (o) {
                    return e.onMouseUp("right", o)
                }
            }
        }), t("div", {
            staticClass: "rel-connect-ctl-handler rel-connect-ctl-lr", on: {
                mouseup: function (o) {
                    return e.onMouseUp("lr", o)
                }
            }
        }), t("div", {
            staticClass: "rel-connect-ctl-handler rel-connect-ctl-tb", on: {
                mouseup: function (o) {
                    return e.onMouseUp("tb", o)
                }
            }
        })])
    }, Qi = [];
    const ba = "", Le = {};
    var ts = G(qi, Ki, Qi, !1, es, "45afaa90", null, null);

    function es(e) {
        for (let s in Le) this[s] = Le[s]
    }

    const ke = function () {
        return ts.exports
    }(), os = {
        name: "RGEditingConnectController",
        components: {RGEditingConnectPoints: ke},
        inject: ["graph", "graphInstance"],
        computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }
        },
        data() {
            return {}
        },
        methods: {}
    };
    var ns = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return e.options.nodeConnectController.show ? t("div", {
            staticClass: "rel-editing-connect-ctrl",
            style: {
                left: e.options.nodeConnectController.x + "px",
                top: e.options.nodeConnectController.y + "px",
                width: e.options.nodeConnectController.width + "px",
                height: e.options.nodeConnectController.height + "px"
            }
        }, [e._t("default", function () {
            return [t("RGEditingConnectPoints")]
        })], 2) : e._e()
    }, is = [];
    const La = "", Me = {};
    var ss = G(os, ns, is, !1, as, "4d1fe75a", null, null);

    function as(e) {
        for (let s in Me) this[s] = Me[s]
    }

    const rs = function () {
        return ss.exports
    }(), ls = {
        name: "RGEditingReferenceLine", components: {}, inject: ["graph", "graphInstance"], computed: {
            options() {
                return this.graph.options
            }, relationGraph() {
                return this.graphInstance()
            }
        }, data() {
            return {}
        }, mounted() {
            this.options.showReferenceLine = !0
        }, methods: {}, beforeDestroy() {
            this.options.showReferenceLine = !1
        }
    };
    var hs = function () {
        var e = this, s = e.$createElement, t = e._self._c || s;
        return t("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.options.editingReferenceLine.show,
                expression: "options.editingReferenceLine.show"
            }], staticClass: "rel-editing-referline"
        }, [t("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.options.editingReferenceLine.directionV,
                expression: "options.editingReferenceLine.directionV"
            }],
            staticClass: "rel-editing-referline-v",
            style: {
                left: e.options.editingReferenceLine.v_x + "px",
                top: e.options.editingReferenceLine.v_y + "px",
                height: e.options.editingReferenceLine.v_height + "px"
            }
        }, [t("div", {staticClass: "referline"}, [t("div", [e._v(e._s(e.options.editingReferenceLine.v_height) + "px")])])]), t("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.options.editingReferenceLine.directionH,
                expression: "options.editingReferenceLine.directionH"
            }],
            staticClass: "rel-editing-referline-h",
            style: {
                left: e.options.editingReferenceLine.h_x + "px",
                top: e.options.editingReferenceLine.h_y + "px",
                width: e.options.editingReferenceLine.h_width + "px"
            }
        }, [t("div", {staticClass: "referline"}, [t("div", [e._v(e._s(e.options.editingReferenceLine.h_width) + "px")])])])])
    }, cs = [];
    const ka = "", Se = {};
    var ds = G(ls, hs, cs, !1, us, "da91b22c", null, null);

    function us(e) {
        for (let s in Se) this[s] = Se[s]
    }

    const ps = function () {
            return ds.exports
        }(), fs = Ht, gs = ae, _s = si, ms = Fi, ys = di, vs = mi, xs = Bi, ws = ye, Cs = _e, bs = Ji, Ls = rs, ks = xe,
        Ms = ke, Ss = ps, Es = {
            BaseLayouter: ct,
            BidirectionalTreeLayouter: Gt,
            CenterLayouter: Bt,
            CircleLayouter: Tt,
            FixedLayouter: At,
            ForceLayouter: dt
        }, Ps = Xe, zs = Ze, $s = We, Os = Ie, Rs = q, Ds = Te, Vs = no, Ee = (e, s) => {
            e.component("RelationGraph", de)
        };
    typeof window != "undefined" && window.Vue && Ee(window.Vue);
    const Ns = De(Re({}, de), {version: Vt, install: Ee});
    P.GraphToolBar = gs, P.Layout = Es, P.RGBackground = ys, P.RGEditingConnectController = Ls, P.RGEditingConnectPoints = Ms, P.RGEditingController = xs, P.RGEditingCreateLineHandle = ks, P.RGEditingLineController = bs, P.RGEditingNearNodeWidget = Cs, P.RGEditingReferenceLine = Ss, P.RGEditingResize = ws, P.RGEffectUtils = Vs, P.RGEventNames = $, P.RGGraphMath = Rs, P.RGLayouterUtils = Ps, P.RGLinkUtils = $s, P.RGMiniToolBar = _s, P.RGMiniView = ms, P.RGNodeUtils = Os, P.RGNodesAnalyticUtils = Ds, P.RGOptionsUtils = zs, P.RGWatermark = vs, P.RelationGraphCore = fs, P.default = Ns, Object.defineProperties(P, {
        __esModule: {value: !0},
        [Symbol.toStringTag]: {value: "Module"}
    })
});

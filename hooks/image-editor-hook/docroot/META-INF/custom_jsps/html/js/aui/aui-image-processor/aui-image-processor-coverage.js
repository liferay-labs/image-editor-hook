if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-image-processor/aui-image-processor.js']) {
   __coverage__['build/aui-image-processor/aui-image-processor.js'] = {"path":"build/aui-image-processor/aui-image-processor.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":50}}},"2":{"name":"(anonymous_2)","line":72,"loc":{"start":{"line":72,"column":21},"end":{"line":72,"column":32}}},"3":{"name":"(anonymous_3)","line":121,"loc":{"start":{"line":121,"column":28},"end":{"line":121,"column":61}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":140,"column":54}},"2":{"start":{"line":9,"column":0},"end":{"line":19,"column":41}},"3":{"start":{"line":28,"column":0},"end":{"line":135,"column":3}},"4":{"start":{"line":122,"column":12},"end":{"line":122,"column":32}},"5":{"start":{"line":124,"column":12},"end":{"line":124,"column":46}},"6":{"start":{"line":126,"column":12},"end":{"line":132,"column":14}},"7":{"start":{"line":137,"column":0},"end":{"line":137,"column":42}}},"branchMap":{},"code":["(function () { YUI.add('aui-image-processor', function (A, NAME) {","","/**"," * The ImageProcessor Utility"," * @module aui-image-editor"," * @submodule aui-image-processor-base"," */","","var Lang = A.Lang,","    AObject = A.Object,","","    _EVENT_NS = 'imageProcessor:',","","    _NAME = 'image-processor-base',","    _DOT = '.',","","    getClassName = A.getClassName,","","    CSS_IMAGE_NODE = getClassName('img');","","/**"," * A base class for Image Processors."," *"," * @class A.ImageProcessorBase"," * @extends Base"," * @constructor"," */","var ImageProcessorBase = A.Component.create({","","    NAME: _NAME,","","    /**","     * Object hash, defining how attribute values have to be parsed from","     * markup contained in the Image Editor's content box.","     *","     * @property HTML_PARSER","     * @type Object","     * @static","     */","    HTML_PARSER: {","        imageNode: CSS_IMAGE_NODE","    },","","    /**","     * Static property used to define the default attribute","     * configuration for the ImageProcessor.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * Container node of the image processor.","         *","         * @attribute imageNode","         * @type Node","         */","        imageNode: {","        }","    },","","    prototype: {","","        /**","         * Construction logic executed during ImageProcessor instantiation. Lifecycle.","         *","         * @method initializer","         * @protected","         */","        initializer: function() {","","        },","","       /**","         *","         *","         * @method clear","         */","","        /**","         *","         *","         * @method getImage","         */","","        /**","         *","         *","         * @method getImageData","         */","","        /**","         *","         *","         * @method preview","         */","","        /**","         *","         *","         * @method putImage","         */","","        /**","         *","         *","         * @method reset","         */","","        /**","         *","         *","         * @method save","         */","","        /**","         *","         */","        _notifyStateChange: function(state, prevVal, newVal) {","            var instance = this;","","            var eventName = _EVENT_NS + state;","","            instance.fire(","                eventName,","                {","                    newVal: newVal,","                    prevVal: prevVal","                }","            );","        }","    }","});","","A.ImageProcessorBase = ImageProcessorBase;","","","}, '2.0.0', {\"requires\": [\"base-build\", \"aui-base\"]});","","}());"]};
}
var __cov_CRFH8FP8bjPWTiRrBnutTw = __coverage__['build/aui-image-processor/aui-image-processor.js'];
__cov_CRFH8FP8bjPWTiRrBnutTw.s['1']++;YUI.add('aui-image-processor',function(A,NAME){__cov_CRFH8FP8bjPWTiRrBnutTw.f['1']++;__cov_CRFH8FP8bjPWTiRrBnutTw.s['2']++;var Lang=A.Lang,AObject=A.Object,_EVENT_NS='imageProcessor:',_NAME='image-processor-base',_DOT='.',getClassName=A.getClassName,CSS_IMAGE_NODE=getClassName('img');__cov_CRFH8FP8bjPWTiRrBnutTw.s['3']++;var ImageProcessorBase=A.Component.create({NAME:_NAME,HTML_PARSER:{imageNode:CSS_IMAGE_NODE},ATTRS:{imageNode:{}},prototype:{initializer:function(){__cov_CRFH8FP8bjPWTiRrBnutTw.f['2']++;},_notifyStateChange:function(state,prevVal,newVal){__cov_CRFH8FP8bjPWTiRrBnutTw.f['3']++;__cov_CRFH8FP8bjPWTiRrBnutTw.s['4']++;var instance=this;__cov_CRFH8FP8bjPWTiRrBnutTw.s['5']++;var eventName=_EVENT_NS+state;__cov_CRFH8FP8bjPWTiRrBnutTw.s['6']++;instance.fire(eventName,{newVal:newVal,prevVal:prevVal});}}});__cov_CRFH8FP8bjPWTiRrBnutTw.s['7']++;A.ImageProcessorBase=ImageProcessorBase;},'2.0.0',{'requires':['base-build','aui-base']});
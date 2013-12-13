if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-image-filter/aui-image-filter.js']) {
   __coverage__['build/aui-image-filter/aui-image-filter.js'] = {"path":"build/aui-image-filter/aui-image-filter.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":47}}},"2":{"name":"(anonymous_2)","line":78,"loc":{"start":{"line":78,"column":25},"end":{"line":78,"column":42}}},"3":{"name":"(anonymous_3)","line":85,"loc":{"start":{"line":85,"column":23},"end":{"line":85,"column":34}}},"4":{"name":"(anonymous_4)","line":95,"loc":{"start":{"line":95,"column":25},"end":{"line":95,"column":36}}},"5":{"name":"(anonymous_5)","line":102,"loc":{"start":{"line":102,"column":24},"end":{"line":102,"column":35}}},"6":{"name":"(anonymous_6)","line":129,"loc":{"start":{"line":129,"column":27},"end":{"line":129,"column":50}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":140,"column":55}},"2":{"start":{"line":3,"column":0},"end":{"line":136,"column":7}},"3":{"start":{"line":86,"column":16},"end":{"line":86,"column":36}},"4":{"start":{"line":88,"column":16},"end":{"line":88,"column":45}},"5":{"start":{"line":103,"column":16},"end":{"line":105,"column":46}},"6":{"start":{"line":107,"column":16},"end":{"line":120,"column":17}},"7":{"start":{"line":108,"column":20},"end":{"line":115,"column":22}},"8":{"start":{"line":117,"column":20},"end":{"line":117,"column":57}},"9":{"start":{"line":119,"column":20},"end":{"line":119,"column":46}},"10":{"start":{"line":122,"column":16},"end":{"line":122,"column":30}},"11":{"start":{"line":130,"column":16},"end":{"line":130,"column":36}},"12":{"start":{"line":132,"column":16},"end":{"line":132,"column":80}},"13":{"start":{"line":138,"column":0},"end":{"line":138,"column":28}}},"branchMap":{"1":{"line":107,"type":"if","locations":[{"start":{"line":107,"column":16},"end":{"line":107,"column":16}},{"start":{"line":107,"column":16},"end":{"line":107,"column":16}}]}},"code":["(function () { YUI.add('aui-image-filter', function (A, NAME) {","","var Lang = A.Lang,","","    _NAME = 'image-filter',","","    _NS = 'imageFilter',","","    ImageFilter = A.Component.create({","","        /**","         * Static property provides a string to identify the class.","         *","         * @property NAME","         * @type String","         * @static","         */","        NAME: _NAME,","","        /**","         * Static property provides a string to identify the namespace.","         *","         * @property NS","         * @type String","         * @static","         */","        NS: _NS,","","        /**","         * Static property used to define which component it extends.","         *","         * @property EXTENDS","         * @type String","         * @static","         */","        EXTENDS: A.Plugin.Base,","","        /**","         * Static property used to define the default attribute","         * configuration for the ImageFilter.","         *","         * @property ATTRS","         * @type Object","         * @static","         */","        ATTRS: {","","            /**","             *","             *","             * @attribute swfCfg","             * @type Object","             */","            swfCfg: {","                readonly: true,","                value: {","                    processFn: _NS","                }","            }","        },","","        prototype: {","","            FILTER_NS: _NS,","","            FILTER_LABEL: _NS,","","            EDITOR_TEMPLATE: '<button>{label}</button>',","","            /**","             * Construction logic executed during ImageFilter instantiation.","             * Lifecycle.","             *","             * @method initializer","             * @param config","             * @protected","             */","            initializer: function(config) {","            },","","            /**","             *","             * @method getEditor","             */","            getEditor: function() {","                var instance = this;","","                return instance._getEditor();","            },","","            /**","             *","             * @method resetEditor","             */","            resetEditor: function() {","            },","","            /**","             *","             * @method _getEditor","             */","            _getEditor: function() {","                var instance = this,","                    host = instance.get('host'),","                    editor = instance._editor;","","                if (!editor) {","                    editor = A.Node.create(","                        Lang.sub(","                            instance.EDITOR_TEMPLATE,","                            {","                                label: instance.FILTER_LABEL","                            }","                        )","                    );","","                    instance._bindEditorUI(editor, host);","","                    instance._editor = editor;","                }","","                return editor;","            },","","            /**","             *","             * @method _bindEditorUI","             */","            _bindEditorUI: function(editor, host) {","                var instance = this;","","                editor.on('click', A.bind('preview', host, instance.FILTER_NS));","            }","        }","","    });","","A.ImageFilter = ImageFilter;","","}, '2.0.0', {\"requires\": [\"plugin\", \"aui-component\"]});","","}());"]};
}
var __cov_PXwRSTXG$mBnKWPPljVv7Q = __coverage__['build/aui-image-filter/aui-image-filter.js'];
__cov_PXwRSTXG$mBnKWPPljVv7Q.s['1']++;YUI.add('aui-image-filter',function(A,NAME){__cov_PXwRSTXG$mBnKWPPljVv7Q.f['1']++;__cov_PXwRSTXG$mBnKWPPljVv7Q.s['2']++;var Lang=A.Lang,_NAME='image-filter',_NS='imageFilter',ImageFilter=A.Component.create({NAME:_NAME,NS:_NS,EXTENDS:A.Plugin.Base,ATTRS:{swfCfg:{readonly:true,value:{processFn:_NS}}},prototype:{FILTER_NS:_NS,FILTER_LABEL:_NS,EDITOR_TEMPLATE:'<button>{label}</button>',initializer:function(config){__cov_PXwRSTXG$mBnKWPPljVv7Q.f['2']++;},getEditor:function(){__cov_PXwRSTXG$mBnKWPPljVv7Q.f['3']++;__cov_PXwRSTXG$mBnKWPPljVv7Q.s['3']++;var instance=this;__cov_PXwRSTXG$mBnKWPPljVv7Q.s['4']++;return instance._getEditor();},resetEditor:function(){__cov_PXwRSTXG$mBnKWPPljVv7Q.f['4']++;},_getEditor:function(){__cov_PXwRSTXG$mBnKWPPljVv7Q.f['5']++;__cov_PXwRSTXG$mBnKWPPljVv7Q.s['5']++;var instance=this,host=instance.get('host'),editor=instance._editor;__cov_PXwRSTXG$mBnKWPPljVv7Q.s['6']++;if(!editor){__cov_PXwRSTXG$mBnKWPPljVv7Q.b['1'][0]++;__cov_PXwRSTXG$mBnKWPPljVv7Q.s['7']++;editor=A.Node.create(Lang.sub(instance.EDITOR_TEMPLATE,{label:instance.FILTER_LABEL}));__cov_PXwRSTXG$mBnKWPPljVv7Q.s['8']++;instance._bindEditorUI(editor,host);__cov_PXwRSTXG$mBnKWPPljVv7Q.s['9']++;instance._editor=editor;}else{__cov_PXwRSTXG$mBnKWPPljVv7Q.b['1'][1]++;}__cov_PXwRSTXG$mBnKWPPljVv7Q.s['10']++;return editor;},_bindEditorUI:function(editor,host){__cov_PXwRSTXG$mBnKWPPljVv7Q.f['6']++;__cov_PXwRSTXG$mBnKWPPljVv7Q.s['11']++;var instance=this;__cov_PXwRSTXG$mBnKWPPljVv7Q.s['12']++;editor.on('click',A.bind('preview',host,instance.FILTER_NS));}}});__cov_PXwRSTXG$mBnKWPPljVv7Q.s['13']++;A.ImageFilter=ImageFilter;},'2.0.0',{'requires':['plugin','aui-component']});

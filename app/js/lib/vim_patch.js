define(function(require, exports, module) {
    // Monkey patch vim mode
    var vimKeyBindings = require("ace/keyboard/vim");

    var keepKeys = ["<C-e>", "<C-p>", "<C-f>", "<C-g>", "<C-[>", "<C-]>"];
    
    function shouldKeepKey(key) {
      var res = _.find(keepKeys, function(keys) { return keys === key.keys; });
      return res !== undefined;
    }

    function patchVimKeys() {
        var vimKeys = vimKeyBindings.handler.defaultKeymap;
        for(var i = 0; i < vimKeys.length; i++) {
            var key = vimKeys[i];
            if (shouldKeepKey(key)) {
                vimKeys.splice(i, 1);
                i--;
            }
        }
    }
    patchVimKeys();
});

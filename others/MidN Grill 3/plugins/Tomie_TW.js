/*
@about Hmm experimental plugin works on some games other than this one.
@author TomieAi
@version 1.2

This game uses old version of node version 3.x.x i hate this xD its so messy cant use some api on modern node.
*/
var TomiePluginParams = PluginManager.parameters('Tomie_TW');
var TomiePluginConfig = TomiePluginParams.config || [];
function TomieTextWrapper(text, name, bitmap, contentsWidth) {
    this.m_text = text;
    this.m_name = name;
    this.m_bitmap = bitmap;
    this.m_widthCache = {};
    this.m_contentsWidth = contentsWidth;
}
TomieTextWrapper.prototype.splitSentences = function (text) {
    var parts = [];
    var regex = /([.!?！]) +/g;
    var lastIndex = 0;
    var match;
    while ((match = regex.exec(text)) !== null) {
        var end = regex.lastIndex;
        var sentence = text.substring(lastIndex, end).trim();
        if (sentence.length > 0) {
            parts.push(sentence);
        }
        lastIndex = end;
    }
    var final = text.substring(lastIndex).trim();
    if (final.length > 0) {
        parts.push(final);
    }
    return parts;
}
TomieTextWrapper.prototype.measure = function (text) {
    if (this.m_widthCache[text] !== undefined) {
        return this.m_widthCache[text];
    }
    var w = this.m_bitmap.measureTextWidth(text);
    this.m_widthCache[text] = w;
    return w;
}
TomieTextWrapper.prototype.getMaxWidthByName = function (name) {
    for (var i = 0; i < TomiePluginConfig.length; i++) {
        if (TomiePluginConfig[i].name === name) return TomiePluginConfig[i].maxWidth;
    }
    return null;
}
TomieTextWrapper.prototype.wrap = function () {
    var text = this.m_text;
    var maxWidth = TomiePluginParams.vanilla ? this.m_contentsWidth : this.getMaxWidthByName(this.m_name);
    if (!this.m_bitmap || !this.m_bitmap.measureTextWidth || !maxWidth) return text;
    const normalized = text
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const lines = [];
    var currentLine = '';
    var parts = this.splitSentences(normalized);
    var sentences = [];

    for (var i = 0; i < parts.length; i++) {
        var s = parts[i].trim();
        if (s.length > 0) {
            sentences.push(s);
        }
    }

    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i];
        var words = sentence.split(' ');

        if (currentLine) {
            var testLine = currentLine + ' ' + sentence;
            if (this.measure(testLine) <= maxWidth) {
                currentLine = testLine;
                continue;
            }
        }

        if (this.measure(sentence) <= maxWidth) {
            if (currentLine) lines.push(currentLine);
            currentLine = sentence;
            continue;
        }

        for (var j = 0; j < words.length; j++) {
            var word = words[j];
            var testLine = currentLine ? currentLine + ' ' + word : word;
            var width = this.measure(testLine);

            if (width <= maxWidth) {
                currentLine = testLine;
            } else {
                if (currentLine === '' || this.measure(word) > maxWidth) {
                    if (currentLine) {
                        lines.push(currentLine);
                        currentLine = '';
                    }

                    var currentWordPart = '';
                    for (var k = 0; k < word.length; k++) {
                        var char = word[k];
                        var testChar = currentWordPart + char;
                        if (this.measure(testChar) <= maxWidth) {
                            currentWordPart = testChar;
                        } else {
                            lines.push(currentWordPart);
                            currentWordPart = char;
                        }
                    }

                    if (currentWordPart) {
                        currentLine = currentWordPart;
                    }
                } else {
                    lines.push(currentLine);
                    currentLine = word;
                }
            }
        }
    }

    if (currentLine) {
        lines.push(currentLine);
    }
    return lines.join('\n');
}

var bitmap_bg = null;
var message_background = "";
Window_Message.prototype.updateBackground = function () {
    this._background = $gameMessage.background();
    this.setBackgroundType(this._background);
    if (this.contents) bitmap_bg = this.contents;
}
var o_sprite_onbitmapload = Sprite.prototype._onBitmapLoad;
Sprite.prototype._onBitmapLoad = function (bitmapLoaded) {
    o_sprite_onbitmapload.call(this, bitmapLoaded);
    if (!bitmap_bg) bitmap_bg = bitmapLoaded;
}
Window_Base.prototype.standardFontSize = function () {
    return TomiePluginParams.fontSize || 18;
};
Window_Base.prototype.standardPadding = function () {
    return TomiePluginParams.padding || 18;
};
Window_Message.prototype.startMessage = function () {
    this._textState = {};
    this._textState.index = 0;
    this._textState.text = new TomieTextWrapper(this.convertEscapeCharacters($gameMessage.allText()), message_background, bitmap_bg, this.contentsWidth()).wrap();
    this.newPage(this._textState);
    this.updatePlacement();
    this.updateBackground();
    this.open();
}
var original_command231 = Game_Interpreter.prototype.command231;
Game_Interpreter.prototype.command231 = function () {
    original_command231.call(this);
    for(var i = 0; i < TomiePluginConfig.length; i++) {
        if (TomiePluginConfig[i].name === this._params[1]) {
            message_background = this._params[1];
            break;
        }
    }
    return true;
}
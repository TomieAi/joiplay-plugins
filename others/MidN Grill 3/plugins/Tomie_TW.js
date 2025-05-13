/*
@about This plugin is for MidN Grill 3 only
@author TomieAi
@version 1.0

This game uses old version of node version 3.x.x i hate this xD its so messy cant use some api on modern node.
*/
function TomieTextWrapper(text, name, bitmap) {
    this.m_text = text;
    this.m_name = name;
    this.m_bitmap = bitmap;
}
TomieTextWrapper.prototype.config = function () {
    return [
        { name: 'テキスト枠　セリフ風１－１', maxWidth: 350 },
        { name: 'テキスト枠　セリフ風１－２', maxWidth: 350 },
        { name: 'テキスト枠　セリフ風２－１', maxWidth: 350 },
        { name: 'テキスト枠　セリフ風２－２', maxWidth: 350 },
        { name: 'テキスト枠　セリフ風２－２下', maxWidth: 350 },
        { name: 'テキスト枠　セリフ風３－１', maxWidth: 350 },
        { name: 'テキスト枠　セリフ風３－２', maxWidth: 350 },
        { name: 'テキスト枠　セリフ風３－３', maxWidth: 350 },
        { name: 'テキスト枠　セリフ風３－４', maxWidth: 350 },
        { name: 'テキスト枠　セリフ風４－１', maxWidth: 350 },
        { name: 'テキスト枠　セリフ風４－２', maxWidth: 350 },
        { name: 'テキスト枠　衣装選択用', maxWidth: 900 },
        { name: 'テキスト枠　衣装選択用　旧', maxWidth: 900 },
        { name: 'テキスト枠　誘惑露出　相手右　男', maxWidth: 350 },
        { name: 'テキスト枠　誘惑露出　相手右　男２', maxWidth: 350 },
        { name: 'テキスト枠　通常会話用', maxWidth: 1250 },
        { name: 'テキスト枠　露出用', maxWidth: 350 }
    ]
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
TomieTextWrapper.prototype.measure = function (text, widthCache) {
    if (widthCache[text] !== undefined) {
        return widthCache[text];
    }
    var w = this.m_bitmap.measureTextWidth(text);
    widthCache[text] = w;
    return w;
}
TomieTextWrapper.prototype.getMaxWidthByName = function (name) {
    for (var i = 0; i < this.config().length; i++) {
        if (this.config()[i].name === name) return this.config()[i].maxWidth;
    }
    return null;
}
TomieTextWrapper.prototype.wrap = function () {
    var text = this.m_text;
    var maxWidth = this.getMaxWidthByName(this.m_name);
    if (!this.m_bitmap || !this.m_bitmap.measureTextWidth || !maxWidth) return text;
    var widthCache = {};
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
            if (this.measure(testLine, widthCache) <= maxWidth) {
                currentLine = testLine;
                continue;
            }
        }

        if (this.measure(sentence,widthCache) <= maxWidth) {
            if (currentLine) lines.push(currentLine);
            currentLine = sentence;
            continue;
        }

        for (var j = 0; j < words.length; j++) {
            var word = words[j];
            var testLine = currentLine ? currentLine + ' ' + word : word;
            var width = this.measure(testLine,widthCache);

            if (width <= maxWidth) {
                currentLine = testLine;
            } else {
                if (currentLine === '' || this.measure(word,widthCache) > maxWidth) {
                    if (currentLine) {
                        lines.push(currentLine);
                        currentLine = '';
                    }

                    var currentWordPart = '';
                    for (var k = 0; k < word.length; k++) {
                        var char = word[k];
                        var testChar = currentWordPart + char;
                        if (this.measure(testChar,widthCache) <= maxWidth) {
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

var bitmap = null;
var message_background = "";

Window_Message.prototype.updateBackground = function () {
    this._background = $gameMessage.background();
    this.setBackgroundType(this._background);
    if (this.contents) bitmap = this.contents;
}
var o_sprite_onbitmapload = Sprite.prototype._onBitmapLoad;

Sprite.prototype._onBitmapLoad = function (bitmapLoaded) {
    o_sprite_onbitmapload.call(this, bitmapLoaded);
    if (!bitmap) bitmap = bitmapLoaded;
}
Window_Base.prototype.standardFontSize = function () {
    return 18;
};
Window_Base.prototype.standardPadding = function () {
    return 18;
};
Window_Message.prototype.startMessage = function () {
    this._textState = {};
    this._textState.index = 0;
    this._textState.text = new TomieTextWrapper(this.convertEscapeCharacters($gameMessage.allText()), message_background, bitmap).wrap();
    this.newPage(this._textState);
    this.updatePlacement();
    this.updateBackground();
    this.open();
}

var original_command231 = Game_Interpreter.prototype.command231;
Game_Interpreter.prototype.command231 = function () {
    original_command231.call(this);
    if (this._params[1].includes("テキスト枠")) {
        message_background = this._params[1];
    }
    return true;
}
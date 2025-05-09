// FPS Meter Implementation exclusive for JOIPLAY
// @Author: TomieAi
// @Version: 1.2
// @Date:05/10/2025
//////////////////////////////////////////////////////////////////////////
// I tried my best to make it none distructive repalcement hehehe
// And I also try to mimic the original behavior as much as possible
//////////////////////////////////////////////////////////////////////////
Graphics._createFPSMeter = function () {
    this.pluginParams = PluginManager.parameters('Tomie_P5_FPS');
    this._fpsMeter = {
        // Some basic settings
        maxHistory: 0, // no need to set this we gonna calculate it dynamically
        width: parseInt(this.pluginParams.width) || 130,
        height: parseInt(this.pluginParams.height) || 80,
        interval: parseInt(this.pluginParams.interval) || 200,
        x: parseInt(this.pluginParams.x) || 30,
        y: parseInt(this.pluginParams.y) || 30,
        barWidth: parseInt(this.pluginParams.barWidth) || 3,
        gap: parseInt(this.pluginParams.barGap) || 2,
        // flags
        isMobile: Utils.isMobileDevice(),
        isMZ: Utils.RPGMAKER_NAME === 'MZ',
        // State
        visible: false,
        mode: 0, // 0 = hidden, 1 = FPS, 2 = MS // Base on the original mode state of old FPSMeter Script
        frames: 0,
        lastTime: 0,
        startTime: 0,
        fps: 0,
        ms: 0,
        history: [],

        // our own canvas and context i wonder if i can reuse rpgmv core canvas and ctx. hmm
        canvas: null,
        ctx: null,
        game_render_type: null,
        rpgm_name: Utils.RPGMAKER_NAME,
        rpgm_fullname: `RPG Maker ${Utils.RPGMAKER_NAME}`,

        // Initialize
        init: function () {
            if (this.canvas) return;
            // Adjust the max history base on how much bar we can fit on the width.
            this.maxHistory = Math.floor((this.width + this.gap) / (this.barWidth + this.gap));
            // Adjust the width to perfectly fit all bars if they overlap.
            this.width = Math.round(this.maxHistory * (this.barWidth + this.gap));
            // Create canvas
            this.canvas = document.createElement('canvas');
            var scale = window.devicePixelRatio;
            this.canvas.width = Math.floor(this.width * scale);
            this.canvas.height = Math.floor(this.height * scale);
            this.ctx = this.canvas.getContext('2d');
            this.ctx.imageSmoothingEnabled = false;
            this.ctx.mozImageSmoothingEnabled = false;
            this.ctx.webkitImageSmoothingEnabled = false;
            this.ctx.msImageSmoothingEnabled = false;
            this.ctx.scale(scale, scale);
            this.canvas.style.cssText = `
                position: absolute;
                width: ${this.width}px;
                height: ${this.height}px;
                left: ${this.x}px;
                top: ${this.y}px;
                pointer-events: none;
                z-index: 9999;
                background: rgba(0,0,0,0.5);
                display: none;
            `;
            document.body.appendChild(this.canvas);
        },

        // Update metrics
        update: function () {
            const now = performance.now();
            const frameTime = now - this.startTime;
            this.ms = frameTime;
            this.frames++;

            const elapsed = now - this.lastTime;
            if (elapsed >= this.interval) {
                this.fps = (this.frames * 1000) / elapsed;
                this.frames = 0;
                this.lastTime = now;

                if (this.mode > 0) {
                    const value = this.mode === 1 ? this.fps : this.ms;
                    this.history.push(value);
                    if (this.history.length > this.maxHistory) {
                        this.history.shift();
                    }
                }
            }
        },

        detectRenderType: function (game_renderer) {
            if (this.game_render_type) return;
            switch (Utils.RPGMAKER_NAME) {
                case 'MZ':
                    // MZ is assumed to always use WebGL for some reason
                    this.game_render_type = 'WebGL';
                    break;
                case 'MV':
                    // MV can use either WebGL or Canvas.. Canvas sucks tho hehe
                    this.game_render_type = game_renderer.type === PIXI.RENDERER_TYPE.WEBGL ? 'WebGL' : 'Canvas';
                    break;
                default:
                    // Fallback to Canvas for any unknown types
                    this._fpsMeter.game_render_type = 'Canvas';
                    break;
            }
        },

        render: function () {
            if (!this.visible || !this.canvas || this.mode === 0) return;

            const ctx = this.ctx;
            ctx.clearRect(0, 0, this.width, this.height);

            const lines = [
                {
                    text: `${this.mode === 1 ? 'FPS' : 'MS'}: ${this.mode === 1 ? Math.round(this.fps) : this.ms.toFixed(1)}`,
                    font: 'Consolas',
                    fontSize: 16,
                    stroke: true,
                    color: 'white'
                },
                {
                    text: `Renderer: ${this.game_render_type}`,
                    font: 'Consolas',
                    fontSize: 12,
                    stroke: false,
                    color: '#fbfcf8'
                },
                {
                    text: this.rpgm_fullname,
                    font: 'Consolas',
                    fontSize: 12,
                    stroke: false,
                    color: '#fbfcf8'
                }
            ];
            
            const textPadding = 2;
            const lineSpacing = 1;
            // Calculate total text height but also skip spacing on the last one.
            const totalTextHeight = lines.reduce((sum, line) => sum + line.fontSize, -lineSpacing);
            const graphHeight = this.height - totalTextHeight  - textPadding * 2;
            // Draw our cute history graph
            for (let i = 0; i < this.history.length; i++) {
                const value = this.history[i];
                const maxValue = this.mode === 1 ? 60 : 33;
                const barHeight = Math.min(value / maxValue, 1) * graphHeight;
                const x = i * (this.barWidth + this.gap);
                const y = graphHeight - barHeight;

                ctx.fillStyle = this.mode === 1
                    ? `hsl(${Math.min(value * 2, 120)}, 80%, 50%)`
                    : `hsl(${Math.max(0, 120 - value * 3)}, 80%, 50%)`;
                ctx.fillRect(x, y, this.barWidth, barHeight);
            }
            // Draw our text here base on config above
            let textY = graphHeight + textPadding;
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                ctx.font = `${line.fontSize}px ${line.font}`;
                ctx.textBaseline = 'hanging';
                ctx.fillStyle = line.color;
                ctx.strokeStyle = line.color;
                ctx.fillText(line.text, 1, textY);
                if (line.stroke) ctx.strokeText(line.text, 1, textY);
                textY += line.fontSize + lineSpacing;
            }
        },


        // Switch between modes (hidden, FPS, MS) like the og version
        switchMode: function () {
            this.mode = (this.mode + 1) % 3;
            this.visible = this.mode > 0;
            this.canvas.style.display = this.visible ? 'block' : 'none';
            this.history = [];
        },
        /*
        // Ignore this.. (DONT DELETE THIS)
        // In v4 this is called automatically
        // But on JoipPlay PixiJS v5 we have to hook Graphics.tickStart and Graphics.tickEnd
        */
        tickStart: function () { },
        tick: function () { }
        ////////////////////////////////////////////////////////////////////////
    };
    this._fpsMeter.init();
};

// Store original tick functions
Graphics._originalTickStart = Graphics.tickStart;
Graphics._originalTickEnd = Graphics.tickEnd;

// Start of frame
Graphics.tickStart = function () {
    if (!this._fpsMeter) this._createFPSMeter();
    this._fpsMeter.startTime = performance.now();
    if (this._originalTickStart) this._originalTickStart.call(this);
};

// End of frame
Graphics.tickEnd = function () {
    if (!this._fpsMeter) this._createFPSMeter();
    this._fpsMeter.update();
    this._fpsMeter.render();
    if (this._originalTickEnd) this._originalTickEnd.call(this);
    this._fpsMeter.detectRenderType(this._renderer);
};

// This called when we press f2 XD
// F2 once = FPS
// F2 twice = MS
// and the next F2 will just hide it.
Graphics._switchFPSMeter = function () {
    if (!this._fpsMeter) this._createFPSMeter();
    this._fpsMeter.switchMode();
};
// Hide/Show FPS lets just ignore the original
Graphics.showFps = function () { }
Graphics.hideFps = function () { }
// Override mode box creation
Graphics._createModeBox = function () {
    // Disable the empty box that comes with the fps shit.
    // We don't need it v4 calls this shit but we dont care
};

/// RPGMZ Compatibility
Graphics.FPSCounter.prototype.initialize = function () { }
Graphics.FPSCounter.prototype.startTick = function () {
    Graphics.tickStart();
};
Graphics.FPSCounter.prototype.endTick = function () {
    Graphics.tickEnd();
}
Graphics.FPSCounter.prototype.switchMode = function () {
    Graphics._switchFPSMeter();
};
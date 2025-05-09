// FPS Meter Implementation exclusive for JOIPLAY
// by TomieAi
// I tried my best to make it none distructive repalcement hehehe
// And I also try to mimic the original behavior as much as possible
//////////////////////////////////////////////////////////////////////////
Graphics._createFPSMeter = function() {
    this._fpsMeter = {
        // Some basic settings
        maxHistory: 45,
        width: 130,
        height: 80,
        x: 30,
        y: 30,
        
        // flags
        isMobile: /Mobi|Android/i.test(navigator.userAgent),
        
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
        
        // Initialize
        init: function() {
            if (this.canvas) return;
            // Create canvas
            this.canvas = document.createElement('canvas');
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.canvas.style.cssText = `
                position: absolute;
                left: ${this.x}px;
                top: ${this.y}px;
                pointer-events: none;
                z-index: 9999;
                background: rgba(0,0,0,0.5);
                display: none;
            `;
            document.body.appendChild(this.canvas);
            this.ctx = this.canvas.getContext('2d');


        },
        
        getRendererInfo: function() {
            try {
                if (PIXI.utils.isWebGLSupported()) {
                    const renderer = Graphics.app.renderer;
                    return renderer.type === PIXI.RENDERER_TYPE.WEBGL ? "WebGL" : "Canvas";
                }
                return "Canvas";
            } catch (e) {
                return "Unknown";
            }
        },
        
        // Update metrics
        update: function() {
            const now = performance.now();
            this.ms = now - this.startTime;
            this.frames++;
            
            // Calculate FPS every second
            if (now - this.lastTime >= 1000) {
                this.fps = this.frames;
                this.frames = 0;
                this.lastTime = now;
                
                // Add to history
                if (this.mode > 0) {
                    this.history.push(this.mode === 1 ? this.fps : this.ms);
                    if (this.history.length > this.maxHistory) {
                        this.history.shift();
                    }
                }
            }
        },
        
        // Render display | I have to read https://developer.mozilla.org/en-US/ on how it works.
        render: function() {
            if (!this.visible || !this.canvas || this.mode === 0) return;
            
            const ctx = this.ctx;
            ctx.clearRect(0, 0, this.width, this.height);
            
            // Draw history graph
            const graphHeight = this.height - 42;
            const barWidth = 2;
            const gap = 1;
            
            for (let i = 0; i < this.history.length; i++) {
                const value = this.history[i];
                const maxValue = this.mode === 1 ? 60 : 33;
                const height = Math.min(value / maxValue, 1) * graphHeight;
                const x = i * (barWidth + gap);
                const y = graphHeight - height;
                
                ctx.fillStyle = this.mode === 1 ? 
                    `hsl(${Math.min(value * 2, 120)}, 80%, 50%)` : 
                    `hsl(${Math.max(0, 120 - value * 3)}, 80%, 50%)`;
                ctx.fillRect(x, y, barWidth, height);
            }
            
            // Fix ME: it seems the font is quite a bit blurry.
            // Draw current value
            ctx.font = '16px Consolas, monospace'; 
            ctx.fillStyle = 'white';
            ctx.textBaseline = 'bottom';
            const value = this.mode === 1 ? this.fps : this.ms.toFixed(1);
            const label = this.mode === 1 ? 'FPS' : 'MS';
            ctx.fillText(`${label}: ${value}`, 1, this.height - (this.isMobile ? -3 : 20));

            ctx.font = '12px Consolas, monospace';
            ctx.fillText(`Renderer: ${this.getRendererInfo()}`, 1, this.height - (this.isMobile ? -4 : 5));
        },
        
        // Switch between modes (hidden, FPS, MS) like the og version
        switchMode: function() {
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
        tickStart: function() {},
        tick: function() {}
        ////////////////////////////////////////////////////////////////////////
    };
    this._fpsMeter.init();
};

// Store original tick functions
Graphics._originalTickStart = Graphics.tickStart;
Graphics._originalTickEnd = Graphics.tickEnd;

// Start of frame
Graphics.tickStart = function() {
    if (!this._fpsMeter) this._createFPSMeter();
    this._fpsMeter.startTime = performance.now();
    if (this._originalTickStart) this._originalTickStart.call(this);
};

// End of frame
Graphics.tickEnd = function() {
    if (!this._fpsMeter) this._createFPSMeter();
    
    this._fpsMeter.update();
    this._fpsMeter.render();
    
    if (this._originalTickEnd) this._originalTickEnd.call(this);
};

// This called when we press f2 XD
// F2 once = FPS
// F2 twice = MS
// and the next F2 will just hide it.
Graphics._switchFPSMeter = function() {
    if (!this._fpsMeter) this._createFPSMeter();
    this._fpsMeter.switchMode();
};

// Override mode box creation
Graphics._createModeBox = function() {
    // Disable the empty box that comes with the fps shit.
    // We don't need it v4 calls this shit but we dont care
};

/// RPGMZ Comapatibility

Graphics.FPSCounter.prototype.initialize = function () {
   
}
Graphics.FPSCounter.prototype.startTick = function () {
    Graphics.tickStart();
};
Graphics.FPSCounter.prototype.endTick = function () {
    Graphics.tickEnd();
}
Graphics.FPSCounter.prototype.switchMode = function () {
    Graphics._switchFPSMeter();
};
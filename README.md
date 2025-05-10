# My JoiPlay Exclusive Plugins


## Custom FPS Monitor for RPGM MV/MZ
- Copy `Tomie_P5_FPS.js` on `js/plugins/` or `www/js/plugins/`
- Paste this on Plugin.js dont include "..."

    ```json
    ... other plugins ...
    
        ,{
            "name": "Tomie_P5_FPS",
            "status": true,
            "description": "RPGM MV/MZ FPS Monitor | Compatible with JoiPlay RPGM MV PixiJS v5",
            "parameters": {
                "width": 130,
                "height": 80,
                "x": 30,
                "y": 30,
                "interval": 200,
                "barWidth": 3,
                "barGap": 2
            }
        }
    ];
    ```


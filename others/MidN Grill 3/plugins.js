// This file was generated using SLR Translator
// v1.127
var $plugins =
  [
    {
      "name": "SA_CoreSpeedImprovement",
      "status": true,
      "description": "v18.1 SA Core Speed Improvement (Define at the top)",
      "parameters": {
        "Enable CWC-cache": "false",
        "Minimum CWC-cache holding count": "15",
        "Logging level": "4"
      }
    },
    {
      "name": "AdjustPictureGraphical",
      "status": true,
      "description": "ピクチャのグラフィカルな位置調整プラグイン。\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）",
      "parameters": {
        "グリッドサイズ": "48",
        "テストマップID": "-1"
      }
    },
    {
      "name": "Community_Basic",
      "status": true,
      "description": "基本的なパラメーターを設定するプラグインです。",
      "parameters": {
        "cacheLimit": "30",
        "screenWidth": "1280",
        "screenHeight": "720",
        "changeWindowWidthTo": "",
        "changeWindowHeightTo": "",
        "renderingMode": "auto",
        "alwaysDash": "off"
      }
    },
    {
      "name": "MadeWithMv",
      "status": false,
      "description": "メイン画面へ進む前に、\"Made with MV\"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。",
      "parameters": {
        "Show Made With MV": "true",
        "Made with MV Image": "MadeWithMv",
        "Show Custom Splash": "false",
        "Custom Image": "",
        "Fade Out Time": "120",
        "Fade In Time": "120",
        "Wait Time": "160"
      }
    },
    {
      "name": "GraphicalDesignMode",
      "status": true,
      "description": "GUI画面デザインプラグイン\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）",
      "parameters": {
        "デザインモード": "OFF",
        "自動保存": "OFF",
        "モバイル版作成": "OFF",
        "モバイル偽装": "OFF",
        "ウィンドウ透過": "OFF",
        "グリッドサイズ": "48",
        "パディング": "",
        "フォントサイズ": "",
        "行の高さ": "",
        "背景透明度": "",
        "アイコンサイズ調整": "OFF",
        "背景表示可否固定": "OFF",
        "右クリックで消去": "OFF"
      }
    },
    {
      "name": "gamEnd",
      "status": true,
      "description": "",
      "parameters": {}
    },
    {
      "name": "TKM_ChoiceList",
      "status": true,
      "description": "ツキミ式選択肢",
      "parameters": {
        "use": "true",
        "-- Choice settings --": "",
        "image": "Window",
        "tone": "200, -40, 40",
        "fontSize": "28",
        "okFlashDuration": "30",
        "okFlashFrequency": "4",
        "textAlign": "1",
        "-- Advanced settings --": "",
        "backOpacity": "255",
        "fontOLWidth": "3",
        "fontOLColor": "rgba(0, 0, 0, 0.5)",
        "vertiPadding": "10",
        "choiceHoriPadding": "32",
        "choiceVertiPadding": "5",
        "maxRows": "8",
        "maxRowsC": "8",
        "mineLineWidth": "96"
      }
    },
    {
      "name": "MPP_MessageEX",
      "status": true,
      "description": "【ver.2.3】文章表示の機能を拡張したり表示の演出を追加します。",
      "parameters": {
        "Anime Commons": "[]",
        "Text Set": "[]",
        "Text Informations": "{\"Speed\":\"true\",\"Anime Type\":\"true\",\"Text Color\":\"true\",\"Text Size\":\"true\",\"Text Opacity\":\"true\",\"Outline Color\":\"true\",\"Outline Width\":\"true\",\"Ruby Color\":\"true\",\"Ruby Size\":\"true\",\"Ruby Width\":\"true\"}",
        "Wait Effects": "{\"Scroll Map\":\"true\",\"Set Movement Route\":\"true\",\"Show Animation\":\"true\",\"Show Balloon Icon\":\"true\",\"Move Picture\":\"true\",\"Tint Picture\":\"true\",\"Tint Screen\":\"true\",\"Flash Screen\":\"true\",\"Shake Screen\":\"false\",\"Set Weather Effect\":\"false\",\"Fadeout BGM\":\"false\",\"Fadeout BGS\":\"false\",\"Play ME\":\"false\"}",
        "Skip Effects": "{\"Scroll Map\":\"true\",\"Set Movement Route\":\"true\",\"Move Picture\":\"true\",\"Tint Picture\":\"true\",\"Tint Screen\":\"false\",\"Flash Screen\":\"false\",\"Shake Screen\":\"false\",\"Set Weather Effect\":\"false\"}",
        "Skip Effects Timing": "0",
        "=== Char SE ===": "",
        "Character SEs": "[]",
        "Char SE Interval": "4",
        "Stop SE When Skip": "true",
        "=== Default ===": "",
        "Default Message Row": "4",
        "Default FadeOut Type": "0",
        "Default FadeOut Speed": "5",
        "Default Speed": "60",
        "Default Anime Type": "1",
        "Default Ruby Color": "255,255,255",
        "Default Ruby Size": "14",
        "Default Ruby Outline": "2",
        "Default Char SE Index": "0",
        "=== Window ===": "",
        "Name Window": "{\"x\":\"0\",\"y\":\"-56\",\"Windowskin\":\"Window\",\"Default Color\":\"0\"}",
        "Face Window": "{\"Padding X\":\"0\",\"Padding Y\":\"0\",\"Windowskin\":\"Window\"}",
        "=== Command ===": "",
        "Plugin Commands": "{\"SetMesRow\":\"SetMesRow\",\"SetMesFadeOut\":\"SetMesFadeOut\",\"SetMesCharSe\":\"SetMesCharSe\",\"SetEffectSkip\":\"SetEffectSkip\",\"SetCharaAngle\":\"SetCharaAngle\",\"MoveCharaFrame\":\"MoveCharaFrame\"}"
      }
    },
    {
      "name": "MPP_ChoiceEX",
      "status": true,
      "description": "【ver.3.8】選択肢の機能拡張",
      "parameters": {
        "maxPageRow": "6",
        "=== Command ===": "",
        "Plugin Commands": "{\"ChoicePos\":\"ChoicePos\",\"ChoiceVariableId\":\"ChoiceVariableId\",\"ChoiceRect\":\"ChoiceRect\"}",
        "Event Comment": "{\"ChoiceHelp\":\"Option Help\"}"
      }
    },
    {
      "name": "DarkPlasma_TextLog",
      "status": true,
      "description": "イベントのテキストログを表示する",
      "parameters": {
        "Max View Count": "16",
        "Overflow Buzzer": "false",
        "Disable Logging Switch": "0",
        "Open Log Key": "pageup",
        "Disable Show Log Switch": "24",
        "Show Log Window Without Text": "false"
      }
    },
    {
      "name": "UTA_MessageSkip",
      "status": true,
      "description": "特定キーを押す事でメッセージをスキップできるようにします。",
      "parameters": {
        "Skip Key": "control",
        "Show Trace": "false"
      }
    },
    {
      "name": "VE_Single_Actor",
      "status": true,
      "description": "One-Actor's menu. This plugin is made for one playable actor only.",
      "parameters": {
        "Level Number x Distance": "50",
        "Class text x Distance": "160",
        "ExptoLvl text x Distance": "160",
        "Status Window Width": "325"
      }
    },
    {
      "name": "TMNamePop",
      "status": false,
      "description": "イベントの頭上に文字列を表示する機能を追加します。",
      "parameters": {
        "backOpacity": "96",
        "fontSize": "20",
        "outlineWidth": "4",
        "outlineColor": "rgba(0, 0, 0, 0.5)",
        "width": "160",
        "roundRectRadius": "6"
      }
    },
    {
      "name": "DTextPicture",
      "status": true,
      "description": "動的文字列ピクチャ生成プラグイン",
      "parameters": {
        "itemIconSwitchId": "0",
        "lineSpacingVariableId": "0",
        "frameWindowSkin": "",
        "frameWindowPadding": "18",
        "padCharacter": "3",
        "prefixText": ""
      }
    },
    {
      "name": "DP_MapZoom",
      "status": false,
      "description": "マップの拡大率を制御します。",
      "parameters": {
        "Base Scale": "1",
        "Encount Effect": "true",
        "Camera Controll": "true",
        "Weather Patch": "true",
        "Picture Size Fixation": "true",
        "Old Focus": "false"
      }
    },
    {
      "name": "SceneGlossary",
      "status": true,
      "description": "ゲーム内用語辞典プラグイン",
      "parameters": {
        "GlossaryInfo": "[\"{\\\"GlossaryType\\\":\\\"8\\\",\\\"CommandName\\\":\\\"Skill Acquisition & Title Confirmation\\\",\\\"UseCategory\\\":\\\"false\\\",\\\"CommandSwitchId\\\":\\\"0\\\",\\\"BackPicture\\\":\\\"スキル購入背景\\\",\\\"SelectAction\\\":\\\"1\\\",\\\"SelectSwitchId\\\":\\\"0\\\",\\\"SelectVariableId\\\":\\\"0\\\",\\\"ConfirmMessage\\\":\\\"false\\\",\\\"ConfirmUse\\\":\\\"Use\\\",\\\"ConfirmNoUse\\\":\\\"Cancel\\\",\\\"GlossaryHelp\\\":\\\" \\\",\\\"CategoryHelp\\\":\\\" \\\",\\\"ConfirmHelp\\\":\\\"\\\",\\\"UsingHelp\\\":\\\"\\\",\\\"CompleteView\\\":\\\"false\\\",\\\"CompleteMessage\\\":\\\"Collection Rate \\\\\\\\c[2]%1\\\\\\\\c[0]%\\\",\\\"ShowingItemNumber\\\":\\\"false\\\",\\\"UsableDefault\\\":\\\"true\\\",\\\"UseItemHistory\\\":\\\"false\\\",\\\"GlossaryListWidth\\\":\\\"305\\\",\\\"VisibleItemNotYet\\\":\\\"\\\"}\",\"{\\\"GlossaryType\\\":\\\"10\\\",\\\"CommandName\\\":\\\"Tomori's Information\\\",\\\"UseCategory\\\":\\\"false\\\",\\\"CommandSwitchId\\\":\\\"0\\\",\\\"BackPicture\\\":\\\"灯梨の情報背景\\\",\\\"SelectAction\\\":\\\"1\\\",\\\"SelectSwitchId\\\":\\\"0\\\",\\\"SelectVariableId\\\":\\\"0\\\",\\\"ConfirmMessage\\\":\\\"false\\\",\\\"ConfirmUse\\\":\\\"Use\\\",\\\"ConfirmNoUse\\\":\\\"Cancel\\\",\\\"GlossaryHelp\\\":\\\" \\\",\\\"CategoryHelp\\\":\\\"Please select a category.\\\",\\\"ConfirmHelp\\\":\\\"\\\",\\\"UsingHelp\\\":\\\"\\\",\\\"CompleteView\\\":\\\"false\\\",\\\"CompleteMessage\\\":\\\"Collection Rate \\\\\\\\c[2]%1\\\\\\\\c[0]%\\\",\\\"ShowingItemNumber\\\":\\\"false\\\",\\\"UsableDefault\\\":\\\"true\\\",\\\"UseItemHistory\\\":\\\"false\\\",\\\"GlossaryListWidth\\\":\\\"305\\\",\\\"VisibleItemNotYet\\\":\\\"\\\"}\",\"{\\\"GlossaryType\\\":\\\"9\\\",\\\"CommandName\\\":\\\"Fast Travel\\\",\\\"UseCategory\\\":\\\"false\\\",\\\"CommandSwitchId\\\":\\\"0\\\",\\\"BackPicture\\\":\\\"ファストトラベル背景\\\",\\\"SelectAction\\\":\\\"1\\\",\\\"SelectSwitchId\\\":\\\"0\\\",\\\"SelectVariableId\\\":\\\"0\\\",\\\"ConfirmMessage\\\":\\\"false\\\",\\\"ConfirmUse\\\":\\\"Use\\\",\\\"ConfirmNoUse\\\":\\\"Cancel\\\",\\\"GlossaryHelp\\\":\\\"　\\\",\\\"CategoryHelp\\\":\\\"Please select a category.\\\",\\\"ConfirmHelp\\\":\\\"\\\",\\\"UsingHelp\\\":\\\"\\\",\\\"CompleteView\\\":\\\"false\\\",\\\"CompleteMessage\\\":\\\"Collection Rate \\\\\\\\c[2]%1\\\\\\\\c[0]%\\\",\\\"ShowingItemNumber\\\":\\\"false\\\",\\\"UsableDefault\\\":\\\"true\\\",\\\"UseItemHistory\\\":\\\"false\\\",\\\"GlossaryListWidth\\\":\\\"305\\\",\\\"VisibleItemNotYet\\\":\\\"\\\"}\",\"{\\\"GlossaryType\\\":\\\"2\\\",\\\"CommandName\\\":\\\"CG Gallery\\\",\\\"UseCategory\\\":\\\"true\\\",\\\"CommandSwitchId\\\":\\\"0\\\",\\\"BackPicture\\\":\\\"ＣＧギャラリー背景２\\\",\\\"SelectAction\\\":\\\"1\\\",\\\"SelectSwitchId\\\":\\\"0\\\",\\\"SelectVariableId\\\":\\\"0\\\",\\\"ConfirmMessage\\\":\\\"false\\\",\\\"ConfirmUse\\\":\\\"Use\\\",\\\"ConfirmNoUse\\\":\\\"Cancel\\\",\\\"GlossaryHelp\\\":\\\" \\\",\\\"CategoryHelp\\\":\\\" \\\",\\\"ConfirmHelp\\\":\\\"\\\",\\\"UsingHelp\\\":\\\"\\\",\\\"CompleteView\\\":\\\"true\\\",\\\"CompleteMessage\\\":\\\"Collection Rate \\\\\\\\c[2]%1\\\\\\\\c[0]%\\\",\\\"ShowingItemNumber\\\":\\\"false\\\",\\\"UsableDefault\\\":\\\"true\\\",\\\"UseItemHistory\\\":\\\"false\\\",\\\"GlossaryListWidth\\\":\\\"505\\\",\\\"VisibleItemNotYet\\\":\\\"？？？？？\\\"}\",\"{\\\"GlossaryType\\\":\\\"3\\\",\\\"CommandName\\\":\\\"Scene Recollection\\\",\\\"UseCategory\\\":\\\"true\\\",\\\"CommandSwitchId\\\":\\\"0\\\",\\\"BackPicture\\\":\\\"シーン回想背景\\\",\\\"SelectAction\\\":\\\"1\\\",\\\"SelectSwitchId\\\":\\\"0\\\",\\\"SelectVariableId\\\":\\\"0\\\",\\\"ConfirmMessage\\\":\\\"false\\\",\\\"ConfirmUse\\\":\\\"Use\\\",\\\"ConfirmNoUse\\\":\\\"Cancel\\\",\\\"GlossaryHelp\\\":\\\" \\\",\\\"CategoryHelp\\\":\\\" \\\",\\\"ConfirmHelp\\\":\\\"\\\",\\\"UsingHelp\\\":\\\"\\\",\\\"CompleteView\\\":\\\"true\\\",\\\"CompleteMessage\\\":\\\"Collection Rate \\\\\\\\c[2]%1\\\\\\\\c[0]%\\\",\\\"ShowingItemNumber\\\":\\\"false\\\",\\\"UsableDefault\\\":\\\"true\\\",\\\"UseItemHistory\\\":\\\"false\\\",\\\"GlossaryListWidth\\\":\\\"505\\\",\\\"VisibleItemNotYet\\\":\\\"？？？？？\\\"}\",\"{\\\"GlossaryType\\\":\\\"11\\\",\\\"CommandName\\\":\\\"Character encyclopedia\\\",\\\"UseCategory\\\":\\\"false\\\",\\\"CommandSwitchId\\\":\\\"0\\\",\\\"BackPicture\\\":\\\"キャラクター辞典背景\\\",\\\"SelectAction\\\":\\\"1\\\",\\\"SelectSwitchId\\\":\\\"0\\\",\\\"SelectVariableId\\\":\\\"0\\\",\\\"ConfirmMessage\\\":\\\"false\\\",\\\"ConfirmUse\\\":\\\"Use\\\",\\\"ConfirmNoUse\\\":\\\"Cancel\\\",\\\"GlossaryHelp\\\":\\\" \\\",\\\"CategoryHelp\\\":\\\" \\\",\\\"ConfirmHelp\\\":\\\"\\\",\\\"UsingHelp\\\":\\\"\\\",\\\"CompleteView\\\":\\\"true\\\",\\\"CompleteMessage\\\":\\\"Collection Rate \\\\\\\\c[2]%1\\\\\\\\c[0]%\\\",\\\"ShowingItemNumber\\\":\\\"false\\\",\\\"UsableDefault\\\":\\\"true\\\",\\\"UseItemHistory\\\":\\\"false\\\",\\\"GlossaryListWidth\\\":\\\"505\\\",\\\"VisibleItemNotYet\\\":\\\"？？？？？\\\"}\",\"{\\\"GlossaryType\\\":\\\"4\\\",\\\"CommandName\\\":\\\"Strategy Tips\\\",\\\"UseCategory\\\":\\\"true\\\",\\\"CommandSwitchId\\\":\\\"0\\\",\\\"BackPicture\\\":\\\"攻略のヒント背景\\\",\\\"SelectAction\\\":\\\"1\\\",\\\"SelectSwitchId\\\":\\\"0\\\",\\\"SelectVariableId\\\":\\\"0\\\",\\\"ConfirmMessage\\\":\\\"false\\\",\\\"ConfirmUse\\\":\\\"Use\\\",\\\"ConfirmNoUse\\\":\\\"Cancel\\\",\\\"GlossaryHelp\\\":\\\" \\\",\\\"CategoryHelp\\\":\\\" \\\",\\\"ConfirmHelp\\\":\\\"\\\",\\\"UsingHelp\\\":\\\"\\\",\\\"CompleteView\\\":\\\"false\\\",\\\"CompleteMessage\\\":\\\"Collection Rate \\\\\\\\c[2]%1\\\\\\\\c[0]%\\\",\\\"ShowingItemNumber\\\":\\\"false\\\",\\\"UsableDefault\\\":\\\"true\\\",\\\"UseItemHistory\\\":\\\"false\\\",\\\"GlossaryListWidth\\\":\\\"500\\\",\\\"VisibleItemNotYet\\\":\\\"？？？？？\\\"}\",\"{\\\"GlossaryType\\\":\\\"5\\\",\\\"CommandName\\\":\\\"Tutorial\\\",\\\"UseCategory\\\":\\\"false\\\",\\\"CommandSwitchId\\\":\\\"0\\\",\\\"BackPicture\\\":\\\"チュートリアル背景\\\",\\\"SelectAction\\\":\\\"1\\\",\\\"SelectSwitchId\\\":\\\"0\\\",\\\"SelectVariableId\\\":\\\"0\\\",\\\"ConfirmMessage\\\":\\\"false\\\",\\\"ConfirmUse\\\":\\\"Use\\\",\\\"ConfirmNoUse\\\":\\\"Cancel\\\",\\\"GlossaryHelp\\\":\\\"　\\\",\\\"CategoryHelp\\\":\\\"Please select a category.\\\",\\\"ConfirmHelp\\\":\\\"\\\",\\\"UsingHelp\\\":\\\"\\\",\\\"CompleteView\\\":\\\"false\\\",\\\"CompleteMessage\\\":\\\"Collection Rate \\\\\\\\c[2]%1\\\\\\\\c[0]%\\\",\\\"ShowingItemNumber\\\":\\\"false\\\",\\\"UsableDefault\\\":\\\"true\\\",\\\"UseItemHistory\\\":\\\"false\\\",\\\"GlossaryListWidth\\\":\\\"305\\\",\\\"VisibleItemNotYet\\\":\\\"？？？？？\\\"}\",\"{\\\"GlossaryType\\\":\\\"7\\\",\\\"CommandName\\\":\\\"Pubic Hair Change\\\",\\\"UseCategory\\\":\\\"false\\\",\\\"CommandSwitchId\\\":\\\"0\\\",\\\"BackPicture\\\":\\\"各種設定変更背景\\\",\\\"SelectAction\\\":\\\"1\\\",\\\"SelectSwitchId\\\":\\\"0\\\",\\\"SelectVariableId\\\":\\\"0\\\",\\\"ConfirmMessage\\\":\\\"false\\\",\\\"ConfirmUse\\\":\\\"Use\\\",\\\"ConfirmNoUse\\\":\\\"Cancel\\\",\\\"GlossaryHelp\\\":\\\"　\\\",\\\"CategoryHelp\\\":\\\"Please select a category.\\\",\\\"ConfirmHelp\\\":\\\"\\\",\\\"UsingHelp\\\":\\\"\\\",\\\"CompleteView\\\":\\\"false\\\",\\\"CompleteMessage\\\":\\\"Collection Rate \\\\\\\\c[2]%1\\\\\\\\c[0]%\\\",\\\"ShowingItemNumber\\\":\\\"false\\\",\\\"UsableDefault\\\":\\\"true\\\",\\\"UseItemHistory\\\":\\\"false\\\",\\\"GlossaryListWidth\\\":\\\"305\\\",\\\"VisibleItemNotYet\\\":\\\"？？？？？\\\"}\",\"{\\\"GlossaryType\\\":\\\"6\\\",\\\"CommandName\\\":\\\"Title List\\\",\\\"UseCategory\\\":\\\"false\\\",\\\"CommandSwitchId\\\":\\\"20\\\",\\\"BackPicture\\\":\\\"称号リスト背景\\\",\\\"SelectAction\\\":\\\"1\\\",\\\"SelectSwitchId\\\":\\\"0\\\",\\\"SelectVariableId\\\":\\\"0\\\",\\\"ConfirmMessage\\\":\\\"false\\\",\\\"ConfirmUse\\\":\\\"Use\\\",\\\"ConfirmNoUse\\\":\\\"Cancel\\\",\\\"GlossaryHelp\\\":\\\" \\\",\\\"CategoryHelp\\\":\\\" \\\",\\\"ConfirmHelp\\\":\\\"\\\",\\\"UsingHelp\\\":\\\"\\\",\\\"CompleteView\\\":\\\"true\\\",\\\"CompleteMessage\\\":\\\"Collection Rate \\\\\\\\c[2]%1\\\\\\\\c[0]%\\\",\\\"ShowingItemNumber\\\":\\\"false\\\",\\\"UsableDefault\\\":\\\"true\\\",\\\"UseItemHistory\\\":\\\"false\\\",\\\"GlossaryListWidth\\\":\\\"505\\\",\\\"VisibleItemNotYet\\\":\\\"？？？？？\\\"}\"]",
        "Layout": "",
        "FontSize": "22",
        "AutoResizePicture": "false",
        "PicturePosition": "bottom",
        "PictureAlign": "center",
        "PicturePriority": "top",
        "ThroughBackPicture": "false",
        "FramelessDesign": "true",
        "NewGlossaryColor": "2",
        "PageWrap": "true",
        "TextPosition": "0",
        "AutoAddition": "false",
        "SwitchAutoAdd": "0",
        "VariableAutoAdd": "0",
        "AutoAdditionEnemy": "false",
        "CategoryOrder": "",
        "CategoryUnusable": ""
      }
    },
    {
      "name": "MKR_PlayerMoveForbid",
      "status": true,
      "description": "(v1.0.5) プレイヤー移動禁止プラグイン",
      "parameters": {
        "Default_Move_Flag": "25",
        "Default_Menu_Flag": "true",
        "Enter Flag": "true"
      }
    },
    {
      "name": "Inputkey",
      "status": true,
      "description": "",
      "parameters": {}
    },
    {
      "name": "MessageWindowHidden",
      "status": true,
      "description": "メッセージウィンドウ一時消去プラグイン",
      "parameters": {
        "ボタン名称": "Right click",
        "連動ピクチャ番号": "50,53,54,88,89,90,91"
      }
    },
    {
      "name": "PictureCallCommon",
      "status": false,
      "description": "ピクチャのボタン化プラグイン",
      "parameters": {
        "透明色を考慮": "ON",
        "ピクチャ番号の変数番号": "2",
        "ポインタX座標の変数番号": "1",
        "ポインタY座標の変数番号": "3",
        "タッチ操作抑制": "ON",
        "戦闘中常にコモン実行": "OFF"
      }
    },
    {
      "name": "Trb_VisualizationPassable",
      "status": false,
      "description": "テストプレイ用・マップの通行判定を可視化するプラグイン",
      "parameters": {
        "color1": "red",
        "color2": "blue"
      }
    },
    {
      "name": "MessageSelectPicture",
      "status": false,
      "description": "選択肢のピクチャ表示プラグイン",
      "parameters": {}
    },
    {
      "name": "UTA_CommonSave",
      "status": false,
      "description": "共有のセーブデータを作成し、指定したスイッチ・変数の状態をセーブデータ間で共有します。",
      "parameters": {
        "Target Switches": "400-500",
        "Target Variables": "",
        "Is Auto": "true",
        "Auto on Gameover": "false",
        "Show Trace": "false"
      }
    },
    {
      "name": "BB_CustomSaveWindow",
      "status": true,
      "description": "セーブウインドウ改造プラグイン",
      "parameters": {
        "OutsideFrameColor": "0",
        "OutsideFrameOpacity": "0",
        "InsideFrameColor": "0",
        "InsideFrameOpacity": "0",
        "MaxItem": "0",
        "Item0": "1",
        "Item0Length": "300",
        "Item1title": "Pubic hair",
        "Item1": "9",
        "Item2title": "Current Outfit",
        "Item2": "8",
        "Item3title": "Current Location",
        "Item3": "7",
        "Item4title": "Play Time",
        "Item4": "2",
        "Item5": "6",
        "ItemValue1": "37",
        "ItemValue2": "38",
        "ItemValue3": "39",
        "ItemValue4": "40",
        "ItemValue1unit": "",
        "ItemValue2unit": "",
        "ItemValue3unit": "",
        "ItemValue4unit": "",
        "TitleFramelength1": "150",
        "TitleFramelength2": "110",
        "TitleFramelength3": "110",
        "TitleFramelength4": "110",
        "CharacterPositionY": "9999",
        "CharacterOpacity": "0",
        "LevelPositionY": "23",
        "LevelOnOff": "0"
      }
    },
    {
      "name": "SimpleMenuLayout",
      "status": true,
      "description": "シンプルなメニュー画面を実装します。",
      "parameters": {
        "----基本的な設定----": "",
        "メニュー幅": "800",
        "メニュー列数": "1",
        "メニューX座標": "{\"basis\":\"center\",\"correction\":\"0\"}",
        "メニューY座標": "{\"basis\":\"center\",\"correction\":\"0\"}"
      }
    },
    {
      "name": "MPI_ValueMonitor",
      "status": true,
      "description": "変数とスイッチを監視するウインドウを表示します。",
      "parameters": {
        "一行の高さ": "26",
        "フォントサイズ": "20",
        "余白": "9",
        "未選択項目の不透明度": "100",
        "編集モード時の文字色": "yellow",
        "更新通知": "true"
      }
    },
    {
      "name": "Parallaxtiratira",
      "status": true,
      "description": "ver1.00 ゲーム開始時にタイルセットロードの猶予を与えます。",
      "parameters": {}
    },
    {
      "name": "TemplateEvent",
      "status": false,
      "description": "テンプレートイベントプラグイン",
      "parameters": {
        "TemplateMapId": "1",
        "KeepEventId": "false",
        "OverrideTarget": "{\"Image\":\"true\",\"Direction\":\"false\",\"Move\":\"false\",\"Priority\":\"false\",\"Trigger\":\"false\",\"Option\":\"false\"}",
        "AutoOverride": "false",
        "IntegrateNote": "0"
      }
    },
    {
      "name": "BackUpDatabase",
      "status": true,
      "description": "データバックアッププラグイン",
      "parameters": {
        "backUpPath": "/backup",
        "includeSave": "false",
        "timeUnit": "false"
      }
    },
    {
      "name": "TN_SpriteExtender",
      "status": true,
      "description": "【有償ライセンス】任意の比率で歩行グラフィックの胴体を引き伸ばし、頭身を上げます。",
      "parameters": {
        "胴体の引き伸ばし率": "1.19",
        "頭の範囲": "14",
        "除外ファイル（部分一致）": "!,Damage",
        "除外ファイル（完全一致）": "Nature,Monster,Vehicle",
        "茂みタイルの高さを統一": "true"
      }
    },
    {
      "name": "YEP_MessageCore",
      "status": true,
      "description": "メッセージの表示方法や機能をカスタマイズすることができます。",
      "parameters": {
        "---一般---": "",
        "Default Rows": "4",
        "Default Width": "Graphics.boxWidth",
        "Face Indent": "Window_Base._faceWidth + 24",
        "Fast Forward": "Input.isPressed('pagedown')",
        "Word Wrapping": "false",
        "Description Wrap": "false",
        "---フォント---": "",
        "Font Name": "GameFont",
        "Font Size": "22",
        "Font Size Change": "12",
        "Font Changed Max": "96",
        "Font Changed Min": "12",
        "---Name Box---": "",
        "Name Box Buffer X": "-28",
        "Name Box Buffer Y": "0",
        "Name Box Padding": "this.standardPadding() * 4",
        "Name Box Color": "0",
        "Name Box Clear": "false",
        "Name Box Added Text": "\\c[6]"
      }
    },
    {
      "name": "MessageWindowPopup",
      "status": false,
      "description": "フキダシウィンドウプラグイン",
      "parameters": {
        "フォントサイズ": "22",
        "余白": "10",
        "自動設定": "ON",
        "フェイス倍率": "75",
        "ウィンドウ連携": "ON",
        "行間": "4",
        "ウィンドウ透過": "OFF",
        "フォントサイズ増減幅": "12",
        "フォントサイズ上限": "96",
        "フォントサイズ下限": "24"
      }
    },
    {
      "name": "Torigoya_InputNamePrompt",
      "status": true,
      "description": "名前入力ダイアログ機能を追加します",
      "parameters": {
        "Max Length": "6",
        "Message": "Please Enter Your Name",
        "Maximum Message": "(Input within %1 characters)"
      }
    },
    {
      "name": "KMS_MapActiveMessage",
      "status": true,
      "description": "[v0.2.0] プレイヤーが近付いたときに、自動的にメッセージを表示するイベントを作成します。",
      "parameters": {
        "Balloon offset Y": "20",
        "Balloon margin": "-8",
        "Default range": "4",
        "Display duration": "300",
        "Max message count": "10",
        "Message skin": "ActiveMessageSkin"
      }
    },
    {
      "name": "FTKR_PopupSpriteMessage",
      "status": true,
      "description": "v1.2.5 任意のメッセージを画面上にポップアップ表示するプラグイン",
      "parameters": {
        "Max Popup Messages": "40",
        "Popup Message Status": "[\"{\\\"fontFace\\\":\\\"\\\",\\\"fontSize\\\":\\\"28\\\",\\\"color\\\":\\\"[\\\\\\\"0\\\\\\\",\\\\\\\"0\\\\\\\",\\\\\\\"0\\\\\\\",\\\\\\\"0\\\\\\\"]\\\",\\\"italic\\\":\\\"false\\\",\\\"outlineColor\\\":\\\"15\\\",\\\"popupHeight\\\":\\\"40\\\",\\\"offsetWait\\\":\\\"0\\\",\\\"opacity\\\":\\\"255\\\"}\",\"{\\\"fontFace\\\":\\\"\\\",\\\"fontSize\\\":\\\"28\\\",\\\"color\\\":\\\"[\\\\\\\"0\\\\\\\",\\\\\\\"0\\\\\\\",\\\\\\\"0\\\\\\\",\\\\\\\"0\\\\\\\"]\\\",\\\"italic\\\":\\\"false\\\",\\\"outlineColor\\\":\\\"15\\\",\\\"popupHeight\\\":\\\"40\\\",\\\"offsetWait\\\":\\\"0\\\",\\\"opacity\\\":\\\"255\\\"}\"]",
        "Repop Message After Menu": "false"
      }
    },
    {
      "name": "syuusei",
      "status": true,
      "description": "放置していると画面がフリーズするのを修正",
      "parameters": {}
    },
    {
      "name": "HzInputCommand",
      "status": false,
      "description": "方向キーとボタンでのコマンド入力を実行します。",
      "parameters": {
        "success SE": "Decision2",
        "miss SE": "Buzzer1",
        "penalty": "10"
      }
    },
    {
      "name": "TMTimerEx",
      "status": false,
      "description": "タイマー表示を秒単位からミリ秒単位に変更します。",
      "parameters": {
        "timerX": "816",
        "timerY": "0",
        "showMinutes": "0",
        "msecShiftY": "36"
      }
    },
    {
      "name": "KMS_ShopInventory",
      "status": true,
      "description": "[v0.1.0] アイテムの在庫管理機能を追加します。",
      "parameters": {
        "Sold out text": "SOLD OUT",
        "Caption for stock": "Inventory",
        "Stock display": "1"
      }
    },
    {
      "name": "TMPlugin2",
      "status": true,
      "description": "購入または売却のみの場合にショップコマンドを省略します。SupponShopStockの競合対策",
      "parameters": {}
    },
    {
      "name": "aligncenter",
      "status": false,
      "description": "メッセージボックスの文字を中央揃い、右揃いにするプラグインです。",
      "parameters": {}
    },
    {
      "name": "PauseSignToTextEnd",
      "status": true,
      "description": "ポーズサインの末尾表示プラグイン",
      "parameters": {
        "有効スイッチ番号": "0",
        "非表示スイッチ番号": "96"
      }
    },
    {
      "name": "NoneItemNumber",
      "status": false,
      "description": "ver1.00 カテゴリがアイテムまたは大事なものの個数の表示を無くします。",
      "parameters": {
        "shop": "1"
      }
    },
    {
      "name": "Tomie_TW",
      "status": true,
      "description": "RPGMMV Custom Text Wrapper | Node 3.x Compatible",
      "parameters": {
        "vanilla": false,
        "fontSize": 18,
        "padding": 18,
        "config": [
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
    }
  ];
System.register("chunks:///_virtual/BaccaraTableSettleView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseTableSettleView.ts', './BaccaratData.ts', './NumberFormatUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Color, BaseTableSettleView, BaccaratEvents, BaccaratRoundResultType, BaccaratSelfResultType, NumberFormatUtil;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Color = module.Color;
    }, function (module) {
      BaseTableSettleView = module.BaseTableSettleView;
    }, function (module) {
      BaccaratEvents = module.BaccaratEvents;
      BaccaratRoundResultType = module.BaccaratRoundResultType;
      BaccaratSelfResultType = module.BaccaratSelfResultType;
    }, function (module) {
      NumberFormatUtil = module.NumberFormatUtil;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "a81e0hxyKVOj6WYPaHzyEEk", "BaccaraTableSettleView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaraTableSettleView = exports('BaccaraTableSettleView', (_dec = ccclass('BaccaraTableSettleView'), _dec2 = property(Sprite), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseTableSettleView) {
        _inheritsLoose(BaccaraTableSettleView, _BaseTableSettleView);
        function BaccaraTableSettleView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseTableSettleView.call.apply(_BaseTableSettleView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "roundResultBg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roundResultBgSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          _this.gameTable = void 0;
          _this.regeistEvents = [{
            eventName: BaccaratEvents.RefreshSelfResult,
            method: _this.showSelfResult,
            caller: _assertThisInitialized(_this)
          }];
          return _this;
        }
        var _proto = BaccaraTableSettleView.prototype;
        _proto.initView = function initView() {
          this.hide();
          this.selfResultNode.active = false;
        };
        _proto.updateView = function updateView() {};
        _proto.showResult = function showResult() {
          this.show();
          var settleData = this.gameTable.tableModel.settleData;
          if (settleData) {
            var resultStr = BaccaratRoundResultType[settleData.winnerType];
            this.roundResultLabel.string = resultStr;
            this.roundResultBg.spriteFrame = this.roundResultBgSpriteFrame[settleData.winnerType];
          }
        };
        _proto.showSelfResult = function showSelfResult() {
          var playerSettlementSummary = this.gameTable.tableModel.playerSettlementSummary;
          if (playerSettlementSummary) {
            this.selfResultNode.active = true;
            var showCoin = NumberFormatUtil.formatMoneyToNumber(playerSettlementSummary.totalPayment) - NumberFormatUtil.formatMoneyToNumber(playerSettlementSummary.totalBet);
            var showResultStr = '';
            var coinStr = '';
            if (showCoin > 0) {
              showResultStr = BaccaratSelfResultType[1];
              coinStr = "+" + showCoin;
            } else if (showCoin < 0) {
              showResultStr = BaccaratSelfResultType[2];
              coinStr = "" + showCoin;
            } else {
              showResultStr = BaccaratSelfResultType[0];
            }
            this.selfResultLabel.string = showResultStr;
            this.selfGradeLabel.string = coinStr;
            this.selfGradeLabel.color = showCoin > 0 ? Color.GREEN : Color.RED;
          }
        };
        return BaccaraTableSettleView;
      }(BaseTableSettleView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roundResultBg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roundResultBgSpriteFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratAutoSettingView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseAutoSettingView.ts', './BaccartAutoBetSettingNode.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, BaseAutoSettingView, BaccartAutoBetSettingNode;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseAutoSettingView = module.BaseAutoSettingView;
    }, function (module) {
      BaccartAutoBetSettingNode = module.BaccartAutoBetSettingNode;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b6625f8s8xKzq9ENnieZ8RQ", "BaccaratAutoSettingView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratAutoSettingView = exports('BaccaratAutoSettingView', (_dec = ccclass('BaccaratAutoSettingView'), _dec2 = property(BaccartAutoBetSettingNode), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseAutoSettingView) {
        _inheritsLoose(BaccaratAutoSettingView, _BaseAutoSettingView);
        function BaccaratAutoSettingView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseAutoSettingView.call.apply(_BaseAutoSettingView, [this].concat(args)) || this;
          _this.gameTable = void 0;
          _initializerDefineProperty(_this, "autoBetSettingNode", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BaccaratAutoSettingView.prototype;
        _proto.initView = function initView() {};
        _proto.updateView = function updateView() {};
        return BaccaratAutoSettingView;
      }(BaseAutoSettingView), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "autoBetSettingNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratBettingState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts', './BaccaratTableBetView.ts', './BaccaratMainGameView.ts', './BaccaratTableTipView.ts', './BaccaratData.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BaseState, BaccaratTableBetView, BaccaratMainGameView, BaccaratTableTipView, BaccaratStatusTip;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      BaccaratTableBetView = module.BaccaratTableBetView;
    }, function (module) {
      BaccaratMainGameView = module.BaccaratMainGameView;
    }, function (module) {
      BaccaratTableTipView = module.BaccaratTableTipView;
    }, function (module) {
      BaccaratStatusTip = module.BaccaratStatusTip;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ba3e6NuJqNI/6/cwii6qcJN", "BaccaratBettingState", undefined);
      var BaccaratBettingState = exports('BaccaratBettingState', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(BaccaratBettingState, _BaseState);
        function BaccaratBettingState() {
          return _BaseState.apply(this, arguments) || this;
        }
        var _proto = BaccaratBettingState.prototype;
        _proto.enter = function enter(isConnectAgain) {
          this.gameTable.getView(BaccaratMainGameView).showGameClock();
          this.gameTable.getView(BaccaratTableBetView).setAreaBtnsTouchStatus(true);
          this.gameTable.getView(BaccaratMainGameView).setBetNodeStatus(true);
          this.gameTable.getView(BaccaratMainGameView).refreshAllBtnsStatus();
          this.gameTable.getView(BaccaratTableTipView).showTipInfo(BaccaratStatusTip.Please_Bet);
        };
        _proto.exit = function exit() {
          this.gameTable.getView(BaccaratTableBetView).setAreaBtnsTouchStatus(false);
          this.gameTable.getView(BaccaratMainGameView).setBetNodeStatus(false);
          this.gameTable.getView(BaccaratMainGameView).cancleBetData();
          this.gameTable.getView(BaccaratMainGameView).hideGameClock();
        };
        return BaccaratBettingState;
      }(BaseState));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/baccaratBundle", ['./BaccaratBettingState.ts', './BaccaratDealCardState.ts', './BaccaratGame2.ts', './BaccaratGameTale.ts', './BaccaratOpenCardState.ts', './BaccaratPrepareState.ts', './BaccaratSettleState.ts', './BaccaratStopBetState.ts', './BaccaratTableController.ts', './BaccaratData.ts', './BaccaratEnum.ts', './BaccaratTableModel.ts', './BaccaratTableProxy.ts', './BaccaraTableSettleView.ts', './BaccaratAutoSettingView.ts', './BaccaratMainGameView.ts', './BaccaratRoadMapView.ts', './BaccaratTableBetView.ts', './BaccaratTableCardView.ts', './BaccaratTableChipView.ts', './BaccaratTableTipView.ts', './BaccaratVerifyCardView.ts', './BaccartAutoBetSettingNode.ts', './BaccardTableBigEyesRoadItem.ts', './BaccardTableBigRoadItem.ts', './BaccardTableCockroachRoadItem.ts', './BaccardTableCubeRoadItem.ts', './BaccardTableRoadItem.ts', './BaccardTableSmallRoadItem.ts', './BaccaratGame.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/BaccaratData.ts", ['cc', './bc_baccarat.ts'], function (exports) {
  var cclegacy, v3, WinnerType;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
    }, function (module) {
      WinnerType = module.WinnerType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0ea2adkd0ZESK7wjUArwzQD", "BaccaratData", undefined);
      var BaccaratEvents = exports('BaccaratEvents', {
        RefreshCurrentCoin: 'RefreshCurrentCoin',
        //刷新当前货币
        RefreshBetCoin: 'RefreshBetCoin',
        //刷新下注货币
        RefreshNoFreeShow: 'RefreshNoFreeShow',
        //刷新下注数据
        RefreshSelfResult: 'RefreshSelfResult',
        //刷新自己的结果
        RefreshRoadInfo: 'RefreshRoadInfo' //刷新路線資訊
      });

      var BaccaratStatusTip = exports('BaccaratStatusTip', {
        Please_Bet: '請下注',
        Stop_Bet: '結束下注',
        Deal_Card: '發牌'
      });
      var BaccaratRoundResultType = exports('BaccaratRoundResultType', ['平侷', '莊家贏', '閒家贏']);
      var BaccaratSelfResultType = exports('BaccaratSelfResultType', ['YOU Tie', 'YOU Win', 'YOU Lose']);
      var BaccaratResultLabelColor = exports('BaccaratResultLabelColor', {
        Win_Green: '#00FF00',
        Lose_Red: '#FF0000'
      });
      var BaccaratRoadConfig = exports('BaccaratRoadConfig', {
        bigRoad: {
          /** 盘高度 */
          rowCount: 6,
          /**盘宽度  */
          colCount: 21,
          /** 起始位置 */
          startPos: v3(12, -11, 0),
          /**横向间距 */
          horizontalSpacing: 23,
          /**纵向间距 */
          verticalSpacing: -23
        },
        cubeRoad: {
          /** 盘高度 */
          rowCount: 6,
          /**盘宽度  */
          colCount: 6,
          /** 起始位置 */
          startPos: v3(17.5, -18, 0),
          /**横向间距 */
          horizontalSpacing: 33.5,
          /**纵向间距 */
          verticalSpacing: -35
        },
        bigEyeRoad: {
          /** 盘高度 */
          rowCount: 6,
          /**盘宽度  */
          colCount: 14,
          /** 起始位置 */
          startPos: v3(5.5, -7, 0),
          /**横向间距 */
          horizontalSpacing: 11.5,
          /**纵向间距 */
          verticalSpacing: -11.5
        },
        smallRoad: {
          /** 盘高度 */
          rowCount: 6,
          /**盘宽度  */
          colCount: 14,
          /** 起始位置 */
          startPos: v3(5.5, -7, 0),
          /**横向间距 */
          horizontalSpacing: 11.5,
          /**纵向间距 */
          verticalSpacing: -11.5
        },
        cockroachRoad: {
          rowCount: 6,
          /**盘宽度  */
          colCount: 14,
          /** 起始位置 */
          startPos: v3(5.5, -7, 0),
          /**横向间距 */
          horizontalSpacing: 11.5,
          /**纵向间距 */
          verticalSpacing: -11.5
        }
      });
      var BaccaratConsts = exports('BaccaratConsts', {
        winnerTypeLabel: ['和', '莊', '閒'],
        super6Label: '6',
        showCardTime: 0.5,
        disCardTime: 1
      });
      var SeekBankerRoadInfoData = exports('SeekBankerRoadInfoData', {
        winnerType: WinnerType.WinnerBanker,
        point: 8,
        naturalWin: false,
        pairWin: false,
        /** 各押注类型对应的检查结果 */
        checkResults: []
      });
      var SeekPlayerRoadInfoData = exports('SeekPlayerRoadInfoData', {
        winnerType: WinnerType.WinnerPlayer,
        point: 8,
        naturalWin: false,
        pairWin: false,
        /** 各押注类型对应的检查结果 */
        checkResults: []
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratDealCardState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts', './BaccaratVerifyCardView.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BaseState, BaccaratVerifyCardView;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      BaccaratVerifyCardView = module.BaccaratVerifyCardView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dd4291DDfFNUqOBxI1FaiCh", "BaccaratDealCardState", undefined);
      var BaccaratDealCardState = exports('BaccaratDealCardState', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(BaccaratDealCardState, _BaseState);
        function BaccaratDealCardState() {
          return _BaseState.apply(this, arguments) || this;
        }
        var _proto = BaccaratDealCardState.prototype;
        _proto.enter = function enter(isConnectAgain) {
          //this.gameTable.getView(BaccaratTableTipView).showTipInfo(BaccaratStatusTip.Deal_Card);
          this.gameTable.getView(BaccaratVerifyCardView).disCards();
        };
        _proto.exit = function exit() {};
        return BaccaratDealCardState;
      }(BaseState));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratEnum.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bb009TNJ0hIZb3CvW0JpE13", "BaccaratEnum", undefined);
      var BaccaratBetBtn = exports('BaccaratBetBtn', /*#__PURE__*/function (BaccaratBetBtn) {
        BaccaratBetBtn[BaccaratBetBtn["Again"] = 0] = "Again";
        BaccaratBetBtn[BaccaratBetBtn["Sure"] = 1] = "Sure";
        BaccaratBetBtn[BaccaratBetBtn["Cancle"] = 2] = "Cancle";
        return BaccaratBetBtn;
      }({}));
      var BaccaratCardIndex = exports('BaccaratCardIndex', /*#__PURE__*/function (BaccaratCardIndex) {
        BaccaratCardIndex[BaccaratCardIndex["Player1"] = 0] = "Player1";
        BaccaratCardIndex[BaccaratCardIndex["Player2"] = 1] = "Player2";
        BaccaratCardIndex[BaccaratCardIndex["Banker1"] = 2] = "Banker1";
        BaccaratCardIndex[BaccaratCardIndex["Banker2"] = 3] = "Banker2";
        BaccaratCardIndex[BaccaratCardIndex["Player3"] = 4] = "Player3";
        BaccaratCardIndex[BaccaratCardIndex["Banker3"] = 5] = "Banker3";
        return BaccaratCardIndex;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseGame.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseGame;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseGame = module.BaseGame;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "31891dM++BLaq3b/icOFXQL", "BaccaratGame", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratGame = exports('BaccaratGame', (_dec = ccclass('BaccaratGame'), _dec(_class = /*#__PURE__*/function (_BaseGame) {
        _inheritsLoose(BaccaratGame, _BaseGame);
        function BaccaratGame() {
          return _BaseGame.apply(this, arguments) || this;
        }
        return BaccaratGame;
      }(BaseGame)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratGame2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseGame.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseGame;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseGame = module.BaseGame;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a8db0G/M61ORZpnoviUZr5z", "BaccaratGame", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratGame = exports('BaccaratGame', (_dec = ccclass('BaccaratGame'), _dec(_class = /*#__PURE__*/function (_BaseGame) {
        _inheritsLoose(BaccaratGame, _BaseGame);
        function BaccaratGame() {
          return _BaseGame.apply(this, arguments) || this;
        }
        return BaccaratGame;
      }(BaseGame)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratGameTale.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseGameTale.ts', './BaccaratOpenCardState.ts', './BaccaratDealCardState.ts', './BaccaratSettleState.ts', './BaccaratTableController.ts', './BaccaratTableModel.ts', './BaccaratPrepareState.ts', './bc_baccarat.ts', './BaccaratTableProxy.ts', './BaccaratBettingState.ts', './BaccaratStopBetState.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, BaseGameTale, BaccaratOpenCardState, BaccaratDealCardState, BaccaratSettleState, BaccaratTableController, BaccaratTableModel, BaccaratPrepareState, Phase, BaccaratTableProxy, BaccaratBettingState, BaccaratStopBetState;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseGameTale = module.BaseGameTale;
    }, function (module) {
      BaccaratOpenCardState = module.BaccaratOpenCardState;
    }, function (module) {
      BaccaratDealCardState = module.BaccaratDealCardState;
    }, function (module) {
      BaccaratSettleState = module.BaccaratSettleState;
    }, function (module) {
      BaccaratTableController = module.BaccaratTableController;
    }, function (module) {
      BaccaratTableModel = module.BaccaratTableModel;
    }, function (module) {
      BaccaratPrepareState = module.BaccaratPrepareState;
    }, function (module) {
      Phase = module.Phase;
    }, function (module) {
      BaccaratTableProxy = module.BaccaratTableProxy;
    }, function (module) {
      BaccaratBettingState = module.BaccaratBettingState;
    }, function (module) {
      BaccaratStopBetState = module.BaccaratStopBetState;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "8d2a5m+X4ZDUI0+hxh/j2u4", "BaccaratGameTale", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratGameTale = exports('BaccaratGameTale', (_dec = ccclass('BaccaratGameTale'), _dec2 = property({
        type: BaccaratTableProxy
      }), _dec3 = property({
        type: BaccaratTableController
      }), _dec4 = property({
        type: BaccaratTableModel
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseGameTale) {
        _inheritsLoose(BaccaratGameTale, _BaseGameTale);
        function BaccaratGameTale() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseGameTale.call.apply(_BaseGameTale, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tableProxy", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tableController", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tableModel", _descriptor3, _assertThisInitialized(_this));
          _this.states = [{
            stateCode: Phase.Prepare,
            state: new BaccaratPrepareState()
          }, {
            stateCode: Phase.DealCards,
            state: new BaccaratDealCardState()
          }, {
            stateCode: Phase.Betting,
            state: new BaccaratBettingState()
          }, {
            stateCode: Phase.StopBet,
            state: new BaccaratStopBetState()
          }, {
            stateCode: Phase.OpenCards,
            state: new BaccaratOpenCardState()
          }, {
            stateCode: Phase.Settle,
            state: new BaccaratSettleState()
          }];
          return _this;
        }
        return BaccaratGameTale;
      }(BaseGameTale), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tableProxy", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tableController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tableModel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratMainGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseMainGameView.ts', './BaccaratTableBetView.ts', './PlayerMgr.ts', './BaccaratData.ts', './BaccaratEnum.ts', './GameClock.ts', './NumberFormatUtil.ts', './BaseMenuView.ts', './BaseAllCardVerifyInfoView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, BaseMainGameView, BaccaratTableBetView, PlayerMgr, BaccaratEvents, BaccaratBetBtn, GameClock, NumberFormatUtil, BaseMenuView, BaseAllCardVerifyInfoView;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      BaseMainGameView = module.BaseMainGameView;
    }, function (module) {
      BaccaratTableBetView = module.BaccaratTableBetView;
    }, function (module) {
      PlayerMgr = module.default;
    }, function (module) {
      BaccaratEvents = module.BaccaratEvents;
    }, function (module) {
      BaccaratBetBtn = module.BaccaratBetBtn;
    }, function (module) {
      GameClock = module.GameClock;
    }, function (module) {
      NumberFormatUtil = module.NumberFormatUtil;
    }, function (module) {
      BaseMenuView = module.BaseMenuView;
    }, function (module) {
      BaseAllCardVerifyInfoView = module.BaseAllCardVerifyInfoView;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "9804dydLXFCzY3TZDRO3Rll", "BaccaratMainGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratMainGameView = exports('BaccaratMainGameView', (_dec = ccclass('BaccaratMainGameView'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(GameClock), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseMainGameView) {
        _inheritsLoose(BaccaratMainGameView, _BaseMainGameView);
        function BaccaratMainGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseMainGameView.call.apply(_BaseMainGameView, [this].concat(args)) || this;
          _this.gameTable = void 0;
          _initializerDefineProperty(_this, "userIdLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tableNumLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roundIdLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "limitLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameClock", _descriptor5, _assertThisInitialized(_this));
          _this.regeistEvents = [{
            eventName: BaccaratEvents.RefreshBetCoin,
            method: _this.refreshBetCoinShow,
            caller: _assertThisInitialized(_this)
          }, {
            eventName: BaccaratEvents.RefreshCurrentCoin,
            method: _this.refreshCoinShow,
            caller: _assertThisInitialized(_this)
          }];
          return _this;
        }
        var _proto = BaccaratMainGameView.prototype;
        _proto.initView = function initView() {
          this.hideGameClock();
        };
        _proto.updateView = function updateView() {
          //刷新房间信息
          this.refreshRoomInfo();
          this.refreshBetOpreateStatus();
        };
        _proto.sendBetData = function sendBetData() {
          //發送下注籌碼
          this.gameTable.tableController.requestBet({
            tableId: this.gameTable.tableModel.tableId,
            details: this.gameTable.tableModel.preBetData
          });
        };
        _proto.cancleBetData = function cancleBetData() {
          //获取预下注区域
          var preBetAreas = this.gameTable.tableModel.getPreBetAreas();
          this.gameTable.tableModel.preBetData = [];
          //刷新預下注籌碼
          for (var i = 0; i < preBetAreas.length; i++) {
            this.gameTable.getView(BaccaratTableBetView).refreshAreaBetChip(preBetAreas[i]);
          }
          //刷新按钮
          this.refreshBetOpreateStatus();
        };
        _proto.againBetData = function againBetData() {
          var lastBetData = this.gameTable.tableModel.lastBetData;
          if (lastBetData && lastBetData.length > 0) {
            for (var i = 0; i < lastBetData.length; i++) {
              var element = lastBetData[i];
              this.gameTable.tableModel.addBet(true, element);
              this.gameTable.getView(BaccaratTableBetView).refreshAreaBetChip(element.type);
            }
            this.refreshBetOpreateStatus();
          }
        };
        _proto.refreshAllBtnsStatus = function refreshAllBtnsStatus() {
          //重复下注
          this.refreshBtnState(BaccaratBetBtn.Again, this.gameTable.tableModel.getIsCanAgainBet());
          //确认下注
          this.refreshBtnState(BaccaratBetBtn.Sure, this.gameTable.tableModel.getIsCanSureBet());
          //取消下注
          this.refreshBtnState(BaccaratBetBtn.Cancle, this.gameTable.tableModel.getIsCanCancleBet());
        };
        _proto.refreshBetOpreateStatus = function refreshBetOpreateStatus() {
          this.gameTable.tableModel.refreshTableCoin();
          this.gameTable.tableModel.refreshTableBetCoin();
          this.refreshAllBtnsStatus();
        };
        _proto.refreshBetCoinShow = function refreshBetCoinShow() {
          this.betLabel.string = "" + NumberFormatUtil.formatNumDistance(this.gameTable.tableModel.tableBetCoin);
        };
        _proto.refreshCoinShow = function refreshCoinShow() {
          this.coinLabel.string = "" + NumberFormatUtil.formatNumDistance(this.gameTable.tableModel.tableCoin);
        };
        _proto.refreshRoomInfo = function refreshRoomInfo() {
          //刷新房间信息
          var tableName = "" + this.gameTable.tableModel.tableInfo.name;
          var roundId = "" + this.gameTable.tableModel.tableInfo.roundId;
          var betLimit = this.gameTable.tableModel.getLimitNums();
          var limitStr = NumberFormatUtil.formatUnit(betLimit[0]) + "~" + NumberFormatUtil.formatUnit(betLimit[1]);
          this.userIdLabel.string = "" + PlayerMgr.instance.nickname;
          this.tableNumLabel.string = tableName;
          this.roundIdLabel.string = roundId;
          this.limitLabel.string = limitStr;
          this.gameTable.getView(BaseMenuView).showTableInfo(tableName, roundId, limitStr);
        };
        _proto.setBetNodeStatus = function setBetNodeStatus(isShow) {
          this.betOpreateBtnsNode.active = isShow;
        };
        _proto.showGameClock = function showGameClock() {
          this.gameClock.startClock(this.gameTable.tableModel.clockInfo.duration / 1000, this.gameTable.tableModel.clockInfo.total / 1000);
        };
        _proto.hideGameClock = function hideGameClock() {
          this.gameClock.stopClock();
        };
        _proto.verifyBtnClicked = function verifyBtnClicked() {
          this.gameTable.getView(BaseAllCardVerifyInfoView).showAllCardVerifyInfo();
        };
        return BaccaratMainGameView;
      }(BaseMainGameView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userIdLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tableNumLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "roundIdLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "limitLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gameClock", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratOpenCardState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts', './BaccaratData.ts', './BaccaratTableTipView.ts', './BaccaratTableCardView.ts', './BaccaratVerifyCardView.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BaseState, BaccaratStatusTip, BaccaratTableTipView, BaccaratTableCardView, BaccaratVerifyCardView;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      BaccaratStatusTip = module.BaccaratStatusTip;
    }, function (module) {
      BaccaratTableTipView = module.BaccaratTableTipView;
    }, function (module) {
      BaccaratTableCardView = module.BaccaratTableCardView;
    }, function (module) {
      BaccaratVerifyCardView = module.BaccaratVerifyCardView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "29777IyGqpDL4Pq4hvQdeRo", "BaccaratOpenCardState", undefined);
      var BaccaratOpenCardState = exports('BaccaratOpenCardState', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(BaccaratOpenCardState, _BaseState);
        function BaccaratOpenCardState() {
          return _BaseState.apply(this, arguments) || this;
        }
        var _proto = BaccaratOpenCardState.prototype;
        _proto.enter = function enter(isConnectAgain) {
          this.gameTable.getView(BaccaratTableTipView).showTipInfo(BaccaratStatusTip.Deal_Card);
          if (!isConnectAgain) {
            this.gameTable.getView(BaccaratTableCardView).startOpenCard();
            this.gameTable.getView(BaccaratVerifyCardView).startOpenCard();
          }
        };
        _proto.exit = function exit() {
          this.gameTable.getView(BaccaratTableTipView).hideTip();
        };
        return BaccaratOpenCardState;
      }(BaseState));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratPrepareState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BaseState;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "86420+OsOBPeo//CEYQkGgJ", "BaccaratPrepareState", undefined);
      var BaccaratPrepareState = exports('BaccaratPrepareState', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(BaccaratPrepareState, _BaseState);
        function BaccaratPrepareState() {
          return _BaseState.apply(this, arguments) || this;
        }
        var _proto = BaccaratPrepareState.prototype;
        _proto.enter = function enter(isConnectAgain) {
          this.gameTable.tableModel.initData();
          this.gameTable.initView();
        };
        _proto.exit = function exit() {};
        return BaccaratPrepareState;
      }(BaseState));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratRoadMapView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseRoadMapView.ts', './BaccaratData.ts', './proccessor.ts', './BaccardTableRoadItem.ts', './bc_baccarat.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, Label, NodePool, instantiate, v3, Animation, BaseRoadMapView, BaccaratEvents, SeekBankerRoadInfoData, SeekPlayerRoadInfoData, BaccaratRoadConfig, roadPreProcess, BaccardTableRoadItem, WinnerType, BetType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      Label = module.Label;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      v3 = module.v3;
      Animation = module.Animation;
    }, function (module) {
      BaseRoadMapView = module.BaseRoadMapView;
    }, function (module) {
      BaccaratEvents = module.BaccaratEvents;
      SeekBankerRoadInfoData = module.SeekBankerRoadInfoData;
      SeekPlayerRoadInfoData = module.SeekPlayerRoadInfoData;
      BaccaratRoadConfig = module.BaccaratRoadConfig;
    }, function (module) {
      roadPreProcess = module.roadPreProcess;
    }, function (module) {
      BaccardTableRoadItem = module.BaccardTableRoadItem;
    }, function (module) {
      WinnerType = module.WinnerType;
      BetType = module.BetType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
      cclegacy._RF.push({}, "84f0cdivFRCXrFNnRIhKgvp", "BaccaratRoadMapView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratRoadMapView = exports('BaccaratRoadMapView', (_dec = ccclass('BaccaratRoadMapView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseRoadMapView) {
        _inheritsLoose(BaccaratRoadMapView, _BaseRoadMapView);
        function BaccaratRoadMapView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseRoadMapView.call.apply(_BaseRoadMapView, [this].concat(args)) || this;
          /**路单显示相关 */
          _initializerDefineProperty(_this, "bigRoadConent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cubeRoadConent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigEyeRoadConent", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "smallRoadConent", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cockroachRoadConent", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigRoadItemPrefab", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cubeRoadItemPrefab", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigEyeRoadItemPrefab", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "smallRoadItemPrefab", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cockroachRoadItemPrefab", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roundNumLabel", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BNumLabel", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "PNumLabel", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "TNumLabel", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BDoubleNumLabel", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "PDoubleNumLabel", _descriptor16, _assertThisInitialized(_this));
          _this._bigRoadItemPool = new NodePool();
          _this._cubeRoadItemPool = new NodePool();
          _this._bigEyeRoadItemPool = new NodePool();
          _this._smallRoadItemPool = new NodePool();
          _this._cockroachRoadItemPool = new NodePool();
          _this.gameTable = void 0;
          _this.regeistEvents = [{
            eventName: BaccaratEvents.RefreshRoadInfo,
            method: _this.refreshRoadMap,
            caller: _assertThisInitialized(_this)
          }];
          return _this;
        }
        var _proto = BaccaratRoadMapView.prototype;
        _proto.initView = function initView() {};
        _proto.updateView = function updateView() {};
        _proto.refreshRoadMap = function refreshRoadMap() {
          var roadInfos = this.gameTable.tableModel.roadInfos;
          if (roadInfos) {
            //刷新統計信息
            this.refreshStatisticInfo(roadInfos);
            var mapRoadInfos = roadInfos.slice();
            if (this.gameTable.tableModel.isSeekBankerRoad) {
              mapRoadInfos.push(SeekBankerRoadInfoData);
            }
            if (this.gameTable.tableModel.isSeekPlayerRoad) {
              mapRoadInfos.push(SeekPlayerRoadInfoData);
            }
            //刷新路单
            var roadProccessInfos = roadPreProcess({
              config: {
                /** 大路盘高度 */
                bigRoadRowCount: BaccaratRoadConfig.bigRoad.rowCount,
                /** 珠路盘高度 */
                cubeRoadRowCount: BaccaratRoadConfig.cubeRoad.rowCount,
                /** 大眼仔路盘高度 */
                bigEyeRoadRowCount: BaccaratRoadConfig.bigEyeRoad.rowCount,
                /** 小路盘高度 */
                smallRoadRowCount: BaccaratRoadConfig.smallRoad.rowCount,
                /** 蟑螂路盘高度 */
                cockroachRoadRowCount: BaccaratRoadConfig.cockroachRoad.rowCount
              },
              roadInfos: mapRoadInfos
            });
            this.refreshBigRoadView(roadProccessInfos.bigRoadFragments);
            this.refreshCubeRoadView(roadProccessInfos.cubeRoadFragments);
            this.refreshBigEyeRoadView(roadProccessInfos.bigEyeRoadFragments);
            this.refreshSmallRoadView(roadProccessInfos.smallRoadFragments);
            this.refreshCockroachRoadView(roadProccessInfos.cockroachRoadFragments);
          }
        };
        _proto.refreshBigRoadView = function refreshBigRoadView(roadFragment) {
          var createInfo = {
            prefab: this.bigRoadItemPrefab,
            nodePool: this._bigRoadItemPool,
            config: BaccaratRoadConfig.bigRoad,
            content: this.bigRoadConent,
            roadFragment: roadFragment
          };
          this.createRoadShow(createInfo);
        };
        _proto.refreshCubeRoadView = function refreshCubeRoadView(roadFragment) {
          var createInfo = {
            prefab: this.cubeRoadItemPrefab,
            nodePool: this._cubeRoadItemPool,
            config: BaccaratRoadConfig.cubeRoad,
            content: this.cubeRoadConent,
            roadFragment: roadFragment
          };
          this.createRoadShow(createInfo);
        };
        _proto.refreshBigEyeRoadView = function refreshBigEyeRoadView(roadFragment) {
          var createInfo = {
            prefab: this.bigEyeRoadItemPrefab,
            nodePool: this._bigEyeRoadItemPool,
            config: BaccaratRoadConfig.bigEyeRoad,
            content: this.bigEyeRoadConent,
            roadFragment: roadFragment
          };
          this.createRoadShow(createInfo);
        };
        _proto.refreshSmallRoadView = function refreshSmallRoadView(roadFragment) {
          var createInfo = {
            prefab: this.smallRoadItemPrefab,
            nodePool: this._smallRoadItemPool,
            config: BaccaratRoadConfig.smallRoad,
            content: this.smallRoadConent,
            roadFragment: roadFragment
          };
          this.createRoadShow(createInfo);
        };
        _proto.refreshCockroachRoadView = function refreshCockroachRoadView(roadFragment) {
          var createInfo = {
            prefab: this.cockroachRoadItemPrefab,
            nodePool: this._cockroachRoadItemPool,
            config: BaccaratRoadConfig.cockroachRoad,
            content: this.cockroachRoadConent,
            roadFragment: roadFragment
          };
          this.createRoadShow(createInfo);
        };
        _proto.clearContent = function clearContent(content, nodePool) {
          var children = content.children;
          while (children.length > 0) {
            var child = children[children.length - 1];
            nodePool.put(child);
          }
        };
        _proto.createRoadShow = function createRoadShow(createInfo) {
          this.clearContent(createInfo.content, createInfo.nodePool);
          var roadFragment = createInfo.roadFragment;
          var config = createInfo.config;
          for (var i = 0; i < roadFragment.length; i++) {
            var cells = roadFragment[i].cells;
            var rowCount = roadFragment[i].rowCount;
            for (var j = 0; j < cells.length; j++) {
              var _roadItem$getComponen;
              var roadItem = createInfo.nodePool.get() || instantiate(createInfo.prefab);
              var cell = cells[j];
              var pos = v3(0, 0, 0);
              if (j < rowCount) {
                pos = v3(config.startPos.x + i * config.horizontalSpacing, config.startPos.y + j * config.verticalSpacing);
              } else {
                pos = v3(config.startPos.x + (i + (j - rowCount + 1)) * config.horizontalSpacing, config.startPos.y + (rowCount - 1) * config.verticalSpacing);
              }
              roadItem.setPosition(pos);
              roadItem.getComponent(BaccardTableRoadItem).initView(cell);
              (_roadItem$getComponen = roadItem.getComponent(Animation)) == null || _roadItem$getComponen.stop();
              createInfo.content.addChild(roadItem);
              var isLast = i === roadFragment.length - 1 && j === cells.length - 1;
              var isSeek = this.gameTable.tableModel.isSeekBankerRoad || this.gameTable.tableModel.isSeekPlayerRoad;
              if (isLast && isSeek) {
                var _roadItem$getComponen2;
                (_roadItem$getComponen2 = roadItem.getComponent(Animation)) == null || _roadItem$getComponen2.play();
              }
            }
          }
          //做偏移
          if (roadFragment.length > config.colCount) {
            createInfo.content.setPosition(-config.horizontalSpacing * (roadFragment.length - config.colCount), createInfo.content.position.y);
          } else {
            createInfo.content.setPosition(0, createInfo.content.position.y);
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (this._bigRoadItemPool) {
            this._bigRoadItemPool.clear();
          }
          if (this._cubeRoadItemPool) {
            this._cubeRoadItemPool.clear();
          }
          if (this._bigEyeRoadItemPool) {
            this._bigEyeRoadItemPool.clear();
          }
          if (this._smallRoadItemPool) {
            this._smallRoadItemPool.clear();
          }
          if (this._cockroachRoadItemPool) {
            this._cockroachRoadItemPool.clear();
          }
        };
        _proto.refreshStatisticInfo = function refreshStatisticInfo(roadInfos) {
          this.roundNumLabel.string = "#" + roadInfos.length;
          this.BNumLabel.string = this.gameTable.tableModel.getRoadWinnerTypeNum(roadInfos, WinnerType.WinnerBanker).toString();
          this.PNumLabel.string = this.gameTable.tableModel.getRoadWinnerTypeNum(roadInfos, WinnerType.WinnerPlayer).toString();
          this.TNumLabel.string = this.gameTable.tableModel.getRoadWinnerTypeNum(roadInfos, WinnerType.WinnerDraw).toString();
          this.BDoubleNumLabel.string = this.gameTable.tableModel.getRoadWinnerBetTypeNum(roadInfos, BetType.BankerPair).toString();
          this.PDoubleNumLabel.string = this.gameTable.tableModel.getRoadWinnerBetTypeNum(roadInfos, BetType.PlayerPair).toString();
        };
        _proto.seekBankerBtnClicked = function seekBankerBtnClicked() {
          this.gameTable.tableModel.isSeekPlayerRoad = false;
          this.gameTable.tableModel.isSeekBankerRoad = !this.gameTable.tableModel.isSeekBankerRoad;
          this.refreshRoadMap();
        };
        _proto.seekPlayerBtnClicked = function seekPlayerBtnClicked() {
          this.gameTable.tableModel.isSeekBankerRoad = false;
          this.gameTable.tableModel.isSeekPlayerRoad = !this.gameTable.tableModel.isSeekPlayerRoad;
          this.refreshRoadMap();
        };
        return BaccaratRoadMapView;
      }(BaseRoadMapView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bigRoadConent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cubeRoadConent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bigEyeRoadConent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "smallRoadConent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cockroachRoadConent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bigRoadItemPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "cubeRoadItemPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bigEyeRoadItemPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "smallRoadItemPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "cockroachRoadItemPrefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "roundNumLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "BNumLabel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "PNumLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "TNumLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "BDoubleNumLabel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "PDoubleNumLabel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratSettleState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts', './BaccaraTableSettleView.ts', './BaccaratTableBetView.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BaseState, BaccaraTableSettleView, BaccaratTableBetView;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      BaccaraTableSettleView = module.BaccaraTableSettleView;
    }, function (module) {
      BaccaratTableBetView = module.BaccaratTableBetView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "01f51egzVND2Kbn0Gt/Cw8B", "BaccaratSettleState", undefined);
      var BaccaratSettleState = exports('BaccaratSettleState', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(BaccaratSettleState, _BaseState);
        function BaccaratSettleState() {
          return _BaseState.apply(this, arguments) || this;
        }
        var _proto = BaccaratSettleState.prototype;
        _proto.enter = function enter(isConnectAgain) {
          this.gameTable.getView(BaccaraTableSettleView).showResult();
          this.gameTable.getView(BaccaratTableBetView).showWinAreaLight();
        };
        _proto.exit = function exit() {};
        return BaccaratSettleState;
      }(BaseState));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratStopBetState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts', './BaccaratTableTipView.ts', './BaccaratData.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BaseState, BaccaratTableTipView, BaccaratStatusTip;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      BaccaratTableTipView = module.BaccaratTableTipView;
    }, function (module) {
      BaccaratStatusTip = module.BaccaratStatusTip;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a5fcb+T1cZGbZSUwL3tGoyD", "BaccaratStopBetState", undefined);
      var BaccaratStopBetState = exports('BaccaratStopBetState', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(BaccaratStopBetState, _BaseState);
        function BaccaratStopBetState() {
          return _BaseState.apply(this, arguments) || this;
        }
        var _proto = BaccaratStopBetState.prototype;
        _proto.enter = function enter(isConnectAgain) {
          this.gameTable.getView(BaccaratTableTipView).showTipInfo(BaccaratStatusTip.Stop_Bet);
        };
        _proto.exit = function exit() {};
        return BaccaratStopBetState;
      }(BaseState));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratTableBetView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseTableBetView.ts', './bc_baccarat.ts', './BaccaratData.ts', './BaccaratMainGameView.ts', './NumberFormatUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Toggle, BaseTableBetView, BetType, BaccaratEvents, BaccaratMainGameView, NumberFormatUtil;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Toggle = module.Toggle;
    }, function (module) {
      BaseTableBetView = module.BaseTableBetView;
    }, function (module) {
      BetType = module.BetType;
    }, function (module) {
      BaccaratEvents = module.BaccaratEvents;
    }, function (module) {
      BaccaratMainGameView = module.BaccaratMainGameView;
    }, function (module) {
      NumberFormatUtil = module.NumberFormatUtil;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "4f8acWVhF9MCoRGokBPGqzU", "BaccaratTableBetView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratTableBetView = exports('BaccaratTableBetView', (_dec = ccclass('BaccaratTableBetView'), _dec2 = property([Label]), _dec3 = property(Toggle), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseTableBetView) {
        _inheritsLoose(BaccaratTableBetView, _BaseTableBetView);
        function BaccaratTableBetView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseTableBetView.call.apply(_BaseTableBetView, [this].concat(args)) || this;
          _this.gameTable = void 0;
          _initializerDefineProperty(_this, "oddsLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isFreeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bankerCoinLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bankerPercentLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bankerPersonNumLabel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerCoinLabel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerPercentLabel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerPersonNumLabel", _descriptor8, _assertThisInitialized(_this));
          _this.areaLightList = [];
          _this.regeistEvents = [{
            eventName: BaccaratEvents.RefreshNoFreeShow,
            method: _this.refreshNoFreeShow,
            caller: _assertThisInitialized(_this)
          }];
          return _this;
        }
        var _proto = BaccaratTableBetView.prototype;
        _proto.initView = function initView() {
          this.betChipList.forEach(function (element) {
            if (element) {
              element.node.active = false;
            }
          });
          this.areaLightList.forEach(function (element) {
            if (element) {
              element.active = false;
            }
          });
          this.setAreaBtnsTouchStatus(false);
        };
        _proto.updateView = function updateView() {
          //刷新区域赔率
          this.refreshAreaOdds();
          var tableInfo = this.gameTable.tableModel.tableInfo;
          if (tableInfo) {
            //顯示已經下注的數據
            var betDetails = tableInfo.betInfos;
            for (var i = 0; i < betDetails.length; i++) {
              this.gameTable.tableModel.addBet(false, betDetails[i]);
              this.gameTable.getView(BaccaratTableBetView).refreshAreaBetChip(betDetails[i].type);
            }
          }
          this.refreshNoFreeShow();
          this.refreshBankerAndPlayerBetStatistic(this.gameTable.tableModel.tableInfo.betStatInfo);
        };
        _proto.betAreaBtnClicked = function betAreaBtnClicked(_, touchArea) {
          var touchAreaIndex = ~~touchArea;
          if (touchAreaIndex >= 0 && this.gameTable.tableModel.isCanBet) {
            var tableModel = this.gameTable.tableModel;
            var bet = tableModel.getCurrectBetChip();
            if (NumberFormatUtil.formatMoneyToNumber(bet) > this.gameTable.tableModel.tableCoin) {
              bet = NumberFormatUtil.formatMoneyToString(this.gameTable.tableModel.tableCoin);
            }
            tableModel.addBet(true, {
              bet: bet,
              type: touchAreaIndex
            });
            this.refreshAreaBetChip(touchAreaIndex);
            this.gameTable.getView(BaccaratMainGameView).refreshBetOpreateStatus();
          }
        };
        _proto.refreshAreaBetChip = function refreshAreaBetChip(type) {
          var tableModel = this.gameTable.tableModel;
          var areaBetNum = tableModel.getBetNumByType(type);
          if (areaBetNum > 0) {
            this.betChipList[type].node.active = true;
            this.betChipList[type].showBetNum(areaBetNum, tableModel.getChipSpriteFrameIndex(areaBetNum));
          } else {
            this.betChipList[type].node.active = false;
          }
        };
        _proto.refreshAreaOdds = function refreshAreaOdds() {
          //刷新区域赔率
          var odds = this.gameTable.tableModel.tableConfig.odds;
          var super6Odds = this.gameTable.tableModel.tableConfig.super6Odds;
          for (var i = 0; i < this.oddsLabel.length; i++) {
            if (this.oddsLabel[i]) {
              if (i != BetType.Super6) {
                this.oddsLabel[i].string = "1:" + odds[i];
              } else {
                this.oddsLabel[i].string = "1:" + super6Odds[0] + "/1:" + super6Odds[1];
              }
            }
          }
        };
        _proto.refreshNoFreeShow = function refreshNoFreeShow() {
          this.oddsLabel[BetType.BankerNoFee].node.active = this.gameTable.tableModel.isNoFree;
          this.oddsLabel[BetType.Banker].node.active = !this.gameTable.tableModel.isNoFree;
          this.betAreaButton[BetType.BankerNoFee].node.active = this.gameTable.tableModel.isNoFree;
          this.betAreaButton[BetType.Banker].node.active = !this.gameTable.tableModel.isNoFree;
        };
        _proto.setAreaBtnsTouchStatus = function setAreaBtnsTouchStatus(isTouch) {
          this.betAreaButton.forEach(function (element) {
            if (element) {
              element.interactable = isTouch;
            }
          });
        };
        _proto.nofreeToggleClick = function nofreeToggleClick() {
          this.gameTable.tableModel.isNoFree = !this.isFreeToggle.isChecked;
        };
        _proto.refreshBankerAndPlayerBetStatistic = function refreshBankerAndPlayerBetStatistic(betStatInfo) {
          if (betStatInfo) {
            this.bankerCoinLabel.string = "$" + NumberFormatUtil.formatNumDistance(NumberFormatUtil.formatMoneyToNumber(betStatInfo.bankerTotalBet));
            this.bankerPercentLabel.string = betStatInfo.bankerPercent + "%";
            this.bankerPersonNumLabel.string = betStatInfo.bankerCount.toString();
            this.playerCoinLabel.string = "$" + NumberFormatUtil.formatNumDistance(NumberFormatUtil.formatMoneyToNumber(betStatInfo.playerTotalBet));
            this.playerPercentLabel.string = betStatInfo.playerPercent + "%";
            this.playerPersonNumLabel.string = betStatInfo.playerCount.toString();
          }
        };
        _proto.showWinAreaLight = function showWinAreaLight() {
          var openCards = this.gameTable.tableModel.cardsInfo;
          if (openCards && openCards.checkResults && openCards.checkResults.length > 0) {
            var checkResults = openCards.checkResults;
            for (var i = 0; i < checkResults.length; i++) {
              var element = checkResults[i];
              if (element && element.match && this.areaLightList[i]) {
                this.areaLightList[i].active = true;
              }
            }
          }
        };
        return BaccaratTableBetView;
      }(BaseTableBetView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "oddsLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isFreeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bankerCoinLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bankerPercentLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bankerPersonNumLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "playerCoinLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "playerPercentLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "playerPersonNumLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratTableCardView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseTableCardView.ts', './BaccaratEnum.ts', './Utils.ts', './BaccaratData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, BaseTableCardView, BaccaratCardIndex, Utils, BaccaratConsts;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      BaseTableCardView = module.BaseTableCardView;
    }, function (module) {
      BaccaratCardIndex = module.BaccaratCardIndex;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      BaccaratConsts = module.BaccaratConsts;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "cf214sM/W1IXaspHvtUr/m3", "BaccaratTableCardView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratTableCardView = exports('BaccaratTableCardView', (_dec = ccclass('BaccaratTableCardView'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseTableCardView) {
        _inheritsLoose(BaccaratTableCardView, _BaseTableCardView);
        function BaccaratTableCardView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseTableCardView.call.apply(_BaseTableCardView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "playerPointLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bankerPointLabel", _descriptor2, _assertThisInitialized(_this));
          _this.gameTable = void 0;
          return _this;
        }
        var _proto = BaccaratTableCardView.prototype;
        _proto.initView = function initView() {
          this.hide();
          this.hideCards();
          this.unscheduleAllCallbacks();
        };
        _proto.updateView = function updateView() {
          this.showAllCards();
        };
        _proto.startOpenCard = /*#__PURE__*/function () {
          var _startOpenCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var cardsInfo;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  cardsInfo = this.gameTable.tableModel.cardsInfo;
                  if (!cardsInfo) {
                    _context.next = 23;
                    break;
                  }
                  this.show();
                  //发第一次牌
                  this.firstShowCards();
                  _context.next = 6;
                  return Utils.sleep(BaccaratConsts.showCardTime);
                case 6:
                  //第一次开牌
                  this.firstFlopCards();
                  _context.next = 9;
                  return Utils.sleep(BaccaratConsts.disCardTime);
                case 9:
                  //发第二次牌
                  this.secondShowCards();
                  _context.next = 12;
                  return Utils.sleep(BaccaratConsts.showCardTime);
                case 12:
                  //第二次开牌
                  this.secondFlopCards();
                  _context.next = 15;
                  return Utils.sleep(BaccaratConsts.disCardTime);
                case 15:
                  //发第三次牌
                  this.thirdShowCards();
                  _context.next = 18;
                  return Utils.sleep(BaccaratConsts.showCardTime);
                case 18:
                  //第三次开牌
                  this.thirdFlopCards();
                  _context.next = 21;
                  return Utils.sleep(BaccaratConsts.disCardTime);
                case 21:
                  if (this.playerPointLabel) {
                    this.playerPointLabel.string = "" + cardsInfo.playerScore;
                  }
                  if (this.bankerPointLabel) {
                    this.bankerPointLabel.string = "" + cardsInfo.bankerScore;
                  }
                case 23:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function startOpenCard() {
            return _startOpenCard.apply(this, arguments);
          }
          return startOpenCard;
        }();
        _proto.firstShowCards = function firstShowCards() {
          var cardsInfo = this.gameTable.tableModel.cardsInfo;
          this.showCards([BaccaratCardIndex.Player1, BaccaratCardIndex.Banker1], [cardsInfo.playerCards[0], cardsInfo.bankerCards[0]]);
        };
        _proto.firstFlopCards = function firstFlopCards() {
          this.flopCards([BaccaratCardIndex.Player1, BaccaratCardIndex.Banker1]);
        };
        _proto.secondShowCards = function secondShowCards() {
          var cardsInfo = this.gameTable.tableModel.cardsInfo;
          this.showCards([BaccaratCardIndex.Player2, BaccaratCardIndex.Banker2], [cardsInfo.playerCards[1], cardsInfo.bankerCards[1]]);
        };
        _proto.secondFlopCards = function secondFlopCards() {
          this.flopCards([BaccaratCardIndex.Player2, BaccaratCardIndex.Banker2]);
        };
        _proto.thirdShowCards = function thirdShowCards(isShowBack) {
          var cardsInfo = this.gameTable.tableModel.cardsInfo;
          this.showCards([BaccaratCardIndex.Player3, BaccaratCardIndex.Banker3], [cardsInfo.playerCards[2], cardsInfo.bankerCards[2]]);
        };
        _proto.thirdFlopCards = function thirdFlopCards() {
          this.flopCards([BaccaratCardIndex.Player3, BaccaratCardIndex.Banker3]);
        };
        _proto.showCards = function showCards(cardIndexs, cardsInfos) {
          var _this2 = this;
          if (cardIndexs.length > 0 && cardsInfos.length > 0 && cardIndexs.length === cardsInfos.length) {
            cardIndexs.forEach(function (index, cardIndex) {
              var card = _this2.cards[index];
              if (card && cardsInfos[cardIndex]) {
                card.setCard(cardsInfos[cardIndex], true);
              }
            });
          }
        };
        _proto.flopCards = function flopCards(cardIndexs) {
          var _this3 = this;
          if (cardIndexs.length > 0) {
            cardIndexs.forEach(function (index, cardIndex) {
              var card = _this3.cards[index];
              if (card && card.node.active) {
                card.flopCard();
              }
            });
          }
        };
        _proto.hideCards = function hideCards() {
          this.cards.forEach(function (card) {
            card.node.active = false;
          });
        };
        _proto.showAllCards = function showAllCards() {
          var cardsInfo = this.gameTable.tableModel.cardsInfo;
          if (cardsInfo) {
            this.show();
            var bankerCardsInfo = cardsInfo.bankerCards;
            var playerCardsInfo = cardsInfo.playerCards;
            var bankerCards = [this.cards[BaccaratCardIndex.Banker1], this.cards[BaccaratCardIndex.Banker2], this.cards[BaccaratCardIndex.Banker3]];
            var playerCards = [this.cards[BaccaratCardIndex.Player1], this.cards[BaccaratCardIndex.Player2], this.cards[BaccaratCardIndex.Player3]];
            bankerCards.forEach(function (card, index) {
              if (bankerCardsInfo[index]) {
                card.setCard(bankerCardsInfo[index]);
              }
            });
            playerCards.forEach(function (card, index) {
              if (playerCardsInfo[index]) {
                card.setCard(playerCardsInfo[index]);
              }
            });
            this.playerPointLabel.string = "" + cardsInfo.playerScore;
            this.bankerPointLabel.string = "" + cardsInfo.bankerScore;
          }
        };
        return BaccaratTableCardView;
      }(BaseTableCardView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerPointLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bankerPointLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratTableChipView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseTableChipView.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseTableChipView;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseTableChipView = module.BaseTableChipView;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c8ad00qNllEGamXkX6QnC7+", "BaccaratTableChipView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratTableChipView = exports('BaccaratTableChipView', (_dec = ccclass('BaccaratTableChipView'), _dec(_class = /*#__PURE__*/function (_BaseTableChipView) {
        _inheritsLoose(BaccaratTableChipView, _BaseTableChipView);
        function BaccaratTableChipView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseTableChipView.call.apply(_BaseTableChipView, [this].concat(args)) || this;
          _this.gameTable = void 0;
          return _this;
        }
        var _proto = BaccaratTableChipView.prototype;
        _proto.initView = function initView() {};
        _proto.updateView = function updateView() {
          this.refreshCoinValue();
        };
        return BaccaratTableChipView;
      }(BaseTableChipView)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratTableController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseTableController.ts', './bc_baccarat.ts', './BaccaratTableBetView.ts', './PlayerMgr.ts', './NumberFormatUtil.ts', './BaccaratMainGameView.ts', './Logger.ts', './Emitter.ts', './GlobalData.ts', './PopupMgr.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, BaseTableController, Phase, BaccaratTableBetView, PlayerMgr, NumberFormatUtil, BaccaratMainGameView, Logger, Emitter, GlobalEvent, PopupMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseTableController = module.BaseTableController;
    }, function (module) {
      Phase = module.Phase;
    }, function (module) {
      BaccaratTableBetView = module.BaccaratTableBetView;
    }, function (module) {
      PlayerMgr = module.default;
    }, function (module) {
      NumberFormatUtil = module.NumberFormatUtil;
    }, function (module) {
      BaccaratMainGameView = module.BaccaratMainGameView;
    }, function (module) {
      Logger = module.Logger;
    }, function (module) {
      Emitter = module.Emitter;
    }, function (module) {
      GlobalEvent = module.GlobalEvent;
    }, function (module) {
      PopupMgr = module.PopupMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "afcbboTJhZNX64D5cFGjPnl", "BaccaratTableController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratTableController = exports('BaccaratTableController', (_dec = ccclass('BaccaratTableController'), _dec(_class = /*#__PURE__*/function (_BaseTableController) {
        _inheritsLoose(BaccaratTableController, _BaseTableController);
        function BaccaratTableController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseTableController.call.apply(_BaseTableController, [this].concat(args)) || this;
          _this.gameTable = void 0;
          return _this;
        }
        var _proto = BaccaratTableController.prototype;
        _proto.onLoad = function onLoad() {
          Emitter.on(GlobalEvent.EVENT_GAME_CONNECT_AGAIN_REFRESH, this.startGame, this);
        };
        _proto.startGame = function startGame() {
          this.gameTable.tableModel.initData();
          this.gameTable.initView();
          this.joinTable();
        };
        _proto.joinTable = /*#__PURE__*/function () {
          var _joinTable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.gameTable.tableProxy.sendJoinTabelRequest({
                    tableId: 1
                  }).then(function (tableJoinData) {
                    //設置數據
                    var tableData = tableJoinData.table;
                    if (tableData) {
                      var _tableData$dealtCards;
                      _this2.gameTable.tableModel.tableInfo = tableData;
                      _this2.gameTable.tableModel.tableConfig = tableData.config;
                      _this2.gameTable.tableModel.cardsInfo = tableData.openCards;
                      _this2.gameTable.tableModel.dealCardsInfo = (_tableData$dealtCards = tableData.dealtCards) == null ? void 0 : _tableData$dealtCards.dealtCards;
                      _this2.gameTable.tableModel.openedCards = tableData.openedCards;
                      _this2.gameTable.tableModel.unOpenedCards = tableData.hashedCards;
                      if (tableData.phase === Phase.Settle) {
                        _this2.gameTable.tableModel.settleData = tableData.roadInfos[tableData.roadInfos.length - 1];
                        if (tableData.settlementSummary) {
                          _this2.gameTable.tableModel.playerSettlementSummary = tableData.settlementSummary;
                        }
                      }
                      _this2.gameTable.tableModel.roadInfos = tableData.roadInfos;
                      _this2.gameTable.updateView();
                      _this2.gameTable.stateMachineManager.transitionTo(tableData.phase, true);
                      //显示历史聊天记录内容
                      _this2.gameTable.gameChatView.showChatHistoryMsg(tableData.historyMessages);
                      _this2.gameTable.getView(BaccaratMainGameView).hideLoadNode();
                    }
                  });
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function joinTable() {
            return _joinTable.apply(this, arguments);
          }
          return joinTable;
        }();
        _proto.leaveTable = /*#__PURE__*/function () {
          var _leaveTable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.gameTable.tableProxy.sendLeaveTabelRequest({
                    tableId: 1
                  }).then(function () {});
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function leaveTable() {
            return _leaveTable.apply(this, arguments);
          }
          return leaveTable;
        }();
        _proto.requestBet = /*#__PURE__*/function () {
          var _requestBet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(betRequest) {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.gameTable.tableProxy.sendGameBetRequest(betRequest).then(function (betResponse) {
                    _this3.gameTable.tableModel.preBetData = [];
                    var successBetInfos = betResponse.successDetails;
                    //成功下注
                    for (var i = 0; i < successBetInfos.length; i++) {
                      _this3.gameTable.tableModel.addBet(false, successBetInfos[i]);
                      _this3.gameTable.getView(BaccaratTableBetView).refreshAreaBetChip(successBetInfos[i].type);
                    }
                    var failedDetails = betResponse.failedResults;
                    //失败下注 提示 退回筹码
                    var _loop = function _loop(_i) {
                      Logger.errNet('下注失败:', failedDetails[_i].code);
                      _this3.gameTable.getView(BaccaratTableBetView).refreshAreaBetChip(failedDetails[_i].detail.type);
                      _this3.scheduleOnce(function () {
                        PopupMgr.instance.showToast("\u5340\u57DF" + failedDetails[_i].detail.type + "\u4E0B\u6CE8\u5931\u6557");
                      }, 0.5 * _i);
                    };
                    for (var _i = 0; _i < failedDetails.length; _i++) {
                      _loop(_i);
                    }
                    PlayerMgr.instance.coin = NumberFormatUtil.formatMoneyToNumber(betResponse.coin);
                    _this3.gameTable.getView(BaccaratMainGameView).refreshBetOpreateStatus();
                  });
                case 2:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function requestBet(_x) {
            return _requestBet.apply(this, arguments);
          }
          return requestBet;
        }();
        _proto.sendChatMeaasge = function sendChatMeaasge(msg) {
          return this.gameTable.tableProxy.sendChatMsg({
            tableId: this.gameTable.tableModel.tableId,
            textContent: msg
          });
        };
        _proto.onBcBaccaratPrepare = function onBcBaccaratPrepare(data) {
          this.gameTable.stateMachineManager.transitionTo(Phase.Prepare);
        };
        _proto.onBcBaccaratDealCards = function onBcBaccaratDealCards(data) {
          this.gameTable.tableModel.dealCardsInfo = data.dealtCards;
          this.gameTable.stateMachineManager.transitionTo(Phase.DealCards);
        };
        _proto.onBcBaccaratBet = function onBcBaccaratBet(data) {
          this.gameTable.stateMachineManager.transitionTo(Phase.Betting);
        };
        _proto.onBcBaccaratStopBet = function onBcBaccaratStopBet(data) {
          this.gameTable.stateMachineManager.transitionTo(Phase.StopBet);
        };
        _proto.onBcBaccaratOpenCards = function onBcBaccaratOpenCards(data) {
          this.gameTable.tableModel.cardsInfo = data.cardsInfo;
          this.gameTable.tableModel.refreshAllCardsOpenStatus(data.cardsInfo);
          this.gameTable.stateMachineManager.transitionTo(Phase.OpenCards);
        };
        _proto.onBcBaccaratSettlement = function onBcBaccaratSettlement(data) {
          this.gameTable.tableModel.settleData = data.roadInfos[data.roadInfos.length - 1];
          this.gameTable.stateMachineManager.transitionTo(Phase.Settle);
          this.gameTable.tableModel.roadInfos = data.roadInfos;
        };
        _proto.onGameBetPush = function onGameBetPush(data) {
          this.gameTable.getView(BaccaratTableBetView).refreshBankerAndPlayerBetStatistic(data.betStatInfo);
        };
        _proto.onBcBaccaratPlayerSettlement = function onBcBaccaratPlayerSettlement(data) {
          this.gameTable.tableModel.playerSettlementSummary = data;
          PlayerMgr.instance.coin = NumberFormatUtil.formatMoneyToNumber(data.coin);
          this.gameTable.tableModel.refreshTableCoin();
        };
        _proto.onBcBaccaratTextMessage = function onBcBaccaratTextMessage(data) {
          if (data.tableId === this.gameTable.tableModel.tableId) {
            // Emitter.emit(GlobalEvent.Event_Game_ON_CHAT_MESSAGE,data);
            this.gameTable.gameChatView.addNewChatMsg(data.message);
          }
        };
        _proto.onDestroy = function onDestroy() {
          Emitter.off(GlobalEvent.EVENT_GAME_CONNECT_AGAIN_REFRESH, this.startGame);
        };
        return BaccaratTableController;
      }(BaseTableController)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratTableModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseTableModel.ts', './bc_baccarat.ts', './NumberFormatUtil.ts', './Emitter.ts', './BaccaratData.ts', './PlayerMgr.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, BaseTableModel, Phase, NumberFormatUtil, Emitter, BaccaratEvents, PlayerMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseTableModel = module.BaseTableModel;
    }, function (module) {
      Phase = module.Phase;
    }, function (module) {
      NumberFormatUtil = module.NumberFormatUtil;
    }, function (module) {
      Emitter = module.Emitter;
    }, function (module) {
      BaccaratEvents = module.BaccaratEvents;
    }, function (module) {
      PlayerMgr = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "93b7c3IBcZC2o1kPlGYJr0y", "BaccaratTableModel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratTableModel = exports('BaccaratTableModel', (_dec = ccclass('BaccaratTableModel'), _dec(_class = /*#__PURE__*/function (_BaseTableModel) {
        _inheritsLoose(BaccaratTableModel, _BaseTableModel);
        function BaccaratTableModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseTableModel.call.apply(_BaseTableModel, [this].concat(args)) || this;
          _this.gameTable = void 0;
          /**牌桌咨詢 */
          _this._tableInfo = null;
          /**房間配置 */
          _this._tableConfig = null;
          /**预下注 */
          _this._preBetData = [];
          /**确定下注 */
          _this.sureBetData = [];
          /**上次下注 */
          _this._lastBetData = [];
          /**是否免佣 */
          _this._isNoFree = false;
          /**发牌信息 */
          _this._dealCardsInfo = null;
          /**开牌信息 */
          _this._cardsInfo = null;
          /**倒計時信息 */
          _this._clockInfo = null;
          /**牌桌金币 */
          _this._tableCoin = 0;
          /**牌桌下注金币 */
          _this._tableBetCoin = 0;
          /**当局结算数据 */
          _this._settleData = null;
          /**自己當侷結算信息 */
          _this._playerSettlementSummary = null;
          _this._roadInfos = null;
          /**庄追路 */
          _this._isSeekBankerRoad = false;
          /**
           * 闲追路
           * @returns 
           */
          _this._isSeekPlayerRoad = false;
          return _this;
        }
        var _proto = BaccaratTableModel.prototype;
        _proto.initData = function initData() {
          this.lastBetData = this.sureBetData;
          this.sureBetData = [];
          this.preBetData = [];
        };
        _proto.getSureBetData = function getSureBetData() {
          return this.sureBetData;
        };
        _proto.setSureBetData = function setSureBetData(value) {
          this.sureBetData = value;
        };
        _proto.getCurrectBetChip = function getCurrectBetChip() {
          return this.selectBetChipGroup[this.selectBetChipIndex];
        };
        _proto.addBet = function addBet(isPreBet, betInfo) {
          var setBetData = isPreBet ? this.preBetData : this.sureBetData;
          var index = setBetData.findIndex(function (value) {
            return value.type === betInfo.type;
          });
          if (index > -1) {
            var bet = NumberFormatUtil.formatMoneyToNumber(betInfo.bet);
            if (bet > 0) {
              setBetData[index].bet = NumberFormatUtil.formatMoneyToString(NumberFormatUtil.formatMoneyToNumber(setBetData[index].bet) + bet);
            }
          } else {
            setBetData.push(betInfo);
          }
        };
        _proto.getPreBetNum = function getPreBetNum() {
          var totalBetNum = 0;
          this.preBetData.forEach(function (value) {
            totalBetNum += NumberFormatUtil.formatMoneyToNumber(value.bet);
          });
          return totalBetNum;
        };
        _proto.getTotalBetNum = function getTotalBetNum() {
          var totalBetNum = 0;
          totalBetNum += this.getPreBetNum();
          this.sureBetData.forEach(function (value) {
            totalBetNum += NumberFormatUtil.formatMoneyToNumber(value.bet);
          });
          return totalBetNum;
        };
        _proto.getBetNumByType = function getBetNumByType(type) {
          var areaBet = 0;
          var preBetInfo = this.preBetData.find(function (value) {
            return value.type === type;
          });
          if (preBetInfo) {
            areaBet += NumberFormatUtil.formatMoneyToNumber(preBetInfo.bet);
          }
          var sureBetInfo = this.sureBetData.find(function (value) {
            return value.type === type;
          });
          if (sureBetInfo) {
            areaBet += NumberFormatUtil.formatMoneyToNumber(sureBetInfo.bet);
          }
          return areaBet;
        };
        _proto.getChipSpriteFrameIndex = function getChipSpriteFrameIndex(betNum) {
          for (var index = this.selectBetChipGroup.length - 1; index > -1; index--) {
            if (betNum >= NumberFormatUtil.formatMoneyToNumber(this.selectBetChipGroup[index])) {
              return index;
            }
          }
          return 0;
        };
        _proto.getPreBetAreas = function getPreBetAreas() {
          var areas = [];
          for (var index = 0; index < this.preBetData.length; index++) {
            var element = this.preBetData[index];
            if (NumberFormatUtil.formatMoneyToNumber(element.bet) > 0) {
              areas.push(element.type);
            }
          }
          return areas;
        };
        _proto.refreshTableCoin = function refreshTableCoin() {
          this.tableCoin = PlayerMgr.instance.coin - this.getPreBetNum();
        };
        _proto.refreshTableBetCoin = function refreshTableBetCoin() {
          this.tableBetCoin = this.getTotalBetNum();
        };
        _proto.getIsCanAgainBet = function getIsCanAgainBet() {
          return this.lastBetData.length > 0 && this.getTotalBetNum() === 0;
        };
        _proto.getIsCanSureBet = function getIsCanSureBet() {
          return this.preBetData.length > 0;
        };
        _proto.getIsCanCancleBet = function getIsCanCancleBet() {
          return this.preBetData.length > 0;
        };
        _proto.getLimitNums = function getLimitNums() {
          var betLimit = this.tableConfig.betLimit;
          if (betLimit.length === 0) {
            return [0, 0];
          }
          var minVal = Infinity;
          var maxVal = -Infinity;
          for (var i = 0; i < betLimit.length; i++) {
            var currentMin = NumberFormatUtil.formatMoneyToNumber(betLimit[i].min);
            var currentMax = NumberFormatUtil.formatMoneyToNumber(betLimit[i].max);
            if (currentMin < minVal) {
              minVal = currentMin;
            }
            if (currentMax > maxVal) {
              maxVal = currentMax;
            }
          }
          return [minVal, maxVal];
        };
        _proto.getRoadWinnerTypeNum = function getRoadWinnerTypeNum(roadInfos, winnerType) {
          return roadInfos.filter(function (value) {
            return value.winnerType === winnerType;
          }).length;
        };
        _proto.getRoadWinnerBetTypeNum = function getRoadWinnerBetTypeNum(roadInfos, betType) {
          return roadInfos.filter(function (value) {
            return value.checkResults[betType].match;
          }).length;
        };
        _createClass(BaccaratTableModel, [{
          key: "tableInfo",
          get: function get() {
            return this._tableInfo;
          },
          set: function set(value) {
            this._tableInfo = value;
            this.sureBetData = value.betInfos;
            this.clockInfo = value.durationInfo;
            this.tableId = value.id;
          }
        }, {
          key: "isCanBet",
          get: function get() {
            return this.gameTable.stateMachineManager.getCurrentState().statCode === Phase.Betting;
          }
        }, {
          key: "tableConfig",
          get: function get() {
            return this._tableConfig;
          },
          set: function set(value) {
            this._tableConfig = value;
            this.selectBetChipGroup = value.chipsCandidate;
          }
        }, {
          key: "preBetData",
          get: function get() {
            return this._preBetData;
          },
          set: function set(value) {
            this._preBetData = value;
          }
        }, {
          key: "lastBetData",
          get: function get() {
            return this._lastBetData;
          },
          set: function set(value) {
            this._lastBetData = value;
          }
        }, {
          key: "isNoFree",
          get: function get() {
            return this._isNoFree;
          },
          set: function set(value) {
            this._isNoFree = value;
            Emitter.emit(BaccaratEvents.RefreshNoFreeShow);
          }
        }, {
          key: "dealCardsInfo",
          get: function get() {
            return this._dealCardsInfo;
          },
          set: function set(value) {
            this._dealCardsInfo = value;
          }
        }, {
          key: "cardsInfo",
          get: function get() {
            return this._cardsInfo;
          },
          set: function set(value) {
            this._cardsInfo = value;
          }
        }, {
          key: "clockInfo",
          get: function get() {
            return this._clockInfo;
          },
          set: function set(value) {
            this._clockInfo = value;
          }
        }, {
          key: "tableCoin",
          get: function get() {
            return this._tableCoin;
          },
          set: function set(value) {
            this._tableCoin = value;
            Emitter.emit(BaccaratEvents.RefreshCurrentCoin);
          }
        }, {
          key: "tableBetCoin",
          get: function get() {
            return this._tableBetCoin;
          },
          set: function set(value) {
            this._tableBetCoin = value;
            Emitter.emit(BaccaratEvents.RefreshBetCoin);
          }
        }, {
          key: "settleData",
          get: function get() {
            return this._settleData;
          },
          set: function set(value) {
            this._settleData = value;
          }
        }, {
          key: "playerSettlementSummary",
          get: function get() {
            return this._playerSettlementSummary;
          },
          set: function set(value) {
            this._playerSettlementSummary = value;
            PlayerMgr.instance.coin = NumberFormatUtil.formatMoneyToNumber(this.playerSettlementSummary.coin);
            Emitter.emit(BaccaratEvents.RefreshSelfResult);
          }
        }, {
          key: "roadInfos",
          get: function get() {
            return this._roadInfos;
          },
          set: function set(value) {
            this._roadInfos = value;
            Emitter.emit(BaccaratEvents.RefreshRoadInfo);
          }
        }, {
          key: "isSeekBankerRoad",
          get: function get() {
            return this._isSeekBankerRoad;
          },
          set: function set(value) {
            this._isSeekBankerRoad = value;
          }
        }, {
          key: "isSeekPlayerRoad",
          get: function get() {
            return this._isSeekPlayerRoad;
          },
          set: function set(value) {
            this._isSeekPlayerRoad = value;
          }
        }]);
        return BaccaratTableModel;
      }(BaseTableModel)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratTableProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseTableProxy.ts', './NetConnect.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseTableProxy, NetConnect;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseTableProxy = module.BaseTableProxy;
    }, function (module) {
      NetConnect = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f932bwaMfpPYpzDrlm3Go1d", "BaccaratTableProxy", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratTableProxy = exports('BaccaratTableProxy', (_dec = ccclass('BaccaratTableProxy'), _dec(_class = /*#__PURE__*/function (_BaseTableProxy) {
        _inheritsLoose(BaccaratTableProxy, _BaseTableProxy);
        function BaccaratTableProxy() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseTableProxy.call.apply(_BaseTableProxy, [this].concat(args)) || this;
          _this.gameTable = void 0;
          _this.serverInterfaces = {
            onBcBaccaratPrepare: 'onBcBaccaratPrepare',
            onBcBaccaratDealCards: 'onBcBaccaratDealCards',
            onBcBaccaratBet: 'onBcBaccaratBet',
            onBcBaccaratStopBet: 'onBcBaccaratStopBet',
            onBcBaccaratOpenCards: 'onBcBaccaratOpenCards',
            onBcBaccaratSettlement: 'onBcBaccaratSettlement',
            onGameBetPush: 'onBcBaccaratBetStat',
            onBcBaccaratPlayerSettlement: 'onBcBaccaratPlayerSettlement',
            onBcBaccaratTextMessage: 'onBcBaccaratTextMessage'
          };
          return _this;
        }
        var _proto = BaccaratTableProxy.prototype;
        _proto.processServerMsg = function processServerMsg(msgName, msg) {
          if (msg.duration) {
            this.gameTable.tableModel.clockInfo = msg.duration;
          }
          switch (msgName) {
            case this.serverInterfaces.onBcBaccaratPrepare:
              //處理服務端的準備消息
              this.gameTable.tableController.onBcBaccaratPrepare(msg);
              break;
            case this.serverInterfaces.onBcBaccaratDealCards:
              //處理服務端的發牌消息
              this.gameTable.tableController.onBcBaccaratDealCards(msg);
              break;
            case this.serverInterfaces.onBcBaccaratBet:
              //處理服務端的下注消息
              this.gameTable.tableController.onBcBaccaratBet(msg);
              break;
            case this.serverInterfaces.onBcBaccaratStopBet:
              //處理服務端的下注消息
              this.gameTable.tableController.onBcBaccaratStopBet(msg);
              break;
            case this.serverInterfaces.onBcBaccaratOpenCards:
              //處理服務端的開牌消息
              this.gameTable.tableController.onBcBaccaratOpenCards(msg);
              break;
            case this.serverInterfaces.onBcBaccaratSettlement:
              //處理服務端的結算消息
              this.gameTable.tableController.onBcBaccaratSettlement(msg);
              break;
            case this.serverInterfaces.onGameBetPush:
              //處理服務端的有人下注消息
              this.gameTable.tableController.onGameBetPush(msg);
              break;
            case this.serverInterfaces.onBcBaccaratPlayerSettlement:
              //處理自己結算信息
              this.gameTable.tableController.onBcBaccaratPlayerSettlement(msg);
              break;
            case this.serverInterfaces.onBcBaccaratTextMessage:
              //處理服務端的聊天消息
              this.gameTable.tableController.onBcBaccaratTextMessage(msg);
              break;
          }
        }
        /**
         * 入桌
         * @param request 
         * @returns 
         */;
        _proto.sendJoinTabelRequest = function sendJoinTabelRequest(request) {
          return NetConnect.sendRequest('bc_baccarat.table.join', request);
        }

        /**
        * 離桌
        * @param request 
        * @returns 
        */;
        _proto.sendLeaveTabelRequest = function sendLeaveTabelRequest(request) {
          return NetConnect.sendRequest('bc_baccarat.table.leave', request);
        }

        /**
         * 下注
         * @param request 
         * @returns 
         */;
        _proto.sendGameBetRequest = function sendGameBetRequest(request) {
          return NetConnect.sendRequest('bc_baccarat.game.bet', request);
        }
        /**
         * 發送聊天消息
         * @param request
         * @returns
         */;
        _proto.sendChatMsg = function sendChatMsg(request) {
          return NetConnect.sendRequest('bc_baccarat.chat.talk', request);
        };
        return BaccaratTableProxy;
      }(BaseTableProxy)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratTableTipView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseTableTipView.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseTableTipView;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseTableTipView = module.BaseTableTipView;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "8b9f5DdVe1OYawBHOVB7dsA", "BaccaratTableTipView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratTableTipView = exports('BaccaratTableTipView', (_dec = ccclass('BaccaratTableTipView'), _dec(_class = /*#__PURE__*/function (_BaseTableTipView) {
        _inheritsLoose(BaccaratTableTipView, _BaseTableTipView);
        function BaccaratTableTipView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseTableTipView.call.apply(_BaseTableTipView, [this].concat(args)) || this;
          _this.gameTable = void 0;
          return _this;
        }
        var _proto = BaccaratTableTipView.prototype;
        _proto.initView = function initView() {
          this.hideTip();
        };
        _proto.updateView = function updateView() {};
        return BaccaratTableTipView;
      }(BaseTableTipView)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccaratVerifyCardView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaccaratTableCardView.ts', './BaccaratData.ts', './BaccaratEnum.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, tween, v3, BaccaratTableCardView, BaccaratConsts, BaccaratCardIndex;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      v3 = module.v3;
    }, function (module) {
      BaccaratTableCardView = module.BaccaratTableCardView;
    }, function (module) {
      BaccaratConsts = module.BaccaratConsts;
    }, function (module) {
      BaccaratCardIndex = module.BaccaratCardIndex;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "cca3a4EUS5Jm4HiJnm8es+h", "BaccaratVerifyCardView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccaratVerifyCardView = exports('BaccaratVerifyCardView', (_dec = ccclass('BaccaratVerifyCardView'), _dec(_class = /*#__PURE__*/function (_BaccaratTableCardVie) {
        _inheritsLoose(BaccaratVerifyCardView, _BaccaratTableCardVie);
        function BaccaratVerifyCardView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaccaratTableCardVie.call.apply(_BaccaratTableCardVie, [this].concat(args)) || this;
          _this.waitPostions = [v3(252, 53), v3(318, 53)];
          _this.showPostions = [v3(-188, -86), v3(192, -86)];
          return _this;
        }
        var _proto = BaccaratVerifyCardView.prototype;
        _proto.updateView = function updateView() {
          if (this.gameTable.tableModel.dealCardsInfo) {
            this.disCards();
          }
          if (this.gameTable.tableModel.cardsInfo) {
            this.showVerifyCards();
          }
        };
        _proto.disCards = function disCards() {
          var cardsInfo = this.gameTable.tableModel.dealCardsInfo;
          if (cardsInfo) {
            this.node.active = true;
            this.cards.forEach(function (card, index) {
              card.disCard(cardsInfo[index]);
            });
            this.cards[BaccaratCardIndex.Player3].node.setPosition(this.waitPostions[0]);
            this.cards[BaccaratCardIndex.Banker3].node.setPosition(this.waitPostions[1]);
            this.cards[BaccaratCardIndex.Player3].node.angle = 0;
            this.cards[BaccaratCardIndex.Banker3].node.angle = 0;
          }
        };
        _proto.thirdShowCards = function thirdShowCards(isShowBack) {
          if (isShowBack === void 0) {
            isShowBack = true;
          }
          var cardsInfo = this.gameTable.tableModel.cardsInfo;
          var playerAddCard = this.cards[BaccaratCardIndex.Player3];
          //判断是否有闲补牌和庄补牌
          if (cardsInfo.playerCards[2]) {
            tween(playerAddCard.node).to(BaccaratConsts.showCardTime, {
              position: this.showPostions[0]
            }).call(function () {
              playerAddCard.setCard(cardsInfo.playerCards[2], isShowBack);
              playerAddCard.node.angle = -90;
            }).start();
          }
          var bankerAddCard = this.cards[BaccaratCardIndex.Banker3];
          //判断是否有闲补牌和庄补牌
          if (cardsInfo.bankerCards[2]) {
            tween(bankerAddCard.node).to(BaccaratConsts.showCardTime, {
              position: this.showPostions[1]
            }).call(function () {
              bankerAddCard.setCard(cardsInfo.bankerCards[2], isShowBack);
              bankerAddCard.node.angle = -90;
            }).start();
          }
        };
        _proto.thirdFlopCards = function thirdFlopCards() {
          var cardsInfo = this.gameTable.tableModel.cardsInfo;
          if (cardsInfo.playerCards[2]) {
            this.cards[BaccaratCardIndex.Player3].flopCard();
          }
          if (cardsInfo.bankerCards[2]) {
            this.cards[BaccaratCardIndex.Banker3].flopCard();
          }
        };
        _proto.showVerifyCards = function showVerifyCards() {
          var cardsInfo = this.gameTable.tableModel.cardsInfo;
          this.cards[BaccaratCardIndex.Player1].setCard(cardsInfo.playerCards[0], false);
          this.cards[BaccaratCardIndex.Player2].setCard(cardsInfo.playerCards[1], false);
          this.cards[BaccaratCardIndex.Banker1].setCard(cardsInfo.bankerCards[0], false);
          this.cards[BaccaratCardIndex.Banker2].setCard(cardsInfo.bankerCards[1], false);
          this.thirdShowCards(false);
        };
        return BaccaratVerifyCardView;
      }(BaccaratTableCardView)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccardTableBigEyesRoadItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaccardTableRoadItem.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaccardTableRoadItem;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaccardTableRoadItem = module.BaccardTableRoadItem;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ed1a0+J+HhB/aEWcxJWMoNM", "BaccardTableBigEyesRoadItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccardTableBigEyesRoadItem = exports('BaccardTableBigEyesRoadItem', (_dec = ccclass('BaccardTableBigEyesRoadItem'), _dec(_class = /*#__PURE__*/function (_BaccardTableRoadItem) {
        _inheritsLoose(BaccardTableBigEyesRoadItem, _BaccardTableRoadItem);
        function BaccardTableBigEyesRoadItem() {
          return _BaccardTableRoadItem.apply(this, arguments) || this;
        }
        var _proto = BaccardTableBigEyesRoadItem.prototype;
        _proto.initView = function initView(cell) {
          this.setBgColorSpriteFrame(cell.colorType - 1);
        };
        return BaccardTableBigEyesRoadItem;
      }(BaccardTableRoadItem)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccardTableBigRoadItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaccardTableRoadItem.ts', './bc_baccarat.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, BaccardTableRoadItem, BetType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      BaccardTableRoadItem = module.BaccardTableRoadItem;
    }, function (module) {
      BetType = module.BetType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "ac98eTXwUJFA6fVwCWtbiVh", "BaccardTableBigRoadItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccardTableBigRoadItem = exports('BaccardTableBigRoadItem', (_dec = ccclass('BaccardTableBigRoadItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaccardTableRoadItem) {
        _inheritsLoose(BaccardTableBigRoadItem, _BaccardTableRoadItem);
        function BaccardTableBigRoadItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaccardTableRoadItem.call.apply(_BaccardTableRoadItem, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bankerDoubleNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerDoubleNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tieNode", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BaccardTableBigRoadItem.prototype;
        _proto.initView = function initView(cell) {
          var _cell$checkResults$Be, _cell$checkResults$Be2;
          this.setBgColorSpriteFrame(cell.winnerType);
          this.tieNode.active = cell.drawCount > 0;
          this.bankerDoubleNode.active = (_cell$checkResults$Be = cell.checkResults[BetType.BankerPair]) == null ? void 0 : _cell$checkResults$Be.match;
          this.playerDoubleNode.active = (_cell$checkResults$Be2 = cell.checkResults[BetType.PlayerPair]) == null ? void 0 : _cell$checkResults$Be2.match;
        };
        return BaccardTableBigRoadItem;
      }(BaccardTableRoadItem), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bankerDoubleNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerDoubleNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tieNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccardTableCockroachRoadItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaccardTableRoadItem.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaccardTableRoadItem;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaccardTableRoadItem = module.BaccardTableRoadItem;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c2623jJSYVEd76jmLDd9sqD", "BaccardTableCockroachRoadItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccardTableCockroachRoadItem = exports('BaccardTableCockroachRoadItem', (_dec = ccclass('BaccardTableCockroachRoadItem'), _dec(_class = /*#__PURE__*/function (_BaccardTableRoadItem) {
        _inheritsLoose(BaccardTableCockroachRoadItem, _BaccardTableRoadItem);
        function BaccardTableCockroachRoadItem() {
          return _BaccardTableRoadItem.apply(this, arguments) || this;
        }
        var _proto = BaccardTableCockroachRoadItem.prototype;
        _proto.initView = function initView(cell) {
          this.setBgColorSpriteFrame(cell.colorType - 1);
        };
        return BaccardTableCockroachRoadItem;
      }(BaccardTableRoadItem)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccardTableCubeRoadItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaccardTableRoadItem.ts', './BaccaratData.ts', './bc_baccarat.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, BaccardTableRoadItem, BaccaratConsts, BetType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
    }, function (module) {
      BaccardTableRoadItem = module.BaccardTableRoadItem;
    }, function (module) {
      BaccaratConsts = module.BaccaratConsts;
    }, function (module) {
      BetType = module.BetType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "99ec2d6xaNG4rtSY4afeWax", "BaccardTableCubeRoadItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccardTableCubeRoadItem = exports('BaccardTableCubeRoadItem', (_dec = ccclass('BaccardTableCubeRoadItem'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaccardTableRoadItem) {
        _inheritsLoose(BaccardTableCubeRoadItem, _BaccardTableRoadItem);
        function BaccardTableCubeRoadItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaccardTableRoadItem.call.apply(_BaccardTableRoadItem, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "typeLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bankerDoubleNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerDoubleNode", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BaccardTableCubeRoadItem.prototype;
        _proto.initView = function initView(cell) {
          var _cell$checkResults$Be, _cell$checkResults$Be2;
          this.setBgColorSpriteFrame(cell.winnerType);
          this.typeLabel.string = BaccaratConsts.winnerTypeLabel[cell.winnerType];
          this.bankerDoubleNode.active = (_cell$checkResults$Be = cell.checkResults[BetType.BankerPair]) == null ? void 0 : _cell$checkResults$Be.match;
          this.playerDoubleNode.active = (_cell$checkResults$Be2 = cell.checkResults[BetType.PlayerPair]) == null ? void 0 : _cell$checkResults$Be2.match;
        };
        return BaccardTableCubeRoadItem;
      }(BaccardTableRoadItem), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "typeLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bankerDoubleNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerDoubleNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccardTableRoadItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "d69c5lapONJpr/cOXjdTEHK", "BaccardTableRoadItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccardTableRoadItem = exports('BaccardTableRoadItem', (_dec = ccclass('BaccardTableRoadItem'), _dec2 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaccardTableRoadItem, _Component);
        function BaccardTableRoadItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgSpriteFrame", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BaccardTableRoadItem.prototype;
        _proto.setBgColorSpriteFrame = function setBgColorSpriteFrame(colorType) {
          this.getComponent(Sprite).spriteFrame = this.bgSpriteFrame[colorType];
        };
        return BaccardTableRoadItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgSpriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccardTableSmallRoadItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaccardTableRoadItem.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaccardTableRoadItem;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaccardTableRoadItem = module.BaccardTableRoadItem;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "57acaDel+dGeJnP2/VEe+4S", "BaccardTableSmallRoadItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccardTableSmallRoadItem = exports('BaccardTableSmallRoadItem', (_dec = ccclass('BaccardTableSmallRoadItem'), _dec(_class = /*#__PURE__*/function (_BaccardTableRoadItem) {
        _inheritsLoose(BaccardTableSmallRoadItem, _BaccardTableRoadItem);
        function BaccardTableSmallRoadItem() {
          return _BaccardTableRoadItem.apply(this, arguments) || this;
        }
        var _proto = BaccardTableSmallRoadItem.prototype;
        _proto.initView = function initView(cell) {
          this.setBgColorSpriteFrame(cell.colorType - 1);
        };
        return BaccardTableSmallRoadItem;
      }(BaccardTableRoadItem)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaccartAutoBetSettingNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Toggle, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Toggle = module.Toggle;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "7d664KFQJNOdpRMDLpYvY4E", "BaccartAutoBetSettingNode", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BaccartAutoBetSettingNode = exports('BaccartAutoBetSettingNode', (_dec = ccclass('BaccartAutoBetSettingNode'), _dec2 = property(Toggle), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaccartAutoBetSettingNode, _Component);
        function BaccartAutoBetSettingNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._autoSettingView = null;
          _initializerDefineProperty(_this, "bankerBetToggle", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BaccartAutoBetSettingNode.prototype;
        _proto.init = function init(autoSettingView) {
          this._autoSettingView = autoSettingView;
        };
        return BaccartAutoBetSettingNode;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bankerBetToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/baccaratBundle', 'chunks:///_virtual/baccaratBundle'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
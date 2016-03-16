/// <reference path="../../typings/main.d.ts" />
import Avatar from './Avatar';
import Map from './Map';

/**
 * ルートクラス
 */
export default class Root {

  /** canvasDOM */
  private _domElement:HTMLElement;
  /** ステージ */
  private _stage:createjs.Stage;

  /**
   * コンストラクター
   */
  constructor(id:string, map:Map) {
    // ステージの準備
    this._domElement = document.getElementById(id);
    this._stage = new createjs.Stage(this._domElement);
    // ticker
    createjs.Ticker.on("tick", () => this._tick());
  }

  /**
   * アバターを追加します。
   */
  public addAvatar(avatar:Avatar) {
    this._stage.addChild(avatar);
  }

  /**
   * マップをセットします。
   */
  public setMap(map:Map) {
    this._stage.addChild(map);
  }

  /**
   * フレーム毎のアニメーション
   */
  private _tick() {
    this._stage.update();
  }

}

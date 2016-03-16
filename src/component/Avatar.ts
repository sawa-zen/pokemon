/// <reference path="../../typings/main.d.ts" />
import Params from '../enum/Params';

/**
 * アバタークラス
 */
export default class Avatar extends createjs.Container {

  /** スプライト */
  private _sprite: createjs.Sprite;
  /** 向き */
  public direction: string;

  /**
   * コンストラクター
   */
  constructor(params:any) {
    super();
    // スプライトを生成
    this._sprite = this._createSprite();
    this.addChild(this._sprite);
  }

  /**
   * スプライトを作成
   */
  private _createSprite() {
    let walkSpeed = 0.3;
    // スプライトシート作成
    var spriteSheet = new createjs.SpriteSheet({
      framerate: 30,
      images: ['./images/boy.png'],
      frames: {
        width:  Params.TILE_SIZE,
        height: Params.TILE_SIZE
      },
      animations: {
        up: {
          frames: [ 3, 4, 3, 5 ],
          next: 'up',
          speed: walkSpeed
        },
        left: {
          frames: [ 6, 7 ],
          next: 'left',
          speed: walkSpeed
        },
        right: {
          frames: [ 8, 9 ],
          next: 'right',
          speed: walkSpeed
        },
        down: {
          frames: [ 0, 1, 0, 2 ],
          next: 'down',
          speed: walkSpeed
        }
      }
    });

    return new createjs.Sprite(spriteSheet);
  }

}

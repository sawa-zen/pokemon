/// <reference path="../../typings/main.d.ts" />
import Params from '../enum/Params';

/**
 * マップタイルクラス
 */
export default class MapTile extends createjs.Sprite {

  /**
   * コンストラクター
   */
  constructor(wall:number) {

    console.info(wall);

    super(new createjs.SpriteSheet({
      images: ['./images/map.png'],
      frames: {
        width:  Params.TILE_SIZE,
        height: Params.TILE_SIZE
      }
    }));

    // 木か床かどちらかのスプライトを表示
    this.gotoAndStop(wall);
  }

}

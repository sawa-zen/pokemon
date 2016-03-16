/// <reference path="../../typings/main.d.ts" />
import {MapData} from '../interface/MapData';
import Params from '../enum/Params';
import MapTile from './MapTile';

/**
 * マップレイヤークラス
 */
export default class Map extends createjs.Container {

  /** マップデータ */
  private _data:MapData;
  /** タイルプール */
  private _tiles:createjs.Sprite[] = [];

  /**
   * コンストラクター
   */
  constructor(data:MapData) {
    super();
    this._data = data;

    this._setTiles({
      wall: [
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1]
      ],
      image: [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ]
    });
  }

  /**
   * データ分のタイルを生成してセットします。
   */
  private _setTiles(data:MapData) {
    let yLength = data.wall.length;
    let xLength = data.wall[0].length;
    for (let y = 0; y < yLength; y++) {
      for (let x = 0; x < xLength; x++) {
        let tile = new MapTile(data.image[y][x]);
        tile.x = Params.TILE_SIZE * x;
        tile.y = Params.TILE_SIZE * y;
        this._tiles.push(tile);
        this.addChild(tile);
      }
    }
  }

}

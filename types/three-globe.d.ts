declare module "three-globe" {
  import { Object3D } from "three";
  export default class ThreeGlobe extends Object3D {
    globeMaterial(): unknown;
    hexPolygonsData(data: any): this;
    hexPolygonResolution(resolution: number): this;
    hexPolygonMargin(margin: number): this;
    showAtmosphere(show: boolean): this;
    atmosphereColor(color: string): this;
    atmosphereAltitude(altitude: number): this;
    hexPolygonColor(callback: (e: any) => string): this;
    arcsData(data: any[]): this;
    arcStartLat(callback: (d: any) => number): this;
    arcStartLng(callback: (d: any) => number): this;
    arcEndLat(callback: (d: any) => number): this;
    arcEndLng(callback: (d: any) => number): this;
    arcColor(callback: (e: any) => string): this;
    arcAltitude(callback: (e: any) => number): this;
    arcStroke(callback: (e: any) => number): this;
    arcDashLength(length: number): this;
    arcDashInitialGap(callback: (e: any) => number): this;
    arcDashGap(gap: number): this;
    arcDashAnimateTime(callback: (e: any) => number): this;
    pointsData(data: any[]): this;
    pointColor(callback: (e: any) => string): this;
    pointsMerge(merge: boolean): this;
    pointAltitude(altitude: number): this;
    pointRadius(radius: number): this;
    ringsData(data: any[]): this;
    ringColor(callback: (e: any) => (t: any) => string): this;
    ringMaxRadius(radius: number): this;
    ringPropagationSpeed(speed: number): this;
    ringRepeatPeriod(period: number): this;
  }
}

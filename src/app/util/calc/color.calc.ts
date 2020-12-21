import { colorTemp } from "src/app/static/color-temp"

export const getTempColors = (averageTemp: number) => {
  let indexOfAverageColors = colorTemp.findIndex((el) => averageTemp <= el.temp);
  if (!indexOfAverageColors) {
    indexOfAverageColors = 5;
  }
  return {
    averageDownColor: colorTemp[indexOfAverageColors > 0 ? indexOfAverageColors - 1 : 0].color, averageColor: colorTemp[indexOfAverageColors].color, averageUpColor: colorTemp[indexOfAverageColors === (colorTemp.length - 1) ? colorTemp.length - 1 : indexOfAverageColors + 1].color
  }
}
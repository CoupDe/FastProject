import { TypeAction } from "@mui/material";
import _ from "lodash";
import { IGameStep } from "../../typeinterfaces/types";
export const WINCOMBINATION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const getWinCombination = (step: number[]): number[][] => {
  const pp = [];
  for (let i of WINCOMBINATION) {
    for (let s of step) {
      if (i.includes(s)) {
        pp.push(i);
      }
    }
  }

  //если есть совпадения в комбинации вернуть массив комбинаций
  const ss = WINCOMBINATION.filter((comb) =>
    comb.includes(step.map((el) => el)[0])
  );
  console.log("ss", ss);
  return pp;
};
//Получение комбинаций победы компьютера
const machineWin = (firstStep: number[]): number[][] => {
  return firstStep.flatMap((el) =>
    WINCOMBINATION.filter((step) => step.includes(el))
  );
};
//фильтрация победных комбинаций с учетом хода клиента
const filterCombination = (
  someFunc: (compStep: number[]) => number[][],
  playerStep: number[],
  firstStep: number[]
) => {
  let winComb = someFunc(firstStep).map((el) => el); //Получает массив возможных комбинаций

  let dd = playerStep.flatMap((el) =>
    winComb.filter(
      (step, index) => step.includes(el) && winComb.splice(index, 1)
    )
  );

  return winComb;
};

export const machineStep = (
  playerStep: number[],
  compStep: number[]
): number => {
  console.log("Шаг игрока", playerStep);
  console.log("Шаг компьютера", compStep);
  //???Почему возвращается тип [][]
  //Взвращает возможные победные комбинации игрока
  const playerCombination = getWinCombination(playerStep);
  //Взвращает возможные победные комбинации компьютера
  const compCombination = getWinCombination(compStep);
  console.log("Комбинации победы игрока", playerCombination);
  console.log("Комбинации победы компьютера", compCombination);
  //Объединение 2х списков и создание уникальных значений

  const filtered = filterCombination(machineWin, playerStep, compStep);

  //   function machine() {
  //     for (let i of playerCombination) {
  //       if (i.length > 1) {
  //         for (let win of WINCOMBINATION) {
  //           if (_.difference(win, i).length === 1) {
  //             return _.difference(win, i)[0];
  //           }
  //         }
  //       } else {
  //         //вернуть ход компьютера при доступных
  //         console.log("filtered", filtered);
  //         if (filtered) {
  //           console.log(
  //             "ss",
  //             filtered[0].filter((el) => !compStep.includes(el))[0]
  //           );

  //           return filtered[0].filter((el) => !compStep.includes(el))[0];
  //         }
  //       }
  //     }
  //     return 10;
  //   }
  //   const machineStep = machine();

  return 3;
};

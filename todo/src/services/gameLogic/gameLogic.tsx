import _ from "lodash";

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
const win = (combination: number[][], step: number[]): number[] | null => {
  let ss: number[] = [];
  for (let i of combination) {
    ss = _.difference(i, step);
    if (ss.length === 0) {
      console.log(i);
      return i;
    }
  }

  return null;
};

//Предупреждение крайнего хода игрока
const warningStep = (
  combination: number[][],
  stepComp: number[]
): number | null => {
  let ss: number[] = [];
  for (let i of combination) {
    ss = _.difference(i, stepComp);
    if (ss.length === 1) {
      return ss[0];
    }
  }

  return null;
};
//Шаг компьютера
const getStep = (
  combination: number[][],
  stepComp: number[],
  warning?: number | null
): number => {
  let result;
  //Выбор шага из доступных комбинаций
  if (combination) {
    for (let s of combination) {
      result = s.find((el) => !stepComp.includes(el));
    }
  }
  //Выбор шага в зависимости от крайнего хода компьютера
  if (warning) {
    result = warningStep(combination, stepComp) || warning;
  }
  if (result === undefined) result = 22; //Ничья

  return result;
};
//Получение всех возможных комбинаций победы
const getWinCombination = (step: number[]): number[][] => {
  return WINCOMBINATION.filter((win) =>
    step.some((step) => win.includes(step))
  );
};
//**Филтрация комбинаций с учетом хода игрока**//
const getFilterComb = (winComb: number[][], step: number[]): number[][] => {
  return winComb.filter((comb) => step.every((step) => !comb.includes(step)));
};
interface IGame {
  step: number;
  winner: number[] | null;
}
export const machineStep = (
  playerStep: number[],
  compStep: number[]
): IGame => {
  //Взвращает возможные победные комбинации игрока
  const playerCombination = getWinCombination(playerStep);
  //Возвращает возможные победные комбинации компьютера
  const compCombination = getWinCombination(compStep);
  //Фильтрация возможных комбинаций с учетом ходи игрока
  const filterCombComp = getFilterComb(compCombination, playerStep);
  //Обновление значений преполагаемого хода компьютера
  const update = [...compStep, getStep(filterCombComp, compStep)];
  //Фильтрация возможных комбинаций с учетом ходи компьютера
  const filterCombPlayer = getFilterComb(playerCombination, update);
  //Предупреждение крайнего хода игрока
  const warning = warningStep(filterCombPlayer, playerStep);

  //Победная комбинация

  const winGame =
    win(playerCombination, playerStep) || win(compCombination, update);
  console.log('winGame',winGame);
  return { step: getStep(filterCombComp, compStep, warning), winner: winGame };
};

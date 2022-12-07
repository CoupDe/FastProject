import Dayjs from "dayjs";
import ENDPOINTS from "../../const/endpoints";
import { ICommentRequest, ITask } from "../../typeinterfaces/types";
import { taskApi } from "../api/taskApi";
import { getTask } from "./viewSlice";
//Надо разобрать с формированием динамического baseUrl т.к. ApiSlice один но пути разные
const baseAPIURL = (endpoint: string) => ENDPOINTS.baseApi + endpoint;
const convertData = (createtd_at: string) =>
  Dayjs(String(createtd_at)).format("DD-MM-YYYY/H:M");

export const taskApiSlice = taskApi.injectEndpoints({
  endpoints: (build) => ({
    //функция возвращающая некоторый объект //название метода  и запрос
    //build.query --> получение build.mutation --> CRUD
    fetchTaskList: build.query<ITask[], void>({
      query: () => ({
        url: baseAPIURL(ENDPOINTS.TODO.TASKLIST),
      }),
      transformResponse: (response: ITask[]): ITask[] => {
        //Typescript КОСТЫЛЬ - UserFetchData - по сути тип объединения IUserToken & IUserTokenName
        //можно ли трансформировать интерфейс на основе 2х других с вложением,
        //?Почему есди из Бэкэнда не передать поле username возникает ошибка, предположительно в этом месте
        //?Почему в интерфейсы установлены обязательные поля с типом string но может передаться из бэкэнда undefined
        //Неправильная конструкция
        //?Нельзя ли сделать диспатч в transformResponse
        let myResponse: ITask[] = response;

        try {
          myResponse = response.map((item) => ({
            ...item,
            created_at: convertData(item.created_at),
            updated_at: convertData(item.updated_at),
          }));
        } catch (err) {
          console.log("Ошибка в преобразовании данных", { err });
        }

        return myResponse;
      },

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // console.log("data in taskApiSlice", data);
          // `onSuccess` side-effect
          const dt = data.map((item) => ({
            ...item,
            created_at: convertData(item.created_at),
            updated_at: convertData(item.updated_at),
          }));

          dispatch(getTask(dt));
        } catch (err) {
          // console.log("err in taskApiSlice", err);
          // `onError` side-effect
          // dispatch(messageCreated("Error fetching post!"));
        }
      },
    }),
    //                Ожидаемый тип
    //                   *        тип параметра
    fetchTask: build.query<ITask, number>({
      query: (id) => baseAPIURL(ENDPOINTS.TODO.TASK) + `${id}`,
    }),
    addComment: build.mutation<{ title: string }, ICommentRequest>({
      query(data: ICommentRequest) {
        const { comment_task } = data;
        console.log("data", data);
        return {
          url: `${
            baseAPIURL(ENDPOINTS.TODO.TASK) +
            comment_task +
            "/" +
            ENDPOINTS.TODO.COMMENT
          }`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});
export const {
  useFetchTaskListQuery,
  useFetchTaskQuery,
  usePrefetch,
  useAddCommentMutation,
} = taskApiSlice;

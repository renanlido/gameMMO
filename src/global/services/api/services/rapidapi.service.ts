import api from '../axios';
import { GetAllResponseApi, FindOne, GetLatestNesProps } from './types';

export const getAll = async () => {
  const { data } = await api.get<Promise<GetAllResponseApi[]>>('games');

  return data;
};

export const findOne = async (id: string) => {
  const { data } = await api.get<Promise<FindOne>>('game', {
    params: { id }
  });

  return data;
};

export const getLatestNews = async () => {
  const { data } = await api.get<Promise<GetLatestNesProps[]>>('latestnews');

  return data;
};

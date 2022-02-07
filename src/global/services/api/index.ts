import api from './axios';

export { api };
export { getAll, findOne, getLatestNews } from './services/rapidapi.service';
export type { GetAllResponseApi } from './services/types';

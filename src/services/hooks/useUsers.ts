import { api } from './../api';
import { useQuery } from 'react-query';

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

interface GetUsersResponse {
  totalCount: number;
  users: User[]
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('/users', {
    params: {
      page
    }
  });

  const totalCount = Number(headers["x-total-count"])

  const users = data.users.map(user => {
    return {
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-br', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  });

  return {
    users,
    totalCount
  };
}

export function useUsers(page: number) {
  return useQuery(['users', page], () =>  getUsers(page),{ staleTime:  1000 * 60 * 10 });
}
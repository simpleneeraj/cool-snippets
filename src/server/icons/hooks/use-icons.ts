import qs from 'qs';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { PickerIconsResponse } from '@/typings/icon-picker';

const useIcons = (params?: Record<string, string | null>) => {
  const BASE_URL = `/api/micro/icons`;
  const queryString = qs.stringify(params, {
    skipNulls: true,
    strictNullHandling: true,
  });
  const query = useSWR<PickerIconsResponse>(
    `${BASE_URL}?${queryString}`,
    (url: string) => fetcher(url)
  );
  return query;
};

export default useIcons;

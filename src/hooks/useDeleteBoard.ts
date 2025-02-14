import { useMutation } from '@tanstack/react-query';

import { deleteBoard,DeleteBoardInput } from '~/services/boards.service';

import { ErrorApi } from '~/types';

export const useDeleteBoardMutation = () =>
	useMutation<void, ErrorApi, DeleteBoardInput>({
		mutationFn: deleteBoard
	});

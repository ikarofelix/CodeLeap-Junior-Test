export const selectPosts = ({ postsInfo }) => postsInfo.posts;
export const selectLoading = ({ postsInfo }) => postsInfo.loading;
export const selectError = ({ postsInfo }) => postsInfo.error;
export const selectUser = ({ postsInfo }) => postsInfo.user;
export const selectNextPage = ({ postsInfo }) => postsInfo.nextPage;
export const selectEditModal = ({ postsInfo }) => postsInfo.editModal;
export const selectDeleteModal = ({ postsInfo }) => postsInfo.deleteModal;

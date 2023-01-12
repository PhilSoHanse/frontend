import { instanceWithAuth } from '@/api/index';

// 게시글을 생성하는 API
function create(type, data) {
  return instanceWithAuth.post(`/community/${type}`, JSON.stringify(data));
}

// 게시글 리스트를 조회하는 API
function fetchList(type) {
  return instanceWithAuth.get(`/community/${type}`);
}

// 게시글 리스트를 상태별로 조회하는 API
function fetchListByStatus(type, status) {
  return instanceWithAuth.get(`/community/${type}?status=${status}`);
}

// 게시글 상세 페이지를 조회하는 API
function fetchDetail(type, index) {
  return instanceWithAuth.get(`/community/${type}/${index}`);
}

function edit(type, index, editData) {
  return instanceWithAuth.put(`/community/${type}/${index}`, editData);
}

export { create, fetchList, fetchListByStatus, fetchDetail, edit };

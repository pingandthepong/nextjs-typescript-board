export function paginate<T>(data: T[], currentPage: number, pageSize: number) {
  // 총 페이지 수
  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);

  // 데이터를 몇 개씩 자를지
  const startIdx = (currentPage - 1) * pageSize;
  const paginatedData = data.slice(startIdx, startIdx + pageSize);

  return { paginatedData, total, totalPages };
}

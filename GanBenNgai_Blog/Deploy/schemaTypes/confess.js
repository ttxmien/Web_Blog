export default {
  name: 'guiTamTinh', // <-- ĐÂY CHÍNH LÀ SCHEMA TYPE NAME CẦN LẤY
  title: 'Gửi Tâm Tình',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tiêu Đề',
      type: 'string',
    },
    {
      name: 'authorName',
      title: 'Tên Tác Giả / Biệt Danh',
      type: 'string',
    },
    {
      name: 'authorEmail',
      title: 'Email nhận phản hồi',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Nội Dung',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}
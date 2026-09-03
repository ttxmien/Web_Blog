import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'guiTamTinh',
  title: 'Gửi Tâm Tình',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tiêu Đề',
      type: 'string',
    }),
    defineField({
      name: 'authorName',
      title: 'Tên Tác Giả / Biệt Danh',
      type: 'string',
    }),
    defineField({
      name: 'authorEmail',
      title: 'Email nhận phản hồi',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime', // <-- Thêm trường thời gian ở đây
    }),
    defineField({
      name: 'body',
      title: 'Nội Dung',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ]
})
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'confess',
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
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Nội Dung',
      type: 'array',
      of: [
        { type: 'block' },
        { 
          type: 'image',
          options: { hotspot: true }
        }
      ]
    })
  ]
})
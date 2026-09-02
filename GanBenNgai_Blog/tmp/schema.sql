// schema.sql -> Chuyển thành file schema bài viết cho Sanity (post.js trong Sanity Studio)

export default {
  name: 'post',
  title: 'Bài Viết (Posts)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tiêu đề bài viết',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Đường dẫn (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'tag',
      title: 'Chủ đề / Thẻ (Category)',
      type: 'string',
      options: {
        list: [
          {title: 'Sự Bình An 🕊️', value: 'Sự Bình An'},
          {title: 'Hy Vọng 🌱', value: 'Hy Vọng'},
          {title: 'Tình Yêu 💕', value: 'Tình Yêu'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Ngày đăng',
      type: 'datetime',
      initialValue: (new Date()).toISOString()
    },
    {
      name: 'mainImage',
      title: 'Hình ảnh đại diện',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'summary',
      title: 'Tóm tắt ngắn',
      type: 'text',
      rows: 3
    },
    {
      name: 'content',
      title: 'Nội dung bài viết',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}]
    }
  ]
}
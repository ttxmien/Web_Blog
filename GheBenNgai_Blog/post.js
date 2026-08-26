export default {
  name: 'post',
  title: 'Bài Viết',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tiêu đề bài viết',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'tag',
      title: 'Chủ đề / Phân loại',
      type: 'string',
      options: {
        list: [
          { title: 'Sự Bình An 🕊️', value: 'Sự Bình An' },
          { title: 'Hy Vọng 🌱', value: 'Hy Vọng' },
          { title: 'Tình Yêu 💕', value: 'Tình Yêu' }
        ]
      }
    },
    {
      name: 'publishedAt',
      title: 'Ngày đăng bài',
      type: 'datetime',
      initialValue: () => (new Date()).toISOString()
    },
    {
      name: 'mainImage',
      title: 'Ảnh đại diện',
      type: 'image',
      options: {
        hotspot: true
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
      title: 'Nội dung chi tiết',
      type: 'text'
    }
  ]
}
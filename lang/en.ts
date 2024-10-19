export default defineI18nLocale(async () => {
  return {
    home: {
      hero: {
        myName: 'Konkamon Sion',
        intro: 'A student of Information Technology department, Faculty of Science and Technology, Rajamangala University of Technology Srivijaya',
      },
      aboutMe: {
        title: 'About Me',
        introduction:
          'Hello. My name is Konkamon Sion. I am currently a third-year transfer student (equivalent to the fourth year) in the Faculty of Science and Technology, majoring in Information Technology. I am passionate about and skilled in creating web and front-end applications using Vue.js, Nuxt.js, and Tailwind CSS.',
        passion:
          'I have maintained a keen interest in computers and technology since my early teenage years. My formal education in programming began during my vocational certificate program, and I have since accumulated approximately 2-3 years of practical experience in this field.',
      },
      techStacks: { subtitle: 'Tech Stacks I\'ve worked with' },
      socialLinks: { subtitle: 'My Social Media Account' },
      featuredWork: { subtitle: 'Collection of my Works' },
      latestBlogs: { title: 'Latest Blogs', allBlogsBtn: 'All Blogs' },
    },
  }
})

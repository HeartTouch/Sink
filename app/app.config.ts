export default defineAppConfig({
  title: 'Sink',
  email: 'sink.cool@miantiao.me',
  github: 'https://github.com/miantiao-me/sink',
  twitter: 'https://sink.cool/kai',
  telegram: 'https://sink.cool/telegram',
  mastodon: 'https://sink.cool/mastodon',
  blog: 'https://sink.cool/blog',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-zA-Z0-9가-힣]+(?:-[a-zA-Z0-9가-힣]+)*$/,
  reserveSlug: [
    'dashboard',
  ],
})

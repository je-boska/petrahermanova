module.exports = {
  async redirects() {
    return [
      {
        source: '/ide',
        destination:
          'https://petrahermanova.bandcamp.com/album/in-death-s-eyes',
        permanent: true,
      },
    ];
  },
};

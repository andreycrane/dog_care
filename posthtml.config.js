module.exports = {
  plugins: {
    'posthtml-include': {},
    'posthtml-expressions': {
      locals: {
        promises: [
          {
            img: '../img/dog_love_24x.svg',
            title: '24/7 Love & Care',
            text: `
              At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis
              praesentium corrupti quos dolores et quas.
            `,
          },
          {
            img: '../img/dog_vet_24x.svg',
            title: 'On-site Veterinarian',
            text: `
              Dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi
              tempora incidunt.
            `,
          },
          {
            img: '../img/dog_stream_24x.svg',
            title: 'Live-stream Cameras',
            text: `
              Quis autem vel eum iure reprehenderit qui
              in ea voluptate velit esse quam nihil molestiae
              consequatur illum.
            `,
          },
        ],
      },
    },
  },
};

// postcss.config.mjs
// Configuração do PostCSS com Tailwind CSS e Autoprefixer
export default {
  plugins: [
    // Suporte a recursos CSS modernos
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true,
      },
      autoprefixer: {
        grid: true,
        flexbox: 'no-2009'
      }
    },

    // Plugin do Tailwind CSS para utilizar suas classes utilitárias
    'tailwindcss',

    // Compressão e otimização de CSS
    ['cssnano', process.env.NODE_ENV === 'production' ? {
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: false,
        colormin: true,
        minifyFontValues: true,
        reduceIdents: true
      }]
    } : false],

    // Plugin para purgar CSS não utilizado
    ['@fullhuman/postcss-purgecss', process.env.NODE_ENV === 'production' ? {
      content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    } : false],
  ],
};
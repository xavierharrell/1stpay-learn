var dest = './dist';
var src = './src';

module.exports ={
	browserSync: {
		server: {
			baseDir: [dest, src]
		},
		files: [
			dest + '/**',
			"!" + dest + '/**.map'
		]
	},
	sass: {
		src: src + '/scss/*.{sass, scss}',
		dest: dest,
		settings: {
			sourceComments: 'map',
			imagePath: '/images'
		}
	},
	images: {
		src: src + '/images/**',
		dest: dest + '/images'
	},
	markup: {
		src: src + '/htdocs/**',
		dest: dest
	},
	  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
        dest: dest,
      outputName: 'app.js'
    }, {
        dest: dest,
      outputName: 'head.js'
    }]
  }
};
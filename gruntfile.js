module.exports = function(grunt) {

grunt.initConfig({
  //Minify CSS
  cssmin:{
    target:{
      files: {
        'css/styles.min.css':['css/styles.all.css']
      }
    }
  },
  //Combine files
  concat :{
    css:{
      src:['external-libraries/normalize-css/normalize.css',  'css/grid.styles.css', 'css/custom.styles.css'],
      dest: 'css/styles.all.css'
    }
  },
  //Watch files for updates
  watch:{
    css:{
      files: 'css/custom.styles.css',
      tasks: ['concat', 'cssmin']
    },
    html:{
      files: 'index.html',
      tasks: ''
    },
    options:{
      livereload: true
    }

  }
});

grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default',['watch']);
};

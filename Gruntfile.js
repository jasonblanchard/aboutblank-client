module.exports = function(grunt) {

  grunt.initConfig({

    aws: grunt.file.readJSON('s3.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>',
        uploadConcurrency: 5,
        region: 'us-west-1',
        endpoint: 's3.amazonaws.com'
      },

      production: {
        options: {
          bucket: 'about.blanktech.net',
        },
        files: [
          {expand: true, cwd: 'dist/', src: ['**'], dest: ''}
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask('deploy', ['aws_s3']);

};

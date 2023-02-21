module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Task configuration will go here
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // grunt.registerTask(taskName, [optional description, ] taskFunction);
    grunt.registerTask('default', ['uglify']);
};

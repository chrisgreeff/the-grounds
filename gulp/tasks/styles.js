'use strict'

import gulp from 'gulp'
import less from 'gulp-less'
import sourcemaps from 'gulp-sourcemaps'
import handleErrors from '../utils/handle-errors'
import LessAutoprefix from 'less-plugin-autoprefix'
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] })

gulp.task('styles', () => {
  return gulp.src('./assets/styles/app.less')
    .pipe(sourcemaps.init())
    .pipe(less({ plugins: [autoprefix] }))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./web/css'))
})

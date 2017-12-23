var gulp = require("gulp");
var scss = require("gulp-sass");
 var connect = require("gulp-connect");
//创建gulp对象发布任务
gulp.task("copy-index",function(){
   return gulp.src("index.html").pipe(gulp.dest("elem/")).pipe(connect.reload());
})
gulp.task("copy-index1",function(){
   return gulp.src("HOME.html").pipe(gulp.dest("elem/")).pipe(connect.reload());
})
gulp.task("copy-index2",function(){
   return gulp.src("Homepage.html").pipe(gulp.dest("elem/")).pipe(connect.reload());
})
gulp.task("copy-index3",function(){
   return gulp.src("login.html").pipe(gulp.dest("elem/")).pipe(connect.reload());
})
gulp.task("copy-index4",function(){
   return gulp.src("register.html").pipe(gulp.dest("elem/")).pipe(connect.reload());
})
gulp.task("copy-index5",function(){
   return gulp.src("personage.html").pipe(gulp.dest("elem/")).pipe(connect.reload());
})
gulp.task("images",function(){
	return gulp.src("images/**/*").pipe(gulp.dest("elem/images/")).pipe(connect.reload())
})
gulp.task("font",function(){
  return gulp.src("font/**/*").pipe(gulp.dest("elem/font/")).pipe(connect.reload())
})
gulp.task("data",function(){
	return gulp.src("data/*.json").pipe(gulp.dest("elem/data/")).pipe(connect.reload())
})
gulp.task("js",function(){
  return gulp.src("js/*.js").pipe(gulp.dest("elem/js/")).pipe(connect.reload())
})

gulp.task("scss",function(){
      return gulp.src("css/*.scss")
      .pipe(scss())
      .pipe(gulp.dest("elem/css/"))
      .pipe(connect.reload());
})
//实时监听
//gulp.watch()两个参数；第一个参数：我们要监听的文件的路径
//第二个参数：监听到以后，去执行的任务
  gulp.task("watch",function(){
  	gulp.watch("index.html",["copy-index"]);
    gulp.watch("HOME.html",["copy-index1"]);
    gulp.watch("Homepage.html",["copy-index2"]);
    gulp.watch("login.html",["copy-index3"]);
    gulp.watch("register.html",["copy-index4"]);
    gulp.watch("personage.html",["copy-index5"]);
  	gulp.watch("images/**/*",["images"]);
    gulp.watch("font/**/*",["font"]);
  	gulp.watch("json/*.json",["data"]);
    gulp.watch("css/*.scss",["scss"]);
     gulp.watch("js/*.js",["js"]);

  })

  //gulp-connect 来启动一个服务程序
  //使用插件之前，先把插件对象引入
 
    gulp.task("server",function(){
    	connect.server({
    		root:"elem",//声明服务器的根目录
    		livereload:true
    	});
    });

    gulp.task("default",["server","watch","scss","data","js","copy-index","copy-index1","copy-index2","copy-index3","copy-index4","copy-index5","images","font"]);




function mvNotifier(mvToastr) {
  return {
    notify: function (msg) {
      mvToastr.success(msg);
//      console.log(msg);
    }
  }
}
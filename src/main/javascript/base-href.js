var base = window.location.href.match('(.*://.*\/.*?\/).*$');
if (base) {
  document.write("<base href='" + base[1] + "'/>");
  } else {
  document.write("<base href='" + window.location.href + "/' />");
}

/*
for FAQs in short when i click on the element it shows another element.
so we can do this project in two ways, either using Vanilla js or using Jquery.
however for saving time and effort i am gonna do it using Jquery.
*/

$(".btn").click(function () {
  var $btn = $(this);
  var $content = $btn.next(".answer");

  $content.slideToggle(1000);

  $btn.find("#plus").toggle();
  $btn.find("#mins").toggle();
});

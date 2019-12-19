<script>


var $post = $.ajax({
  url: "example.php",
  type: "POST",
  data: {id : product_id, product_name:product_name},
  dataType: "json"
});

$post.done(function(msg) {
  $("#log").html( msg );
});

$post.fail(function() {
  alert( "Request failed: Request Has been failed" );
});

</script>

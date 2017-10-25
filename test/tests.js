QUnit.module( "typeit.js tests", {
  beforeEach: function() {
    var fixtureDiv = document.getElementById("qunit-fixture");
    var div1 = "<div class='typeit' id='div1'>ABC</div>";
    var div2 = "<div class='typeit' id='div2'>D E</div>";
    var divHtml = div1 + div2;
    fixtureDiv.innerHTML = divHtml;
    typeit();
  },
  afterEach: function() {
    var fixtureDiv = document.getElementById("qunit-fixture");
    fixtureDiv.innerHTML = "";
  }
});

QUnit.test( "Test element string build", function( assert ) {
  assert.expect(5)
  var typingSpeed = 75;
  var element = document.getElementById("div1");
  assert.equal( element.innerHTML, "" );
  var done1 = assert.async();
  setTimeout(function() {
    assert.equal( element.innerHTML, "A" );
    done1();
  }, typingSpeed);

  var done2 = assert.async();
  setTimeout(function() {
    assert.equal( element.innerHTML, "AB" );
    done2();
  }, typingSpeed * 2);

  var done3 = assert.async();
  setTimeout(function() {
    assert.equal( element.innerHTML, "ABC" );
    done3();
  }, typingSpeed * 3);

  var done4 = assert.async();
  setTimeout(function() {
    assert.equal( element.innerHTML, "ABC<span class=\"blinking\" style=\"visibility: visible;\">|</span>" );
    done4();
  }, typingSpeed * 4);
});

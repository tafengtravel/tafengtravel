function passengerSize($this) {
    var target = $($this.data('target'));
    var op = $this.text();
    var current = parseInt(target.val());
    var done = $('.done-select', $this.parents('.select-passengers'));
    var adult = $('input[data-passenger-type="adult"]', $this.parents('.select-passengers'));
    var child = $('input[data-passenger-type="child"]', $this.parents('.select-passengers'));
    var infant = $('input[data-passenger-type="infant"]', $this.parents('.select-passengers'));

    if (op == "+") {
        if (current < 4) {
            current += 1;
            $('button', $this.parent().parent()).removeClass("-disabled");
        }
    } else {
        if (current > 0) {
            if (current == 1 && $this.is(".-must")) {
                return;
            }
            current -= 1;
        }
        if (current == 0) {
            $this.addClass("-disabled")
        }
    }
    target.val(current);
    if (infant.val() > adult.val()) {
        infant.val(0);
    }
    done.data('adult-size', adult.val());
    done.data('child-size', child.val());
    done.data('infant-size', infant.val());
    doneSelect(done);
}
//done Select
function doneSelect(clicked, e) {
    var focused = $(".selecting input.form-control");
    var _this = clicked;
    focused.val("");
    var adult_title = (_this.data('adult-size') >= 2) ? focused.data('adult-plural-title') : focused.data('adult-title');
    var child_title = (_this.data('child-size') >= 2) ? focused.data('child-plural-title') : focused.data('child-title');
    var infant_title = (_this.data('infant-size') >= 2) ? focused.data('infant-plural-title') : focused.data('infant-title');
    focused.val(_this.data('adult-size')
        + " "
        + adult_title);
    if (focused.data('child-title') !== undefined) {
        focused.val(focused.val() + " , "
        + _this.data('child-size')
        + " "
        + child_title);
    }

    if (focused.data('infant-title') !== undefined) {
        focused.val(focused.val() + " , "
        + _this.data('infant-size')
        + " "
        + infant_title);
    }
}
/*Inputs label*/
function inpLabel($this) {
    $this.focus(function (e) {
        $this.parent('.-input').addClass('active focused');
        if ($this.attr("placeholder") != "") $this.attr("placeholder", "");
        if ($this.is(".-passenger")) $this.parent('.-input').addClass('selecting');

    });
    $('.done-select').click(function (e) {
        $this.parent('.-input').removeClass('focused selecting');
        e.preventDefault();
    });
    $(document).mouseup(function (e) {
        var container = $this.parent('.-input');
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $this.parent('.-input').removeClass('focused selecting');
        }
    });
    $this.on('blur', function () {
        if ($this.val().length == 0 && !$this.parent().is('.-fixed')) {
            $this.parent('.-input').removeClass('active focused');
        } else {
            $this.parent('.-input').removeClass('focused');
        }
    });
    if ($this.val() != "") $this.parent('.-input').addClass('active');
}

function fixPosition(a) {
    a.addClass('-fixed-container');
}

function magazine() {
    $('.magazine .-item').each(function () {
        var $this = $(this);
        $this.hover(function () {
            $('.active', $this.parents(".magazine")).removeClass("active");
            $this.addClass("active");
            var clone = $this.html();
            $('.-switch-container .-item').html(clone);
        });
    });
}


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
var timer;

function sticky(a, sticky) {
    var height = a.height();
    var winoff = window.pageYOffset + 50;
    if (winoff > sticky) {
        a.addClass("sticky");
    } else {
        a.removeClass("sticky");
    }
}

//go to top button
function goToTop() {
    window.onscroll = function () {

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("goTop").style.display = "block";
        } else {
            document.getElementById("goTop").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    $('#goTop').click(function () {
        $('html,body').animate({ scrollTop: 0 });
    });
}

function getSlickItemCount(slick) {
    return $(slick).children().length;
}
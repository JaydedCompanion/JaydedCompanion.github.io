onMessage(var device_id, var data) {
    
    if (data >= 0 && data <= 360) {

        var playerHue = data;

        $(document).ready (function () {

            $(".button-300-150").click (function () {

                $(this).css("-webkit-filter", "hue-rotate(" + playerHue + ")");

            });

            $(".joystick").click (function () {

                $(this).css("-webkit-filter", "hue-rotate(" + playerHue + ")");

            });

        });

    }
    
}
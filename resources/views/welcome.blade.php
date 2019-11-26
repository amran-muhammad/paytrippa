<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
 
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap" rel="stylesheet">
        <!-- Bootstrap CSS-->
		

        <!-- Animate CSS -->
        <link rel="stylesheet" href="{{ asset('/assets/css/animate.min.css') }}"/>
        <link rel="stylesheet" href="{{ asset('/assets/css/bootstrap.min.css') }}"/>

       
    
        <link rel="stylesheet" href="{{ asset('/assets/css/owl.carousel.min.css') }} "/>
        <link rel="stylesheet" href="{{ asset('/assets/css/owl.theme.default.min.css') }}" />
        

        
      
        <link rel="stylesheet" href="{{ asset('/assets/css/style.css') }}" />
        
        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }
            .checked {
              color: orange;
            }
            .full-height {
                height: 100vh;
            }
            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }
            .position-ref {
                position: relative;
            }
            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }
            .content {
                text-align: center;
            }
            .title {
                font-size: 84px;
            }
            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }
            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div >
            <div id="app">
                <master></master>
            </div>
            <script>
        (function () {
               window.Laravel = {
                   csrfToken: '{{ csrf_token() }}'
               };
               @if(Auth::check())
                 window.authUser={!! Auth::user() !!}
                 @else
                   window.authUser=false
                 @endif
           })();
       </script>
        </div>
        <script src="/js/app.js"></script>
        <script src="{{ asset('assets/js/jquery-1.12.0.min.js') }}" ></script>
        <script src="{{ asset('assets/js/bootstrap.min.js') }}" ></script>
        <script src="{{ asset('assets/js/owl.carousel.min.js') }}" ></script>
      

		<!-- MAIN.JS -->
        <script src="{{ asset('assets/js/default-menu.js') }}" ></script>
        <!-- <script src="{{ asset('assets/js/custom.js') }}" ></script> -->

        <script>
            // Function for full screen
            $(".fullscreen_button").on("click", function(e) {
                e.preventDefault();
                document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
            });

            
        </script>
    </body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<!doctype html>
<html lang="ko">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>IIKEA</title>
    <link rel="icon" href="template/img/favicon.png">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="template/css/bootstrap.min.css">
    <!-- animate CSS -->
    <link rel="stylesheet" href="template/css/animate.css">
    <!-- owl carousel CSS -->
    <link rel="stylesheet" href="template/css/owl.carousel.min.css">
    <link rel="stylesheet" href="template/css/lightslider.min.css">
    <!-- nice select CSS -->
    <link rel="stylesheet" href="template/css/nice-select.css">
    <!-- font awesome CSS -->
    <link rel="stylesheet" href="template/css/all.css">
    <!-- flaticon CSS -->
    <link rel="stylesheet" href="template/css/flaticon.css">
    <link rel="stylesheet" href="template/css/themify-icons.css">
    <!-- font awesome CSS -->
    <link rel="stylesheet" href="template/css/magnific-popup.css">
    <!-- swiper CSS -->
    <link rel="stylesheet" href="template/css/slick.css">
    <link rel="stylesheet" href="template/css/price_rangs.css">
    <!-- style CSS -->
    <link rel="stylesheet" href="template/css/style.css">
    <!-- jquery -->
    <script src="template/js/jquery-1.12.1.min.js"></script>
    <script src="template/js/jquery.ajaxchimp.min.js"></script>
    <script src="template/js/jquery.form.js"></script>
    <script src="template/js/jquery.validate.min.js"></script>
    <script src="template/js/jquery.counterup.min.js"></script>
    <script src="template/js/jquery.magnific-popup.js"></script>
    <script src="template/js/jquery.nice-select.min.js"></script>

    <script src="template/js/owl.carousel.min.js"></script>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.10/dist/sweetalert2.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.10/dist/sweetalert2.min.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
        body {
            font-family: "Noto Sans KR", sans-serif !important;
        }
    </style>
</head>

<body>
    <!--::header part start::-->
    <header class="main_menu home_menu">
        <tiles:insertAttribute name="header" />
        <%--::nav start::--%>
        <tiles:insertAttribute name="menu" />
        <%--::nav end::--%>
    </header>
    <!-- Header part end-->


    <!-- banner part start-->
    
    <tiles:insertAttribute name="body" />
        
    <!--::subscribe_area part end::-->

    <!--::footer_part start::-->
    <footer class="footer_part">
        <tiles:insertAttribute name="footer" />
    </footer>
    <!--::footer_part end::-->

    <!-- jquery plugins here-->

    <!-- popper js -->
    <script src="template/js/popper.min.js"></script>
    <!-- bootstrap js -->
    <script src="template/js/bootstrap.min.js"></script>
    <!-- easing js -->

    <!-- swiper js -->
    <script src="template/js/swiper.min.js"></script>
    <!-- swiper js -->
    <script src="template/js/masonry.pkgd.js"></script>
    <!-- particles js -->

    
    <!-- slick js -->
    <script src="template/js/slick.min.js"></script>

    <script src="template/js/waypoints.min.js"></script>
    <script src="template/js/contact.js"></script>

    <script src="template/js/mail-script.js"></script>
    <!-- custom js -->
    <script src="template/js/custom.js"></script>

    <script src="template/js/stellar.js"></script>
</body>

</html>
    
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    
<style>
    .search-text-area{
        position: relative;
        width: 100%;
    }
    #navbarSupportedContent input{
        width: 70%;
        border: 1px solid #bbb;
        border-radius: 25px;
        padding: 7px 48px;
        font-size: 14px;
    }
    #navbarSupportedContent i{
        position : absolute;
        width: 17px;
        top: 12px;
        left: 20px;
        margin: 0;
    }
    #nav-my-style{
        Height: 60px;
    }
</style>
<script>
    var id = '<%=(String)session.getAttribute("id")%>';
    
    fetch('signOutControl.do', {
    	method: 'post',
		headers: { 'Content-type': 'application/x-www-form-urlencoded' },
		body:
    })
    .then(response => {
	    if (response.ok) {
	        window.location.href = 'header.jsp'; 
	    } else {
	        console.error('로그아웃에 실패했습니다.');
	    }
	})
	.catch(error => {
	    console.error('네트워크 오류:', error);
	});

    // 숫자 3자리 콤마찍기
    Number.prototype.formatNumber = function() {
        if (this == 0)
            return 0;
        let regex = /(^[+-]?\d+)(\d{3})/;
        let nstr = (this + '');
        while (regex.test(nstr)) {
            nstr = nstr.replace(regex, '$1' + ',' + '$2');
        }
        return nstr;
    };
</script>
<script src="js/prodFunc.js"></script>

<div class="container">
    <div class="row align-items-center">
        <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg navbar-light" id="nav-my-style">
                <a class="navbar-brand" href="prodMain.do"> <img src="template/img/logo.png" alt="logo"> </a>

                <%-- <div class="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                    <form action="" class="search-text-area" >
                        <i class="ti-search"></i>
                        <input type="text" enterkeyhint="search" role="combobox" name="q" id="ikea-search-input" maxlength="150" placeholder="검색어 입력">
                    </form>
                </div> --%>

                <div class="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="prodMain.do">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="prodShop.do">Shop</a>
                        </li>
						<c:choose>
						    <c:when test="${id eq null}">
						        <li class="nav-item">
						            <a class="nav-link" href="signIn.do">Sign In</a>
						        </li>
						    </c:when>
						    <c:otherwise>
						    	<li class="nav-item">
						            <a class="nav-link" href="userInfo.do">My Page</a>
						        </li>
						    	<li class="nav-item">
						            <a class="nav-link" href="prodMain.do">Sign Out</a>
						        </li>
						    </c:otherwise>
						</c:choose>
                    </ul>
                </div>

                <div class="hearer_icon d-flex">
                    <a href="wishList.do"><i class="ti-heart"></i></a>
                    <a href="cartList.do"><i class="fas fa-cart-plus"></i></a>
                </div>
            </nav>
        </div>
    </div>
</div>

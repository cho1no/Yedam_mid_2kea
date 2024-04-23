<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
<div class="container">
    <div class="row align-items-center">
        <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg navbar-light" id="nav-my-style">
                <a class="navbar-brand" href="index.html"> <img src="img/logo.png" alt="logo"> </a>

                <div class="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                    <form action="" class="search-text-area" >
                        <i class="ti-search"></i>
                        <input type="text" enterkeyhint="search" role="combobox" name="q" id="ikea-search-input" maxlength="150" placeholder="검색어 입력">
                    </form>
                </div>
                <div class="hearer_icon d-flex">
                    <a href=""><i class="ti-heart"></i></a>
                    <a href=""><i class="fas fa-cart-plus"></i></a>
                </div>
            </nav>
        </div>
    </div>
</div>
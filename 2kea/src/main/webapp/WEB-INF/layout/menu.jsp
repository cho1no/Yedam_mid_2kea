<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- <div class="border-end bg-white" id="sidebar-wrapper">
    <div class="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
    <div class="list-group list-group-flush">
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Dashboard</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Shortcuts</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Overview</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
    </div>
</div> -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

    <!-- Sidebar-->
<div class="border-end bg-white" id="sidebar-wrapper">
    <div class="sidebar-heading border-bottom bg-light">게시판(${logId == null ? 'Guest' : logId})</div>
    <div class="list-group list-group-flush">
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="boardList.do">게시글 목록</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="addForm.do">게시글 작성</a>
        <c:choose>
         <c:when test="${logId == null}">
         	<a class="list-group-item list-group-item-action list-group-item-light p-3" href="loginForm.do">로그인</a>	                    	
        	<a class="list-group-item list-group-item-action list-group-item-light p-3" href="addMemberForm.do">회원가입</a>
         </c:when>
         <c:otherwise>
         	<c:if test="${auth == 'Admin'}">
         		<a class="list-group-item list-group-item-action list-group-item-light p-3" href="memberList.do">관리자페이지</a>
         	</c:if>
         	<a class="list-group-item list-group-item-action list-group-item-light p-3" href="logout.do">로그아웃</a>
         </c:otherwise>
        </c:choose>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="domForm.do">DOM연습</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="memberForm.do">멤폼두</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="boardFormAjax.do">게시글 ajax 해야함</a>
    </div>
</div>
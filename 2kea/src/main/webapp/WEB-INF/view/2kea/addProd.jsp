<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <style>
        .inputDisplay {
            display: none;
        }

        .picture {
            width: 200px;
            aspect-ratio: 1/1;
            background: #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #aaa;
            border: 2px dashed currentcolor;
            cursor: pointer;
            font-family: sans-serif;
            transition: color 300ms ease-in-out, background 300ms ease-in-out;
            outline: none;
            overflow: hidden;
            margin: 0;
        }

        .picture:hover {
            color: #777;
            background: #ccc;
        }

        .picture:active {
            border-color: turquoise;
            color: turquoise;
            background: #eee;
        }

        .picture:focus {
            color: #777;
            background: #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }

        .picture__img {
            max-width: 100%;
        }

        .inputWrap {
            display: inline-block;
            padding: 4px;
        }

        /* #addBtn {
            width: 200px;
            aspect-ratio: 1/1;
            cursor: pointer;
        } */

        #addBtn span{
            position: relative;
            z-index:2;
            display: block;
            left: 25%;
            top: 25%;
            width: 100px;
            height: 100px;
            background: #37364c;
            border-radius: 50%;
        }

        #addBtn span::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            display: block;
            width: 40px;
            height: 4px;
            background: #fff;
            transform: translate(-50%, -50%);
        }

        #addBtn span::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            display: block;
            width: 4px;
            height: 40px;
            background: #fff;
            transform: translate(-50%, -50%);
        }
    </style>
    <section class="breadcrumb breadcrumb_bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="breadcrumb_iner">
                        <div class="breadcrumb_iner_item">
                            <h2>상품등록</h2>
                            <p>Home <span>-</span>Add Product</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="pt-3">
        <div class="container">
            <form action="prodAdd.do" method="post" enctype="multipart/form-data">
                <table class="table">
                    <tr>
                        <th>상품명</th>
                        <td><input class="form-control" type="text" name="name"></td>
                    </tr>
                    <tr>
                        <th>카테고리</th>
                        <td><input class="form-control" type="text" name="category"></td>
                    </tr>
                    <tr>
                        <th>가격</th>
                        <td><input class="form-control" type="number" name="price"></td>
                    </tr>
                    <tr>
                        <th>간략설명</th>
                        <td><textarea class="form-control" rows="3" cols="22" name="detail"></textarea></td>
                    </tr>
                    <tr>
                        <th>상세설명</th>
                        <td><textarea class="form-control" rows="3" cols="22" name="description"></textarea></td>
                    </tr>
                    <tr>
                        <th>이미지</th>
                        <td id="image_section">
                            <p>마지막 사진이 썸네일 입니다.</p>
                            <div class="inputWrap" id="addBtn"><span></span></div>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" colspan="2"><input class="btn btn-primary" type="submit" value="상품 등록"></td>
                    </tr>
                </table>
            </form>
        </div>
    </section>
    <script src="js/addProd.js"></script>
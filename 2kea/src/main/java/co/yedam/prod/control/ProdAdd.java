package co.yedam.prod.control;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.common.Control;
import co.yedam.prod.service.ProdService;
import co.yedam.prod.service.ProdServiceImpl;
import co.yedam.prod.vo.ProdImgVO;
import co.yedam.prod.vo.ProdVO;

public class ProdAdd implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// title, content, writer 3개의 파라미터가 넘어옴
		ProdService svc = new ProdServiceImpl();
		
		// 생성자 매개값 1.요청정보, 2.저장경로, 3.최대크기, 4.인코딩, 5.리네임정책
		String savePath = req.getServletContext().getRealPath("img");
		int maxSize = 1024 * 1024 * 5;
		
		MultipartRequest multi = new MultipartRequest(req, savePath, maxSize, "utf-8", new DefaultFileRenamePolicy());
		
		String name = multi.getParameter("name");
		String detail = multi.getParameter("detail");
		String description = multi.getParameter("description");
		String category = multi.getParameter("category");
		String price = multi.getParameter("price");
		
		ProdVO pvo = new ProdVO();
		pvo.setName(name);
		pvo.setDetail(detail);
		pvo.setDescription(description);
		pvo.setCategory(category);
		pvo.setPrice(Integer.parseInt(price));
		
		boolean isSucc = true;
		if (svc.addProd(pvo)) {
			Enumeration<?> files = multi.getFileNames();
			int cnt = 0;
			while (files.hasMoreElements()) {
				cnt++;
				String file = (String)files.nextElement();
				String fileName = multi.getFilesystemName(file);
				
				ProdImgVO pivo = new ProdImgVO();
				pivo.setImage1(fileName);
				pivo.setProdNo(pvo.getProdNo());
				if (cnt == 1) {
					pivo.setRole("thumb");
				}
				if (!svc.addProdImg(pivo)) {
					isSucc = false;
					break;
				}
			}			
		} else {
			isSucc = false;
		}
		
		if (isSucc) {
			resp.getWriter().print("{\"retCode\" : \"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\" : \"Fail\"}");
			req.setAttribute("msg", "등록중 에러가 발생.");
			req.getRequestDispatcher("board/error.tiles").forward(req, resp);
		}
	}

}

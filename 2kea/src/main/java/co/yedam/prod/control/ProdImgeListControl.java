package co.yedam.prod.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.prod.service.ProdService;
import co.yedam.prod.service.ProdServiceImpl;
import co.yedam.prod.vo.ProdImgVO;

public class ProdImgeListControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json; charset=utf-8");
		String pno = req.getParameter("pno");
		ProdService svc = new ProdServiceImpl();
		List<ProdImgVO> list = svc.showProdImgList(Integer.parseInt(pno));
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);

	}

}

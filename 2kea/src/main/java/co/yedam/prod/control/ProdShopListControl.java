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
import co.yedam.prod.vo.ProdVO;
import co.yedam.prod.vo.ShopVO;

public class ProdShopListControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json; charset=utf-8");
		
		String sw = req.getParameter("sw") == null ? "" : req.getParameter("sw");
		String pg = req.getParameter("pg") == null ? "" : req.getParameter("pg");
		
		ProdService svc = new ProdServiceImpl();
		
		ShopVO vo = new ShopVO();
		vo.setSearchWord(sw);
		vo.setPage(Integer.parseInt(pg));
		
		List<ProdVO> list = svc.showShopList(vo);
		
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);
	}

}

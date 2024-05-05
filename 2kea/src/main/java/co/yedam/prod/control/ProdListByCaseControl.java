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

public class ProdListByCaseControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		resp.setContentType("text/json; charset=utf-8");
		String showCase = req.getParameter("case");
		String showNum = req.getParameter("num");
		String id = (String) req.getSession().getAttribute("id");
		System.out.println(showCase);
		System.out.println(showNum);
		ShopVO vo = new ShopVO();
		vo.setCategory("");
		vo.setSearchWord("");
		vo.setStartPrice(-1);
		vo.setShowCase(showCase);
		vo.setShowNum(Integer.parseInt(showNum));
		vo.setId(id);
		ProdService svc = new ProdServiceImpl();
		List<ProdVO> list = svc.showProdListByCase(vo);
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);
	}

}

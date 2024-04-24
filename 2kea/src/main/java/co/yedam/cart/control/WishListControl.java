package co.yedam.cart.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.wish.service.WishService;
import co.yedam.wish.service.WishServiceImpl;
import co.yedam.wish.vo.WishVO;

public class WishListControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		
		// TODO Auto-generated method stub
		resp.setContentType("text/json;charset=utf-8");
		
		WishService wvc = new WishServiceImpl();
		List<WishVO> list = wvc.wishList();
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);
	}

}

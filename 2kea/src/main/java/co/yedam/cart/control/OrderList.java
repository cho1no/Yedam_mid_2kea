package co.yedam.cart.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.cart.service.OrderService;
import co.yedam.cart.service.OrderServiceImpl;
import co.yedam.cart.vo.OrderVO;
import co.yedam.common.Control;

public class OrderList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		resp.setContentType("text/json;charset=utf-8");
		
		OrderService ovc = new OrderServiceImpl();
		List<OrderVO> list = ovc.orderList();
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);
	}

}

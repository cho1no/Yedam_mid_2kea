package co.yedam.cart.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.cart.service.CartService;
import co.yedam.cart.service.CartServiceImpl;
import co.yedam.cart.vo.CartVO;
import co.yedam.common.Control;

public class CartList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = req.getSession();
	    String id = (String)session.getAttribute("id");
	    System.out.println(id);
	    System.out.println(id != null ? "a" : "b");
	    if(id != null) {
	    	req.getRequestDispatcher("2kea/cart.tiles").forward(req, resp);
	    } else {
	    	req.getRequestDispatcher("2kea/signIn.tiles").forward(req, resp);
	    	
	    }
	}

}
